import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsUpdateWithoutCartInput } from "../inputs/CartRowsUpdateWithoutCartInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsUpdateWithWhereUniqueWithoutCartInput", {})
export class CartRowsUpdateWithWhereUniqueWithoutCartInput {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsUpdateWithoutCartInput, {
    nullable: false
  })
  data!: CartRowsUpdateWithoutCartInput;
}
