import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsOrderByWithAggregationInput } from "../../../inputs/CartRowsOrderByWithAggregationInput";
import { CartRowsScalarWhereWithAggregatesInput } from "../../../inputs/CartRowsScalarWhereWithAggregatesInput";
import { CartRowsWhereInput } from "../../../inputs/CartRowsWhereInput";
import { CartRowsScalarFieldEnum } from "../../../../enums/CartRowsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  where?: CartRowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartRowsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CartRowsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartRowsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "rowPrice" | "quantity" | "cartId" | "productId" | "createdBy" | "modifiedBy" | "createdAt" | "modifiedAt">;

  @TypeGraphQL.Field(_type => CartRowsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CartRowsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
