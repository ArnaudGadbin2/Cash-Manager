import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { User } from 'prisma/generated/type-graphql'

import { CurrentUser, GraphQlAuthGuard } from 'src/auth/guards'

@Resolver(() => User)
@UseGuards(GraphQlAuthGuard)
export class AuthResolver {
  constructor () {}

  @Query(() => User, { name: 'getUser' })
  async getUser (@CurrentUser() user: User): Promise<User> {
    return user
  }
}
