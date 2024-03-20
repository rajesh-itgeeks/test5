import s from "./scroll-direction-marquee.module.scss";
import Image from "next/image";
import { debounce } from "lodash";
import { useEffect, useRef, useState, Fragment } from "react";
import gsap from "gsap";

const ScrollDirectionMarquee = ({ darkMode = false, data }) => {
  // console.log(data);
  const innerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const calculateWidths = useRef(() => {});
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    calculateWidths.current = () => {
      setTotalWidth(innerRef?.current?.scrollWidth / 2);
    };
  }, []);

  useEffect(() => {
    // Calculate widths once all images are loaded
    calculateWidths.current();

    // Recalculate widths on window resize
    const handleResize = debounce(() => {
      calculateWidths.current();
    }, 1000);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;
    let lastScrollY = window.scrollY;
    let ticking = false;

    gsap.set(innerRef.current, { x: "0px" });

    const tween = gsap
      .to(innerRef.current, {
        x: () => `-${totalWidth}px`,
        repeat: -1,
        duration: 25,
        ease: "linear",
      })
      .totalProgress(0.5);

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > currentScroll) {
            isScrollingDown = true;
          } else {
            isScrollingDown = false;
          }

          gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -1,
          });

          currentScroll = lastScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [totalWidth]); // Run this effect when totalWidth changes

  return (
    <section className={`${s.scrollDirectionMarquee} ${darkMode ? s.darkMode : false}`}>
      <div className={s.container} aria-hidden="true" ref={innerRef}>
        {Array(2)
          .fill()
          .map((_, i) =>
            data
              ? data.map((item, index) => (
                  <Fragment key={index}>
                    <div className={s.imageWrapper}>
                      <Image
                        src={item?.image?.url}
                        fill
                        className={s.marqueeImg}
                        alt="Footer Lifestyle Image"
                        aria-hidden="true"
                        // priority={true}
                      />
                    </div>
                  </Fragment>
                ))
              : Array(4)
                  .fill()
                  .map((_, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className={s.imageWrapper}>
                          <Image
                            src={`/images/img-marquee/img-marq-${idx + 1}.png`}
                            fill
                            className={s.marqueeImg}
                            alt="Footer Lifestyle Image"
                            aria-hidden="true"
                            // priority={true}
                          />
                        </div>
                      </Fragment>
                    );
                  })
          )}
      </div>
    </section>
  );
};

export default ScrollDirectionMarquee;
