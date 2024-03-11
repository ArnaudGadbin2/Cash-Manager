import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProviderOrThrowArgs } from "./args/FindFirstProviderOrThrowArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class FindFirstProviderOrThrowResolver {
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
}
