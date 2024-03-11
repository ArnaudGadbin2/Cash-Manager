import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRefreshTokenInput } from "../inputs/UserCreateWithoutRefreshTokenInput";
import { UserUpdateWithoutRefreshTokenInput } from "../inputs/UserUpdateWithoutRefreshTokenInput";

@TypeGraphQL.InputType("UserUpsertWithoutRefreshTokenInput", {})
export class UserUpsertWithoutRefreshTokenInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRefreshTokenInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRefreshTokenInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRefreshTokenInput, {
    nullable: false
  })
  create!: UserCreateWithoutRefreshTokenInput;
}
