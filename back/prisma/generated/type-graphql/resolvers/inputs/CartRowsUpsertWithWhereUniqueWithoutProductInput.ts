import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateWithoutProductInput } from "../inputs/CartRowsCreateWithoutProductInput";
import { CartRowsUpdateWithoutProductInput } from "../inputs/CartRowsUpdateWithoutProductInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsUpsertWithWhereUniqueWithoutProductInput", {})
export class CartRowsUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsUpdateWithoutProductInput, {
    nullable: false
  })
  update!: CartRowsUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => CartRowsCreateWithoutProductInput, {
    nullable: false
  })
  create!: CartRowsCreateWithoutProductInput;
}
