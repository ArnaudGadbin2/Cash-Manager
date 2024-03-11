import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsScalarWhereInput } from "../inputs/CartRowsScalarWhereInput";
import { CartRowsUpdateManyMutationInput } from "../inputs/CartRowsUpdateManyMutationInput";

@TypeGraphQL.InputType("CartRowsUpdateManyWithWhereWithoutCartInput", {})
export class CartRowsUpdateManyWithWhereWithoutCartInput {
  @TypeGraphQL.Field(_type => CartRowsScalarWhereInput, {
    nullable: false
  })
  where!: CartRowsScalarWhereInput;

  @TypeGraphQL.Field(_type => CartRowsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CartRowsUpdateManyMutationInput;
}
