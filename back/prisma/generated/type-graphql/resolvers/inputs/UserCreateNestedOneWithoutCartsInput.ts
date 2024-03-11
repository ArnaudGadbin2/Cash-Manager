import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCartsInput } from "../inputs/UserCreateOrConnectWithoutCartsInput";
import { UserCreateWithoutCartsInput } from "../inputs/UserCreateWithoutCartsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCartsInput", {})
export class UserCreateNestedOneWithoutCartsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCartsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCartsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCartsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCartsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
