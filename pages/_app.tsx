import "../styles/globals.css";
import { wrapper } from "../store/index";
import React, { FC } from "react";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
