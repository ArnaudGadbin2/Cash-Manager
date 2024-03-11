import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartAvgAggregate } from "../outputs/CartAvgAggregate";
import { CartCountAggregate } from "../outputs/CartCountAggregate";
import { CartMaxAggregate } from "../outputs/CartMaxAggregate";
import { CartMinAggregate } from "../outputs/CartMinAggregate";
import { CartSumAggregate } from "../outputs/CartSumAggregate";

@TypeGraphQL.ObjectType("CartGroupBy", {})
export class CartGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  totalPrice!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cartStatus!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  refusalCount!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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

  @TypeGraphQL.Field(_type => CartCountAggregate, {
    nullable: true
  })
  _count!: CartCountAggregate | null;

  @TypeGraphQL.Field(_type => CartAvgAggregate, {
    nullable: true
  })
  _avg!: CartAvgAggregate | null;

  @TypeGraphQL.Field(_type => CartSumAggregate, {
    nullable: true
  })
  _sum!: CartSumAggregate | null;

  @TypeGraphQL.Field(_type => CartMinAggregate, {
    nullable: true
  })
  _min!: CartMinAggregate | null;

  @TypeGraphQL.Field(_type => CartMaxAggregate, {
    nullable: true
  })
  _max!: CartMaxAggregate | null;
}
