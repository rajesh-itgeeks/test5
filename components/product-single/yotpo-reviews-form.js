import { useState, useRef } from "react";
import s from "./yotpo-reviews-form.module.scss";
import Button from "../Button";
import Star from "../svgs/star";

export default function YotpoReviews({ data, productIdMain }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [selectedStar, setSelectedStar] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(null);

  const emailInputRef = useRef();
  const authorInputRef = useRef();
  const titleInputRef = useRef();
  const messageInputRef = useRef();

  async function submitReview() {
    const appKey = "Vwa35j9mbSEDRlo8P9yGQjHDpOazYi2AwiUlG9ga";
    const productId = productIdMain;
    const productTitle = data?.product?.title;
    const productUrl = `https://lucky-fuck-site.vercel.app/products/${data?.product?.handle}`;
    setButtonDisabled(true);

    const response = await fetch("/api/yotpo-review-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appkey: appKey,
        sku: productId,
        product_title: productTitle,
        product_url: productUrl,
        display_name: authorInputRef.current?.value,
        email: emailInputRef.current?.value,
        review_content: messageInputRef.current?.value,
        review_title: titleInputRef.current?.value,
        review_score: starRefs.map((ref) => (ref.current.checked ? ref.current.value : null)).filter(Boolean)[0],
      }),
    });

    if (response.ok) {
      // if submission is successful, hide the form and show a success message

      setShowReviewForm(false);
      setSubmissionSuccess(true);
    }
  }

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const starRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((value) => (
      <label className={s.stars} key={value} onMouseEnter={() => setHoveredStar(value)} onMouseLeave={() => setHoveredStar(null)}>
        <input
          style={{ display: "none" }} // Hide the radio input
          required
          type="radio"
          name="stars"
          value={value}
          onChange={() => setSelectedStar(value)}
          ref={starRefs[value - 1]} // use the array of refs
        />
        <Star fill={value <= (hoveredStar || selectedStar) ? "#FFF" : "none"} />
      </label>
    ));
  };

  return (
    <div className={s.YotpoReviewsForm}>
      <div className={s.reviewsButton}>
        <p className={`${s.leadin} leadin`}>Reviews</p>{" "}
        <Button
          title={!showReviewForm ? `Write a Review` : `Close`}
          transparentColor
          bordered
          noHref
          onClick={toggleReviewForm}
        />
      </div>

      {submissionSuccess && <p className={`leadin ${s.thankYouMessage}`}>Thank you! Your review has been submitted.</p>}
      {showReviewForm && (
        <form>
          <input required style={{ display: "block" }} placeholder="Email" type="email" ref={emailInputRef} />
          <input required style={{ display: "block" }} placeholder="Your name" ref={authorInputRef} />
          <div>{renderStars()}</div>
          <input required style={{ display: "block" }} placeholder="Title" ref={titleInputRef} />
          <textarea required style={{ display: "block" }} placeholder="How was your experience?" ref={messageInputRef} />

          <Button
            disabled={buttonDisabled}
            title={buttonDisabled ? "Sending..." : "Submit"}
            className={s.formBtn}
            noHref
            onClick={() => submitReview()}
            transparentColor
            bordered
          />
        </form>
      )}
    </div>
  );
}
