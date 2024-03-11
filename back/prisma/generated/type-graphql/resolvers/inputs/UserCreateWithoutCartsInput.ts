import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCreateNestedManyWithoutUserInput } from "../inputs/ProviderCreateNestedManyWithoutUserInput";
import { RefreshTokenCreateNestedOneWithoutUserInput } from "../inputs/RefreshTokenCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutCartsInput", {})
export class UserCreateWithoutCartsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userName!: string;

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
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshTokenId?: string | undefined;

  @TypeGraphQL.Field(_type => ProviderCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  providers?: ProviderCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput | undefined;
}
