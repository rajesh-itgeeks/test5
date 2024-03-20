import Head from "next/head";
import Layout from "../components/layout";
import Footer from "../components/footer";
import NewFooter from "../components/NewFooter";

import style from "./index-styles.module.scss";

import HomeHero from "../components/home/home-hero";
import VideoSectionWithModal from "../components/home/video-section-with-modal";
import HomeIntroText from "../components/home/home-intro-text";
import TextScrollAnimation from "../components/home/text-scroll-animation";
import ProductCarousel from "../components/home/product-carousel";
import MarqueeGlobal from "../components/globals/marquee-global/marquee-global";
import TitleImageTextSection from "../components/home/title-image-text-section";
import { getHomePage, getCollectionData, getGlobalData, getPageSingleData } from "../lib/api";
import Ingredients from "../components/globals/ingredients/ingredients";
import FAQSection from '../components/home/faq-section';
import ReviewSection from '../components/home/review-section';
import ProductsRelated from "../components/product-single/products-related";

export default function HomePage({ homePageData, collectionData, globalData, pageSeoData }) {
  const beverageData = collectionData.collections.nodes.filter((target) => target.handle === "beverages")[0].products;
  const pageData = homePageData.metaobject;
  const firstCollection = {collection: collectionData?.collections?.nodes?.[0]}
  console.log("pageData", firstCollection);
  //This is a dummy data, we'll need data from API to show ingredients data
  const dummyIngredientsData = {
    after_taste: 0,
    sugar: 0,
    calories: 5,
    super_ingredients: 5,
  }

  return (
    <>
      <Layout global={globalData} seo={pageSeoData}>
        <div className={style.wrapper}>
          <HomeHero />
          <MarqueeGlobal data={JSON.parse(pageData?.marquee_two?.value)} darkMode reverse borderBottom />
          <MarqueeGlobal data={JSON.parse(pageData?.marquee_one?.value)} />
          <Ingredients data={dummyIngredientsData}/>
          <VideoSectionWithModal data={pageData} />
          {/* <HomeIntroText /> */}
          <TextScrollAnimation data={firstCollection} />
          {/* <ProductCarousel data={beverageData} /> */}
          <ReviewSection />
          <FAQSection />
          {/* <TitleImageTextSection data={pageData} /> */}
          <Footer global={globalData} />
          {/* <NewFooter /> */}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const collectionData = await getCollectionData("custom", "marquee_callout");
  const globalData = await getGlobalData();
  const pageSeoData = await getPageSingleData("home");

  return {
    props: { homePageData, collectionData, globalData, pageSeoData },
    revalidate: 30,
  };
}
