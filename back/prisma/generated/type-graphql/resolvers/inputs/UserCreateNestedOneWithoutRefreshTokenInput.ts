import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRefreshTokenInput } from "../inputs/UserCreateOrConnectWithoutRefreshTokenInput";
import { UserCreateWithoutRefreshTokenInput } from "../inputs/UserCreateWithoutRefreshTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutRefreshTokenInput", {})
export class UserCreateNestedOneWithoutRefreshTokenInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRefreshTokenInput, {
    nullable: true
  })
  create?: UserCreateWithoutRefreshTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRefreshTokenInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
