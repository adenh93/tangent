import gql from "graphql-tag";

export const messageFields = gql`
  fragment messageFields on Message {
    content
    timestamp
  }
`;
