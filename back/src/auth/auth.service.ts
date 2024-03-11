import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import type { KeyValuePair } from 'src/utils/types'
import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'
import type { Request, Response } from 'express'
import { createdByColumnName, modifiedByColumnName } from 'src/middleware/resolversInterceptor'
import { getDateExpires } from 'src/utils'
import type { IAuthenticationProvider, OAuthStrategyResponse } from './auth'
import type { UserDetails } from './dto/userDetails.dto'
import { AuthServiceTokens } from './auth.service.tokens'
export const prisma = new PrismaClient()

@Injectable()
export class AuthService implements IAuthenticationProvider {
  constructor (private authserviceTokens: AuthServiceTokens) {}

  async createUser (userDetails: UserDetails) {
    const { email } = userDetails
    const userName = email.split('@')[0]
    const user = await prisma.user.create({
      data: {
        userName,
        ...userDetails,
        [createdByColumnName]: email,
        providers: {}
      }
    })
    await prisma.user.update({
      where: { id: user.id },
      data: {
        // handle multiple providers
        providers: {
          connectOrCreate: userDetails.providers.map(p => ({
            where: { provider_userId: { userId: user.id, provider: p.provider } },
            create: { provider: p.provider, [createdByColumnName]: email }
          }))
        }
      }
    })
    await this.authserviceTokens.createRefreshToken(user.email, user.id)
    return user
  }

  async validateUser (userDetails: UserDetails) {
    const { email } = userDetails
    const user = await prisma.user.findFirst({
      where: { email },
      include: { providers: true }
    })

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          providers: {
            connectOrCreate: userDetails.providers.map(p => ({
              where: { provider_userId: { userId: user.id, provider: p.provider } },
              create: { provider: p.provider, [createdByColumnName]: email }
            }))
          }
        }
      })
      return user
    }
    return await this.createUser(userDetails)
  }

  async createUserEmail (userDetails: UserDetails) {
    const { email, password } = userDetails
    const hash = bcrypt.hashSync(password)

    const userName = email.split('@')[0]
    const user = await prisma.user.create({
      data: {
        userName,
        email,
        password: hash,
        [createdByColumnName]: email
      }
    })
    await prisma.user.update({
      where: { id: user.id },
      data: {
        providers: {
          create: {
            provider: 'email'
          }
        }
      }
    })
    await this.authserviceTokens.createRefreshToken(user.email, user.id)
    return user
  }

  async sendLoginEmailError (res: Response) {
    res.json({ success: false, message: 'Erreur d\'authentification' })
    res.end()
    // throw new Error('Erreur d\'authentification')
  }

  async validateUserEmail (
    userDetails: UserDetails,
    res: Response,
    option: string
  ) {
    const { email, password } = userDetails

    const user = await prisma.user.findFirst({
      where: { email },
      include: { providers: {}, refreshToken: {} }
    })

    if (option === 'register') {
      if (!user) {
        return await this.createUserEmail(userDetails)
      }
      else {
        this.sendLoginEmailError(res)
      }
    }

    if (option === 'login') {
      if (!user) {
        this.sendLoginEmailError(res)
      }
      if (user.password != null) {
        const isSamePassword = bcrypt.compareSync(password, user.password)
        // good password
        if (isSamePassword) {
          return user
        }
        // wrong password
        else {
          this.sendLoginEmailError(res)
        }
      }
      else {
        this.sendLoginEmailError(res)
      }
    }
  }

  async login (payload: OAuthStrategyResponse) {
    const { user } = payload
    const userEmail = user.email

    // create refreshToken
    const existingTokenUser = await prisma.refreshToken.findFirst({ where: { userEmail } })
    if (existingTokenUser) {
      await this.authserviceTokens.revokeUserRefreshToken(userEmail)
    }

    const refreshToken = await this.authserviceTokens.createRefreshToken(userEmail, user.id)

    // update modifiedby
    await prisma.refreshToken.update({
      where: {
        userEmail
      },
      data: {
        ...refreshToken,
        [modifiedByColumnName]: userEmail
      }
    })

    // const providerToken = this.jwtService.decode(accessToken) as any
    // create accessToken
    const aToken = await this.authserviceTokens.getJwtAccessToken(
      userEmail,
      user.id
      // providerToken.providerAccessToken
    )
    const dateExpires = getDateExpires(process.env.ACCESSTOKEN_EXPIRATION_TIME_METRIC, process.env.ACCESSTOKEN_EXPIRATION_TIME)

    // save accessToken
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        accessToken: aToken,
        accessTokenExpiresUtc: dateExpires
      }
    })

    return {
      accessToken: aToken,
      refreshToken: refreshToken.refreshToken
    }
  }

  async logout (accessToken: string) {
    const user = await prisma.user.findFirst({ where: { accessToken } })
    this.authserviceTokens.revokeUserRefreshToken(user.email)
  }

  // method for jwtRefreshGuard
  // get new Tokens if refresh Token and user exist and correspond
  async getNewTokensIfRefreshTokenMatches (
    refreshToken: string,
    payload: any
  ) {
    const foundToken = await prisma.refreshToken.findFirst({
      where: {
        refreshToken,
        userEmail: payload.email
      }
    })

    const isMatch = foundToken && (refreshToken === foundToken.refreshToken)

    if (foundToken == null) {
      // refresh token is valid but not in database
      // TODO:inform the user with the payload sub
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    }
    if (isMatch) {
      return await this.authserviceTokens.generateTokens(payload)
    }
    else {
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST)
    }
  }

  sendAccessToken (
    jwt: { accessToken: string; refreshToken: string | null },
    payload: OAuthStrategyResponse,
    req: Request,
    res: Response
  ) {
    let refreshToken = ''
    const { user } = payload
    if (jwt.refreshToken) {
      refreshToken = `&refreshToken=${jwt.refreshToken}`
    }
    res.set('authorization', jwt.accessToken)
    res.set('refresh', jwt.refreshToken)
    res.redirect(301, `${req.query.state}?accessToken=${jwt.accessToken}${refreshToken}&email=${user.email}&name=${user.displayName}`)
  }

  async findUser (id: string) {
    return prisma.user.findUnique({ where: { id } })
  }

  async findUserByEmail (email: string) {
    return prisma.user.findFirst({ where: { email } })
  }

  async getUserByAccessToken (accessToken: string) {
    return prisma.user.findFirst({ where: { accessToken } })
  }

  async updateUser (body: KeyValuePair, user: User) {
    if (user) {
      return await prisma.user.update({
        where: { id: user.id },
        data: {
          ...body,
          [modifiedByColumnName]: user.email
        }
      })
    }
    else {
      throw new Error('User not found')
    }
  }
}
