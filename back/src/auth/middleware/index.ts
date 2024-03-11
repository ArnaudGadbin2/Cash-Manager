import { GraphQLError } from 'graphql'
import { HttpStatusCode } from 'axios'
import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'
import type { Request } from 'express'
import { isString } from 'lodash'
import { createMethodDecorator } from 'type-graphql'

export class AuthenticationError extends GraphQLError {
  override readonly extensions!: {
    code: HttpStatusCode.Unauthorized
    [attributeName: string]: unknown // GraphQLErrorExtensions
  }

  constructor (message = 'Access denied! You need to be authenticated to perform this action!') {
    super(message, {
      extensions: {
        code: HttpStatusCode.Unauthorized
      }
    })

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export const prisma = new PrismaClient()

export async function fillContext (context: { req: Request; user?: User }) {
  const { req } = context
  let { user } = req
  if (!user) {
    const authorization = req.headers.Authorization || req.headers.authorization
    const jwtService = new JwtService()
    const payload = isString(authorization) && jwtService.decode(authorization.replace('Bearer ', '')) as any
    if (payload && payload.exp > Date.now() / 1000) {
      user = payload && await prisma.user.findUnique({ where: { email: payload.email } })
      if (user) {
        (req as any).user = user
      }
    }
  }
  context.user = user as User
  return user
}

export function CustomAuthorized () {
  return createMethodDecorator(async ({ context }, next) => {
    const user = await fillContext(context as any)
    if (!user) {
      throw new AuthenticationError()
    }
    return next()
  })
}
