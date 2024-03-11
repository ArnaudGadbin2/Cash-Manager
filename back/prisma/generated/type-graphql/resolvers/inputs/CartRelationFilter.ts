import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartWhereInput } from "../inputs/CartWhereInput";

@TypeGraphQL.InputType("CartRelationFilter", {})
export class CartRelationFilter {
  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  is?: CartWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  isNot?: CartWhereInput | undefined;
}
