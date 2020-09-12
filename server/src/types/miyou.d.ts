import { PrismaClient } from "@prisma/client";

export interface MiyouSession {
  userId: string;
}

export interface MiyouContext {
  prisma: PrismaClient;
  ctx: MyExpressContext;
  userId: string;
}
