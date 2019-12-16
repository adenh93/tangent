import { Context } from "../../../utils";
import { MutationSendMessageArgs, Message } from "../../../generated/types";

const sendMessage = (
  parent,
  { message }: MutationSendMessageArgs,
  { redis }: Context
) => {
  const payload: Message = {
    content: message,
    timestamp: new Date().toDateString()
  };

  redis.publish("messages", { message: payload });

  return payload;
};

export default sendMessage;
