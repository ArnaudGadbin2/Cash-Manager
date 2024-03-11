import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Cart } from "../../../models/Cart";
import { CartRows } from "../../../models/CartRows";
import { User } from "../../../models/User";
import { CartCartRowsArgs } from "./args/CartCartRowsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class CartRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CartRows], {
    nullable: false
  })
  async cartRows(@TypeGraphQL.Root() cart: Cart, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CartCartRowsArgs): Promise<CartRows[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cart.findUniqueOrThrow({
      where: {
        id: cart.id,
      },
    }).cartRows({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() cart: Cart, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cart.findUniqueOrThrow({
      where: {
        id: cart.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
