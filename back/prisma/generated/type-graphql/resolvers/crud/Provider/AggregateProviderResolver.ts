import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProviderArgs } from "./args/AggregateProviderArgs";
import { Provider } from "../../../models/Provider";
import { AggregateProvider } from "../../outputs/AggregateProvider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class AggregateProviderResolver {
  @TypeGraphQL.Query(_returns => AggregateProvider, {
    nullable: false
  })
  async aggregateProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProviderArgs): Promise<AggregateProvider> {
    await onIntercept('Provider', 'aggregateProvider', 'onBefore', 'aggregate', ctx, args)
    const result = getPrismaFromContext(ctx).provider.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    await onIntercept('Provider', 'aggregateProvider', 'onAfter', 'aggregate', ctx, args)
    return result
  }
}
