import React, { SFC } from "react";

interface Props {
  content: string;
}

const Message: SFC<Props> = ({ content }) => (
  <div>
    <p>{content}</p>
  </div>
);

export default Message;
