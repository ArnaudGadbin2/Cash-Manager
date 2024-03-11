import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateNestedOneWithoutCartRowsInput } from "../inputs/CartCreateNestedOneWithoutCartRowsInput";
import { ProductCreateNestedOneWithoutCartRowsInput } from "../inputs/ProductCreateNestedOneWithoutCartRowsInput";

@TypeGraphQL.InputType("CartRowsCreateInput", {})
export class CartRowsCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rowPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  quantity?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CartCreateNestedOneWithoutCartRowsInput, {
    nullable: false
  })
  cart!: CartCreateNestedOneWithoutCartRowsInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutCartRowsInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutCartRowsInput;
}
