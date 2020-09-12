import { Field, ObjectType } from "type-graphql";
import { Message } from "./Message";
import { User } from "./User";

@ObjectType()
export class Channel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [User])
  members?: User[];

  @Field()
  createdAt: Date;

  @Field(() => [Message])
  messages?: Message[];

  @Field()
  updatedAt: Date;
}
