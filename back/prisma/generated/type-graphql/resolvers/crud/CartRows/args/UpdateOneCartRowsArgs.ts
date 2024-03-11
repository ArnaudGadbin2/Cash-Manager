import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsUpdateInput } from "../../../inputs/CartRowsUpdateInput";
import { CartRowsWhereUniqueInput } from "../../../inputs/CartRowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsUpdateInput, {
    nullable: false
  })
  data!: CartRowsUpdateInput;

  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: false
  })
  where!: CartRowsWhereUniqueInput;
}
