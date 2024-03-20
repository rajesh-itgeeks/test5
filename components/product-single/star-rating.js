import s from "./star-rating.module.scss";

function StarRatings({ rating = 0, stars, large }) {
  // Round to the nearest half
  const starCount = Math.floor(rating * 2) / 2;

  // Split the number into whole and fractional part
  const wholeStars = Math.floor(starCount);
  const halfStars = starCount % 1 ? 1 : 0;
  const emptyStars = 5 - wholeStars - halfStars;

  const wholeStarsImg = "/images/star-full.svg";
  const emptyStarsImg = "/images/star-empty.svg";

  return (
    <div className={`${s.starRatings} ${large ? s.large : null}`}>
      {[...Array(wholeStars)].map((e, i) => (
        <img key={i} src={wholeStarsImg} alt="full star" />
      ))}

      {[...Array(emptyStars)].map((e, i) => (
        <img key={i + wholeStars + halfStars} src={emptyStarsImg} alt="empty star" />
      ))}
    </div>
  );
}

export default StarRatings;
