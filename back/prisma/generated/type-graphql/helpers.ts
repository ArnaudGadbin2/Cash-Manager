import type { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { isArray } from "lodash";

export function transformInfoIntoPrismaArgs(info: GraphQLResolveInfo): Record<string, any> {
  const fields: Record<string, any> = graphqlFields(
    // suppress GraphQLResolveInfo types issue
    info as any,
    {},
    {
      excludedFields: ['__typename'],
      processArguments: true,
    }
  );
  return transformFields(fields);
}

function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        if ("__arguments" in value) {
          return [key, Object.fromEntries(
            value.__arguments.map((argument: object) => {
              const [[key, { value }]] = Object.entries(argument);
              return [key, value];
            })
          )];
        }
        return [key, transformFields(value)];
      }),
  );
}

export function getPrismaFromContext(context: any) {
  const prismaClient = context["prisma"];
  if (!prismaClient) {
    throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the `context[\"prisma\"]` key.");
  }
  return prismaClient;
}

export function transformCountFieldIntoSelectRelationsCount(_count: object) {
  return {
    include: {
      _count: {
        select: {
          ...Object.fromEntries(
            Object.entries(_count).filter(([_, v]) => v != null)
          ),
        }
      },
    },
  }
}

export const allQueryNames = ["groupBy", "aggregate", "findUniqueOrThrow", "findUnique", "findMany", "findFirst", "findFirstOrThrow"] as const;
export const allMutationNames = ["create", "createMany", "update", "updateMany", "delete", "deleteMany", "upsert"] as const;
export type MutationInterceptorOperation = (typeof allMutationNames)[number]
export type QueryInterceptorOperation = (typeof allQueryNames)[number]

export type MutationInterceptor = {
  onBefore?: (ctx: any, args: any, crudResolver: string, isQuery: boolean, operation: MutationInterceptorOperation | QueryInterceptorOperation) => void | Promise<void>
  onAfter?: (ctx: any, args: any, crudResolver: string, isQuery: boolean, operation: MutationInterceptorOperation | QueryInterceptorOperation) => void | Promise<void>
}

export const _resolversInterceptors = {}

export async function onIntercept(
  modelName: string,
  crudResolver: string,
  method: 'onBefore' | 'onAfter',
  operation: MutationInterceptorOperation | QueryInterceptorOperation,
  ctx: any,
  args: any
) {
  const interceptor = _resolversInterceptors[modelName]
  if (interceptor) {
    const isQuery = allQueryNames.includes(operation as any)
    if (interceptor._all) {
      const globalInterceptorFunction = interceptor._all[method]
      if (globalInterceptorFunction) {
        if (isArray(args)) {
          await Promise.all(args.map(i => globalInterceptorFunction(ctx, i, crudResolver, isQuery, operation)))
        } else {
          await globalInterceptorFunction(ctx, args, isQuery, operation)
        }
      }
    }
    const interceptorFunction = interceptor[crudResolver] && interceptor[crudResolver][method]
    if (interceptorFunction) {
      if (isArray(args)) {
        await Promise.all(args.map(i => interceptorFunction(ctx, i, crudResolver, isQuery, operation)))
      } else {
        await interceptorFunction(ctx, args, crudResolver, isQuery, operation)
      }
    }
  }
}





