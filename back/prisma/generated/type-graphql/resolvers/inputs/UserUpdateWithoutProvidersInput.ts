import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartUpdateManyWithoutUserNestedInput } from "../inputs/CartUpdateManyWithoutUserNestedInput";
import { RefreshTokenUpdateOneWithoutUserNestedInput } from "../inputs/RefreshTokenUpdateOneWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutProvidersInput", {})
export class UserUpdateWithoutProvidersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailConfirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  accessTokenExpiresUtc?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oneTimePassword?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshTokenId?: string | undefined;

  @TypeGraphQL.Field(_type => CartUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  carts?: CartUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput | undefined;
}
