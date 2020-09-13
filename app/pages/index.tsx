import React from "react";
import { Login } from "@/components/Login";

function IndexPage(): JSX.Element {
  return (
    <article
      style={{
        background: "url(/assets/background.png)",
      }}
      className="h-screen grid grid-cols-2 bg-auto bg-no-repeat text-white overflow-hidden"
    >
      <Login />
    </article>
  );
}

export default IndexPage;
