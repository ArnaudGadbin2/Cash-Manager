import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartOrderByWithRelationInput } from "../../../inputs/CartOrderByWithRelationInput";
import { CartWhereInput } from "../../../inputs/CartWhereInput";
import { CartWhereUniqueInput } from "../../../inputs/CartWhereUniqueInput";
import { CartScalarFieldEnum } from "../../../../enums/CartScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserCartsArgs {
  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  where?: CartWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CartOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: true
  })
  cursor?: CartWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CartScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "totalPrice" | "cartStatus" | "refusalCount" | "userId" | "createdBy" | "modifiedBy" | "createdAt" | "modifiedAt"> | undefined;
}
