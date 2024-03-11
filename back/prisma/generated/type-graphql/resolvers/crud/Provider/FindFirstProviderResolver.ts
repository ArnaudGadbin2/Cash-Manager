import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProviderArgs } from "./args/FindFirstProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class FindFirstProviderResolver {
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
}
