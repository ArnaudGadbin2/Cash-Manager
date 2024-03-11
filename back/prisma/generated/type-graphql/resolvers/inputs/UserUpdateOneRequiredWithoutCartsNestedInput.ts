import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCartsInput } from "../inputs/UserCreateOrConnectWithoutCartsInput";
import { UserCreateWithoutCartsInput } from "../inputs/UserCreateWithoutCartsInput";
import { UserUpdateWithoutCartsInput } from "../inputs/UserUpdateWithoutCartsInput";
import { UserUpsertWithoutCartsInput } from "../inputs/UserUpsertWithoutCartsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCartsNestedInput", {})
export class UserUpdateOneRequiredWithoutCartsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCartsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCartsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCartsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCartsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCartsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCartsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCartsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCartsInput | undefined;
}
