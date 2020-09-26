import gql from "graphql-tag";

export const GetMe = gql`
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
export const LoginUser = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(data: { username: $username, password: $password }) {
      error
    }
  }
`;
