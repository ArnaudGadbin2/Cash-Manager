import type { ProviderEnum } from 'src/constants/enum'

export interface OAuthProvider {
  provider: ProviderEnum
  providerId: string
}

export interface UserDetails {
  email: string
  displayName?: string // discord : username
  firstName?: string
  lastName?: string
  username?: string
  password?: string
  profileImage?: string // avatar
  providers: Array<OAuthProvider>
  discordDiscriminator?: string
}
