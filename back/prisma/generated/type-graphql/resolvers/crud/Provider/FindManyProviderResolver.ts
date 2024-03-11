import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyProviderArgs } from "./args/FindManyProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class FindManyProviderResolver {
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
}
