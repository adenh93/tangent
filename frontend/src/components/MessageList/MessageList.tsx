import React, { SFC } from "react";
import MessageComponent from "../Message/Message";
import { Message } from "../../types";

interface Props {
  messages: Array<Message>;
}

const MessageList: SFC<Props> = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <MessageComponent {...message} key={index} />
    ))}
  </div>
);

export default MessageList;
