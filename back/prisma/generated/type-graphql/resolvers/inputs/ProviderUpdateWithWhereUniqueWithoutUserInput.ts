import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderUpdateWithoutUserInput } from "../inputs/ProviderUpdateWithoutUserInput";
import { ProviderWhereUniqueInput } from "../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.InputType("ProviderUpdateWithWhereUniqueWithoutUserInput", {})
export class ProviderUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: false
  })
  where!: ProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProviderUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ProviderUpdateWithoutUserInput;
}
