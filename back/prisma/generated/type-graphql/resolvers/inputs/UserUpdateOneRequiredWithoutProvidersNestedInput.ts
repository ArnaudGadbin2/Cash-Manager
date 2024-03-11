import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProvidersInput } from "../inputs/UserCreateOrConnectWithoutProvidersInput";
import { UserCreateWithoutProvidersInput } from "../inputs/UserCreateWithoutProvidersInput";
import { UserUpdateWithoutProvidersInput } from "../inputs/UserUpdateWithoutProvidersInput";
import { UserUpsertWithoutProvidersInput } from "../inputs/UserUpsertWithoutProvidersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProvidersNestedInput", {})
export class UserUpdateOneRequiredWithoutProvidersNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProvidersInput, {
    nullable: true
  })
  create?: UserCreateWithoutProvidersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProvidersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProvidersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProvidersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProvidersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProvidersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutProvidersInput | undefined;
}
