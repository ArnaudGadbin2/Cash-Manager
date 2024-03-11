import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCartRowsArgs } from "./args/FindUniqueCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class FindUniqueCartRowsResolver {
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
}
