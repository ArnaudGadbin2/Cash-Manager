import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountCartsArgs } from "./args/UserCountCartsArgs";
import { UserCountProvidersArgs } from "./args/UserCountProvidersArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  carts!: number;
  providers!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "carts",
    nullable: false
  })
  getCarts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCartsArgs): number {
    return root.carts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "providers",
    nullable: false
  })
  getProviders(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountProvidersArgs): number {
    return root.providers;
  }
}
