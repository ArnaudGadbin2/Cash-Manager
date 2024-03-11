import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCartOrThrowArgs } from "./args/FindUniqueCartOrThrowArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class FindUniqueCartOrThrowResolver {
  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async getCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCartOrThrowArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'getCart', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'getCart', 'onAfter', 'findUniqueOrThrow', ctx, args)
    return result
  }
}
