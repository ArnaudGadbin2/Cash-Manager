import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateManyCartInputEnvelope } from "../inputs/CartRowsCreateManyCartInputEnvelope";
import { CartRowsCreateOrConnectWithoutCartInput } from "../inputs/CartRowsCreateOrConnectWithoutCartInput";
import { CartRowsCreateWithoutCartInput } from "../inputs/CartRowsCreateWithoutCartInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsCreateNestedManyWithoutCartInput", {})
export class CartRowsCreateNestedManyWithoutCartInput {
  @TypeGraphQL.Field(_type => [CartRowsCreateWithoutCartInput], {
    nullable: true
  })
  create?: CartRowsCreateWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsCreateOrConnectWithoutCartInput], {
    nullable: true
  })
  connectOrCreate?: CartRowsCreateOrConnectWithoutCartInput[] | undefined;

  @TypeGraphQL.Field(_type => CartRowsCreateManyCartInputEnvelope, {
    nullable: true
  })
  createMany?: CartRowsCreateManyCartInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartRowsWhereUniqueInput], {
    nullable: true
  })
  connect?: CartRowsWhereUniqueInput[] | undefined;
}
