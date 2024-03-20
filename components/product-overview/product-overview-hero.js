import s from "./product-overview-hero.module.scss";
import { Tween } from "react-gsap";
import { useRef, useEffect, useState } from "react";
import animateWords from "../ui/animate-words";
import SpinningAsterisk from "../svgs/spinning-asterisk";
import Image from "next/image";
import Button from "../Button";
import ArrowWithCircleSVG from "../svgs/arrow-with-circle-svg";
import { motion } from "framer-motion";
import { fadeIn } from "../ui/animations";

const drinksAppear = {
  initial: { y: "100vh" },
  animate: { y: "0vh", transition: { duration: 1.2 } },
};

function productOverviewHero({ collections, clickHandlers }) {
  const containerRef = useRef(null);

  useEffect(() => {
    animateWords(containerRef);
  }, []);

  const [show, setShow] = useState(false);

  return (
    <section className={`${s.productOverviewHero} heroTrigger`}>
      <div className={s.container}>
        <h1 className={`${s.mainTitle} h1-display`} ref={containerRef}>
          Our{" "}
          <span>
            F
            <span>
              <Tween
                to={{
                  rotate: 360,
                  scrollTrigger: {
                    trigger: ".heroTrigger",
                    start: `top top`,
                    end: `bottom top`,
                    endTrigger: ".heroTrigger",
                    scrub: 3,
                  },
                }}>
                <div className={s.extraSpin}>
                  <SpinningAsterisk />
                </div>
              </Tween>
            </span>
            cking
          </span>
          Products
        </h1>
        <motion.div className={s.btnsContain} {...fadeIn}>
          <div className={s.arrowDown} onClick={clickHandlers[collections[0].handle + "Click"]}>
            <ArrowWithCircleSVG />
          </div>

          <div className={s.catsBtnMobileContain}>
            <Button noHref title={show ? "Close" : "Categories"} onClick={() => setShow(!show)} className={s.catsBtnMobile} />
          </div>

          <div className={`${s.catContain} ${show ? s.open : s.close}`}>
            {collections.map((collection, index) => (
              <Button noHref title={collection.handle} onClick={clickHandlers[collection.handle + "Click"]} key={index} />
            ))}
          </div>
        </motion.div>

        <motion.div className={`${s.drinkImg} ${s.drink1}`} {...drinksAppear}>
          <Tween
            from={{ x: "-1vw", y: "-2vw", rotate: 30 }}
            to={{ x: "5vw", y: "2vw", rotate: -15 }}
            repeat={-1}
            yoyo={true}
            duration={6}
            ease={"none"}>
            <Image src="/images/lf-drink-1.png" fill alt="" aria-hidden="true" priority={true} />
          </Tween>
        </motion.div>

        <motion.div className={`${s.drinkImg} ${s.drink2}`} {...drinksAppear}>
          <Tween
            from={{ x: "-1vw", y: "2vw", rotate: -10 }}
            to={{ x: "1vw", y: "-2vw", rotate: 5 }}
            repeat={-1}
            yoyo={true}
            duration={12}
            ease={"none"}>
            <Image src="/images/lf-drink-2.png" fill alt="" aria-hidden="true" priority={true} />
          </Tween>
        </motion.div>

        <motion.div className={`${s.drinkImg} ${s.drink3}`} {...drinksAppear}>
          <Tween
            from={{ x: "-1vw", y: "-1vw", rotate: -45 }}
            to={{ x: "1vw", y: "1vw", rotate: 45 }}
            repeat={-1}
            yoyo={true}
            duration={18}
            ease={"none"}>
            <Image src="/images/lf-drink-3.png" fill alt="" aria-hidden="true" priority={true} />
          </Tween>
        </motion.div>
      </div>
    </section>
  );
}

export default productOverviewHero;
