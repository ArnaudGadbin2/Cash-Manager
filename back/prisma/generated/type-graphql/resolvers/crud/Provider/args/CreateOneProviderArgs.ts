import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderCreateInput } from "../../../inputs/ProviderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProviderArgs {
  @TypeGraphQL.Field(_type => ProviderCreateInput, {
    nullable: false
  })
  data!: ProviderCreateInput;
}
