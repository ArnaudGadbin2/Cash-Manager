import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenCreateWithoutUserInput } from "../inputs/RefreshTokenCreateWithoutUserInput";
import { RefreshTokenUpdateWithoutUserInput } from "../inputs/RefreshTokenUpdateWithoutUserInput";

@TypeGraphQL.InputType("RefreshTokenUpsertWithoutUserInput", {})
export class RefreshTokenUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => RefreshTokenUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RefreshTokenUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => RefreshTokenCreateWithoutUserInput, {
    nullable: false
  })
  create!: RefreshTokenCreateWithoutUserInput;
}
