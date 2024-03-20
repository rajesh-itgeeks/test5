import style from "./marquee-image-carousel.module.scss";
import Image from "next/image";
import { Autoplay, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";

function MarqueeImageCarousel({ data }) {
  if (isMobile) {
    return (
      <section className={`swiper-container-free-mode ${style.marqueeImageCarousel}`}>
        <Swiper
          speed={15000}
          autoplay={{
            // delay: 5,
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={false}
          slidesPerView={"auto"}
          watchSlidesProgress={"true"}
          className={style.imageSlideWrapper}
          modules={[Autoplay, A11y, FreeMode]}>
          {data.images.map((slide, index) => {
            return (
              <SwiperSlide key={index} className={style.card}>
                <Image src={slide.mediaItemUrl} alt={slide.altText} fill/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  } else {
    return (
      <section className={`swiper-container-free-mode ${style.marqueeImageCarousel}`}>
        <Swiper
          speed={15000}
          autoplay={{
            // delay: 5,
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          slidesPerView={"auto"}
          watchSlidesProgress={"true"}
          className={style.imageSlideWrapper}
          modules={[Autoplay, A11y, FreeMode]}>
          {data.images.map((slide, index) => {
            return (
              <SwiperSlide key={index} className={style.card}>
                <Image src={slide.mediaItemUrl} alt={slide.altText} fill/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  }
}

export default MarqueeImageCarousel;
