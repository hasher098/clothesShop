import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../store/index";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import React, { FC } from "react";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
export default wrapper.withRedux(MyApp);
