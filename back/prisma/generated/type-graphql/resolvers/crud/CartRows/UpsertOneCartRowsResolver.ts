import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCartRowsArgs } from "./args/UpsertOneCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class UpsertOneCartRowsResolver {
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
