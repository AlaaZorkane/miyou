import { Input } from "@/components/UI/Input";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "../UI/Button";

type JoinRoomData = {
  roomUrl: string;
};

export function JoinRoom({ close }: any): JSX.Element {
  const { register, handleSubmit, errors } = useForm<JoinRoomData>();
  const onSubmit = handleSubmit(async (data) => {
    Router.push(`/room/${data.roomUrl}`);
  });

  return (
    <div className="bg-white grid gap-4 p-4 rounded-md max-w-lg">
      <h5 className="text-3xl">Join a Miyou room</h5>
      <p className="text-gray-700">
        To join a room, either click on the link that your friend sent you or
        paste down the room id here 👇
      </p>
      <form onSubmit={onSubmit} className="grid grid-rows-2 gap-3">
        <Input
          prepend={
            <FontAwesomeIcon icon={faHashtag} size="2x" className="mt-1" />
          }
          className="w-full font-normal rounded-md"
          border="border border-black"
          color="text-black"
          register={register}
          required
          name="roomUrl"
          placeholder="Room ID"
          errors={errors.roomUrl}
        />
        <div
          className="grid gap-2 grid-cols-2 place-self-end"
          aria-label="Modal actions"
        >
          <Button
            onClick={() => close()}
            bg="bg-transparent"
            color="text-red-600"
            font="font-medium"
          >
            cancel
          </Button>
          <Button
            bg="bg-black"
            color="text-white"
            font="font-medium"
            type="submit"
          >
            miyou 🚀
          </Button>
        </div>
      </form>
    </div>
  );
}
