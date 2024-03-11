import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderWhereInput } from "../inputs/ProviderWhereInput";

@TypeGraphQL.InputType("ProviderListRelationFilter", {})
export class ProviderListRelationFilter {
  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  every?: ProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  some?: ProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  none?: ProviderWhereInput | undefined;
}
