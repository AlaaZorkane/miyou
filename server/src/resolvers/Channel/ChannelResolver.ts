import { Channel } from "@/entities/Channel";
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
import { CreateChannelInput, JoinChannelInput } from "./ChannelInputs";

@ObjectType()
class ChannelResponse extends MiyouResponse {
  @Field({ nullable: true })
  channel?: Channel;
}

@Resolver()
export class ChannelResolver {
  @Authorized()
  @Mutation(() => ChannelResponse, { description: "Generate new channel" })
  async create(
    @Arg("data") { name }: CreateChannelInput,
    @Ctx() { prisma }: MiyouContext,
  ): Promise<ChannelResponse> {
    try {
      const channel = await prisma.channel.create({ data: { name } });
      if (!channel) throw new Error(ERRORS.UNKNOWN);
      return { channel, success: true };
    } catch (error) {
      return { error, success: false };
    }
  }

  @Authorized()
  @Mutation(() => ChannelResponse, { description: "Joins a channel" })
  async join(
    @Arg("data") { channelId }: JoinChannelInput,
    @Ctx() { prisma, userId }: MiyouContext,
  ): Promise<ChannelResponse> {
    try {
      const channel = await prisma.user
        .update({
          where: { id: userId },
          data: { Channel: { connect: { id: channelId } } },
        })
        .Channel();
      if (!channel) throw new Error(ERRORS.NOT_FOUND);
      return { channel, success: true };
    } catch (error) {
      return { error, success: false };
    }
  }
}
