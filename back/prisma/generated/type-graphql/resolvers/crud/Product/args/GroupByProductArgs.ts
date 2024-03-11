import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductOrderByWithAggregationInput } from "../../../inputs/ProductOrderByWithAggregationInput";
import { ProductScalarWhereWithAggregatesInput } from "../../../inputs/ProductScalarWhereWithAggregatesInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductScalarFieldEnum } from "../../../../enums/ProductScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProductOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "photo" | "price" | "createdBy" | "modifiedBy" | "createdAt" | "modifiedAt">;

  @TypeGraphQL.Field(_type => ProductScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProductScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
