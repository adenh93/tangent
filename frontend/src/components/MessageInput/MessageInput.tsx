import React, { SFC, ChangeEvent, FormEvent } from "react";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const MessageInput: SFC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Start typing..."
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default MessageInput;
