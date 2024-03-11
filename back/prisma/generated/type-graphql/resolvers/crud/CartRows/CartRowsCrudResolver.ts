import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCartRowsArgs } from "./args/AggregateCartRowsArgs";
import { CreateManyCartRowsArgs } from "./args/CreateManyCartRowsArgs";
import { CreateOneCartRowsArgs } from "./args/CreateOneCartRowsArgs";
import { DeleteManyCartRowsArgs } from "./args/DeleteManyCartRowsArgs";
import { DeleteOneCartRowsArgs } from "./args/DeleteOneCartRowsArgs";
import { FindFirstCartRowsArgs } from "./args/FindFirstCartRowsArgs";
import { FindFirstCartRowsOrThrowArgs } from "./args/FindFirstCartRowsOrThrowArgs";
import { FindManyCartRowsArgs } from "./args/FindManyCartRowsArgs";
import { FindUniqueCartRowsArgs } from "./args/FindUniqueCartRowsArgs";
import { FindUniqueCartRowsOrThrowArgs } from "./args/FindUniqueCartRowsOrThrowArgs";
import { GroupByCartRowsArgs } from "./args/GroupByCartRowsArgs";
import { UpdateManyCartRowsArgs } from "./args/UpdateManyCartRowsArgs";
import { UpdateOneCartRowsArgs } from "./args/UpdateOneCartRowsArgs";
import { UpsertOneCartRowsArgs } from "./args/UpsertOneCartRowsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";
import { CartRows } from "../../../models/CartRows";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCartRows } from "../../outputs/AggregateCartRows";
import { CartRowsGroupBy } from "../../outputs/CartRowsGroupBy";

@TypeGraphQL.Resolver(_of => CartRows)
export class CartRowsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCartRows, {
    nullable: false
  })
  async aggregateCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCartRowsArgs): Promise<AggregateCartRows> {
    await onIntercept('CartRows', 'aggregateCartRows', 'onBefore', 'aggregate', ctx, args)
    const result = getPrismaFromContext(ctx).cartRows.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    await onIntercept('CartRows', 'aggregateCartRows', 'onAfter', 'aggregate', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCartRowsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'createManyCartRows', 'onBefore', 'createMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'createManyCartRows', 'onAfter', 'createMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => CartRows, {
    nullable: false
  })
  async createOneCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCartRowsArgs): Promise<CartRows> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'createOneCartRows', 'onBefore', 'create', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'createOneCartRows', 'onAfter', 'create', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCartRowsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'deleteManyCartRows', 'onBefore', 'deleteMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'deleteManyCartRows', 'onAfter', 'deleteMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => CartRows, {
    nullable: true
  })
  async deleteOneCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCartRowsArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'deleteOneCartRows', 'onBefore', 'delete', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'deleteOneCartRows', 'onAfter', 'delete', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => CartRows, {
    nullable: true
  })
  async findFirstCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartRowsArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findFirstCartRows', 'onBefore', 'findFirst', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'findFirstCartRows', 'onAfter', 'findFirst', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => CartRows, {
    nullable: true
  })
  async findFirstCartRowsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartRowsOrThrowArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findFirstCartRowsOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'findFirstCartRowsOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => [CartRows], {
    nullable: false
  })
  async findManyCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCartRowsArgs): Promise<CartRows[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findManyCartRows', 'onBefore', 'findMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'findManyCartRows', 'onAfter', 'findMany', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => CartRows, {
    nullable: true
  })
  async findUniqueCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCartRowsArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findUniqueCartRows', 'onBefore', 'findUnique', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'findUniqueCartRows', 'onAfter', 'findUnique', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => CartRows, {
    nullable: true
  })
  async findUniqueCartRowsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCartRowsOrThrowArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findUniqueCartRowsOrThrow', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'findUniqueCartRowsOrThrow', 'onAfter', 'findUniqueOrThrow', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => [CartRowsGroupBy], {
    nullable: false
  })
  async groupByCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCartRowsArgs): Promise<CartRowsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'groupByCartRows', 'onBefore', 'groupBy', ctx, args)
    const result = getPrismaFromContext(ctx).cartRows.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    await onIntercept('CartRows', 'groupByCartRows', 'onAfter', 'groupBy', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCartRowsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'updateManyCartRows', 'onBefore', 'updateMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'updateManyCartRows', 'onAfter', 'updateMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => CartRows, {
    nullable: true
  })
  async updateOneCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCartRowsArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'updateOneCartRows', 'onBefore', 'update', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'updateOneCartRows', 'onAfter', 'update', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => CartRows, {
    nullable: false
  })
  async upsertOneCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCartRowsArgs): Promise<CartRows> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'upsertOneCartRows', 'onBefore', 'upsert', ctx, args)
    const result = await getPrismaFromContext(ctx).cartRows.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('CartRows', 'upsertOneCartRows', 'onAfter', 'upsert', ctx, args)
    return result
  }
}
