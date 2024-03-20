import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import OrangeCan from "../../public/images/parallax/OrangeCan.svg";
import PineAppleCan from "../../public/images/parallax/PineAppleCan.svg";
import PinkCan from "../../public/images/parallax/PinkCan.svg";
import PurpleCan from "../../public/images/parallax/PurpleCan.svg";
import GreenCan from "../../public/images/parallax/greenCan.svg";
import MobileBottles from "../../public/images/parallax/mobileBottles.svg";
import Button from "../Button";
import TextAsterik from "../svgs/text-asterick";
import style from "./home-hero.module.scss";

import Image from "next/image";
import { Tween } from "react-gsap";

function HomeHero({ data }) {
  const [isMobileView, setIsMobileView] = useState(true); // Always start with mobile view

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -800]);
  const y1Angle = useTransform(scrollY, [0, 380], [0, 30]);

  const y2 = useTransform(scrollY, [0, 900], [0, -800]);
  const y2Angle = useTransform(scrollY, [0, 300], [0, -50]);

  const y3 = useTransform(scrollY, [0, 350], [0, -800]);
  const y3Angle = useTransform(scrollY, [0, 300], [0, -20]);

  const y4 = useTransform(scrollY, [0, 1050], [0, -800]);
  const y4Angle = useTransform(scrollY, [0, 300], [0, 30]);

  const y5 = useTransform(scrollY, [0, 950], [0, -800]);
  const y5Angle = useTransform(scrollY, [0, 300], [0, 30]);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 950); // adjust the value as needed
    };

    checkMobileView(); // Initial check on client-side only

    window.addEventListener("resize", checkMobileView); // Check when window resizes

    // Cleanup after component unmount
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <section className={style.homeHero}>
      <div className={style.mobileContent}>
        <div className={style.textContent}>
          <h1 className={`${style.mainTitle} bannerText`}>
            Lucky F
            <span>
              <Tween
                to={{
                  rotate: 360,
                  scrollTrigger: {
                    trigger: ".outer",
                    start: `center center`,
                    end: `bottom bottom`,
                    endTrigger: ".endTrigger",
                    scrub: 1,
                  },
                }}
              >
                <div
                  className={style.extraSpin}
                  style={{ marginTop: "0.425rem" }}
                >
                  <TextAsterik width="2.01rem" height="2.11rem" />
                </div>
              </Tween>
            </span>
            <span>ck</span>
            <br />
          </h1>
          <h1 className={`${style.mainTitle} bannerText`}>Energy Drinks</h1>
          <div className={style.top_text}>
            <p className="bannerText2">
              Drinks with zero sugar and zero aftertaste
            </p>
          </div>
          <div className={style.mobileBtns}>
            {/* <div>
							<Button
								href='/products'
								title='Find in Store'
								transparentColor
								bordered
								className={style.button}
							/>
						</div> */}
            <div>
              <Button
                className={style.button}
                href="/products"
                title="Shop Now"
                transparentColor
									bordered
              />
            </div>
          </div>
        </div>
        <div className={style.bottlesContainer}>
          <Image src={MobileBottles} alt="" />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.content_contain}>
          <motion.div style={{ y: y4 }} className={style.contentContainer}>
            <div className={`${style.mainTitle} bannerText`}>
              <p
                className="bannerText"
                style={{ "text-transform": "uppercase" }}
              >
                Lucky F
              </p>{" "}
              <div style={{ display: "flex" }}>
                <Tween
                  to={{
                    rotate: 360,
                    scrollTrigger: {
                      trigger: ".outer",
                      start: `center center`,
                      end: `bottom bottom`,
                      endTrigger: ".endTrigger",
                      scrub: 1,
                    },
                  }}
                >
                  <div
                    className={style.extraSpin}
                    style={{ display: "flex", marginTop: "0.625rem" }}
                  >
                    <TextAsterik width="2.01rem" height="2.11rem" />
                  </div>
                </Tween>
              </div>
              <p
                className="bannerText"
                style={{ "text-transform": "uppercase" }}
              >
                ck Energy Drinks
              </p>
            </div>
            <div className={style.top_text}>
              <p className="bannerText2">
                Drinks with zero sugar and zero aftertaste
              </p>
            </div>
            <div style={{ display: "flex" }}>
              {/* <div style={{ marginRight: '10px' }}>
								<Button
									href='/products'
									title='Find in Store'
									transparentColor
									bordered
									className={style.button}
								/>
							</div> */}
              <div>
                <Button
                  className={style.button}
                  href="/products"
                  transparentColor
									bordered
                  title="Shop Now"
                />
              </div>
            </div>
          </motion.div>
          <div>
            <motion.div
              className={style.can_contain}
              style={{ y: y1, rotate: y1Angle }}
            >
              <Image src={GreenCan} alt="" />
            </motion.div>
            <motion.div
              style={{ y: y2, rotate: y2Angle }}
              className={style.can_contain1}
            >
              <Image src={PineAppleCan} alt="" />
            </motion.div>
            <motion.div
              style={{ y: y3, rotate: y3Angle }}
              className={style.can_contain2}
            >
              <Image src={PinkCan} alt="" />
            </motion.div>
            <motion.div
              style={{ y: y4, rotate: y4Angle }}
              className={style.can_contain3}
            >
              <Image src={PurpleCan} alt="" />
            </motion.div>
            <motion.div
              style={{ y: y5, rotate: y5Angle }}
              className={style.can_contain4}
            >
              <Image src={OrangeCan} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
