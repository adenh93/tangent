import React, { SFC, useState, ChangeEvent } from "react";
import MessageInput from "../../components/MessageInput";

const MessageInputContainer: SFC = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <MessageInput value={value} onChange={handleInputChange} />;
};

export default MessageInputContainer;
