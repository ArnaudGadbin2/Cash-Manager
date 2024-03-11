import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCountCartRowsArgs } from "./args/CartCountCartRowsArgs";

@TypeGraphQL.ObjectType("CartCount", {})
export class CartCount {
  cartRows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "cartRows",
    nullable: false
  })
  getCartRows(@TypeGraphQL.Root() root: CartCount, @TypeGraphQL.Args() args: CartCountCartRowsArgs): number {
    return root.cartRows;
  }
}
