// import { applyResolversEnhanceMap } from 'prisma/generated/type-graphql'
// import {  Extensions } from 'type-graphql'
// import { CustomAuthorized } from "../auth/middleware"

export function applyResolversEnhance () {
  // Make deleting other users using deleteOneUser resolver not possible
  // applyResolversEnhanceMap({
  //   User: {
  //     // _all: [CustomAuthorized()]
  //     deleteOneUser: [
  //       CustomAuthorized(),
  //       Extensions({ logMessage: 'Danger zone' })
  //     ]
  //   }
  // })
}
