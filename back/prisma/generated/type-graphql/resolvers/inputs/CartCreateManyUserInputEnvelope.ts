import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyUserInput } from "../inputs/CartCreateManyUserInput";

@TypeGraphQL.InputType("CartCreateManyUserInputEnvelope", {})
export class CartCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManyUserInput], {
    nullable: false
  })
  data!: CartCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
