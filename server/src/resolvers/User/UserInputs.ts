import { Field, InputType } from "type-graphql";

@InputType()
export class registerInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class loginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
