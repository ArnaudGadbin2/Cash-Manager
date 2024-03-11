import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProviderCountOrderByAggregateInput } from "../inputs/ProviderCountOrderByAggregateInput";
import { ProviderMaxOrderByAggregateInput } from "../inputs/ProviderMaxOrderByAggregateInput";
import { ProviderMinOrderByAggregateInput } from "../inputs/ProviderMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProviderOrderByWithAggregationInput", {})
export class ProviderOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  createdBy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  createdAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modifiedBy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modifiedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProviderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProviderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProviderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProviderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProviderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProviderMinOrderByAggregateInput | undefined;
}
