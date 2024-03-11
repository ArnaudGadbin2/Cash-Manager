import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCreateManyUserInputEnvelope } from "../inputs/ProviderCreateManyUserInputEnvelope";
import { ProviderCreateOrConnectWithoutUserInput } from "../inputs/ProviderCreateOrConnectWithoutUserInput";
import { ProviderCreateWithoutUserInput } from "../inputs/ProviderCreateWithoutUserInput";
import { ProviderWhereUniqueInput } from "../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.InputType("ProviderCreateNestedManyWithoutUserInput", {})
export class ProviderCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProviderCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProviderCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProviderCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProviderCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProviderCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProviderWhereUniqueInput], {
    nullable: true
  })
  connect?: ProviderWhereUniqueInput[] | undefined;
}
