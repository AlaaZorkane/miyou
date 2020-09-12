import "module-alias/register";
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import path from "path";
import { ReqContext } from "./types";
import { PrismaClient } from "@prisma/client";
import { UserResolver } from "./resolvers/User/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: (): ReqContext => ({ prisma }),
  });
  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
