import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartAvgAggregate } from "../outputs/CartAvgAggregate";
import { CartCountAggregate } from "../outputs/CartCountAggregate";
import { CartMaxAggregate } from "../outputs/CartMaxAggregate";
import { CartMinAggregate } from "../outputs/CartMinAggregate";
import { CartSumAggregate } from "../outputs/CartSumAggregate";

@TypeGraphQL.ObjectType("AggregateCart", {})
export class AggregateCart {
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
