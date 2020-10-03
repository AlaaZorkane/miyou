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
  logout: Scalars["Boolean"];
  /** Generate new room */
  create: RoomResponse;
  /** Joins a room */
  join: RoomResponse;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationCreateArgs = {
  data: CreateRoomInput;
};

export type MutationJoinArgs = {
  data: JoinRoomInput;
};

export type RegisterInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type LoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type RoomResponse = {
  __typename?: "RoomResponse";
  error?: Maybe<Scalars["String"]>;
  room?: Maybe<Room>;
};

export type Room = {
  __typename?: "Room";
  id: Scalars["String"];
  name: Scalars["String"];
  members?: Maybe<Array<User>>;
  createdAt: Scalars["DateTime"];
  messages?: Maybe<Array<Message>>;
  updatedAt: Scalars["DateTime"];
};

export type Message = {
  __typename?: "Message";
  id: Scalars["String"];
  content: Scalars["String"];
  user: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  channel: Room;
};

export type CreateRoomInput = {
  name: Scalars["String"];
};

export type JoinRoomInput = {
  roomId: Scalars["String"];
};

export type CreateRoomMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type CreateRoomMutation = { __typename?: "Mutation" } & {
  create: { __typename?: "RoomResponse" } & Pick<RoomResponse, "error"> & {
      room?: Maybe<
        { __typename?: "Room" } & Pick<Room, "id" | "name" | "createdAt">
      >;
    };
};

export type JoinRoomMutationVariables = Exact<{
  rid: Scalars["String"];
}>;

export type JoinRoomMutation = { __typename?: "Mutation" } & {
  join: { __typename?: "RoomResponse" } & Pick<RoomResponse, "error"> & {
      room?: Maybe<
        { __typename?: "Room" } & Pick<Room, "id" | "name"> & {
            members?: Maybe<
              Array<{ __typename?: "User" } & Pick<User, "username">>
            >;
            messages?: Maybe<
              Array<
                { __typename?: "Message" } & Pick<
                  Message,
                  "id" | "content" | "createdAt"
                > & { user: { __typename?: "User" } & Pick<User, "username"> }
              >
            >;
          }
      >;
    };
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

export type LogoutUserMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export const CreateRoomDocument = gql`
  mutation CreateRoom($name: String!) {
    create(data: { name: $name }) {
      room {
        id
        name
        createdAt
      }
      error
    }
  }
`;
export type CreateRoomMutationFn = Apollo.MutationFunction<
  CreateRoomMutation,
  CreateRoomMutationVariables
>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateRoomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRoomMutation,
    CreateRoomMutationVariables
  >
) {
  return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(
    CreateRoomDocument,
    baseOptions
  );
}
export type CreateRoomMutationHookResult = ReturnType<
  typeof useCreateRoomMutation
>;
export type CreateRoomMutationResult = Apollo.MutationResult<
  CreateRoomMutation
>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<
  CreateRoomMutation,
  CreateRoomMutationVariables
>;
export const JoinRoomDocument = gql`
  mutation JoinRoom($rid: String!) {
    join(data: { roomId: $rid }) {
      room {
        id
        name
        members {
          username
        }
        messages {
          id
          content
          createdAt
          user {
            username
          }
        }
      }
      error
    }
  }
`;
export type JoinRoomMutationFn = Apollo.MutationFunction<
  JoinRoomMutation,
  JoinRoomMutationVariables
>;

/**
 * __useJoinRoomMutation__
 *
 * To run a mutation, you first call `useJoinRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinRoomMutation, { data, loading, error }] = useJoinRoomMutation({
 *   variables: {
 *      rid: // value for 'rid'
 *   },
 * });
 */
export function useJoinRoomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    JoinRoomMutation,
    JoinRoomMutationVariables
  >
) {
  return Apollo.useMutation<JoinRoomMutation, JoinRoomMutationVariables>(
    JoinRoomDocument,
    baseOptions
  );
}
export type JoinRoomMutationHookResult = ReturnType<typeof useJoinRoomMutation>;
export type JoinRoomMutationResult = Apollo.MutationResult<JoinRoomMutation>;
export type JoinRoomMutationOptions = Apollo.BaseMutationOptions<
  JoinRoomMutation,
  JoinRoomMutationVariables
>;
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
export const LogoutUserDocument = gql`
  mutation LogoutUser {
    logout
  }
`;
export type LogoutUserMutationFn = Apollo.MutationFunction<
  LogoutUserMutation,
  LogoutUserMutationVariables
>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutUserMutation,
    LogoutUserMutationVariables
  >
) {
  return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(
    LogoutUserDocument,
    baseOptions
  );
}
export type LogoutUserMutationHookResult = ReturnType<
  typeof useLogoutUserMutation
>;
export type LogoutUserMutationResult = Apollo.MutationResult<
  LogoutUserMutation
>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<
  LogoutUserMutation,
  LogoutUserMutationVariables
>;
