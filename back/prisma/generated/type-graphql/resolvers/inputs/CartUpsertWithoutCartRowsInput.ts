import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutCartRowsInput } from "../inputs/CartCreateWithoutCartRowsInput";
import { CartUpdateWithoutCartRowsInput } from "../inputs/CartUpdateWithoutCartRowsInput";

@TypeGraphQL.InputType("CartUpsertWithoutCartRowsInput", {})
export class CartUpsertWithoutCartRowsInput {
  @TypeGraphQL.Field(_type => CartUpdateWithoutCartRowsInput, {
    nullable: false
  })
  update!: CartUpdateWithoutCartRowsInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutCartRowsInput, {
    nullable: false
  })
  create!: CartCreateWithoutCartRowsInput;
}
