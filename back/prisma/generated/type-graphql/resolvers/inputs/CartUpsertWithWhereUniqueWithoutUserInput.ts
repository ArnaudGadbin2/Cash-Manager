import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutUserInput } from "../inputs/CartCreateWithoutUserInput";
import { CartUpdateWithoutUserInput } from "../inputs/CartUpdateWithoutUserInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpsertWithWhereUniqueWithoutUserInput", {})
export class CartUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CartUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutUserInput, {
    nullable: false
  })
  create!: CartCreateWithoutUserInput;
}
