import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProductArgs } from "./args/UpsertOneProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class UpsertOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false
  })
  async upsertOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProductArgs): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'upsertOneProduct', 'onBefore', 'upsert', ctx, args)
    const result = await getPrismaFromContext(ctx).product.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Product', 'upsertOneProduct', 'onAfter', 'upsert', ctx, args)
    return result
  }
}
