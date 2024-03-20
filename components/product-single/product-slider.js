import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper";
import "swiper/css";
import Image from "next/image";
import ArrowWithCircleSVG from "../svgs/arrow-with-circle-svg";
import s from "./product-slider.module.scss";

function ProductPageSlider({ images }) {
  const params = {
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className={s.productSlider}>
      <div className={s.productSliderInner}>
        <Swiper {...params}>
          {images.map((image, index) => (
            <div key={index}>
              <SwiperSlide key={index}>
                <Image src={image?.url} alt={``} fill priority={true} />
              </SwiperSlide>
            </div>
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

export default ProductPageSlider;
