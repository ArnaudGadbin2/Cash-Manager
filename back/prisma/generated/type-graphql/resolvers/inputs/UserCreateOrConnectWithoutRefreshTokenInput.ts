import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRefreshTokenInput } from "../inputs/UserCreateWithoutRefreshTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutRefreshTokenInput", {})
export class UserCreateOrConnectWithoutRefreshTokenInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRefreshTokenInput, {
    nullable: false
  })
  create!: UserCreateWithoutRefreshTokenInput;
}
