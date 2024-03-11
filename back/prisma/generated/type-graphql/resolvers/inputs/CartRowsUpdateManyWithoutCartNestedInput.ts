import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateManyCartInputEnvelope } from "../inputs/CartRowsCreateManyCartInputEnvelope";
import { CartRowsCreateOrConnectWithoutCartInput } from "../inputs/CartRowsCreateOrConnectWithoutCartInput";
import { CartRowsCreateWithoutCartInput } from "../inputs/CartRowsCreateWithoutCartInput";
import { CartRowsScalarWhereInput } from "../inputs/CartRowsScalarWhereInput";
import { CartRowsUpdateManyWithWhereWithoutCartInput } from "../inputs/CartRowsUpdateManyWithWhereWithoutCartInput";
import { CartRowsUpdateWithWhereUniqueWithoutCartInput } from "../inputs/CartRowsUpdateWithWhereUniqueWithoutCartInput";
import { CartRowsUpsertWithWhereUniqueWithoutCartInput } from "../inputs/CartRowsUpsertWithWhereUniqueWithoutCartInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsUpdateManyWithoutCartNestedInput", {})
export class CartRowsUpdateManyWithoutCartNestedInput {
  @TypeGraphQL.Field(_type => [CartRowsCreateWithoutCartInput], {
    nullable: true
  })
  create?: CartRowsCreateWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsCreateOrConnectWithoutCartInput], {
    nullable: true
  })
  connectOrCreate?: CartRowsCreateOrConnectWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsUpsertWithWhereUniqueWithoutCartInput], {
    nullable: true
  })
  upsert?: CartRowsUpsertWithWhereUniqueWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => CartRowsCreateManyCartInputEnvelope, {
    nullable: true
  })
  createMany?: CartRowsCreateManyCartInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CartRowsUpdateWithWhereUniqueWithoutCartInput], {
    nullable: true
  })
  update?: CartRowsUpdateWithWhereUniqueWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsUpdateManyWithWhereWithoutCartInput], {
    nullable: true
  })
  updateMany?: CartRowsUpdateManyWithWhereWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartRowsScalarWhereInput[] | undefined;
}
