import Head from "next/head";
// import { CMS_NAME, CMS_URL, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta({ data = false }) {
  // console.log("SEO data", data);

  /* 
  
  title
  description
  
  */

  // Fallback data
  const defaultTitle = "LUCKY F*CK | An Energy Drink That Gives a F*ck";
  const defaultDescription =
    "We crafted our products with Beta-Alanine and Maca for sustained physical and mental endurance. Life is complicated, our energy drink isn't—5 super ingredients, zero sugar, zero after-taste. Dive deeper.";
  const defaultURL = "http://lucky-fuck-site.vercel.app";
  const defaultImage = "/images/preview_image_seo.png";
  const defaultSiteName = "Lucky F*ck Energy";
  const defaultLocale = "en_US";

  // Extract data
  const title =
    data?.product?.seo?.title ||
    data?.product?.title ||
    data?.page?.seo?.title ||
    data?.seo?.title ||
    data?.title ||
    defaultTitle;
  const description =
    data?.product?.seo?.description ||
    data?.product?.description ||
    data?.page?.seo?.description ||
    data?.seo?.description ||
    data?.description ||
    defaultDescription;
  const url = defaultURL + "/products/" + data?.product?.handle || data?.handle || defaultURL;
  const shareImage = data?.product?.featuredImage?.url || data?.shareImage || defaultImage;
  const opengraphSiteName = defaultSiteName;
  const locale = defaultLocale;

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/*  Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={opengraphSiteName} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:locale" content={locale} />

      {/* Twitter Specific Open Graph Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:site" content={opengraphSiteName} />

      {/* Indexing */}
      <meta name="robots" content="index,follow" />
    </Head>
  );
}
