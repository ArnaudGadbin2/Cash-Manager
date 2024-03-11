import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutProvidersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProvidersNestedInput";

@TypeGraphQL.InputType("ProviderUpdateInput", {})
export class ProviderUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProvidersNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProvidersNestedInput | undefined;
}
