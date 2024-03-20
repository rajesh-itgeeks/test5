import s from "./our-story-hero.module.scss";
import SpinningAsterisk from "../svgs/spinning-asterisk";
import BigSpin from "../svgs/big-spin";
import Image from "next/image";
import { fadeInUp } from "../ui/animations";
import { motion } from "framer-motion";
import { Tween, ScrollTrigger } from "react-gsap";
import { useEffect, useRef } from "react";
import animateWords from "../ui/animate-words";
import BackButton from "../globals/back-button/back-button";
import Link from "next/link";
import ArrowWithCircleSVG from "../svgs/arrow-with-circle-svg";
import { useRouter } from "next/router";
import TextAsterik from "../svgs/text-asterick";

const customFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { delay: 0.2, duration: 1.2 } },
  viewport: { margin: "0% 0%", once: true },
};
function ourStoryHero({ data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    animateWords(containerRef);
  }, []);

  const heroData = data?.our_story_page_data;
  const paragraphData = heroData?.hero_intro_text?.value ? JSON.parse(heroData?.hero_intro_text?.value) : null;
  const router = useRouter()

  return (
    <>
      <section className={s.ourStoryHero}>
        <ScrollTrigger start="top top" end="bottom center" scrub={2}>
                <Tween
            to={{
              y: "-30vw",
            }}>
            <div className={s.fogContain}>
              <Image src="/images/Fog-overlay.png" fill alt="" aria-hidden="true" />
            </div>
          </Tween>
        </ScrollTrigger>
        <div className={s.container}>
          <motion.div className={s.bgContain} {...customFadeIn}>
            <Image src={"/images/our-story-bg.jpg"} fill priority />
          </motion.div>
            <div className={s.btnWrap}>
              <div
                className={`${s.prevBtn} swiper-button-prev`}
                role='button'
                aria-label='Previous slide'
              >
                <div onClick={()=> router.back()}>
                  <ArrowWithCircleSVG />
                </div>
              </div>
            </div>
          <h1 className={`${s.mainTitle} h2`} ref={containerRef}>
            Defying
            <br />
            the Odds
            <span>
              <span className={s.svgContain}>
                <SpinningAsterisk />
              </span>
              1 in 30 Million
            </span>
          </h1>
          <h1 className={`${s.mainTitleMobile} h2`} >
            Defying
            <br />
            the Odds <span className={s.svgContain}>
            <TextAsterik width='1.6rem' height='2.11rem' />
              </span>
              1 in 30 Million
          </h1>

          <div className={s.introContent}>
            <div className={s.svgContain}>
              <div className={s.svgContainInner}>
                <BigSpin />
              </div>
            </div>

            <motion.div className={s.contentContain} {...fadeInUp}>
              <p className={`${s.colLeadin} leadin-alt`}>{heroData?.hero_leadin?.value}</p>
              <div className={s.columns}>
                <div className={`${s.column}`}>
                  {paragraphData?.children.map((child, index) => {
                    if (child.type === "paragraph") {
                      return (
                        <p key={index}>
                          {child.children.map((textChild, textIndex) => {
                            if (textChild.type === "text") {
                              return <span key={textIndex}>{textChild.value}</span>;
                            }
                            return null;
                          })}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ourStoryHero;
