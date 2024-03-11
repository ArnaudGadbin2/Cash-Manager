import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCartArgs } from "./args/UpsertOneCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class UpsertOneCartResolver {
  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: false
  })
  async upsertOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCartArgs): Promise<Cart> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'upsertOneCart', 'onBefore', 'upsert', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'upsertOneCart', 'onAfter', 'upsert', ctx, args)
    return result
  }
}
