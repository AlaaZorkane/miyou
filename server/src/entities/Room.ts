import { Field, ObjectType } from "type-graphql";
import { Message } from "./Message";
import { User } from "./User";

@ObjectType()
export class Room {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [User], { nullable: true })
  members?: User[];

  @Field()
  createdAt: Date;

  @Field(() => [Message], { nullable: true })
  messages?: Message[];

  @Field()
  updatedAt: Date;
}
