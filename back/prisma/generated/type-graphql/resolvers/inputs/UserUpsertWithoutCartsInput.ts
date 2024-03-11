import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCartsInput } from "../inputs/UserCreateWithoutCartsInput";
import { UserUpdateWithoutCartsInput } from "../inputs/UserUpdateWithoutCartsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCartsInput", {})
export class UserUpsertWithoutCartsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCartsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCartsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCartsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCartsInput;
}
