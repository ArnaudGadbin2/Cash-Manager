import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCartArgs } from "./args/AggregateCartArgs";
import { Cart } from "../../../models/Cart";
import { AggregateCart } from "../../outputs/AggregateCart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class AggregateCartResolver {
  @TypeGraphQL.Query(_returns => AggregateCart, {
    nullable: false
  })
  async aggregateCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCartArgs): Promise<AggregateCart> {
    await onIntercept('Cart', 'aggregateCart', 'onBefore', 'aggregate', ctx, args)
    const result = getPrismaFromContext(ctx).cart.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    await onIntercept('Cart', 'aggregateCart', 'onAfter', 'aggregate', ctx, args)
    return result
  }
}
