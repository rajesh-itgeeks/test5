import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import { getGlobalData } from "../../lib/api";

const storelocator = ({ globalData }) => {
  const router = useRouter();

  useEffect(() => {
    // window.renderMap = function () {
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "https://cdn.storerocket.io/js/widget-mb.js";
    //   var body = document.getElementsByTagName("head")[0];
    //   body.append(s);
    // };
    // setTimeout(() => {
    //   window.renderMap();
    // }, 500);
  }, []);
  return (
    <>
      <Layout global={globalData}>
        {/* <Script></Script> */}
        {/* <Script
          src="https://cdn.storerocket.io/js/widget-mb.js"
          strategy="beforeInteractive"
        ></Script> */}

        <iframe
          style={{ height: "600px", width: "100%", marginTop: "100px" }}
          frameBorder={0}
          src="/locater.html"
        ></iframe>
        <Footer global={globalData} hideMarquee />
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  // const ourStoryPage = await getourStoryPage();
  const globalData = await getGlobalData();

  return {
    props: { globalData },
    revalidate: 60,
  };
}

export default storelocator;
