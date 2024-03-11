import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderOrderByWithAggregationInput } from "../../../inputs/ProviderOrderByWithAggregationInput";
import { ProviderScalarWhereWithAggregatesInput } from "../../../inputs/ProviderScalarWhereWithAggregatesInput";
import { ProviderWhereInput } from "../../../inputs/ProviderWhereInput";
import { ProviderScalarFieldEnum } from "../../../../enums/ProviderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProviderArgs {
  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  where?: ProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProviderOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProviderOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProviderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"provider" | "createdBy" | "createdAt" | "modifiedBy" | "modifiedAt" | "userId">;

  @TypeGraphQL.Field(_type => ProviderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProviderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
