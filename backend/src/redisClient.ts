import { RedisPubSub } from "graphql-redis-subscriptions";
import { RedisClient, ClientOpts } from "redis";

const options: ClientOpts = {
  host: process.env.REDIS_HOST
};

const pubsub = new RedisPubSub({
  publisher: new RedisClient(options),
  subscriber: new RedisClient(options)
});

export default pubsub;
