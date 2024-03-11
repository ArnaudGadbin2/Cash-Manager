import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyUserInputEnvelope } from "../inputs/CartCreateManyUserInputEnvelope";
import { CartCreateOrConnectWithoutUserInput } from "../inputs/CartCreateOrConnectWithoutUserInput";
import { CartCreateWithoutUserInput } from "../inputs/CartCreateWithoutUserInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutUserInput", {})
export class CartCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutUserInput], {
    nullable: true
  })
  create?: CartCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
