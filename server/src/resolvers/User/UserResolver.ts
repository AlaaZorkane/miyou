import { User } from "@/entities/User";
import {
  Resolver,
  Ctx,
  Query,
  Arg,
  Mutation,
  ObjectType,
  Field,
} from "type-graphql";
import { ReqContext } from "@/types";
import { registerInput, loginInput } from "./UserInputs";
import argon from "argon2";
import { ERRORS } from "@/enums/errors";

@ObjectType()
class UserResponse {
  @Field({ nullable: true })
  user?: User;

  @Field({ nullable: true })
  error?: string;

  @Field({ nullable: true })
  success: boolean;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(@Ctx() { prisma }: ReqContext): Promise<User[] | null> {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  @Mutation(() => UserResponse, { description: "Creates a new user" })
  async register(
    @Arg("data") { username, password }: registerInput,
    @Ctx() { prisma }: ReqContext,
  ): Promise<UserResponse> {
    try {
      const hashedPassword = await argon.hash(password);
      const user = await prisma.user.create({
        data: { username, password: hashedPassword },
      });
      return { user, success: true };
    } catch (err) {
      console.error(err);
      return { error: ERRORS.UNKNOWN, success: false };
    }
  }

  @Query(() => UserResponse)
  async login(
    @Arg("data") { username, password }: loginInput,
    @Ctx() { prisma }: ReqContext,
  ): Promise<UserResponse> {
    try {
      const user = await prisma.user.findOne({
        where: { username },
      });
      if (!user) return { error: "User not found", success: false };
      const isValid = await argon.verify(user.password, password);
      if (!isValid) return { error: "Wrong password", success: false };
      // TODO: set http-only session cookie
      return { user, success: true };
    } catch (err) {
      console.error(err.message);
      return { error: ERRORS.UNKNOWN, success: false };
    }
  }
}
