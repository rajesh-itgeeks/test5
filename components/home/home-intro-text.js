import style from "./home-intro-text.module.scss";
import { useRef, useEffect } from "react";
import animateWords from "../ui/animate-words";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeIntroText({ data }) {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    animateWords(containerRef);

    const mediaElement = mediaRef.current;

    gsap.fromTo(
      mediaElement,
      { y: "-20vw" },
      {
        y: "40vw",
        duration: 1,
        ease: "linear.easeNone",
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top bottom",
          end: "bottom top",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className={style.homeIntroText}>
      <div className={style.container}>
        <div className={style.contentContain}>
          <div
            className={`${style.textContain} h3`}
            style={{ opacity: 0 }}
            ref={containerRef}
            dangerouslySetInnerHTML={{
              __html: `LUCKY F*CK IS THE STORY OF PERSEVERANCE, BLIND FAITH, AND <strong>NEVER GIVING UP ON YOURSELF.</strong>`,
            }}
          />

          <div className={style.mediaContain} ref={mediaRef}>
            <video playsInline muted loop autoPlay>
              <source src={"media/coin-white.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div ref={lineRef} className={style.divider}></div>
      </div>
    </section>
  );
}

export default HomeIntroText;
