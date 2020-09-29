import { Button } from "../UI/Button";
import Link from "next/link";

export function BadRoom() {
  return (
    <div className="h-screen grid grid-cols-2 place-items-center">
      <div className="grid gap-8 col-start-2">
        <h1 className="text-3xl">ごめんなさい 😔 room not found</h1>
        <p>
          The room you're looking for is not there, might be a broken link...
        </p>
        <Link href="/">
          <Button>Go back</Button>
        </Link>
        <div aria-label="easter egg">
          <pre className="italic text-xs">
            The last that ever she saw him
            <br />
            Carried away by a moonlight shadow
            <br />
            He passed on worried and warning
            <br />
            Carried away by a moonlight shadow
            <br />
            Lost in a riddle that Saturday night
            <br />
            Far away on the other side
            <br />
            He was caught in the middle of a desperate fight
            <br />
            And she couldn't find how to push through
          </pre>
        </div>
      </div>
    </div>
  );
}
