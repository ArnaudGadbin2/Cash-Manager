import * as TypeGraphQL from "type-graphql";

export enum CartScalarFieldEnum {
  id = "id",
  totalPrice = "totalPrice",
  cartStatus = "cartStatus",
  refusalCount = "refusalCount",
  userId = "userId",
  createdBy = "createdBy",
  modifiedBy = "modifiedBy",
  createdAt = "createdAt",
  modifiedAt = "modifiedAt"
}
TypeGraphQL.registerEnumType(CartScalarFieldEnum, {
  name: "CartScalarFieldEnum",
  description: undefined
})
