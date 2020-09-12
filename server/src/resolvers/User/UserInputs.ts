import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
