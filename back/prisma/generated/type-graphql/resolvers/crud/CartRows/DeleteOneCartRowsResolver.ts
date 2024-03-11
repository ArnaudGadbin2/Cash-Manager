import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCartRowsArgs } from "./args/DeleteOneCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class DeleteOneCartRowsResolver {
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
}
