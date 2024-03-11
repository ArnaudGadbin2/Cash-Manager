import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRefreshTokenArgs } from "./args/UpsertOneRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class UpsertOneRefreshTokenResolver {
  @TypeGraphQL.Mutation(_returns => RefreshToken, {
    nullable: false
  })
  async upsertOneRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneRefreshTokenArgs): Promise<RefreshToken> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'upsertOneRefreshToken', 'onBefore', 'upsert', ctx, args)
    const result = await getPrismaFromContext(ctx).refreshToken.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('RefreshToken', 'upsertOneRefreshToken', 'onAfter', 'upsert', ctx, args)
    return result
  }
}
