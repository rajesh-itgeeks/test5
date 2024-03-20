import Head from "next/head";
import Button from "../components/Button";
import Layout from "../components/layout";
import s from "./404.module.scss";
import { getGlobalData } from "../lib/api";
import Footer from "../components/footer";

export default function FourOhFour({ globalData }) {
  return (
    <>
      <Layout global={globalData}>
        <Head>
          <title>404 Missing Page</title>
        </Head>
        <div className={s.container}>
          <div className={s.contentContain}>
            <h3> Uh oh... where are you?</h3>
            <Button title="Go to Home" href="/" />
          </div>
        </div>
        <Footer global={globalData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const globalData = await getGlobalData();

  return {
    props: { globalData },
    revalidate: 600,
  };
}
