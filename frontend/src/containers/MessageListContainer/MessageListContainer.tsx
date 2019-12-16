import React, { SFC } from "react";
import MessageList from "../../components/MessageList";

const MessageListContainer: SFC = () => {
  const messages: Array<string> = [
    "Hi, how are you?",
    "I'm doing good.",
    "That's great to hear! :)"
  ];

  return <MessageList messages={messages} />;
};

export default MessageListContainer;
