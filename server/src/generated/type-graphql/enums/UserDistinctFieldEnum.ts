import * as TypeGraphQL from "type-graphql";

export enum UserDistinctFieldEnum {
  id = "id",
  username = "username",
  name = "name",
  password = "password"
}
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
  name: "UserDistinctFieldEnum",
  description: undefined,
});
