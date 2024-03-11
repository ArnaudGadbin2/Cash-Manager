import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateWithoutProductInput } from "../inputs/CartRowsCreateWithoutProductInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsCreateOrConnectWithoutProductInput", {})
export class CartRowsCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsCreateWithoutProductInput, {
    nullable: false
  })
  create!: CartRowsCreateWithoutProductInput;
}
