import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCreateWithoutUserInput } from "../inputs/ProviderCreateWithoutUserInput";
import { ProviderUpdateWithoutUserInput } from "../inputs/ProviderUpdateWithoutUserInput";
import { ProviderWhereUniqueInput } from "../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.InputType("ProviderUpsertWithWhereUniqueWithoutUserInput", {})
export class ProviderUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: false
  })
  where!: ProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProviderUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProviderUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProviderCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProviderCreateWithoutUserInput;
}
