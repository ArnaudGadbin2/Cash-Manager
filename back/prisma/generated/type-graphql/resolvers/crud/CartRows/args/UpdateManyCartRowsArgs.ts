import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsUpdateManyMutationInput } from "../../../inputs/CartRowsUpdateManyMutationInput";
import { CartRowsWhereInput } from "../../../inputs/CartRowsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CartRowsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  where?: CartRowsWhereInput | undefined;
}
