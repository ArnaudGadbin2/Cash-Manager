import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByRefreshTokenArgs } from "./args/GroupByRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { RefreshTokenGroupBy } from "../../outputs/RefreshTokenGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class GroupByRefreshTokenResolver {
  @TypeGraphQL.Query(_returns => [RefreshTokenGroupBy], {
    nullable: false
  })
  async groupByRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRefreshTokenArgs): Promise<RefreshTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'groupByRefreshToken', 'onBefore', 'groupBy', ctx, args)
    const result = getPrismaFromContext(ctx).refreshToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    await onIntercept('RefreshToken', 'groupByRefreshToken', 'onAfter', 'groupBy', ctx, args)
    return result
  }
}
