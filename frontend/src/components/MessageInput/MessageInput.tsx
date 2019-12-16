import React, { SFC, ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MessageInput: SFC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Start typing..."
      />
    </div>
  );
};

export default MessageInput;
