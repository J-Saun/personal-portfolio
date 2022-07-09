import "../styles/globals.css";
import Navbar from "../modules/nav/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
