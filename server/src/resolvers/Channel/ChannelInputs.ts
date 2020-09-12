import { Field, InputType } from "type-graphql";

@InputType()
export class CreateChannelInput {
  @Field()
  name: string;
}

@InputType()
export class JoinChannelInput {
  @Field()
  channelId: string;
}
