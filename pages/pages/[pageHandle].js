import Footer from "../../components/footer";
import Layout from "../../components/layout";
import s from "./pages-default.module.scss";
import { getGlobalData, getPagePaths, getPageSingleData } from "../../lib/api";
import ArrowWithCircleSVG from "../../components/svgs/arrow-with-circle-svg";

function PageDefault({ globalData, pageData }) {
  const data = pageData.page;

  return (
    <>
      <Layout global={globalData} seo={data} lightMode>
        <section className={s.pageDefault}>
          <div className={s.container}>
            <div className={s.titleContain}>
              <h1 className={`${s.pageTitle} h1-alt`}>
                {data?.title}
                <div className={s.arrowContain}>
                  <ArrowWithCircleSVG />
                </div>
              </h1>
            </div>
            <div className={s.contentContain} dangerouslySetInnerHTML={{ __html: data?.body }} />
          </div>
        </section>
        <Footer global={globalData} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const pagesPathData = await getPagePaths();
  const pagesPaths = pagesPathData.pages.nodes.map((item, index) => `/pages/${item.handle}`) || [];

  return {
    paths: pagesPaths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { pageHandle } }) {
  const globalData = await getGlobalData();
  const pageData = await getPageSingleData(pageHandle);

  return {
    props: { globalData, pageData },
    revalidate: 60, // 10 seconds, will need to increase this after launch
  };
}

export default PageDefault;
