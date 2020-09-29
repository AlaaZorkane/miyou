declare module "*/Room.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const CreateRoom: DocumentNode;
  export const JoinRoom: DocumentNode;

  export default defaultDocument;
}

declare module "*/User.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GetMe: DocumentNode;
  export const LoginUser: DocumentNode;
  export const LogoutUser: DocumentNode;

  export default defaultDocument;
}
