import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Input } from "../UI/Input";
import { Message } from "./Message";

interface MessageInputData {
  message: string;
}

export function Chat() {
  const { register, handleSubmit } = useForm<MessageInputData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data.message);
  });
  return (
    <div
      className="bg-gray-700 bg-opacity-25 w-1/5 rounded-md flex flex-col"
      aria-label="Room chat"
    >
      <header className="uppercase mb-3 flex justify-center p-2">
        <h4 className="p-2 border-white border-b-2">
          <FontAwesomeIcon icon={faGlassCheers} color="white" size="2x" />
        </h4>
      </header>
      <div className="h-full max-h-full overflow-hidden">
        <div className="messages-container scrollbar overflow-y-scroll">
          <Message content="lorem" author="Alaa" />
          <Message content="Yo how are you doing" author="Ismail" />
          <Message content="Doing good how about you?" author="Alaa" />
          <Message content="Very good" author="Ismail" />
          <Message content="Hello big boi" author="Alaa" />
          <Message content="Doing good how about you?" author="Alaa" />
          <Message content="Very good" author="Ismail" />
          <Message content="Hello big boi" author="Alaa" />
          <Message content="Doing good how about you?" author="Alaa" />
          <Message content="Very good" author="Ismail" />
          <Message
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla itaque dolor ad aspernatur ducimus aliquid velit, accusamus eos quaerat eius esse nam necessitatibus vitae deserunt maiores deleniti totam aperiam vero!"
            author="Alaa"
          />
        </div>
      </div>
      <form onSubmit={onSubmit} className="mb-2 mt-4 p-2">
        <Input
          placeholder="Write something"
          bg="bg-gray-900"
          color="text-white"
          border="border-0"
          className="w-full rounded-lg font-normal"
          register={register}
          name="message"
        />
      </form>
    </div>
  );
}
