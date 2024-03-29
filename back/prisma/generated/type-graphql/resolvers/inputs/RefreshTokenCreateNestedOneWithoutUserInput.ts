import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenCreateOrConnectWithoutUserInput } from "../inputs/RefreshTokenCreateOrConnectWithoutUserInput";
import { RefreshTokenCreateWithoutUserInput } from "../inputs/RefreshTokenCreateWithoutUserInput";
import { RefreshTokenWhereUniqueInput } from "../inputs/RefreshTokenWhereUniqueInput";

@TypeGraphQL.InputType("RefreshTokenCreateNestedOneWithoutUserInput", {})
export class RefreshTokenCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => RefreshTokenCreateWithoutUserInput, {
    nullable: true
  })
  create?: RefreshTokenCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenWhereUniqueInput, {
    nullable: true
  })
  connect?: RefreshTokenWhereUniqueInput | undefined;
}
