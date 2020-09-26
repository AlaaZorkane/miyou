declare module "*/Queries.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GetMe: DocumentNode;
  export const LoginUser: DocumentNode;

  export default defaultDocument;
}
