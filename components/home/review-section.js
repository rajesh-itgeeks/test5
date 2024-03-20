import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ArrowCircleSVG from "../svgs/uparrow";
import style from "./review-section.module.scss";

const ReviewSection = (props) => {
  const [settings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  });

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, visibility: "hidden", background: "green" }}
        onClick={onClick}
      >
        <div
          className={"accentArrow"}
          style={{ visibility: "visible", rotate: "90deg" }}
        >
          <ArrowCircleSVG color="#FFFFFF" />
        </div>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          visibility: "hidden",
          background: "green",
          marginLeft: "-10px",
        }}
        onClick={onClick}
      >
        <div
          className={"accentArrow"}
          style={{ visibility: "visible", rotate: "-90deg" }}
        >
          <ArrowCircleSVG color="#FFFFFF" />
        </div>
      </div>
    );
  }

  const carouselRef = useRef(null);
  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  const handlePrev = () => {
    carouselRef.current.slickPrev();
  };
  console.log(props.data?.product);
  return (
    <div className={style.reviewContainer}>
      {props.data?.product?.id == "gid://shopify/Product/8315820048669" && ( //Bodacious berry
        <div
          class="elfsight-app-2ce9879d-63aa-4d06-abce-b6d10adfc75d"
          data-elfsight-app-lazy
        ></div>
      )}
      {props.data?.product?.id == "gid://shopify/Product/8321592590621" && ( //OG LUCK
        <div
          class="elfsight-app-42bfa23c-e92e-4307-81a5-47e3e19b0df8"
          data-elfsight-app-lazy
        ></div>
      )}
      {props.data?.product?.id == "gid://shopify/Product/8315700969757" && ( //Tropical Thrill:
        <div
          class="elfsight-app-4f2be600-910f-4175-9ff5-70490d9867cd"
          data-elfsight-app-lazy
        ></div>
      )}
      {props.data?.product?.id == "gid://shopify/Product/8321552449821" && ( //Orange Drizzle:
        <div
          class="elfsight-app-900f4c97-45dc-4cc3-ab7f-e8caf4ebf515"
          data-elfsight-app-lazy
        ></div>
      )}
      {props.data?.product?.id == "gid://shopify/Product/8321584726301" && ( //red ryder Punch:
        <div
          class="elfsight-app-da7dea17-dad4-4819-acb2-071536b1c99e"
          data-elfsight-app-lazy
        ></div>
      )}
      {typeof props.data?.product?.id == "undefined" && ( //OG LUCK
        <div
          class="elfsight-app-42bfa23c-e92e-4307-81a5-47e3e19b0df8"
          data-elfsight-app-lazy
        ></div>
      )}
      {/* <img className={style.faqBg} src='/images/mobile-star.svg' alt='Star' />
			<h4 className={style.header}>Reviews</h4>
			<div className={style.totalRatingContainer} >
				<div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
					<AmazonSVG />
					<span className='faqQuestion' style={{ color: '#FFF' }}>Rating</span>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', marginTop: '0.375rem', gap: '0.563rem' }}>
					<span className='inter-n-22-600' style={{ color: '#fff' }}>5.0</span>
					<RatingStars rating={5} />
					<span className='inter-n-15-400' style={{ color: '#FFF' }}>{Number(2131).toLocaleString()} reviews</span>
				</div>
			</div>
			<div>
				<Slider ref={carouselRef} {...settings} >
					<ReviewBox />
					<ReviewBox />
					<ReviewBox />
					<ReviewBox />
					<ReviewBox />
					<ReviewBox />
					<ReviewBox />
					<ReviewBox />
				</Slider>
				<div className={style.mobileArrows}>
					<div
						onClick={handlePrev}
						className={style.left}><ArrowCircleSVG color="#FFFFFF" width='32' height='32' /></div>
					<div
						onClick={handleNext}
						className={style.right}><ArrowCircleSVG color="#FFFFFF" width='32' height='32' /></div>
				</div>
			</div> */}
    </div>
  );
};

export default ReviewSection;
