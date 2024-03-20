// import Alert from "../components/alert";
// import Footer from "../components/footer";
import { useRouter } from "next/router";
import Meta from "../components/meta";
import { useRef } from "react";
import { motion } from "framer-motion";

import Header from "./header";
import Footer from "./footer";

import CursorFollow from "./cursor-follow";
import { CursorFollowContextProvider } from "../context/cursor-follow-context";
import PageLoader from "./globals/page-loader/page-loader";

export default function Layout({ preview, children, cursor = true, menu, loaderBackground, loaderLogo }) {
  const router = useRouter();

  let loaderBg;

  if (router.query.slug) {
    loaderBg = loaderBackground;
  } else {
    loaderBg = "/images/loading-screen-bg.jpg";
  }

  const containerRef = useRef(null);

  const main = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  return (
    <>
      <CursorFollowContextProvider>
        <div className="pageContainer" ref={containerRef}>
          <Meta />
          <Header menu={menu} />

          <motion.div variants={main} initial="hidden" animate="enter" exit="exit" transition={{ duration: 1 }}>
            {children}
          </motion.div>

          <Footer global={globalData} />

          <PageLoader loaderBackground={loaderBg} loaderLogo={loaderLogo} />

          {cursor && <CursorFollow refVal={containerRef} />}
        </div>
      </CursorFollowContextProvider>
    </>
  );
}
