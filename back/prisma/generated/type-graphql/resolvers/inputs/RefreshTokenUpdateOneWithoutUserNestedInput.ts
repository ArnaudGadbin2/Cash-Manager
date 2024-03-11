import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenCreateOrConnectWithoutUserInput } from "../inputs/RefreshTokenCreateOrConnectWithoutUserInput";
import { RefreshTokenCreateWithoutUserInput } from "../inputs/RefreshTokenCreateWithoutUserInput";
import { RefreshTokenUpdateWithoutUserInput } from "../inputs/RefreshTokenUpdateWithoutUserInput";
import { RefreshTokenUpsertWithoutUserInput } from "../inputs/RefreshTokenUpsertWithoutUserInput";
import { RefreshTokenWhereUniqueInput } from "../inputs/RefreshTokenWhereUniqueInput";

@TypeGraphQL.InputType("RefreshTokenUpdateOneWithoutUserNestedInput", {})
export class RefreshTokenUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => RefreshTokenCreateWithoutUserInput, {
    nullable: true
  })
  create?: RefreshTokenCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: RefreshTokenUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenWhereUniqueInput, {
    nullable: true
  })
  connect?: RefreshTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenUpdateWithoutUserInput, {
    nullable: true
  })
  update?: RefreshTokenUpdateWithoutUserInput | undefined;
}
