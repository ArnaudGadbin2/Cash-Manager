FROM node:16

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install -g pnpm
RUN npm install -g dotenv-cli
RUN pnpm install

COPY . .

RUN pnpm generate:dev
RUN pnpm migrate:dev:build
RUN pnpm build:dev

EXPOSE 8080

CMD [ "pnpm", "start:dev" ]