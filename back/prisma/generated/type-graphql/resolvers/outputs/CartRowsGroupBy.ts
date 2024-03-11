import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsAvgAggregate } from "../outputs/CartRowsAvgAggregate";
import { CartRowsCountAggregate } from "../outputs/CartRowsCountAggregate";
import { CartRowsMaxAggregate } from "../outputs/CartRowsMaxAggregate";
import { CartRowsMinAggregate } from "../outputs/CartRowsMinAggregate";
import { CartRowsSumAggregate } from "../outputs/CartRowsSumAggregate";

@TypeGraphQL.ObjectType("CartRowsGroupBy", {})
export class CartRowsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  rowPrice!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  cartId!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  productId!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt!: Date | null;

  @TypeGraphQL.Field(_type => CartRowsCountAggregate, {
    nullable: true
  })
  _count!: CartRowsCountAggregate | null;

  @TypeGraphQL.Field(_type => CartRowsAvgAggregate, {
    nullable: true
  })
  _avg!: CartRowsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CartRowsSumAggregate, {
    nullable: true
  })
  _sum!: CartRowsSumAggregate | null;

  @TypeGraphQL.Field(_type => CartRowsMinAggregate, {
    nullable: true
  })
  _min!: CartRowsMinAggregate | null;

  @TypeGraphQL.Field(_type => CartRowsMaxAggregate, {
    nullable: true
  })
  _max!: CartRowsMaxAggregate | null;
}
