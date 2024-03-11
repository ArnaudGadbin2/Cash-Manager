import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCartArgs } from "./args/FindManyCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class FindManyCartResolver {
  @TypeGraphQL.Query(_returns => [Cart], {
    nullable: false
  })
  async carts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCartArgs): Promise<Cart[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'carts', 'onBefore', 'findMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'carts', 'onAfter', 'findMany', ctx, args)
    return result
  }
}
