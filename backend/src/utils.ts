import { Prisma } from "./generated/prisma-client";
import { RedisPubSub } from "graphql-redis-subscriptions";

export interface Context {
  prisma: Prisma;
  redis: RedisPubSub;
}
