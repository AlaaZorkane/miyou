import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MiyouResponse {
  @Field({ nullable: true })
  error?: string;

  @Field({ nullable: true })
  success: boolean;
}
