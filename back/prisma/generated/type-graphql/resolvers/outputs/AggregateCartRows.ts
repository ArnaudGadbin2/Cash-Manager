import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsAvgAggregate } from "../outputs/CartRowsAvgAggregate";
import { CartRowsCountAggregate } from "../outputs/CartRowsCountAggregate";
import { CartRowsMaxAggregate } from "../outputs/CartRowsMaxAggregate";
import { CartRowsMinAggregate } from "../outputs/CartRowsMinAggregate";
import { CartRowsSumAggregate } from "../outputs/CartRowsSumAggregate";

@TypeGraphQL.ObjectType("AggregateCartRows", {})
export class AggregateCartRows {
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
