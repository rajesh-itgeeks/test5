import s from "./main-heading-section.module.scss";
import { Tween } from "react-gsap";
import SpinningAsterisk from "../svgs/spinning-asterisk";
import animateWords from "../ui/animate-words";
import { useRef, useEffect } from "react";

function MainHeadingSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    animateWords(containerRef);
  }, []);

  return (
    <section className={s.headingSection}>
      <img className={s.bgStar} alt="Bg-Star" src='/images/gray-star.svg' />
      <div className={`${s.container} container`} ref={containerRef}>
        <p className={`${s.mainTitle} `}>
          You Define Your{" "}
          <br />
          <span className={s.luck}>
            LUCK
          </span>
        </p>
      </div>
    </section>
  );
}

export default MainHeadingSection;
