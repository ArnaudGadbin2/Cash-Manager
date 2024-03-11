import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Inject, Injectable } from '@nestjs/common'
import { IAuthenticationProvider } from '../auth'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor (@Inject('AUTH_SERVICE') private readonly authService: IAuthenticationProvider) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.TOKENS_SECRET}`,
      passReqToCallback: true
    })
  }

  async validate (payload: any) {
    return await this.authService.findUserByEmail(payload.email)
  }
}
