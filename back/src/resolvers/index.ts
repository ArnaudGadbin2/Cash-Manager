// Custom resolvers here

// import { Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
// import {
//   Post,
//   User
// } from '../../prisma/generated/type-graphql'
// import { Context } from '../types'

// @Resolver(_of => User)
// export class CustomUserResolver {
//   @Query(_returns => User, { nullable: true })
//   async bestUser (@Ctx() { prisma }: Context): Promise<User | null> {
//     return await prisma.user.findFirst({
//       where: { email: 'bob@prisma.io' }
//     })
//   }

//   @FieldResolver(_type => Post, { nullable: true })
//   async favoritePost (
//     @Root() user: User,
//     @Ctx() { prisma }: Context
//   ): Promise<Post | undefined> {
//     const [favoritePost] = await prisma.user
//       .findUniqueOrThrow({ where: { id: user.id } })
//       .posts({ take: 1 })

//     return favoritePost
//   }
// }
