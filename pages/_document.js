import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Adobe Fonts updated */}
          <link rel="stylesheet" href="https://use.typekit.net/uav7wvl.css" />
        </Head>
        <body className="no-scroll">
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `commented
                 <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58K6KF83"
                 height="0" width="0" style="display:none;visibility:hidden"></iframe>
               `,
            }}
          /> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                 <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVXCC2XX"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
               `,
            }}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
