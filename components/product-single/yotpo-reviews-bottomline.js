import { useEffect, useState } from "react";
import s from "./yotpo-reviews-bottomline.module.scss";

import StarRatings from "./star-rating";

export default function YotpoBottomline({ data }) {
  const [bottomLineData, setBottomLineData] = useState(null);
  // const [productReviews, setProductReviews] = useState([]);
  const productIdRaw = data?.product?.id;
  const productId = parseInt(productIdRaw.match(/\d+/)[0]);

  useEffect(() => {
    const appKey = "Vwa35j9mbSEDRlo8P9yGQjHDpOazYi2AwiUlG9ga";
    const bottomLineApiUrl = `https://api.yotpo.com/products/${appKey}/${productId}/bottomline`;

    const fetchBottomLineData = fetch(bottomLineApiUrl).then((response) => response.json());

    Promise.all([fetchBottomLineData])
      .then(([bottomLineJson]) => {
        if (bottomLineJson && bottomLineJson.response) {
          setBottomLineData(bottomLineJson.response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  let totalReviews = bottomLineData?.bottomline?.total_reviews;
  let averageScore = bottomLineData?.bottomline?.average_score.toFixed(1);

  return (
    <div className={s.YotpoBottomline}>
      <div className={s.reviewTotal}>
        <div className={s.reviewStars}>
              <StarRatings rating={averageScore} />
              <div className={`value-detail ${s.bottomlineTotal}`}>
                {totalReviews} {totalReviews > 1 ? "Reviews" : "Review"}
              </div>
        </div>
      </div>
    </div>
  );
}
