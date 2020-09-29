import "module-alias/register";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import path from "path";
import { MyExpressContext } from "./types";
import { PrismaClient } from "@prisma/client";
import { UserResolver } from "./resolvers/User/UserResolver";
import express from "express";
import redis from "redis";
import * as dotenv from "dotenv-safe";
import session from "express-session";
import connectRedis from "connect-redis";
import { MiyouContext } from "./types/miyou";
import { AuthGuard } from "./utils/AuthGuard";
import { RoomResolver } from "./resolvers/Channel/RoomResolver";
import { ErrorInterceptor } from "./utils/Middlewares";

dotenv.config();

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver, RoomResolver],
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
    authChecker: AuthGuard,
    globalMiddlewares: [ErrorInterceptor],
  });

  const redisClient = redis.createClient({
    port: 14136,
    host: "redis-14136.c226.eu-west-1-3.ec2.cloud.redislabs.com",
    password: process.env.REDIS_PW,
  });

  const RedisStore = connectRedis(session);

  const prisma = new PrismaClient();

  const app = express();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: (ctx: MyExpressContext): MiyouContext => ({
      prisma,
      ctx,
      userId: ctx.req.session.userId,
    }),
  });

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      name: "sid",
      secret: process.env.REDIS_SECRET as string,
      resave: false,
      saveUninitialized: true,
    }),
  );

  server.applyMiddleware({
    app,
    cors: { credentials: true, origin: "http://localhost:3000" },
  });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
}

main().catch(console.error);
