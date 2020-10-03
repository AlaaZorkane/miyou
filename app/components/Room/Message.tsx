import dayjs from "dayjs";

type Props = {
  content?: string;
  author?: string;
  time?: string;
};

export function Message(props: Props) {
  return (
    <div aria-label="Room message" className="mr-2 pl-2 flex flex-col mt-2">
      <div className="flex mb-1 justify-between">
        <p className="text-sm mr-1">{props.author}</p>
        <p className="text-sm text-gray-500">{dayjs().format("HH:mm A")}</p>
      </div>
      <p className="bg-gray-300 text-black py-1 px-2 relative rounded-lg break">
        {props.content}
      </p>
    </div>
  );
}
