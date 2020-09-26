import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  /** Returns all the information about the user */
  me: UserResponse;
  users: Array<User>;
};

export type UserResponse = {
  __typename?: "UserResponse";
  error?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  /** The id of the user */
  id: Scalars["String"];
  username: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Creates a new user */
  register: UserResponse;
  login: UserResponse;
  /** Generate new channel */
  create: ChannelResponse;
  /** Joins a channel */
  join: ChannelResponse;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationCreateArgs = {
  data: CreateChannelInput;
};

export type MutationJoinArgs = {
  data: JoinChannelInput;
};

export type RegisterInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type LoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type ChannelResponse = {
  __typename?: "ChannelResponse";
  error?: Maybe<Scalars["String"]>;
  channel?: Maybe<Channel>;
};

export type Channel = {
  __typename?: "Channel";
  id: Scalars["String"];
  name: Scalars["String"];
  members: Array<User>;
  createdAt: Scalars["DateTime"];
  messages: Array<Message>;
  updatedAt: Scalars["DateTime"];
};

export type Message = {
  __typename?: "Message";
  id: Scalars["String"];
  content: Scalars["String"];
  user: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  channel: Channel;
};

export type CreateChannelInput = {
  name: Scalars["String"];
};

export type JoinChannelInput = {
  channelId: Scalars["String"];
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = { __typename?: "Query" } & {
  me: { __typename?: "UserResponse" } & {
    user?: Maybe<
      { __typename?: "User" } & Pick<User, "username" | "id" | "createdAt">
    >;
  };
};

export type LoginUserMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginUserMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "UserResponse" } & Pick<UserResponse, "error">;
};

export const GetMeDocument = gql`
  query GetMe {
    me {
      user {
        username
        id
        createdAt
      }
    }
  }
`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    baseOptions
  );
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    baseOptions
  );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>;
export const LoginUserDocument = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(data: { username: $username, password: $password }) {
      error
    }
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >
) {
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    baseOptions
  );
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>;
