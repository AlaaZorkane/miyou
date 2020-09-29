import { Field, InputType } from "type-graphql";

@InputType()
export class CreateRoomInput {
  @Field()
  name: string;
}

@InputType()
export class JoinRoomInput {
  @Field()
  roomId: string;
}
