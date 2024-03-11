import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderUpdateInput } from "../../../inputs/ProviderUpdateInput";
import { ProviderWhereUniqueInput } from "../../../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProviderArgs {
  @TypeGraphQL.Field(_type => ProviderUpdateInput, {
    nullable: false
  })
  data!: ProviderUpdateInput;

  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: false
  })
  where!: ProviderWhereUniqueInput;
}
