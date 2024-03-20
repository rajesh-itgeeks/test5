import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y, FreeMode } from "swiper";
// import { isMobile } from "react-device-detect";
import ArrowWithCircleSVG from "../svgs/arrow-with-circle-svg";
import ProductCard from "../globals/cards/product-card";
import style from "./product-carousel.module.scss";
import "swiper/css";

function ProductCarousel({ data }) {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  const [isMobileView, setIsMobileView] = useState(true); // Always start with mobile view

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768); // adjust the value as needed
    };

    checkMobileView(); // Initial check on client-side only

    window.addEventListener("resize", checkMobileView); // Check when window resizes

    // Cleanup after component unmount
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const swiperProps = isMobileView
    ? {
        modules: [Navigation, A11y],
        loop: true,
        slidesPerView: 1,
        navigation: true,
        autoplay: false,
        navigation: {
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        },
      }
    : {
        speed: 7500,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        loop: true,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        grabCursor: true,
        navigation: false,
        navigation: {
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        },
        modules: [Navigation, Autoplay, A11y, FreeMode],
      };

  return (
    <>
      <section className={`${style.productCarousel} ${!isMobileView ? "swiper-container-free-mode" : ""}`}>
        <div className={style.container}>
          <Swiper
            key={isMobileView ? "mobile" : "desktop"}
            id={style.uniqueSliderName}
            className={style.swiperCarousel}
            onSwiper={setSwiper}
            {...swiperProps}>
            {data
              ? data.nodes
                  .filter((product) => !product.hide_product) // Updated filter
                  .map((product, index) => {
                    return (
                      <SwiperSlide key={`prodCard-${index}`} className={style.swiperSlide}>
                        <ProductCard data={product} />
                      </SwiperSlide>
                    );
                  })
              : ""}
          </Swiper>
          <div className={style.buttonWrap}>
            <div
              className={style.prevBtn}
              ref={prevRef}
              role="button"
              aria-label="Previous slide"
              aria-controls={style.uniqueSliderName}>
              <span>
                <ArrowWithCircleSVG />
              </span>
            </div>
            <div
              className={style.nextBtn}
              ref={nextRef}
              role="button"
              aria-label="Next slide"
              aria-controls={style.uniqueSliderName}>
              <span>
                <ArrowWithCircleSVG />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductCarousel;
