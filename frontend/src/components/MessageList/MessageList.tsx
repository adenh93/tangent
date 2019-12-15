import React, { SFC } from "react";
import Message from "../Message/Message";

interface Props {
  messages: Array<string>;
}

const MessageList: SFC<Props> = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <Message content={message} key={index} />
    ))}
  </div>
);

export default MessageList;
