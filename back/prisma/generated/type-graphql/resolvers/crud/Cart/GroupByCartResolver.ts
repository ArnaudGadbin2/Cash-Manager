import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCartArgs } from "./args/GroupByCartArgs";
import { Cart } from "../../../models/Cart";
import { CartGroupBy } from "../../outputs/CartGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class GroupByCartResolver {
  @TypeGraphQL.Query(_returns => [CartGroupBy], {
    nullable: false
  })
  async groupByCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCartArgs): Promise<CartGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'groupByCart', 'onBefore', 'groupBy', ctx, args)
    const result = getPrismaFromContext(ctx).cart.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    await onIntercept('Cart', 'groupByCart', 'onAfter', 'groupBy', ctx, args)
    return result
  }
}
