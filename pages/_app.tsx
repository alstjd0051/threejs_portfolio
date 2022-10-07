import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/commons/unit/laytou/nav/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}

export default MyApp;
