import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsCreateNestedManyWithoutCartInput } from "../inputs/CartRowsCreateNestedManyWithoutCartInput";
import { UserCreateNestedOneWithoutCartsInput } from "../inputs/UserCreateNestedOneWithoutCartsInput";

@TypeGraphQL.InputType("CartCreateInput", {})
export class CartCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  totalPrice?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cartStatus?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  refusalCount?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CartRowsCreateNestedManyWithoutCartInput, {
    nullable: true
  })
  cartRows?: CartRowsCreateNestedManyWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCartsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCartsInput;
}
