import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateManyProductInputEnvelope } from "../inputs/CartRowsCreateManyProductInputEnvelope";
import { CartRowsCreateOrConnectWithoutProductInput } from "../inputs/CartRowsCreateOrConnectWithoutProductInput";
import { CartRowsCreateWithoutProductInput } from "../inputs/CartRowsCreateWithoutProductInput";
import { CartRowsScalarWhereInput } from "../inputs/CartRowsScalarWhereInput";
import { CartRowsUpdateManyWithWhereWithoutProductInput } from "../inputs/CartRowsUpdateManyWithWhereWithoutProductInput";
import { CartRowsUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CartRowsUpdateWithWhereUniqueWithoutProductInput";
import { CartRowsUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CartRowsUpsertWithWhereUniqueWithoutProductInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsUpdateManyWithoutProductNestedInput", {})
export class CartRowsUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [CartRowsCreateWithoutProductInput], {
    nullable: true
  })
  create?: CartRowsCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: CartRowsCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: CartRowsUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => CartRowsCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: CartRowsCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartRowsWhereUniqueInput], {
    nullable: true
  })
  set?: CartRowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CartRowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsWhereUniqueInput], {
    nullable: true
  })
  delete?: CartRowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsWhereUniqueInput], {
    nullable: true
  })
  connect?: CartRowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: CartRowsUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: CartRowsUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartRowsScalarWhereInput[] | undefined;
}
