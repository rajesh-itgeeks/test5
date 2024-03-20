import MarqueeGlobal from "../globals/marquee-global/marquee-global";
import ProductReviewSlider from "./product-review-slider";
import s from "./product-reviews.module.scss";

import YotpoReviews from "./yotpo-reviews-section";

const marqueeData1 = ["Product Reviews", "Product Reviews", "Product Reviews", "Product Reviews", "Product Reviews"];

function ProductReviews({ data }) {
  return (
    <>
      <section className={s.productReviews}>
        <div className={s.spacer}>
          <MarqueeGlobal data={marqueeData1} darkMode borderTop borderBottom />
        </div>

        {/* <ProductReviewSlider /> */}

        <div className={s.container}>
          <div className={s.reviewsContain}>
            <YotpoReviews data={data} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductReviews;
