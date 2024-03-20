import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import useFoucFix from "../components/ui/use-fouc-fix";
import "../styles/main.scss";

import Head from "next/head";
import { CartProviderContext } from "../context/cart-context";

import {
  AnalyticsEventName,
  getClientBrowserParameters,
  sendShopifyAnalytics,
  useShopifyCookies,
} from "@shopify/hydrogen-react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useFoucFix();

  // Set shop data
  const analyticsShopData = {
    shopId: "gid://shopify/Shop/74496835869",
    currency: "USD",
    acceptedLanguage: "en",
  };

  // const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();
  const hasUserConsent = true;

  const analytics = {
    hasUserConsent,
    ...analyticsShopData,
    ...pageProps.analytics,
  };

  const pagePropsWithAppAnalytics = {
    ...pageProps,
    analytics,
  };

  function sendPageView(analyticsPageData) {
    const payload = {
      ...getClientBrowserParameters(),
      ...analyticsPageData,
    };

    sendShopifyAnalytics(
      {
        eventName: AnalyticsEventName.PAGE_VIEW,
        payload,
      },
      "luckyfck.myshopify.com"
    );
  }

  useEffect(() => {
    const handleRouteChange = () => {
      sendPageView(analytics);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [analytics, router.events]);

  // Use the useShopifyCookies hook after consent is given
  // if (hasUserConsent) {
  //   useShopifyCookies({hasUserConsent: true});
  // }

  useShopifyCookies({ hasUserConsent: true, domain: "luckyfckenergy.com" });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVXCC2XX');
      `}
      </Script> */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVXCC2XX');`}</Script>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>

      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <CartProviderContext>
          <Component {...pagePropsWithAppAnalytics} key={router.asPath} />
        </CartProviderContext>
      </AnimatePresence>

      <div className="static"></div>
    </>
  );
}

export default MyApp;
