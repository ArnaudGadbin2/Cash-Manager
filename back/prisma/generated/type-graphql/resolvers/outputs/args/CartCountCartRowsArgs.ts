import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsWhereInput } from "../../inputs/CartRowsWhereInput";

@TypeGraphQL.ArgsType()
export class CartCountCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  where?: CartRowsWhereInput | undefined;
}
