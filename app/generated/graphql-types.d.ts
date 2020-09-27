declare module "*/mutations.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const LoginUser: DocumentNode;
  export const LogoutUser: DocumentNode;

  export default defaultDocument;
}

declare module "*/queries.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GetMe: DocumentNode;

  export default defaultDocument;
}
