import { JoinRoomMutation, useGetMeQuery } from "@/generated/graphql";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  room?: JoinRoomMutation | null;
};

export function Header(props: Props): JSX.Element {
  const { data, loading } = useGetMeQuery();
  if (loading) return <p>...</p>;
  return (
    <header className="flex justify-between content-center">
      <Link href="/">
        <button className="flex">
          <h1 className="font-thin text-2xl self-center">Miyou</h1>
          <p className="font-thin text-xs ml-2 self-center -mb-1">見よう</p>
        </button>
      </Link>
      <motion.button
        whileHover={{ y: -3 }}
        className="self-center bg-gray-800 p-2 rounded-lg text-sm hover:bg-gray-900"
      >
        {props.room?.join.room?.name} - {props.room?.join.room?.id}
      </motion.button>
      <div className="flex content-center">
        <p className="font-medium text-2xl mr-3">{data?.me.user?.username}</p>
        <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
      </div>
    </header>
  );
}
