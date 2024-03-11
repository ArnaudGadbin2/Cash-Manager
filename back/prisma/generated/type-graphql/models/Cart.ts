import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CartRows } from "../models/CartRows";
import { User } from "../models/User";
import { CartCount } from "../resolvers/outputs/CartCount";

@TypeGraphQL.ObjectType("Cart", {})
export class Cart {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  totalPrice!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cartStatus!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  refusalCount!: number;

  cartRows?: CartRows[];

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | null;

  @TypeGraphQL.Field(_type => CartCount, {
    nullable: true
  })
  _count?: CartCount | null;
}
