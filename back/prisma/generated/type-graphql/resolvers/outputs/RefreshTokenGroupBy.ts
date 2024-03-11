import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenCountAggregate } from "../outputs/RefreshTokenCountAggregate";
import { RefreshTokenMaxAggregate } from "../outputs/RefreshTokenMaxAggregate";
import { RefreshTokenMinAggregate } from "../outputs/RefreshTokenMinAggregate";

@TypeGraphQL.ObjectType("RefreshTokenGroupBy", {})
export class RefreshTokenGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userEmail!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresUtc!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  issuedUtc!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => RefreshTokenCountAggregate, {
    nullable: true
  })
  _count!: RefreshTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => RefreshTokenMinAggregate, {
    nullable: true
  })
  _min!: RefreshTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => RefreshTokenMaxAggregate, {
    nullable: true
  })
  _max!: RefreshTokenMaxAggregate | null;
}
