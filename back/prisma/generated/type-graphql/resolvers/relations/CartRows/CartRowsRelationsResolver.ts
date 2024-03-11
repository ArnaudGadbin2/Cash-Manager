import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Cart } from "../../../models/Cart";
import { CartRows } from "../../../models/CartRows";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class CartRowsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Cart, {
    nullable: false
  })
  async cart(@TypeGraphQL.Root() cartRows: CartRows, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Cart> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cartRows.findUniqueOrThrow({
      where: {
        id: cartRows.id,
      },
    }).cart({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() cartRows: CartRows, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cartRows.findUniqueOrThrow({
      where: {
        id: cartRows.id,
      },
    }).product({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
