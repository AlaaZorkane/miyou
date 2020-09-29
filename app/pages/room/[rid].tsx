import { Loading } from "@/components/Layout/Loading";
import { BadRoom } from "@/components/Room/BadRoom";
import { useJoinRoomMutation } from "@/generated/graphql";
import withAuthentication from "@/lib/withAuthentication";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Room = () => {
  const router = useRouter();
  const rid = router.query.rid as string;
  const [joinRoom, { data, error, loading }] = useJoinRoomMutation({
    variables: { rid },
  });
  useEffect(() => {
    (async () => {
      try {
        await joinRoom();
        data?.join.room?.id;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  if (loading) return <Loading />;
  if (error || data?.join.error) return <BadRoom />;
  return (
    <div className="h-screen grid place-items-center">
      Room: {data?.join.room?.id}
      {JSON.stringify(error)}
    </div>
  );
};

export default withAuthentication(Room);
