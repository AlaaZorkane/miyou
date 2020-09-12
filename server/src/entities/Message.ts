import { Field, ObjectType } from "type-graphql";
import { Channel } from "./Channel";
import { User } from "./User";

@ObjectType()
export class Message {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field()
  user: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Channel)
  channel: Channel;
}
