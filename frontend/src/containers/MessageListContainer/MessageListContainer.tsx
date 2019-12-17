import React, { SFC, useState } from "react";
import MessageList from "../../components/MessageList";
import { useSubscription, OnSubscriptionDataOptions } from "react-apollo";
import { NEW_MESSAGE } from "../../graphql/subscription/message";
import { Message, Subscription } from "../../types";

const MessageListContainer: SFC = () => {
  const [messages, setMessages] = useState([] as Array<Message>);

  const onNewMessage = (data: OnSubscriptionDataOptions<Subscription>) => {
    const message = data.subscriptionData.data!.newMessage;
    setMessages([...messages, message]);
  };

  useSubscription<Subscription>(NEW_MESSAGE, {
    onSubscriptionData: onNewMessage
  });

  return <MessageList messages={messages} />;
};

export default MessageListContainer;
