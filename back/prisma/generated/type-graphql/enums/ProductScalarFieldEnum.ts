import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  photo = "photo",
  price = "price",
  createdBy = "createdBy",
  modifiedBy = "modifiedBy",
  createdAt = "createdAt",
  modifiedAt = "modifiedAt"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined
})
