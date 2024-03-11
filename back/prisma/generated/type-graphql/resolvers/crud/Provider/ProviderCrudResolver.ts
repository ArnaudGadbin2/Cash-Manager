import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProviderArgs } from "./args/AggregateProviderArgs";
import { CreateManyProviderArgs } from "./args/CreateManyProviderArgs";
import { CreateOneProviderArgs } from "./args/CreateOneProviderArgs";
import { DeleteManyProviderArgs } from "./args/DeleteManyProviderArgs";
import { DeleteOneProviderArgs } from "./args/DeleteOneProviderArgs";
import { FindFirstProviderArgs } from "./args/FindFirstProviderArgs";
import { FindFirstProviderOrThrowArgs } from "./args/FindFirstProviderOrThrowArgs";
import { FindManyProviderArgs } from "./args/FindManyProviderArgs";
import { FindUniqueProviderArgs } from "./args/FindUniqueProviderArgs";
import { FindUniqueProviderOrThrowArgs } from "./args/FindUniqueProviderOrThrowArgs";
import { GroupByProviderArgs } from "./args/GroupByProviderArgs";
import { UpdateManyProviderArgs } from "./args/UpdateManyProviderArgs";
import { UpdateOneProviderArgs } from "./args/UpdateOneProviderArgs";
import { UpsertOneProviderArgs } from "./args/UpsertOneProviderArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";
import { Provider } from "../../../models/Provider";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProvider } from "../../outputs/AggregateProvider";
import { ProviderGroupBy } from "../../outputs/ProviderGroupBy";

@TypeGraphQL.Resolver(_of => Provider)
export class ProviderCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateProvider, {
    nullable: false
  })
  async aggregateProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProviderArgs): Promise<AggregateProvider> {
    await onIntercept('Provider', 'aggregateProvider', 'onBefore', 'aggregate', ctx, args)
    const result = getPrismaFromContext(ctx).provider.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    await onIntercept('Provider', 'aggregateProvider', 'onAfter', 'aggregate', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProviderArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'createManyProvider', 'onBefore', 'createMany', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'createManyProvider', 'onAfter', 'createMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: false
  })
  async createOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProviderArgs): Promise<Provider> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'createOneProvider', 'onBefore', 'create', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'createOneProvider', 'onAfter', 'create', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProviderArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'deleteManyProvider', 'onBefore', 'deleteMany', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'deleteManyProvider', 'onAfter', 'deleteMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: true
  })
  async deleteOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'deleteOneProvider', 'onBefore', 'delete', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'deleteOneProvider', 'onAfter', 'delete', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Provider, {
    nullable: true
  })
  async findFirstProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'findFirstProvider', 'onBefore', 'findFirst', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'findFirstProvider', 'onAfter', 'findFirst', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Provider, {
    nullable: true
  })
  async findFirstProviderOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProviderOrThrowArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'findFirstProviderOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'findFirstProviderOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => [Provider], {
    nullable: false
  })
  async providers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProviderArgs): Promise<Provider[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'providers', 'onBefore', 'findMany', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'providers', 'onAfter', 'findMany', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Provider, {
    nullable: true
  })
  async provider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'provider', 'onBefore', 'findUnique', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'provider', 'onAfter', 'findUnique', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Provider, {
    nullable: true
  })
  async getProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProviderOrThrowArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'getProvider', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'getProvider', 'onAfter', 'findUniqueOrThrow', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => [ProviderGroupBy], {
    nullable: false
  })
  async groupByProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProviderArgs): Promise<ProviderGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'groupByProvider', 'onBefore', 'groupBy', ctx, args)
    const result = getPrismaFromContext(ctx).provider.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    await onIntercept('Provider', 'groupByProvider', 'onAfter', 'groupBy', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProviderArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'updateManyProvider', 'onBefore', 'updateMany', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'updateManyProvider', 'onAfter', 'updateMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: true
  })
  async updateOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'updateOneProvider', 'onBefore', 'update', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'updateOneProvider', 'onAfter', 'update', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: false
  })
  async upsertOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProviderArgs): Promise<Provider> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'upsertOneProvider', 'onBefore', 'upsert', ctx, args)
    const result = await getPrismaFromContext(ctx).provider.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Provider', 'upsertOneProvider', 'onAfter', 'upsert', ctx, args)
    return result
  }
}
