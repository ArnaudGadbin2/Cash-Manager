import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateOrConnectWithoutCartRowsInput } from "../inputs/CartCreateOrConnectWithoutCartRowsInput";
import { CartCreateWithoutCartRowsInput } from "../inputs/CartCreateWithoutCartRowsInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedOneWithoutCartRowsInput", {})
export class CartCreateNestedOneWithoutCartRowsInput {
  @TypeGraphQL.Field(_type => CartCreateWithoutCartRowsInput, {
    nullable: true
  })
  create?: CartCreateWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => CartCreateOrConnectWithoutCartRowsInput, {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: true
  })
  connect?: CartWhereUniqueInput | undefined;
}
