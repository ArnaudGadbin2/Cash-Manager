import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRefreshTokenInput } from "../inputs/UserCreateOrConnectWithoutRefreshTokenInput";
import { UserCreateWithoutRefreshTokenInput } from "../inputs/UserCreateWithoutRefreshTokenInput";
import { UserUpdateWithoutRefreshTokenInput } from "../inputs/UserUpdateWithoutRefreshTokenInput";
import { UserUpsertWithoutRefreshTokenInput } from "../inputs/UserUpsertWithoutRefreshTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutRefreshTokenNestedInput", {})
export class UserUpdateOneWithoutRefreshTokenNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRefreshTokenInput, {
    nullable: true
  })
  create?: UserCreateWithoutRefreshTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRefreshTokenInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRefreshTokenInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRefreshTokenInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRefreshTokenInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRefreshTokenInput | undefined;
}
