import Layout from "../../components/layout";
import Footer from "../../components/footer";
import OurStoryHero from "../../components/our-story/our-story-hero";
import ScrollingCards from "../../components/our-story/scrolling-cards";
import MarqueeGlobal from "../../components/globals/marquee-global/marquee-global";
import ValueCards from "../../components/our-story/value-cards";
import TitleHero from "../../components/our-story/title-hero";
import BigTitleImageText from "../../components/our-story/big-title-image-text";
import ProductsCta from "../../components/our-story/products-cta";
import { getourStoryPage, getGlobalData, getPageSingleData } from "../../lib/api";
import MainHeadingSection from "../../components/our-story/main-heading-section";
import styles from "../index-styles.module.scss";

function OurStory({ ourStoryPage, globalData, pageSeoData }) {
  // console.log(ourStoryPage);

  const marqueeDataFallback = [
    "Uncover Luck in your Past, Present, and Future",
    "Uncover Luck in your Past, Present, and Future",
  ];
  const ourStoryMarquee = ourStoryPage?.our_story_page_data?.hero_marquee?.value
    ? JSON.parse(ourStoryPage?.our_story_page_data?.hero_marquee?.value)
    : marqueeDataFallback;

  const cardData = ourStoryPage?.our_story_card_data;
  const missionData = ourStoryPage?.our_story_mission_data;
  console.log("cardData", cardData);
  return (
    <>
      <Layout seo={pageSeoData} global={globalData}>
        <OurStoryHero data={ourStoryPage} />
        <MarqueeGlobal data={ourStoryMarquee} darkMode borderBottom borderTop />
        <ScrollingCards data={cardData} />
        <TitleHero />
        <ValueCards />

        <div className={styles.mainContainer}>
          <img className={styles.bgStar} alt="Bg-Star" src='/images/gray-star.svg' />
          {missionData?.nodes?.map((entry, index) => {
            return <BigTitleImageText key={index} data={entry} reverse={index % 2 === 0} />;
          })}
          <img className={styles.starImg} src="/images/our-version-left.svg" alt="Icon-star"/>
        </div>

        <ProductsCta />
        <Footer global={globalData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const ourStoryPage = await getourStoryPage();
  const globalData = await getGlobalData();
  const pageSeoData = await getPageSingleData("our-story");

  return {
    props: { ourStoryPage, globalData, pageSeoData },
    revalidate: 60,
  };
}

export default OurStory;
