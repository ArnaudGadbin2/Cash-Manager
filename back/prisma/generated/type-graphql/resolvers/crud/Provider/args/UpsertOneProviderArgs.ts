import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderCreateInput } from "../../../inputs/ProviderCreateInput";
import { ProviderUpdateInput } from "../../../inputs/ProviderUpdateInput";
import { ProviderWhereUniqueInput } from "../../../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProviderArgs {
  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: false
  })
  where!: ProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProviderCreateInput, {
    nullable: false
  })
  create!: ProviderCreateInput;

  @TypeGraphQL.Field(_type => ProviderUpdateInput, {
    nullable: false
  })
  update!: ProviderUpdateInput;
}
