import type { User } from 'prisma/generated/type-graphql'
import type { ProviderEnum } from 'src/constants/enum'
import type { UserDetails } from './dto/userDetails.dto'

export interface OAuthStrategyResponse {
  user: User
  accessToken: string
  refreshToken: string
  provider: ProviderEnum
}

export interface IAuthenticationProvider {
  validateUser(details: UserDetails)
  createUser(details: UserDetails)
  login(user: OAuthStrategyResponse)
  findUserByEmail (email: string): Promise<User | undefined>
  getNewTokensIfRefreshTokenMatches (refreshToken: string, payload: any): any
}
