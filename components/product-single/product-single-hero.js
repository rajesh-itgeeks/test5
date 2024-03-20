// import Image from "next/image";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Dropdown from '../dropdown';
import AddToCartForm from '../globals/ecomm/add-to-cart-form';
import ArrowWithCircleSVG from '../svgs/arrow-with-circle-svg';
import s from './product-single-hero.module.scss';
import YotpoBottomline from './yotpo-reviews-bottomline';

function ProductSingleHero({ data, cookies, relatedProducts, onNtClick }) {
  const productData = data.product;
  const router = useRouter();
  const [options, setOptions] = useState([
    'Red Ryder Punch',
    'Orange Drizzle',
    'Tropical Thrill',
    'Og Luck',
    'Bodacious Berry',
  ]);
  const availableOptions = relatedProducts?.collection?.products?.nodes?.map(
    (product) => {
      return {
        label: product.title,
        value: product.handle,
      };
    }
  );
  const onVarinateChange = (fl) => {
    window.location.href = `/products/${fl?.value}`;
  };
  return (
    <>
      <section className={s.productHero + ' product-hero-single'}>
        <img
          className={s.bgStar}
          alt='Bg-Star'
          src='/images/hero-small-star.svg'
        />

        <div className={s.container}>
          <div className={s.productMedia + ' single-product-media'}>
            <div className={s.btnWrap}>
              <div
                className={`${s.prevBtn} swiper-button-prev`}
                role='button'
                aria-label='Previous slide'
              >
                <div onClick={() => router.back()}>
                  <ArrowWithCircleSVG />
                </div>
              </div>
            </div>
            {/* <div className={s.icon}>
							<Link href={'/'}>
								<BackButton />
							</Link>
						</div> */}
            <div className={s.mediaContainer}>
              <img
                src={productData?.images?.nodes?.[0]?.url}
                alt={``}
              />
            </div>
          </div>

          <div className={s.productInfo}>
            <div className={s.titleContainer}>
              <h1 className={`${s.productTitle} product-title`}>
                {productData?.title}
              </h1>
             <div className={s.ddCont}>
             <div
                className={'product-single-filter'}
                style={{ padding: 0, margin: 0 }}
              >
                <Dropdown
                  currenLabel={productData?.title}
                  onChange={(fl) => onVarinateChange(fl)}
                  options={availableOptions}
                />
                {/* <p>Switch Flavor</p>
								<div>
									<img src='/images/chevron-down.svg' alt='Chevron Down' />
								</div> */}
              </div>
             </div>
            </div>
            <div className={`${s.productCost}  product-single-cost`}>
              <AddToCartForm
                priceOnly
                product={productData}
                variantId={productData?.variants?.nodes[0]?.id}
                variants={productData?.variants?.nodes}
                cookies={cookies}
              />
            </div>
            <div className={s.reviewsContain}>
              <YotpoBottomline data={data} />
            </div>
            <div className={`${s.productDesc}`}>
              <p className='product-description'>{productData?.description}</p>
            </div>
            <div className={s.dvnContainer}>
              <div className={`${s.valuePropBadges} product-single-badges`}>
                <div className={s.badgeContain}>
                  <img src={`/images/value-prop-badges/value-prop-badge1.svg`} />
                </div>
                <div className={s.badgeContain}>
                  <img src={`/images/value-prop-badges/value-prop-badge2.svg`} />
                </div>
                <div className={s.badgeContain}>
                  <img src={`/images/value-prop-badges/value-prop-badge3.svg`} />
                </div>
                <div className={s.badgeContain}>
                  <img src={`/images/value-prop-badges/value-prop-badge4.svg`} />
                </div>
              </div>
              <div className={s.ntFacts}>
                <button onClick={onNtClick}>View Nutritional Facts</button>
              </div>
            </div>

            <div className={s.cartForm}>
              <AddToCartForm
                product={productData}
                variantId={productData?.variants?.nodes[0]?.id}
                variants={productData?.variants?.nodes}
                cookies={cookies}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSingleHero;
