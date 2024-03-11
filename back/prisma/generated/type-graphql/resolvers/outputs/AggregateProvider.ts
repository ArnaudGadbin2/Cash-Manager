import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCountAggregate } from "../outputs/ProviderCountAggregate";
import { ProviderMaxAggregate } from "../outputs/ProviderMaxAggregate";
import { ProviderMinAggregate } from "../outputs/ProviderMinAggregate";

@TypeGraphQL.ObjectType("AggregateProvider", {})
export class AggregateProvider {
  @TypeGraphQL.Field(_type => ProviderCountAggregate, {
    nullable: true
  })
  _count!: ProviderCountAggregate | null;

  @TypeGraphQL.Field(_type => ProviderMinAggregate, {
    nullable: true
  })
  _min!: ProviderMinAggregate | null;

  @TypeGraphQL.Field(_type => ProviderMaxAggregate, {
    nullable: true
  })
  _max!: ProviderMaxAggregate | null;
}
