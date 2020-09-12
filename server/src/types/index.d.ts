import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

export interface MyRequest extends Express.Request {
  session: MiyouSession;
}

export interface MyExpressContext extends ExpressContext {
  req: MyRequest;
}
