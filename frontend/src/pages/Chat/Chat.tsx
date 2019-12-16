import React, { SFC } from "react";
import MessageList from "../../containers/MessageListContainer";
import MessageInput from "../../containers/MessageInputContainer";

const Chat: SFC = () => (
  <>
    <MessageList />
    <MessageInput />
  </>
);

export default Chat;
