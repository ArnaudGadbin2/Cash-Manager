import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsUpdateWithoutProductInput } from "../inputs/CartRowsUpdateWithoutProductInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsUpdateWithWhereUniqueWithoutProductInput", {})
export class CartRowsUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsUpdateWithoutProductInput, {
    nullable: false
  })
  data!: CartRowsUpdateWithoutProductInput;
}
