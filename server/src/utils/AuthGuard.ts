import { MiyouContext } from "@/types/miyou";
import { AuthChecker } from "type-graphql";

export const AuthGuard: AuthChecker<MiyouContext> = ({
  context: { userId, prisma },
}) => {
  try {
    if (!userId) throw new Error();
    prisma.user.findOne({ where: { id: userId } });
  } catch (err) {
    return false;
  }
  return true;
};
