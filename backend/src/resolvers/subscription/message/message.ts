import { Context } from "../../../utils";

const comment = {
  subscribe: (parent, args, { redis }: Context) =>
    redis.asyncIterator("messages")
};

export default comment;
