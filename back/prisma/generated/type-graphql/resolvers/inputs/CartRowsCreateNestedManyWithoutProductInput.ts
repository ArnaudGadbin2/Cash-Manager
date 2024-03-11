import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateManyProductInputEnvelope } from "../inputs/CartRowsCreateManyProductInputEnvelope";
import { CartRowsCreateOrConnectWithoutProductInput } from "../inputs/CartRowsCreateOrConnectWithoutProductInput";
import { CartRowsCreateWithoutProductInput } from "../inputs/CartRowsCreateWithoutProductInput";
import { CartRowsWhereUniqueInput } from "../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.InputType("CartRowsCreateNestedManyWithoutProductInput", {})
export class CartRowsCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [CartRowsCreateWithoutProductInput], {
    nullable: true
  })
  create?: CartRowsCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: CartRowsCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => CartRowsCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: CartRowsCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartRowsWhereUniqueInput], {
    nullable: true
  })
  connect?: CartRowsWhereUniqueInput[] | undefined;
}
