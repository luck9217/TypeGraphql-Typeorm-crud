import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import "reflect-metadata";

import { PingResolver } from "./resolvers/ping";
import { ProductResolver } from "./resolvers/ProductResolver";

export async function startServer() {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, ProductResolver],
      validate: false,
      
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  //solve problem with packed apollo server and calling listen
  await server.start();
 
  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
