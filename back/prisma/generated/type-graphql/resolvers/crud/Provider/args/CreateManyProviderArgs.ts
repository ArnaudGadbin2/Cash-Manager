import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProviderCreateManyInput } from "../../../inputs/ProviderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProviderArgs {
  @TypeGraphQL.Field(_type => [ProviderCreateManyInput], {
    nullable: false
  })
  data!: ProviderCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
