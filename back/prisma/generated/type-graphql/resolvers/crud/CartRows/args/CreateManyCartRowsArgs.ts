import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsCreateManyInput } from "../../../inputs/CartRowsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCartRowsArgs {
  @TypeGraphQL.Field(_type => [CartRowsCreateManyInput], {
    nullable: false
  })
  data!: CartRowsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
