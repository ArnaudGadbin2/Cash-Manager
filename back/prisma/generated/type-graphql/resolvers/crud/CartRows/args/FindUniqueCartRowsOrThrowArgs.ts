import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsWhereUniqueInput } from "../../../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCartRowsOrThrowArgs {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;
}
