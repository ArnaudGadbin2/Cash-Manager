import type { PrismaClient } from '@prisma/client'
import { applyResolversInterceptors } from 'prisma/generated/type-graphql'
import { getPrismaFromContext } from 'prisma/generated/type-graphql/helpers'

export const createdByColumnName = 'createdBy'
export const modifiedByColumnName = 'modifiedBy'
export const createdAtColumnName = 'createdAt'
export const modifiedAtColumnName = 'modifiedAt'

export async function onDefaultChange (
  ctx: { user: { email: any } },
  args: { data: any; where: any },
  operation: 'create' | 'update' | 'delete',
  table: string
) {
  if (operation === 'create') {
    if (Array.isArray(args.data)) {
      args.data.forEach((item: any) => {
        item[createdByColumnName] = ctx.user ? ctx.user.email : args.data.email
      })
    }
    else {
      args.data[createdByColumnName] = ctx.user ? ctx.user.email : args.data.email
    }
  }
  else if (operation === 'update') {
    const { where } = args

    await (getPrismaFromContext(ctx) as PrismaClient)[table].findFirstOrThrow({
      select: { id: true },
      where: {
        ...where,
        [createdByColumnName]: ctx.user ? ctx.user.email : args.data.email
      }
    })
    args.data[modifiedByColumnName] = ctx.user ? ctx.user.email : args.data.email
  }
  else if (operation === 'delete') {
    const { where } = args

    await (getPrismaFromContext(ctx) as PrismaClient)[table].findFirstOrThrow({
      select: { id: true },
      where: {
        ...where,
        [createdByColumnName]: ctx.user ? ctx.user.email : args.data.email
      }
    })
  }
}

export function applyInterceptors () {
  applyResolversInterceptors({
    Cart: {
      createOneCart: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'cart')
        }
      },
      createManyCart: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'cart')
        }
      },
      updateOneCart: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'cart')
        }
      },
      updateManyCart: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'cart')
        }
      },
      deleteOneCart: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'cart')
        }
      },
      deleteManyCart: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'cart')
        }
      }
    },
    CartRows: {
      createOneCartRows: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'cartRows')
        }
      },
      createManyCartRows: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'cartRows')
        }
      },
      updateOneCartRows: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'cartRows')
        }
      },
      updateManyCartRows: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'cartRows')
        }
      },
      deleteOneCartRows: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'cartRows')
        }
      },
      deleteManyCartRows: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'cartRows')
        }
      }
    },
    Product: {
      createOneProduct: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'product')
        }
      },
      createManyProduct: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'product')
        }
      },
      updateOneProduct: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'product')
        }
      },
      updateManyProduct: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'product')
        }
      },
      deleteOneProduct: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'product')
        }
      },
      deleteManyProduct: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'product')
        }
      }
    },
    User: {
      createOneUser: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'user')
        }
      },
      createManyUser: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'user')
        }
      },
      updateOneUser: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'user')
        }
      },
      updateManyUser: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'user')
        }
      },
      deleteOneUser: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'user')
        }
      },
      deleteManyUser: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'user')
        }
      }
    },
    Provider: {
      createOneProvider: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'provider')
        }
      },
      createManyProvider: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'provider')
        }
      },
      updateOneProvider: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'provider')
        }
      },
      updateManyProvider: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'provider')
        }
      },
      deleteOneProvider: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'provider')
        }
      },
      deleteManyProvider: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'provider')
        }
      }
    },
    RefreshToken: {
      createOneRefreshToken: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'refreshToken')
        }
      },
      createManyRefreshToken: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'create', 'refreshToken')
        }
      },
      updateOneRefreshToken: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'refreshToken')
        }
      },
      updateManyRefreshToken: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'update', 'refreshToken')
        }
      },
      deleteOneRefreshToken: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'refreshToken')
        }
      },
      deleteManyRefreshToken: {
        async onBefore (ctx, args) {
          await onDefaultChange(ctx, args, 'delete', 'refreshToken')
        }
      }
    }
  })
}
