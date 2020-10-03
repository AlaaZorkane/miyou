import { Loading } from "@/components/Layout/Loading";
import { BadRoom } from "@/components/Room/BadRoom";
import { Header } from "@/components/Header";
import { useJoinRoomMutation } from "@/generated/graphql";
import withAuthentication from "@/lib/withAuthentication";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Chat } from "@/components/Room/Chat";
import { Screen } from "@/components/Room/Screen";
import { Controls } from "@/components/Room/Controls";

const Room = () => {
  const router = useRouter();
  const rid = router.query.rid as string;
  const [joinRoom, { data: room, error, loading }] = useJoinRoomMutation({
    variables: { rid },
  });
  useEffect(() => {
    joinRoom();
  }, []);
  if (loading) return <Loading />;
  if (error || room?.join.error) return <BadRoom />;
  return (
    <div className="h-screen">
      <div className="flex flex-col p-4 h-screen">
        <Header room={room} />
        <section className="flex justify-between my-3 flex-grow">
          <Screen />
          <div className="mx-2"></div>
          <Chat />
        </section>
        <Controls />
      </div>
    </div>
  );
};

export default withAuthentication(Room);
