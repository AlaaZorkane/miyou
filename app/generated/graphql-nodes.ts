import gql from "graphql-tag";

export const CreateRoom = gql`
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
export const JoinRoom = gql`
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
export const LogoutUser = gql`
  mutation LogoutUser {
    logout
  }
`;
