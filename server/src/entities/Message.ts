import { Field, ObjectType } from "type-graphql";
import { Room } from "./Room";
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

  @Field(() => Room)
  channel: Room;
}
