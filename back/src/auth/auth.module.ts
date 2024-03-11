import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { DiscordStrategy, FacebookStrategy, FigmaStrategy, GithubStrategy, GitlabStrategy, GoogleStrategy, TwitchStrategy } from './strategies'
import { JwtStrategy } from './strategies/jwt.strategy'
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy'
import { AuthServiceTokens } from './auth.service.tokens'
import { AuthServicePassword } from './auth.service.password'

@Module({
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    JwtRefreshStrategy,
    DiscordStrategy,
    GoogleStrategy,
    FacebookStrategy,
    GitlabStrategy,
    GithubStrategy,
    FigmaStrategy,
    TwitchStrategy,
    AuthServiceTokens,
    AuthServicePassword,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    }
  ],
  imports: [
    JwtModule
  ],
  exports: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    AuthServiceTokens,
    AuthServicePassword
  ]
})

export class AuthModule {}

