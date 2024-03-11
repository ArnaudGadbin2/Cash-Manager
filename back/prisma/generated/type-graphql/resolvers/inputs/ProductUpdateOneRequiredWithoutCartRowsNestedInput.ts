import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCartRowsInput } from "../inputs/ProductCreateOrConnectWithoutCartRowsInput";
import { ProductCreateWithoutCartRowsInput } from "../inputs/ProductCreateWithoutCartRowsInput";
import { ProductUpdateWithoutCartRowsInput } from "../inputs/ProductUpdateWithoutCartRowsInput";
import { ProductUpsertWithoutCartRowsInput } from "../inputs/ProductUpsertWithoutCartRowsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutCartRowsNestedInput", {})
export class ProductUpdateOneRequiredWithoutCartRowsNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCartRowsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCartRowsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutCartRowsInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCartRowsInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutCartRowsInput | undefined;
}
