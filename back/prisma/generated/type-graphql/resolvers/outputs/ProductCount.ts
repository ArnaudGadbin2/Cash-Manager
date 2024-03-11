import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCountCartRowsArgs } from "./args/ProductCountCartRowsArgs";

@TypeGraphQL.ObjectType("ProductCount", {})
export class ProductCount {
  cartRows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "cartRows",
    nullable: false
  })
  getCartRows(@TypeGraphQL.Root() root: ProductCount, @TypeGraphQL.Args() args: ProductCountCartRowsArgs): number {
    return root.cartRows;
  }
}
