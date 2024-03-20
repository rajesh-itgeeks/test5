import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y, Pagination } from "swiper";
import "swiper/css";
import Image from "next/image";
import ArrowWithCircleSVG from "../svgs/arrow-with-circle-svg";
import s from "./product-review-slider.module.scss";

function ProductReviewSlider({ images }) {
  const params = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: true,
    speed: 1000,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className={s.productReviewSlider}>
      <p className={`leadin-alt ${s.leadin}`}>Featured Reviews</p>
      <div className={s.productSliderInner}>
        <Swiper {...params}>
          {Array(4)
            .fill()
            .map((_, i) => (
              <SwiperSlide key={i}>
                <p className={`scroll-card-title ${s.quote}`}>
                  No sugar, no fillers. No after taste. <strong>Best energy drink I've had!</strong>
                </p>
                <p className={`value-card-type ${s.author}`}>
                  Pistol Pete <span className="value-detail">Fitness Influencer</span>
                </p>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className={s.btnWrap}>
          <div className={`${s.prevBtn} swiper-button-prev`} role="button" aria-label="Previous slide">
            <ArrowWithCircleSVG />
          </div>
          <div className={`${s.nextBtn} swiper-button-next`} role="button" aria-label="Next slide">
            <ArrowWithCircleSVG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviewSlider;
