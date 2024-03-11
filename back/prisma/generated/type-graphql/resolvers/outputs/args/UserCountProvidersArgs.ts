import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderWhereInput } from "../../inputs/ProviderWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountProvidersArgs {
  @TypeGraphQL.Field(_type => ProviderWhereInput, {
    nullable: true
  })
  where?: ProviderWhereInput | undefined;
}
