import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsWhereInput } from "../inputs/CartRowsWhereInput";

@TypeGraphQL.InputType("CartRowsListRelationFilter", {})
export class CartRowsListRelationFilter {
  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  every?: CartRowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  some?: CartRowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  none?: CartRowsWhereInput | undefined;
}
