import { ERRORS } from "@/enums/errors";
import { MiyouContext } from "@/types/miyou";
import { MiddlewareFn } from "type-graphql";

export const ErrorInterceptor: MiddlewareFn<MiyouContext> = async (_, next) => {
  try {
    return await next();
  } catch (error) {
    return { error: error.message || ERRORS.UNKNOWN, success: false };
  }
};
