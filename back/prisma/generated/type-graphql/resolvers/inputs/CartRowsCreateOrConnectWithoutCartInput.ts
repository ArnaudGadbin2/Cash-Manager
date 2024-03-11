import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateWithoutCartInput } from "../inputs/CartRowsCreateWithoutCartInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsCreateOrConnectWithoutCartInput", {})
export class CartRowsCreateOrConnectWithoutCartInput {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsCreateWithoutCartInput, {
    nullable: false
  })
  create!: CartRowsCreateWithoutCartInput;
}
