import Layout from '../../components/layout';
import { useState, useEffect, createRef } from 'react';
import ProductSection from '../../components/product-overview/product-section';
// import productObj from "../../productDummyObject";
import Footer from '../../components/footer';
import { getCollectionData, getGlobalData } from '../../lib/api';
import style from './product-index.module.scss';
import Link from 'next/link';
import ArrowCircleSVG from '../../components/svgs/uparrow';
import ArrowWithCircleSVG from '../../components/svgs/arrow-with-circle-svg';
import { useRouter } from 'next/router';
import ProductsRelated from '../../components/product-single/products-related';

function ProductOverview({ collectionData: { collections }, globalData }) {
  const [refs, setRefs] = useState([]);

  console.log({ collections });

  useEffect(() => {
    // Reset refs array when collections change
    setRefs(collections?.nodes.map(() => createRef()) || []);
  }, [collections]);

  const handleClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionRef) => {
    return () => handleClick(sectionRef);
  };
  const router = useRouter()
  const firstCollection = { collection: collections?.nodes?.[0] }

  return (
    <>
      <Layout global={globalData}>
        <div className={style.faqContainer}>
          <img className={style.faqBg} src='/images/mobile-star.svg' alt='Star' />
          <div className={style.btnWrap}>
            <div
              className={`${style.prevBtn} swiper-button-prev`}
              role='button'
              aria-label='Previous slide'
            >
              <div onClick={() => router.back()}>
                <ArrowWithCircleSVG />
              </div>
            </div>
          </div>
          <p
            style={{ textAlign: 'center', color: 'white' }}
            className='faqHeaderText'
          >
            Shop
          </p>
          <div className={style.webeProducts}>
            {collections?.nodes.map((collection, index) => {
              const isEven = index % 2 === 0;
              const isFirst = index === 0;

              return (
                <div className={style.prodCards} key={index}>
                  <ProductSection
                    category={collection?.handle}
                    data={collection?.products?.nodes}
                    darkMode={isEven}
                    noImagePadding={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <Footer global={globalData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const collectionData = await getCollectionData('custom', 'marquee_callout');
  const globalData = await getGlobalData();

  return {
    props: { collectionData, globalData },
    revalidate: 60,
  };
}

export default ProductOverview;
