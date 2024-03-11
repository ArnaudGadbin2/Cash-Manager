import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCartArgs } from "./args/DeleteOneCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class DeleteOneCartResolver {
  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: true
  })
  async deleteOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'deleteOneCart', 'onBefore', 'delete', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'deleteOneCart', 'onAfter', 'delete', ctx, args)
    return result
  }
}
