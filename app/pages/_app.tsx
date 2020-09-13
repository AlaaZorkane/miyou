import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <Component {...pageProps} />
    </>
  );
}

export default App;
