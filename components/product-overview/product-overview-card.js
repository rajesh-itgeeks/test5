import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button";
import StarRatings from "../product-single/star-rating";
import s from "./product-overview-card.module.scss";

function productOverviewCard({ data, noImagePadding, darkMode }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const productCost = (data) => {
    // Extract the required properties at once.
    const minPriceAmount = data?.priceRange?.minVariantPrice?.amount;
    const maxPriceAmount = data?.priceRange?.maxVariantPrice?.amount;

    // Check if the properties exist and the amounts are not equal.
    if (minPriceAmount && maxPriceAmount && minPriceAmount !== maxPriceAmount) {
      return `${formatter.format(minPriceAmount)} - ${formatter.format(
        maxPriceAmount
      )}`;
    } else {
      return formatter.format(minPriceAmount);
    }
  };
  const [bottomLineData, setBottomLineData] = useState(null);
  const productIdRaw = data?.id;
  const productId = parseInt(productIdRaw?.match(/\d+/)[0]);

  useEffect(() => {
    const appKey = "Vwa35j9mbSEDRlo8P9yGQjHDpOazYi2AwiUlG9ga";
    const bottomLineApiUrl = `https://api.yotpo.com/products/${appKey}/${productId}/bottomline`;

    const fetchBottomLineData = fetch(bottomLineApiUrl).then((response) =>
      response.json()
    );

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
  let averageScore = bottomLineData?.bottomline?.average_score.toFixed(1) || 0;
  const variantTitles = (data) => {
    return data?.map((node, index) => {
      if (index === data.length - 1) {
        return <span key={index}>{`${node.title}`}</span>;
      } else {
        return <span key={index}>{`${node.title}, `}</span>;
      }
    });
  };
  return (
    <>
      <div
        className={`${s.productCard} ${
          noImagePadding ? s.noImagePadding : null
        } ${darkMode ? s.darkMode : null}`}
      >
        <section>
          <div className={s.imgContain}>
            <Image
              src={data?.featuredImage?.url}
              fill
              className={s.productImg}
              alt={`Can with label rendering of ${data?.title}`}
              sizes="(min-width: 1200px) 700px,
              (min-width: 768px) 350px,
              325px"
            />
          </div>

          <div className={s.productInfo}>
            {/* <ArrowWithCircleSVG /> */}
            <h5 className={`${s.productTitle} h5 related-product-title`}>
              {data?.title}
            </h5>
            <div style={{ marginBottom: "1rem" }}>
              {/* This contains dummy data for now we want real data from API */}
              <StarRatings rating={parseFloat(averageScore)} />
            </div>
            <div
              className={`${s.productCost} product-cost related-product-cost`}
            >
              <span>{productCost(data)} </span>
              {/* <span className="product-details">({variantTitles(data?.variants?.nodes)})</span> */}
            </div>
            <Link href={`/products/${data?.handle}`}>
              <Button title={"View Product"} className={s.formBtn} formSubmit />
            </Link>
            <div className={`${s.productDesc} related-product-description`}>
              <p className="product-details">
                {data?.productOverviewText?.value}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default productOverviewCard;
