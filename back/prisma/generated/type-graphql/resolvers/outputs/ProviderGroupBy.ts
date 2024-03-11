import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCountAggregate } from "../outputs/ProviderCountAggregate";
import { ProviderMaxAggregate } from "../outputs/ProviderMaxAggregate";
import { ProviderMinAggregate } from "../outputs/ProviderMinAggregate";

@TypeGraphQL.ObjectType("ProviderGroupBy", {})
export class ProviderGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
