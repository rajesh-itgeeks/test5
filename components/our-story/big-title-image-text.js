import s from "./big-title-image-text.module.scss";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../ui/animations";
import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { transformFieldsToObject, transformFieldsImage } from "../ui/field-helpers";

function BigTitleImageText({ data, reverse = false }) {
  const outerImageContainer = useRef(null);
  const imageTarget = useRef(null);

  useEffect(() => {
    if (outerImageContainer.current && imageTarget.current) {
      gsap.fromTo(
        imageTarget.current,
        { y: "3vw", scale: 1 },
        {
          y: isMobile ? "0vw" : "-3vw",
          scale: 1,
          scrollTrigger: {
            trigger: outerImageContainer.current,
            start: `top bottom`,
            end: `bottom top`,
            scrub: 1,
            // markers: true,
          },
        }
      );
    }
  }, []);

  const fieldsObject = transformFieldsToObject(data.fields);
  const fieldsObjectImage = transformFieldsImage(data.fields);

  const description = fieldsObject["desc"];
  const title = fieldsObject["title"];
  const image = fieldsObjectImage["image"];

  return (
    <section className={`${s.bigTitleImageText} ${reverse ? s.reverse : null}`} ref={outerImageContainer}>
      <div className={s.container}>
        <motion.h2 style={{textAlign: reverse ? "right" : "left"}} className={`h1-display ${s.subTitle}`} {...fadeInUp}>
          {title}
        </motion.h2>
        <motion.h2 className={`h1-display ${s.subTitleMobile}`} {...fadeInUp}>
          {title}
        </motion.h2>
        <div className={s.columns}>
          <div className={s.column}>
            <motion.div className={`${s.contentContain}`} {...fadeInUp}>
              <p className="h6" dangerouslySetInnerHTML={{ __html: description }} />
            </motion.div>
          </div>
          <div className={s.column}>
            <div className={s.imagery} ref={imageTarget}>
              <Image src={image} fill className={s.image} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigTitleImageText;
