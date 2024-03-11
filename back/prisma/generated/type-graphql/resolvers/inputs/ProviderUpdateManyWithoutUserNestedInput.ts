import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCreateManyUserInputEnvelope } from "../inputs/ProviderCreateManyUserInputEnvelope";
import { ProviderCreateOrConnectWithoutUserInput } from "../inputs/ProviderCreateOrConnectWithoutUserInput";
import { ProviderCreateWithoutUserInput } from "../inputs/ProviderCreateWithoutUserInput";
import { ProviderScalarWhereInput } from "../inputs/ProviderScalarWhereInput";
import { ProviderUpdateManyWithWhereWithoutUserInput } from "../inputs/ProviderUpdateManyWithWhereWithoutUserInput";
import { ProviderUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProviderUpdateWithWhereUniqueWithoutUserInput";
import { ProviderUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProviderUpsertWithWhereUniqueWithoutUserInput";
import { ProviderWhereUniqueInput } from "../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.InputType("ProviderUpdateManyWithoutUserNestedInput", {})
export class ProviderUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ProviderCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProviderCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProviderCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProviderUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProviderCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProviderCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProviderWhereUniqueInput], {
    nullable: true
  })
  set?: ProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderWhereUniqueInput], {
    nullable: true
  })
  delete?: ProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderWhereUniqueInput], {
    nullable: true
  })
  connect?: ProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProviderUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProviderUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProviderScalarWhereInput[] | undefined;
}
