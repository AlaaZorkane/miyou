import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import { useApollo } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <div
        className="text-white overflow-hidden bg-auto bg-no-repeat"
        style={{
          background: "url(/assets/background.png)",
        }}
      >
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default App;
