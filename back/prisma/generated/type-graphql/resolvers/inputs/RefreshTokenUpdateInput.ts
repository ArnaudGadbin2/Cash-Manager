import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneWithoutRefreshTokenNestedInput } from "../inputs/UserUpdateOneWithoutRefreshTokenNestedInput";

@TypeGraphQL.InputType("RefreshTokenUpdateInput", {})
export class RefreshTokenUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userEmail?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresUtc?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  issuedUtc?: Date | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutRefreshTokenNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutRefreshTokenNestedInput | undefined;
}
