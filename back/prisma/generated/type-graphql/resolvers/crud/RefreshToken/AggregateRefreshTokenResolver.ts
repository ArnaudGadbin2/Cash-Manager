import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRefreshTokenArgs } from "./args/AggregateRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { AggregateRefreshToken } from "../../outputs/AggregateRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class AggregateRefreshTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateRefreshToken, {
    nullable: false
  })
  async aggregateRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRefreshTokenArgs): Promise<AggregateRefreshToken> {
    await onIntercept('RefreshToken', 'aggregateRefreshToken', 'onBefore', 'aggregate', ctx, args)
    const result = getPrismaFromContext(ctx).refreshToken.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    await onIntercept('RefreshToken', 'aggregateRefreshToken', 'onAfter', 'aggregate', ctx, args)
    return result
  }
}
