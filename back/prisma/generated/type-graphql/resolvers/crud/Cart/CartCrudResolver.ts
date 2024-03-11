import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCartArgs } from "./args/AggregateCartArgs";
import { CreateManyCartArgs } from "./args/CreateManyCartArgs";
import { CreateOneCartArgs } from "./args/CreateOneCartArgs";
import { DeleteManyCartArgs } from "./args/DeleteManyCartArgs";
import { DeleteOneCartArgs } from "./args/DeleteOneCartArgs";
import { FindFirstCartArgs } from "./args/FindFirstCartArgs";
import { FindFirstCartOrThrowArgs } from "./args/FindFirstCartOrThrowArgs";
import { FindManyCartArgs } from "./args/FindManyCartArgs";
import { FindUniqueCartArgs } from "./args/FindUniqueCartArgs";
import { FindUniqueCartOrThrowArgs } from "./args/FindUniqueCartOrThrowArgs";
import { GroupByCartArgs } from "./args/GroupByCartArgs";
import { UpdateManyCartArgs } from "./args/UpdateManyCartArgs";
import { UpdateOneCartArgs } from "./args/UpdateOneCartArgs";
import { UpsertOneCartArgs } from "./args/UpsertOneCartArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";
import { Cart } from "../../../models/Cart";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCart } from "../../outputs/AggregateCart";
import { CartGroupBy } from "../../outputs/CartGroupBy";

@TypeGraphQL.Resolver(_of => Cart)
export class CartCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCart, {
    nullable: false
  })
  async aggregateCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCartArgs): Promise<AggregateCart> {
    await onIntercept('Cart', 'aggregateCart', 'onBefore', 'aggregate', ctx, args)
    const result = getPrismaFromContext(ctx).cart.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    await onIntercept('Cart', 'aggregateCart', 'onAfter', 'aggregate', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCartArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'createManyCart', 'onBefore', 'createMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'createManyCart', 'onAfter', 'createMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: false
  })
  async createOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCartArgs): Promise<Cart> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'createOneCart', 'onBefore', 'create', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'createOneCart', 'onAfter', 'create', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCartArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'deleteManyCart', 'onBefore', 'deleteMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'deleteManyCart', 'onAfter', 'deleteMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: true
  })
  async deleteOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'deleteOneCart', 'onBefore', 'delete', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'deleteOneCart', 'onAfter', 'delete', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async findFirstCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'findFirstCart', 'onBefore', 'findFirst', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'findFirstCart', 'onAfter', 'findFirst', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async findFirstCartOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartOrThrowArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'findFirstCartOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'findFirstCartOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => [Cart], {
    nullable: false
  })
  async carts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCartArgs): Promise<Cart[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'carts', 'onBefore', 'findMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'carts', 'onAfter', 'findMany', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async cart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'cart', 'onBefore', 'findUnique', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'cart', 'onAfter', 'findUnique', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async getCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCartOrThrowArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'getCart', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'getCart', 'onAfter', 'findUniqueOrThrow', ctx, args)
    return result
  }

  @TypeGraphQL.Query(_returns => [CartGroupBy], {
    nullable: false
  })
  async groupByCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCartArgs): Promise<CartGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'groupByCart', 'onBefore', 'groupBy', ctx, args)
    const result = getPrismaFromContext(ctx).cart.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    await onIntercept('Cart', 'groupByCart', 'onAfter', 'groupBy', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCartArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'updateManyCart', 'onBefore', 'updateMany', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'updateManyCart', 'onAfter', 'updateMany', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: true
  })
  async updateOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'updateOneCart', 'onBefore', 'update', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'updateOneCart', 'onAfter', 'update', ctx, args)
    return result
  }

  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: false
  })
  async upsertOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCartArgs): Promise<Cart> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'upsertOneCart', 'onBefore', 'upsert', ctx, args)
    const result = await getPrismaFromContext(ctx).cart.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    await onIntercept('Cart', 'upsertOneCart', 'onAfter', 'upsert', ctx, args)
    return result
  }
}
