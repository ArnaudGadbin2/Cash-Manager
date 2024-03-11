import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCreateManyUserInput } from "../inputs/ProviderCreateManyUserInput";

@TypeGraphQL.InputType("ProviderCreateManyUserInputEnvelope", {})
export class ProviderCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProviderCreateManyUserInput], {
    nullable: false
  })
  data!: ProviderCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
