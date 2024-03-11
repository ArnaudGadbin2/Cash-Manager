import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProvidersInput } from "../inputs/UserCreateWithoutProvidersInput";
import { UserUpdateWithoutProvidersInput } from "../inputs/UserUpdateWithoutProvidersInput";

@TypeGraphQL.InputType("UserUpsertWithoutProvidersInput", {})
export class UserUpsertWithoutProvidersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProvidersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProvidersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProvidersInput, {
    nullable: false
  })
  create!: UserCreateWithoutProvidersInput;
}
