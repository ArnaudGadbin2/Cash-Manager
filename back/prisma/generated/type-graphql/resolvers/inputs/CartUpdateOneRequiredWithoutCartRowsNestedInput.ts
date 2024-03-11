import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateOrConnectWithoutCartRowsInput } from "../inputs/CartCreateOrConnectWithoutCartRowsInput";
import { CartCreateWithoutCartRowsInput } from "../inputs/CartCreateWithoutCartRowsInput";
import { CartUpdateWithoutCartRowsInput } from "../inputs/CartUpdateWithoutCartRowsInput";
import { CartUpsertWithoutCartRowsInput } from "../inputs/CartUpsertWithoutCartRowsInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateOneRequiredWithoutCartRowsNestedInput", {})
export class CartUpdateOneRequiredWithoutCartRowsNestedInput {
  @TypeGraphQL.Field(_type => CartCreateWithoutCartRowsInput, {
    nullable: true
  })
  create?: CartCreateWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => CartCreateOrConnectWithoutCartRowsInput, {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => CartUpsertWithoutCartRowsInput, {
    nullable: true
  })
  upsert?: CartUpsertWithoutCartRowsInput | undefined;

  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: true
  })
  connect?: CartWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CartUpdateWithoutCartRowsInput, {
    nullable: true
  })
  update?: CartUpdateWithoutCartRowsInput | undefined;
}
