import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateManyProductInput } from "../inputs/CartRowsCreateManyProductInput";

@TypeGraphQL.InputType("CartRowsCreateManyProductInputEnvelope", {})
export class CartRowsCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [CartRowsCreateManyProductInput], {
    nullable: false
  })
  data!: CartRowsCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
