export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Message = {
   __typename?: 'Message',
  content: Scalars['String'],
  timestamp: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  sendMessage: Message,
};


export type MutationSendMessageArgs = {
  message: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  getMessages: Array<Message>,
};

export type Subscription = {
   __typename?: 'Subscription',
  newMessage: Message,
};
