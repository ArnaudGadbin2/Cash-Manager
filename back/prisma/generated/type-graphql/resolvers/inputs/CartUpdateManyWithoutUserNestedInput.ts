import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyUserInputEnvelope } from "../inputs/CartCreateManyUserInputEnvelope";
import { CartCreateOrConnectWithoutUserInput } from "../inputs/CartCreateOrConnectWithoutUserInput";
import { CartCreateWithoutUserInput } from "../inputs/CartCreateWithoutUserInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutUserInput } from "../inputs/CartUpdateManyWithWhereWithoutUserInput";
import { CartUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CartUpdateWithWhereUniqueWithoutUserInput";
import { CartUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CartUpsertWithWhereUniqueWithoutUserInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutUserNestedInput", {})
export class CartUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutUserInput], {
    nullable: true
  })
  create?: CartCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  set?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  delete?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
