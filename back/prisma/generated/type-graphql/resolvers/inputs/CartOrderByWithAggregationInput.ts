import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartAvgOrderByAggregateInput } from "../inputs/CartAvgOrderByAggregateInput";
import { CartCountOrderByAggregateInput } from "../inputs/CartCountOrderByAggregateInput";
import { CartMaxOrderByAggregateInput } from "../inputs/CartMaxOrderByAggregateInput";
import { CartMinOrderByAggregateInput } from "../inputs/CartMinOrderByAggregateInput";
import { CartSumOrderByAggregateInput } from "../inputs/CartSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CartOrderByWithAggregationInput", {})
export class CartOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cartStatus?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  refusalCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => CartCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CartCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CartAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CartMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CartMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CartSumOrderByAggregateInput | undefined;
}
