import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenWhereInput } from "../inputs/RefreshTokenWhereInput";

@TypeGraphQL.InputType("RefreshTokenRelationFilter", {})
export class RefreshTokenRelationFilter {
  @TypeGraphQL.Field(_type => RefreshTokenWhereInput, {
    nullable: true
  })
  is?: RefreshTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenWhereInput, {
    nullable: true
  })
  isNot?: RefreshTokenWhereInput | undefined;
}
