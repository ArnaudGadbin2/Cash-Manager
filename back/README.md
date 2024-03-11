<br>

# Cash Manager Backend

## Description

Cash Manager  Backend using [Prisma](https://github.com/prisma/prisma) and [Typegraphql](https://github.com/MichalLytek/typegraphql-prisma)

## Installation

```bash
$ npm install -g dotenv-cli
```

```bash
$ pnpm install
```

## Running the app

1 - Launch docker database:

```bash
$ pnpm docker-db:rebuild
```

2 - On another terminal run - Generate Crud:

```bash
$ pnpm generate
```

3 - To Push schema to local database:

```bash
$ pnpm sync:dev
```

3 Bis - Shortcut to generate & sync on dev environment:

```bash
$ pnpm generate:sync:dev
```

4 - Run Application:

```bash
$ pnpm start:dev
```

Graphql playground available at http://localhost:8080/graphql

5 - Migrations:

Each time you do modifications to schema.prisma, or to apply migrations from collaborator:

```bash
$ pnpm migration:dev
```

It will ask for a file name.\
Then commit and push the migration files.

Optional:

Start prisma studio

```bash
$ pnpm prisma studio
```

## Edit the app

Edit prisma/build.schema to edit schema on the fly.

Put your Custom resolvers in the allocated space(comments) in src/app.module.ts.


## Register

```
const params = {
  email: "email",
  password: "password"
}

const response = await backendAxiosInstance.post(`http://localhost:8080/auth/email/register`, params)
```
## Login

```
const params = {
  email: "email",
  password: "password"
}

const response = await backendAxiosInstance.post(`http://localhost:8080/auth/email/login`, params)
```

## Graphql
Endpoint:

http://localhost:8080/graphql

Disponible avec playground

```
const mutation = mutation {
  createOneCart(
    data: {
      createdBy: "userId"
      user: { connect: { id: "userId" } }
      cartRows: {
        create: {
          createdBy: "userId"
          rowPrice: 2
          quantity: 3
          product: {
            create: { 
              title: "orange"
              description: "une orange"
              price: 3
              createdBy: "userId"
            }
          }
        }
      }
    }
  ) {
    id
    cartRows {
      id
    }
    ... and other fields you want
  }
}
```


```
const query = query {
  carts {
    id
    cartRows {
      id
      rowPrice
      quantity
      product {
        id
        title
      }
    }
    user {
      id
      email
    }
  }
  ... and other fields you want
}
```

```
const response = await backendAxiosInstance.post(`http://localhost:8080/graphql`, {
  query
})
```
