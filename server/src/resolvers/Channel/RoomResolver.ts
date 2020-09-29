import { Room } from "@/entities/Room";
import { ERRORS } from "@/enums/errors";
import { MiyouContext } from "@/types/miyou";
import { MiyouResponse } from "@/utils/MiyouResponse";
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Resolver,
} from "type-graphql";
import { CreateRoomInput, JoinRoomInput } from "./RoomInputs";

@ObjectType()
class RoomResponse extends MiyouResponse {
  @Field({ nullable: true })
  room?: Room;
}

@Resolver()
export class RoomResolver {
  @Authorized()
  @Mutation(() => RoomResponse, { description: "Generate new room" })
  async create(
    @Arg("data") { name }: CreateRoomInput,
    @Ctx() { prisma }: MiyouContext,
  ): Promise<RoomResponse> {
    const room = await prisma.room.create({ data: { name } });
    return { room };
  }

  @Authorized()
  @Mutation(() => RoomResponse, { description: "Joins a room" })
  async join(
    @Arg("data") { roomId }: JoinRoomInput,
    @Ctx() { prisma, userId }: MiyouContext,
  ): Promise<RoomResponse> {
    const isValid = await prisma.room.findOne({ where: { id: roomId } });
    if (!isValid) throw new Error(ERRORS.INVALID);
    const room = await prisma.user
      .update({
        where: { id: userId },
        data: { Room: { connect: { id: roomId } } },
      })
      .Room();
    if (!room) throw new Error(ERRORS.UNKNOWN);
    return { room };
  }
}
