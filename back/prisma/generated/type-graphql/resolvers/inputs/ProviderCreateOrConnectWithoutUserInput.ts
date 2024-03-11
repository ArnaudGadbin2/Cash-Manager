import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCreateWithoutUserInput } from "../inputs/ProviderCreateWithoutUserInput";
import { ProviderWhereUniqueInput } from "../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.InputType("ProviderCreateOrConnectWithoutUserInput", {})
export class ProviderCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: false
  })
  where!: ProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProviderCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProviderCreateWithoutUserInput;
}
