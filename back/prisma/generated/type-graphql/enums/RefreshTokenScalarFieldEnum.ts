import * as TypeGraphQL from "type-graphql";

export enum RefreshTokenScalarFieldEnum {
  id = "id",
  createdBy = "createdBy",
  createdAt = "createdAt",
  modifiedBy = "modifiedBy",
  modifiedAt = "modifiedAt",
  userEmail = "userEmail",
  refreshToken = "refreshToken",
  expiresUtc = "expiresUtc",
  issuedUtc = "issuedUtc",
  userId = "userId"
}
TypeGraphQL.registerEnumType(RefreshTokenScalarFieldEnum, {
  name: "RefreshTokenScalarFieldEnum",
  description: undefined
})
