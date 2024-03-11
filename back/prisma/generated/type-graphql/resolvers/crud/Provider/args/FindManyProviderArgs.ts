import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderOrderByWithRelationInput } from "../../../inputs/ProviderOrderByWithRelationInput";
import { ProviderWhereInput } from "../../../inputs/ProviderWhereInput";
import { ProviderWhereUniqueInput } from "../../../inputs/ProviderWhereUniqueInput";
import { ProviderScalarFieldEnum } from "../../../../enums/ProviderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProviderArgs {
  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  where?: ProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProviderOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProviderOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProviderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProviderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"provider" | "createdBy" | "createdAt" | "modifiedBy" | "modifiedAt" | "userId"> | undefined;
}
