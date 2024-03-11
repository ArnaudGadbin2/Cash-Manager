import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderScalarWhereInput } from "../inputs/ProviderScalarWhereInput";
import { ProviderUpdateManyMutationInput } from "../inputs/ProviderUpdateManyMutationInput";

@TypeGraphQL.InputType("ProviderUpdateManyWithWhereWithoutUserInput", {})
export class ProviderUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ProviderScalarWhereInput, {
    nullable: false
  })
  where!: ProviderScalarWhereInput;

  @TypeGraphQL.Field(_type => ProviderUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProviderUpdateManyMutationInput;
}
