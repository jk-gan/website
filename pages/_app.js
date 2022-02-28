import Header from "@components/Header";
import Copyright from "@components/Copyright";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Copyright />
    </>
  );
}

export default MyApp;
