import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsCreateInput } from "../../../inputs/CartRowsCreateInput";
import { CartRowsUpdateInput } from "../../../inputs/CartRowsUpdateInput";
import { CartRowsWhereUniqueInput } from "../../../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartRowsCreateInput, {
    nullable: false
  })
  create!: CartRowsCreateInput;

  @TypeGraphQL.Field(_type => CartRowsUpdateInput, {
    nullable: false
  })
  update!: CartRowsUpdateInput;
}
