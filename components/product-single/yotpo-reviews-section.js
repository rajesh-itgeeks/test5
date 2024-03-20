import { useEffect, useState } from "react";
import s from "./yotpo-reviews-section.module.scss";
import Button from "../Button";

import StarRatings from "./star-rating";
import YotpoReviewsForm from "./yotpo-reviews-form";

export default function YotpoReviews({ data }) {
  const [bottomLineData, setBottomLineData] = useState(null);
  const [productReviews, setProductReviews] = useState([]);
  const [showFullReview, setShowFullReview] = useState(null);
  const productIdRaw = data?.product?.id;
  const productId = parseInt(productIdRaw.match(/\d+/)[0]);

  const [totalReviewsCount, setTotalReviews] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // initial page
  const reviewsPerPage = 3; // number of reviews per page

  useEffect(() => {
    const appKey = "Vwa35j9mbSEDRlo8P9yGQjHDpOazYi2AwiUlG9ga";
    const reviewApiUrl = `https://api-cdn.yotpo.com/v1/widget/${appKey}/products/${productId}/reviews.json?per_page=${reviewsPerPage}&page=${currentPage}`;

    const fetchReviews = fetch(reviewApiUrl).then((response) => response.json());

    Promise.all([fetchReviews])
      .then(([reviewsJson]) => {
        if (reviewsJson && reviewsJson.response) {
          setBottomLineData(reviewsJson.response);
          setProductReviews([...productReviews, ...reviewsJson.response.reviews]);
          setTotalReviews(reviewsJson.response.pagination.total);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId, currentPage]);

  let totalReviews = productReviews?.total_reviews;
  let averageScore = bottomLineData?.bottomline?.average_score.toFixed(1);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1); // load the next page of reviews
  };

  const trimContent = (content) => {
    const maxLength = 500; // Set your desired max length
    if (content.length > maxLength) {
      return `${content.substring(0, maxLength)}...`;
    }
    return content;
  };

  return (
    <div className={s.YotpoReviews}>
      <div className={s.reviewTotal}>
        <div className={s.reviewScore}>
          <span className="large-display">{averageScore}</span>
        </div>

        <div className={s.reviewStars}>{averageScore && <StarRatings rating={averageScore} large />}</div>

        {totalReviews < 1 && (
          <div className={s.reviewBase}>
            <p className="large">
              Based on {totalReviews} {totalReviews > 1 ? "Reviews" : "Review"}
            </p>
          </div>
        )}
      </div>

      <div className={s.reviewFormContain}>
        <YotpoReviewsForm productIdMain={productId} data={data} />
      </div>

      <div className={s.reviewCardContain}>
        {productReviews &&
          productReviews?.map((review) => (
            <div className={s.reviewCard} key={review.id}>
              <div className={s.reviewUser}>
                <p className={`value-card-type ${s.displayName}`}>{review?.user?.display_name}</p>
                <p className={`verified-buyer ${s.verifiedBuyer}`}>Verified Buyer</p>
                {averageScore && (
                  <div className={`${s.starsContain}`}>
                    <StarRatings rating={review?.score} stars />
                  </div>
                )}
              </div>

              <div className={s.reviewBody}>
                {showFullReview === review.id ? (
                  <p dangerouslySetInnerHTML={{ __html: review.content }} />
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: trimContent(review.content) }} />
                )}

                {review.content.length > 500 ? (
                  <span
                    className={`small-detail ${s.readMore}`}
                    onClick={() => setShowFullReview(showFullReview === review.id ? null : review.id)}>
                    {showFullReview === review.id ? "[Read less]" : "[Read more]"}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
      </div>

      {productReviews.length < totalReviewsCount && (
        <div className={s.loadmoreButton}>
          <Button title="Load More" transparentColor bordered noHref onClick={handleLoadMore} />{" "}
        </div>
      )}
    </div>
  );
}
