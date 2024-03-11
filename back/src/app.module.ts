import path from 'path'
import { Module } from '@nestjs/common'
import { ApolloDriver } from '@nestjs/apollo'
import { TypeGraphQLModule } from 'typegraphql-nestjs'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { resolvers } from '../prisma/generated/type-graphql'
import { AuthController } from './auth/auth.controller'
import { AuthService } from './auth/auth.service'
import { AuthResolver } from './auth/auth.resolver'
import { AuthModule } from './auth/auth.module'
import { AuthServiceTokens } from './auth/auth.service.tokens'
import { applyModelsEnhance } from './middleware/modelsEnhance'
import { applyResolversEnhance } from './middleware/resolversEnhance'
import { fillContext, prisma } from './auth/middleware'

let envFilePath = '.env.development'
if (process.env.NODE_ENV === 'PRODUCTION') {
  envFilePath = '.env.production'
}
if (process.env.NODE_ENV === 'STAGING') {
  envFilePath = '.env.staging'
}
else if (process.env.NODE_ENV === 'TEST') {
  envFilePath = '.env.testing'
}

console.log(`Running in ${envFilePath}`)

// Fills createdBy + ModifiedBy automatically & custom interceptors
// applyInterceptors()

// Ex : Make password not searchable in qraphql
applyModelsEnhance()

// Ex : Make deleting other users using deleteOneUser resolver not possible
applyResolversEnhance()

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    // use the TypeGraphQLModule to expose Prisma by GraphQL
    TypeGraphQLModule.forRoot({
      driver: ApolloDriver,
      // path: "/graphql", // choose your path here
      emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
      validate: false,
      context: async (context) => {
        const user = await fillContext(context)
        return { prisma, user }
      },
      authChecker: async ({ context }) => {
        return context.user != null
      }
    }),
    JwtModule,
    AuthModule
  ],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    AuthServiceTokens,
    AuthResolver,
    // register all resolvers inside `providers` of the Nest module
    // add custom resolvers for example:
    // CustomUserResolver,
    ...(resolvers as any) // register all or pick which resolver you need from '../prisma/generated/type-graphql'
  ],
  controllers: [
    AuthController
  ]
})
export class AppModule {}
