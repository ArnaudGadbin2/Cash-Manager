import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  userName = "userName",
  displayName = "displayName",
  imageUrl = "imageUrl",
  emailConfirmed = "emailConfirmed",
  accessTokenExpiresUtc = "accessTokenExpiresUtc",
  accessToken = "accessToken",
  password = "password",
  oneTimePassword = "oneTimePassword",
  state = "state",
  createdAt = "createdAt",
  modifiedAt = "modifiedAt",
  createdBy = "createdBy",
  modifiedBy = "modifiedBy",
  refreshTokenId = "refreshTokenId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined
})
