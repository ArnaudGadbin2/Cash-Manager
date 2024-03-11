import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartRowsOrderByWithRelationInput } from "../../../inputs/CartRowsOrderByWithRelationInput";
import { CartRowsWhereInput } from "../../../inputs/CartRowsWhereInput";
import { CartRowsWhereUniqueInput } from "../../../inputs/CartRowsWhereUniqueInput";
import { CartRowsScalarFieldEnum } from "../../../../enums/CartRowsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCartRowsArgs {
  @TypeGraphQL.Field(_type => CartRowsWhereInput, {
    nullable: true
  })
  where?: CartRowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartRowsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CartRowsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CartRowsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CartRowsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CartRowsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "rowPrice" | "quantity" | "cartId" | "productId" | "createdBy" | "modifiedBy" | "createdAt" | "modifiedAt"> | undefined;
}
