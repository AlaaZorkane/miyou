import { User } from "@/entities/User";
import {
  Resolver,
  Ctx,
  Query,
  Arg,
  Mutation,
  ObjectType,
  Field,
  Authorized,
} from "type-graphql";
import { RegisterInput, LoginInput } from "./UserInputs";
import argon from "argon2";
import { ERRORS } from "@/enums/errors";
import { MiyouContext } from "@/types/miyou";
import { MiyouResponse } from "@/utils/MiyouResponse";

@ObjectType()
class UserResponse extends MiyouResponse {
  @Field({ nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Authorized()
  @Query(() => UserResponse, {
    description: "Returns all the information about the user",
  })
  async me(@Ctx() { prisma, userId }: MiyouContext): Promise<UserResponse> {
    const user = await prisma.user.findOne({ where: { id: userId } });
    if (!user) throw new Error(ERRORS.NOT_FOUND);
    return { user, success: true };
  }

  @Query(() => [User])
  async users(@Ctx() { prisma }: MiyouContext): Promise<User[] | null> {
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
    @Arg("data") { username, password }: RegisterInput,
    @Ctx() { prisma }: MiyouContext,
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
    @Arg("data") { username, password }: LoginInput,
    @Ctx() { prisma, ctx }: MiyouContext,
  ): Promise<UserResponse> {
    const user = await prisma.user.findOne({
      where: { username },
    });
    if (!user) throw new Error("User not found");
    const isValid = await argon.verify(user.password, password);
    if (!isValid) throw new Error("Wront password");
    ctx.req.session.userId = user.id;
    return { user, success: true };
  }
}
