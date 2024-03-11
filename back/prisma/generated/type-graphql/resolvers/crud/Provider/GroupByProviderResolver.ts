import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByProviderArgs } from "./args/GroupByProviderArgs";
import { Provider } from "../../../models/Provider";
import { ProviderGroupBy } from "../../outputs/ProviderGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class GroupByProviderResolver {
  @TypeGraphQL.Query(_returns => [ProviderGroupBy], {
    nullable: false
  })
  async groupByProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProviderArgs): Promise<ProviderGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'groupByProvider', 'onBefore', 'groupBy', ctx, args)
    const result = getPrismaFromContext(ctx).provider.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    await onIntercept('Provider', 'groupByProvider', 'onAfter', 'groupBy', ctx, args)
    return result
  }
}
