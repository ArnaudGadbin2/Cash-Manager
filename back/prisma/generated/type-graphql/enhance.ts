import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import { MutationInterceptor, _resolversInterceptors } from "./helpers";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  RefreshToken: crudResolvers.RefreshTokenCrudResolver,
  Provider: crudResolvers.ProviderCrudResolver,
  Cart: crudResolvers.CartCrudResolver,
  CartRows: crudResolvers.CartRowsCrudResolver,
  Product: crudResolvers.ProductCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  RefreshToken: {
    aggregateRefreshToken: actionResolvers.AggregateRefreshTokenResolver,
    createManyRefreshToken: actionResolvers.CreateManyRefreshTokenResolver,
    createOneRefreshToken: actionResolvers.CreateOneRefreshTokenResolver,
    deleteManyRefreshToken: actionResolvers.DeleteManyRefreshTokenResolver,
    deleteOneRefreshToken: actionResolvers.DeleteOneRefreshTokenResolver,
    findFirstRefreshToken: actionResolvers.FindFirstRefreshTokenResolver,
    findFirstRefreshTokenOrThrow: actionResolvers.FindFirstRefreshTokenOrThrowResolver,
    refreshTokens: actionResolvers.FindManyRefreshTokenResolver,
    refreshToken: actionResolvers.FindUniqueRefreshTokenResolver,
    getRefreshToken: actionResolvers.FindUniqueRefreshTokenOrThrowResolver,
    groupByRefreshToken: actionResolvers.GroupByRefreshTokenResolver,
    updateManyRefreshToken: actionResolvers.UpdateManyRefreshTokenResolver,
    updateOneRefreshToken: actionResolvers.UpdateOneRefreshTokenResolver,
    upsertOneRefreshToken: actionResolvers.UpsertOneRefreshTokenResolver
  },
  Provider: {
    aggregateProvider: actionResolvers.AggregateProviderResolver,
    createManyProvider: actionResolvers.CreateManyProviderResolver,
    createOneProvider: actionResolvers.CreateOneProviderResolver,
    deleteManyProvider: actionResolvers.DeleteManyProviderResolver,
    deleteOneProvider: actionResolvers.DeleteOneProviderResolver,
    findFirstProvider: actionResolvers.FindFirstProviderResolver,
    findFirstProviderOrThrow: actionResolvers.FindFirstProviderOrThrowResolver,
    providers: actionResolvers.FindManyProviderResolver,
    provider: actionResolvers.FindUniqueProviderResolver,
    getProvider: actionResolvers.FindUniqueProviderOrThrowResolver,
    groupByProvider: actionResolvers.GroupByProviderResolver,
    updateManyProvider: actionResolvers.UpdateManyProviderResolver,
    updateOneProvider: actionResolvers.UpdateOneProviderResolver,
    upsertOneProvider: actionResolvers.UpsertOneProviderResolver
  },
  Cart: {
    aggregateCart: actionResolvers.AggregateCartResolver,
    createManyCart: actionResolvers.CreateManyCartResolver,
    createOneCart: actionResolvers.CreateOneCartResolver,
    deleteManyCart: actionResolvers.DeleteManyCartResolver,
    deleteOneCart: actionResolvers.DeleteOneCartResolver,
    findFirstCart: actionResolvers.FindFirstCartResolver,
    findFirstCartOrThrow: actionResolvers.FindFirstCartOrThrowResolver,
    carts: actionResolvers.FindManyCartResolver,
    cart: actionResolvers.FindUniqueCartResolver,
    getCart: actionResolvers.FindUniqueCartOrThrowResolver,
    groupByCart: actionResolvers.GroupByCartResolver,
    updateManyCart: actionResolvers.UpdateManyCartResolver,
    updateOneCart: actionResolvers.UpdateOneCartResolver,
    upsertOneCart: actionResolvers.UpsertOneCartResolver
  },
  CartRows: {
    aggregateCartRows: actionResolvers.AggregateCartRowsResolver,
    createManyCartRows: actionResolvers.CreateManyCartRowsResolver,
    createOneCartRows: actionResolvers.CreateOneCartRowsResolver,
    deleteManyCartRows: actionResolvers.DeleteManyCartRowsResolver,
    deleteOneCartRows: actionResolvers.DeleteOneCartRowsResolver,
    findFirstCartRows: actionResolvers.FindFirstCartRowsResolver,
    findFirstCartRowsOrThrow: actionResolvers.FindFirstCartRowsOrThrowResolver,
    findManyCartRows: actionResolvers.FindManyCartRowsResolver,
    findUniqueCartRows: actionResolvers.FindUniqueCartRowsResolver,
    findUniqueCartRowsOrThrow: actionResolvers.FindUniqueCartRowsOrThrowResolver,
    groupByCartRows: actionResolvers.GroupByCartRowsResolver,
    updateManyCartRows: actionResolvers.UpdateManyCartRowsResolver,
    updateOneCartRows: actionResolvers.UpdateOneCartRowsResolver,
    upsertOneCartRows: actionResolvers.UpsertOneCartRowsResolver
  },
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  RefreshToken: ["aggregateRefreshToken", "createManyRefreshToken", "createOneRefreshToken", "deleteManyRefreshToken", "deleteOneRefreshToken", "findFirstRefreshToken", "findFirstRefreshTokenOrThrow", "refreshTokens", "refreshToken", "getRefreshToken", "groupByRefreshToken", "updateManyRefreshToken", "updateOneRefreshToken", "upsertOneRefreshToken"],
  Provider: ["aggregateProvider", "createManyProvider", "createOneProvider", "deleteManyProvider", "deleteOneProvider", "findFirstProvider", "findFirstProviderOrThrow", "providers", "provider", "getProvider", "groupByProvider", "updateManyProvider", "updateOneProvider", "upsertOneProvider"],
  Cart: ["aggregateCart", "createManyCart", "createOneCart", "deleteManyCart", "deleteOneCart", "findFirstCart", "findFirstCartOrThrow", "carts", "cart", "getCart", "groupByCart", "updateManyCart", "updateOneCart", "upsertOneCart"],
  CartRows: ["aggregateCartRows", "createManyCartRows", "createOneCartRows", "deleteManyCartRows", "deleteOneCartRows", "findFirstCartRows", "findFirstCartRowsOrThrow", "findManyCartRows", "findUniqueCartRows", "findUniqueCartRowsOrThrow", "groupByCartRows", "updateManyCartRows", "updateOneCartRows", "upsertOneCartRows"],
  Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRefreshTokenArgs: ["data", "skipDuplicates"],
  CreateOneRefreshTokenArgs: ["data"],
  DeleteManyRefreshTokenArgs: ["where"],
  DeleteOneRefreshTokenArgs: ["where"],
  FindFirstRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRefreshTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRefreshTokenArgs: ["where"],
  FindUniqueRefreshTokenOrThrowArgs: ["where"],
  GroupByRefreshTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRefreshTokenArgs: ["data", "where"],
  UpdateOneRefreshTokenArgs: ["data", "where"],
  UpsertOneRefreshTokenArgs: ["where", "create", "update"],
  AggregateProviderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProviderArgs: ["data", "skipDuplicates"],
  CreateOneProviderArgs: ["data"],
  DeleteManyProviderArgs: ["where"],
  DeleteOneProviderArgs: ["where"],
  FindFirstProviderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProviderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProviderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProviderArgs: ["where"],
  FindUniqueProviderOrThrowArgs: ["where"],
  GroupByProviderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProviderArgs: ["data", "where"],
  UpdateOneProviderArgs: ["data", "where"],
  UpsertOneProviderArgs: ["where", "create", "update"],
  AggregateCartArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCartArgs: ["data", "skipDuplicates"],
  CreateOneCartArgs: ["data"],
  DeleteManyCartArgs: ["where"],
  DeleteOneCartArgs: ["where"],
  FindFirstCartArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCartOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCartArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCartArgs: ["where"],
  FindUniqueCartOrThrowArgs: ["where"],
  GroupByCartArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCartArgs: ["data", "where"],
  UpdateOneCartArgs: ["data", "where"],
  UpsertOneCartArgs: ["where", "create", "update"],
  AggregateCartRowsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCartRowsArgs: ["data", "skipDuplicates"],
  CreateOneCartRowsArgs: ["data"],
  DeleteManyCartRowsArgs: ["where"],
  DeleteOneCartRowsArgs: ["where"],
  FindFirstCartRowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCartRowsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCartRowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCartRowsArgs: ["where"],
  FindUniqueCartRowsOrThrowArgs: ["where"],
  GroupByCartRowsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCartRowsArgs: ["data", "where"],
  UpdateOneCartRowsArgs: ["data", "where"],
  UpsertOneCartRowsArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  CreateOneProductArgs: ["data"],
  DeleteManyProductArgs: ["where"],
  DeleteOneProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductArgs: ["where"],
  FindUniqueProductOrThrowArgs: ["where"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductArgs: ["data", "where"],
  UpdateOneProductArgs: ["data", "where"],
  UpsertOneProductArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

export type ResolverInterceptor<TModel extends ResolverModelNames> = Partial<Record<ModelResolverActionNames<TModel>, MutationInterceptor>>
  & {
    _all?: MutationInterceptor
  };

export type ResolversInterceptors = {
  [TModel in ResolverModelNames]?: ResolverInterceptor<TModel>
};

export function applyResolversInterceptors(resolversInterceptors: ResolversInterceptors) {
  Object.assign(_resolversInterceptors, resolversInterceptors)
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  RefreshToken: relationResolvers.RefreshTokenRelationsResolver,
  Provider: relationResolvers.ProviderRelationsResolver,
  Cart: relationResolvers.CartRelationsResolver,
  CartRows: relationResolvers.CartRowsRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver
};
const relationResolversInfo = {
  User: ["carts", "providers", "refreshToken"],
  RefreshToken: ["user"],
  Provider: ["user"],
  Cart: ["cartRows", "user"],
  CartRows: ["cart", "product"],
  Product: ["cartRows"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  RefreshToken: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  Provider: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  Cart: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRows: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  Product: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "_count", "_min", "_max"],
  AggregateRefreshToken: ["_count", "_min", "_max"],
  RefreshTokenGroupBy: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId", "_count", "_min", "_max"],
  AggregateProvider: ["_count", "_min", "_max"],
  ProviderGroupBy: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId", "_count", "_min", "_max"],
  AggregateCart: ["_count", "_avg", "_sum", "_min", "_max"],
  CartGroupBy: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCartRows: ["_count", "_avg", "_sum", "_min", "_max"],
  CartRowsGroupBy: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["carts", "providers"],
  UserCountAggregate: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "_all"],
  UserMinAggregate: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  UserMaxAggregate: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  RefreshTokenCountAggregate: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId", "_all"],
  RefreshTokenMinAggregate: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  RefreshTokenMaxAggregate: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  ProviderCountAggregate: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId", "_all"],
  ProviderMinAggregate: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  ProviderMaxAggregate: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  CartCount: ["cartRows"],
  CartCountAggregate: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_all"],
  CartAvgAggregate: ["id", "totalPrice", "refusalCount"],
  CartSumAggregate: ["id", "totalPrice", "refusalCount"],
  CartMinAggregate: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartMaxAggregate: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsCountAggregate: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_all"],
  CartRowsAvgAggregate: ["id", "rowPrice", "quantity", "cartId", "productId"],
  CartRowsSumAggregate: ["id", "rowPrice", "quantity", "cartId", "productId"],
  CartRowsMinAggregate: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsMaxAggregate: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductCount: ["cartRows"],
  ProductCountAggregate: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_all"],
  ProductAvgAggregate: ["id", "price"],
  ProductSumAggregate: ["id", "price"],
  ProductMinAggregate: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductMaxAggregate: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "providers", "refreshToken"],
  UserOrderByWithRelationInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "providers", "refreshToken"],
  UserWhereUniqueInput: ["id", "email", "refreshTokenId"],
  UserOrderByWithAggregationInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  RefreshTokenWhereInput: ["AND", "OR", "NOT", "id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId", "user"],
  RefreshTokenOrderByWithRelationInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId", "user"],
  RefreshTokenWhereUniqueInput: ["id", "userEmail", "userId"],
  RefreshTokenOrderByWithAggregationInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId", "_count", "_max", "_min"],
  RefreshTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  ProviderWhereInput: ["AND", "OR", "NOT", "provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId", "user"],
  ProviderOrderByWithRelationInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId", "user"],
  ProviderWhereUniqueInput: ["provider_userId"],
  ProviderOrderByWithAggregationInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId", "_count", "_max", "_min"],
  ProviderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  CartWhereInput: ["AND", "OR", "NOT", "id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows", "user"],
  CartOrderByWithRelationInput: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows", "user"],
  CartWhereUniqueInput: ["id"],
  CartOrderByWithAggregationInput: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CartScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsWhereInput: ["AND", "OR", "NOT", "id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cart", "product"],
  CartRowsOrderByWithRelationInput: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cart", "product"],
  CartRowsWhereUniqueInput: ["id"],
  CartRowsOrderByWithAggregationInput: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CartRowsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows"],
  ProductOrderByWithRelationInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  UserCreateInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "providers", "refreshToken"],
  UserUpdateInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "providers", "refreshToken"],
  UserCreateManyInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  UserUpdateManyMutationInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  RefreshTokenCreateInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "user"],
  RefreshTokenUpdateInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "user"],
  RefreshTokenCreateManyInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  RefreshTokenUpdateManyMutationInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc"],
  ProviderCreateInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "user"],
  ProviderUpdateInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "user"],
  ProviderCreateManyInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  ProviderUpdateManyMutationInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt"],
  CartCreateInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows", "user"],
  CartUpdateInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows", "user"],
  CartCreateManyInput: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartUpdateManyMutationInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsCreateInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cart", "product"],
  CartRowsUpdateInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cart", "product"],
  CartRowsCreateManyInput: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsUpdateManyMutationInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductCreateInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows"],
  ProductUpdateInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows"],
  ProductCreateManyInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductUpdateManyMutationInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CartListRelationFilter: ["every", "some", "none"],
  ProviderListRelationFilter: ["every", "some", "none"],
  RefreshTokenRelationFilter: ["is", "isNot"],
  SortOrderInput: ["sort", "nulls"],
  CartOrderByRelationAggregateInput: ["_count"],
  ProviderOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  UserMaxOrderByAggregateInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  UserMinOrderByAggregateInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  RefreshTokenCountOrderByAggregateInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  RefreshTokenMaxOrderByAggregateInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  RefreshTokenMinOrderByAggregateInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc", "userId"],
  ProviderProviderUserIdCompoundUniqueInput: ["provider", "userId"],
  ProviderCountOrderByAggregateInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  ProviderMaxOrderByAggregateInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  ProviderMinOrderByAggregateInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CartRowsListRelationFilter: ["every", "some", "none"],
  CartRowsOrderByRelationAggregateInput: ["_count"],
  CartCountOrderByAggregateInput: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartAvgOrderByAggregateInput: ["id", "totalPrice", "refusalCount"],
  CartMaxOrderByAggregateInput: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartMinOrderByAggregateInput: ["id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartSumOrderByAggregateInput: ["id", "totalPrice", "refusalCount"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CartRelationFilter: ["is", "isNot"],
  ProductRelationFilter: ["is", "isNot"],
  CartRowsCountOrderByAggregateInput: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsAvgOrderByAggregateInput: ["id", "rowPrice", "quantity", "cartId", "productId"],
  CartRowsMaxOrderByAggregateInput: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsMinOrderByAggregateInput: ["id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsSumOrderByAggregateInput: ["id", "rowPrice", "quantity", "cartId", "productId"],
  ProductCountOrderByAggregateInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductAvgOrderByAggregateInput: ["id", "price"],
  ProductMaxOrderByAggregateInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductMinOrderByAggregateInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductSumOrderByAggregateInput: ["id", "price"],
  CartCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProviderCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  RefreshTokenCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  CartUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProviderUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RefreshTokenUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutRefreshTokenInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutRefreshTokenNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutProvidersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProvidersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CartRowsCreateNestedManyWithoutCartInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutCartsInput: ["create", "connectOrCreate", "connect"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CartRowsUpdateManyWithoutCartNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutCartsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CartCreateNestedOneWithoutCartRowsInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedOneWithoutCartRowsInput: ["create", "connectOrCreate", "connect"],
  CartUpdateOneRequiredWithoutCartRowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductUpdateOneRequiredWithoutCartRowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CartRowsCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  CartRowsUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CartCreateWithoutUserInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows"],
  CartCreateOrConnectWithoutUserInput: ["where", "create"],
  CartCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProviderCreateWithoutUserInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt"],
  ProviderCreateOrConnectWithoutUserInput: ["where", "create"],
  ProviderCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RefreshTokenCreateWithoutUserInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc"],
  RefreshTokenCreateOrConnectWithoutUserInput: ["where", "create"],
  CartUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CartUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CartUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CartScalarWhereInput: ["AND", "OR", "NOT", "id", "totalPrice", "cartStatus", "refusalCount", "userId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProviderUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ProviderUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ProviderUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ProviderScalarWhereInput: ["AND", "OR", "NOT", "provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userId"],
  RefreshTokenUpsertWithoutUserInput: ["update", "create"],
  RefreshTokenUpdateWithoutUserInput: ["id", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "userEmail", "refreshToken", "expiresUtc", "issuedUtc"],
  UserCreateWithoutRefreshTokenInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "providers"],
  UserCreateOrConnectWithoutRefreshTokenInput: ["where", "create"],
  UserUpsertWithoutRefreshTokenInput: ["update", "create"],
  UserUpdateWithoutRefreshTokenInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "providers"],
  UserCreateWithoutProvidersInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "refreshToken"],
  UserCreateOrConnectWithoutProvidersInput: ["where", "create"],
  UserUpsertWithoutProvidersInput: ["update", "create"],
  UserUpdateWithoutProvidersInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "carts", "refreshToken"],
  CartRowsCreateWithoutCartInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "product"],
  CartRowsCreateOrConnectWithoutCartInput: ["where", "create"],
  CartRowsCreateManyCartInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutCartsInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "providers", "refreshToken"],
  UserCreateOrConnectWithoutCartsInput: ["where", "create"],
  CartRowsUpsertWithWhereUniqueWithoutCartInput: ["where", "update", "create"],
  CartRowsUpdateWithWhereUniqueWithoutCartInput: ["where", "data"],
  CartRowsUpdateManyWithWhereWithoutCartInput: ["where", "data"],
  CartRowsScalarWhereInput: ["AND", "OR", "NOT", "id", "rowPrice", "quantity", "cartId", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  UserUpsertWithoutCartsInput: ["update", "create"],
  UserUpdateWithoutCartsInput: ["id", "email", "userName", "displayName", "imageUrl", "emailConfirmed", "accessTokenExpiresUtc", "accessToken", "password", "oneTimePassword", "state", "createdAt", "modifiedAt", "createdBy", "modifiedBy", "refreshTokenId", "providers", "refreshToken"],
  CartCreateWithoutCartRowsInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "user"],
  CartCreateOrConnectWithoutCartRowsInput: ["where", "create"],
  ProductCreateWithoutCartRowsInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProductCreateOrConnectWithoutCartRowsInput: ["where", "create"],
  CartUpsertWithoutCartRowsInput: ["update", "create"],
  CartUpdateWithoutCartRowsInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "user"],
  ProductUpsertWithoutCartRowsInput: ["update", "create"],
  ProductUpdateWithoutCartRowsInput: ["id", "title", "description", "photo", "price", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsCreateWithoutProductInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cart"],
  CartRowsCreateOrConnectWithoutProductInput: ["where", "create"],
  CartRowsCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  CartRowsUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  CartRowsUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  CartRowsUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  CartCreateManyUserInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  ProviderCreateManyUserInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt"],
  CartUpdateWithoutUserInput: ["id", "totalPrice", "cartStatus", "refusalCount", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cartRows"],
  ProviderUpdateWithoutUserInput: ["provider", "createdBy", "createdAt", "modifiedBy", "modifiedAt"],
  CartRowsCreateManyCartInput: ["id", "rowPrice", "quantity", "productId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsUpdateWithoutCartInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "product"],
  CartRowsCreateManyProductInput: ["id", "rowPrice", "quantity", "cartId", "createdBy", "modifiedBy", "createdAt", "modifiedAt"],
  CartRowsUpdateWithoutProductInput: ["id", "rowPrice", "quantity", "createdBy", "modifiedBy", "createdAt", "modifiedAt", "cart"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

