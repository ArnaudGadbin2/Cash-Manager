import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderUpdateManyMutationInput } from "../../../inputs/ProviderUpdateManyMutationInput";
import { ProviderWhereInput } from "../../../inputs/ProviderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProviderArgs {
  @TypeGraphQL.Field(_type => ProviderUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProviderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  where?: ProviderWhereInput | undefined;
}
