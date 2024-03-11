import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateManyCartInput } from "../inputs/CartRowsCreateManyCartInput";

@TypeGraphQL.InputType("CartRowsCreateManyCartInputEnvelope", {})
export class CartRowsCreateManyCartInputEnvelope {
  @TypeGraphQL.Field(_type => [CartRowsCreateManyCartInput], {
    nullable: false
  })
  data!: CartRowsCreateManyCartInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
