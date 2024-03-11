import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartWhereInput } from "../../inputs/CartWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountCartsArgs {
  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  where?: CartWhereInput | undefined;
}
