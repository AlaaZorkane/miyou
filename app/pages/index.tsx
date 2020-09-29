import { JoinRoom } from "@/components/Landing/JoinRoom";
import { Loading } from "@/components/Layout/Loading";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/UI/Button";
import { IconButton } from "@/components/UI/IconButton";
import { Modal } from "@/components/UI/Modal";
import {
  useCreateRoomMutation,
  useGetMeQuery,
  useLogoutUserMutation,
} from "@/generated/graphql";
import withAuthentication from "@/lib/withAuthentication";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

function IndexPage(): JSX.Element {
  const { data, loading } = useGetMeQuery();
  if (loading || !data) return <Loading />;
  const { me } = data;
  const [logout] = useLogoutUserMutation();
  const [createRoom, { error, loading: roomLoading }] = useCreateRoomMutation();
  const handleLogout = async () => {
    await logout();
    Router.push("/login");
  };
  const handleCreateRoom = async () => {
    try {
      // TODO: make the user choose a name
      const { data: roomData } = await createRoom({
        variables: { name: "NewRoom" },
      });
      Router.push(`/room/${roomData?.create.room?.id}`);
    } catch (err) {
      console.log(err);
      console.log(error);
    }
  };
  return (
    <article className="h-screen grid grid-cols-2">
      <div className="grid col-start-2">
        <div className="place-self-center grid w-2/5">
          <header>
            <Logo />
            <div className="text-3xl font-thin my-3 flex align-middle">
              <p>
                Connected as{" "}
                <span className="font-medium">{me.user?.username}</span>
              </p>
              <IconButton
                whileHover={{
                  x: 5,
                }}
                className="ml-3 self-center"
                icon={faSignOutAlt}
                onClick={handleLogout}
              />
            </div>
          </header>
          <div className="font-thin text-md mb-3 leading-7">
            <p>watch with your friends...</p>
            <p>without the hassle</p>
          </div>
          <div aria-label="User actions" className="grid grid-cols-2 gap-4">
            <Modal trigger={<Button>join a room</Button>}>
              <JoinRoom />
            </Modal>
            <Button isLoading={roomLoading} onClick={() => handleCreateRoom()}>
              create a room
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default withAuthentication(IndexPage);
