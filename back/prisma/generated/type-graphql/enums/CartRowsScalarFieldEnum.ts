import * as TypeGraphQL from "type-graphql";

export enum CartRowsScalarFieldEnum {
  id = "id",
  rowPrice = "rowPrice",
  quantity = "quantity",
  cartId = "cartId",
  productId = "productId",
  createdBy = "createdBy",
  modifiedBy = "modifiedBy",
  createdAt = "createdAt",
  modifiedAt = "modifiedAt"
}
TypeGraphQL.registerEnumType(CartRowsScalarFieldEnum, {
  name: "CartRowsScalarFieldEnum",
  description: undefined
})
