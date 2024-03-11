import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsCreateInput } from "../../../inputs/CartRowsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsCreateInput, {
    nullable: false
  })
  data!: CartRowsCreateInput;
}
