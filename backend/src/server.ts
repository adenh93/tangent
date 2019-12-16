import { prisma } from "./generated/prisma-client";
import resolvers from "./resolvers";
import redis from "./redisClient";
import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma, redis }
});

export default server;
