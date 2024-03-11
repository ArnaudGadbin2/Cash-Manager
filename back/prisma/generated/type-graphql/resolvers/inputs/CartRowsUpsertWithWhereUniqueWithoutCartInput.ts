import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateWithoutCartInput } from "../inputs/CartRowsCreateWithoutCartInput";
import { CartRowsUpdateWithoutCartInput } from "../inputs/CartRowsUpdateWithoutCartInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsUpsertWithWhereUniqueWithoutCartInput", {})
export class CartRowsUpsertWithWhereUniqueWithoutCartInput {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsUpdateWithoutCartInput, {
    nullable: false
  })
  update!: CartRowsUpdateWithoutCartInput;

  @TypeGraphQL.Field(_type => CartRowsCreateWithoutCartInput, {
    nullable: false
  })
  create!: CartRowsCreateWithoutCartInput;
}
