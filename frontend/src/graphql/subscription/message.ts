import gql from "graphql-tag";
import { messageFields } from "../fragments/message";

export const NEW_MESSAGE = gql`
  subscription {
    newMessage {
      ...messageFields
    }
  }
  ${messageFields}
`;
