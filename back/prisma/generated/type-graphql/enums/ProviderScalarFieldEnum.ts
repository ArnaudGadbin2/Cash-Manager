import * as TypeGraphQL from "type-graphql";

export enum ProviderScalarFieldEnum {
  provider = "provider",
  createdBy = "createdBy",
  createdAt = "createdAt",
  modifiedBy = "modifiedBy",
  modifiedAt = "modifiedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProviderScalarFieldEnum, {
  name: "ProviderScalarFieldEnum",
  description: undefined
})
