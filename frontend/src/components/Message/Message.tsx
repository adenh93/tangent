import React, { SFC } from "react";

interface Props {
  timestamp: string;
  content: string;
}

const Message: SFC<Props> = ({ timestamp, content }) => (
  <div>
    <p>
      {timestamp} - {content}
    </p>
  </div>
);

export default Message;
