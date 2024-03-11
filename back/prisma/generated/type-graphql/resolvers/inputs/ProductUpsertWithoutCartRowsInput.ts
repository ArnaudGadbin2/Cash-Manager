import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCartRowsInput } from "../inputs/ProductCreateWithoutCartRowsInput";
import { ProductUpdateWithoutCartRowsInput } from "../inputs/ProductUpdateWithoutCartRowsInput";

@TypeGraphQL.InputType("ProductUpsertWithoutCartRowsInput", {})
export class ProductUpsertWithoutCartRowsInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutCartRowsInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutCartRowsInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCartRowsInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCartRowsInput;
}
