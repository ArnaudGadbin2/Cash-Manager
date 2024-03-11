import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenCountOrderByAggregateInput } from "../inputs/RefreshTokenCountOrderByAggregateInput";
import { RefreshTokenMaxOrderByAggregateInput } from "../inputs/RefreshTokenMaxOrderByAggregateInput";
import { RefreshTokenMinOrderByAggregateInput } from "../inputs/RefreshTokenMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RefreshTokenOrderByWithAggregationInput", {})
export class RefreshTokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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
  userEmail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  refreshToken?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  expiresUtc?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  issuedUtc?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  userId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RefreshTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RefreshTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RefreshTokenMinOrderByAggregateInput | undefined;
}
