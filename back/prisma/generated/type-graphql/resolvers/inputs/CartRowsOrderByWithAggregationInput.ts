import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartRowsAvgOrderByAggregateInput } from "../inputs/CartRowsAvgOrderByAggregateInput";
import { CartRowsCountOrderByAggregateInput } from "../inputs/CartRowsCountOrderByAggregateInput";
import { CartRowsMaxOrderByAggregateInput } from "../inputs/CartRowsMaxOrderByAggregateInput";
import { CartRowsMinOrderByAggregateInput } from "../inputs/CartRowsMinOrderByAggregateInput";
import { CartRowsSumOrderByAggregateInput } from "../inputs/CartRowsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CartRowsOrderByWithAggregationInput", {})
export class CartRowsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rowPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cartId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modifiedBy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modifiedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CartRowsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CartRowsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CartRowsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CartRowsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartRowsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CartRowsSumOrderByAggregateInput | undefined;
}
