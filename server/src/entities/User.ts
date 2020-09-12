import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class User {
  @Field({ description: "The id of the user" })
  id: string;

  @Field()
  username: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
