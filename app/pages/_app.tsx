import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import { useApollo } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <div
        className="text-white overflow-hidden"
        style={{
          background: "url(/assets/background.png)",
        }}
      >
        <Component {...pageProps} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </ApolloProvider>
  );
}

export default App;
