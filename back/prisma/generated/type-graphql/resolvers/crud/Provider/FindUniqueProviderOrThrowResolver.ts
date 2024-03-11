import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProviderOrThrowArgs } from "./args/FindUniqueProviderOrThrowArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class FindUniqueProviderOrThrowResolver {
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
}
