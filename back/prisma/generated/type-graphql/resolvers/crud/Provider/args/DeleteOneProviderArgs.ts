import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderWhereUniqueInput } from "../../../inputs/ProviderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProviderArgs {
  @TypeGraphQL.Field(_type => ProviderWhereUniqueInput, {
    nullable: false
  })
  where!: ProviderWhereUniqueInput;
}
