import s from "./title-hero.module.scss";
import { Tween } from "react-gsap";
import SpinningAsterisk from "../svgs/spinning-asterisk";
import animateWords from "../ui/animate-words";
import { useRef, useEffect } from "react";

function TitleHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    animateWords(containerRef);
  }, []);

  return (
    <section className={s.titleHero}>
      <div className={`${s.container} container`} ref={containerRef}>
        <h2 className={`${s.mainTitle} h2`}>
          Values that Give a flying{" "}
          <span>
            f
            <span>
              <Tween
                to={{
                  rotate: 360,
                  scrollTrigger: {
                    trigger: ".container",
                    start: `top bottom`,
                    end: `bottom top`,
                    scrub: 1,
                    // markers: true,
                  },
                }}>
                <div className={s.extraSpin}>
                  <SpinningAsterisk mobile />
                </div>
              </Tween>
            </span>
           <span className={s.ck}> ck.</span>
          </span>
        </h2>
      </div>
    </section>
  );
}

export default TitleHero;
