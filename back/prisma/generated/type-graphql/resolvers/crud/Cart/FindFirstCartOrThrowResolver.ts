import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCartOrThrowArgs } from "./args/FindFirstCartOrThrowArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class FindFirstCartOrThrowResolver {
  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async findFirstCartOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartOrThrowArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'findFirstCartOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'findFirstCartOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args)
    return result
  }
}
