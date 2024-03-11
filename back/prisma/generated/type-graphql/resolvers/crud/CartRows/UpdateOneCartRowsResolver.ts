import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCartRowsArgs } from "./args/UpdateOneCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class UpdateOneCartRowsResolver {
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
}
