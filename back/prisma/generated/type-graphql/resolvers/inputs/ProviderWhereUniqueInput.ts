import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderProviderUserIdCompoundUniqueInput } from "../inputs/ProviderProviderUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("ProviderWhereUniqueInput", {})
export class ProviderWhereUniqueInput {
  @TypeGraphQL.Field(_type => ProviderProviderUserIdCompoundUniqueInput, {
    nullable: true
  })
  provider_userId?: ProviderProviderUserIdCompoundUniqueInput | undefined;
}
