import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCartRowsArgs } from "./args/CreateOneCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class CreateOneCartRowsResolver {
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
}
