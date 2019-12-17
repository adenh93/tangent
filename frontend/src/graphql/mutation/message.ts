import gql from "graphql-tag";
import { messageFields } from "../fragments/message";

export const SEND_MESSAGE = gql`
  mutation($message: String!) {
    sendMessage(message: $message) {
      ...messageFields
    }
  }
  ${messageFields}
`;
