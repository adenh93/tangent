import { Context } from "../../../utils";

const newMessage = {
  subscribe: (parent, args, { redis }: Context) =>
    redis.asyncIterator("messages")
};

export default newMessage;
