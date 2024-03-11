// import { applyModelsEnhanceMap } from 'prisma/generated/type-graphql'
// import { UseMiddleware } from 'type-graphql'

export function applyModelsEnhance () {
  // Make password not searchable in qraphql:
  // applyModelsEnhanceMap({
  //   User: {
  //     fields: {
  //       // decorator for model class fields
  //       password: [
  //         UseMiddleware((_data) => {
  //           return null
  //         })
  //       ]
  //     }
  //   }
  // })
}
