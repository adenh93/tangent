import React, { SFC, useState, ChangeEvent, FormEvent } from "react";
import MessageInput from "../../components/MessageInput";
import { SEND_MESSAGE } from "../../graphql/mutation/message";
import { useMutation } from "react-apollo";
import { Mutation } from "../../types";

const MessageInputContainer: SFC = () => {
  const [message, setMessage] = useState("");
  const [sendMessage] = useMutation<Mutation>(SEND_MESSAGE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendMessage({ variables: { message } });
    setMessage("");
  };

  return (
    <MessageInput
      value={message}
      onChange={handleInputChange}
      onSubmit={handleSendMessage}
    />
  );
};

export default MessageInputContainer;
