import { PrismaClient } from "@prisma/client";

export interface ReqContext {
  prisma: PrismaClient;
}
