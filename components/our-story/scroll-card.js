import Image from "next/image";
import s from "./scroll-card.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { transformFieldsToObject, transformFieldsImage } from "../ui/field-helpers";

const customFadeIn = {
  initial: { opacity: 0, x: "3rem" },
  whileInView: { opacity: 1, x: "0rem", transition: { duration: 0.6 } },
  viewport: { margin: "0% -25%", once: true },
};

const customFadeInUp = {
  initial: { opacity: 0, y: "3rem" },
  whileInView: { opacity: 1, y: "0rem", transition: { duration: 0.6 } },
  viewport: { margin: "0% -25%", once: true },
};

const customGrowIn = {
  initial: { scale: 0 },
  whileInView: { scale: 1, transition: { duration: 0.4 } },
  viewport: { margin: "0% 0%", once: true },
};

function ScrollCard({ first = false, data }) {
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener(
      "wheel",
      function (e) {
        setDelta(e.deltaY);
      },
      false
    );
  }, []);

  // console.log(data);

  const fieldsObject = transformFieldsToObject(data.fields);
  const fieldsObjectImage = transformFieldsImage(data.fields);

  const mainTitle = fieldsObject["main_title"];
  const subTitle = fieldsObject["sub_title"];
  const cardIcon = fieldsObjectImage["card_icon"];
  const cardBackground = fieldsObjectImage["card_background_image"];
  const cardDescription = fieldsObject["description"];

  return (
    <motion.div className={`${s.scrollCard} ${first ? s.firstCard : null} ${cardIcon ? s.iconCard : null}`}>
      <div className={s.cardInner}>
        {cardIcon && (
          <motion.div className={s.iconContain} {...customGrowIn}>
            <img src={cardIcon} />
          </motion.div>
        )}

        {!cardIcon && !first && (
          <div className={s.imageContain}>
            <Image src={cardBackground} fill />
          </div>
        )}

        {!cardIcon && (
          <motion.h3 className={`${s.mainTitle} scroll-card-title`} {...customFadeIn}>
            <motion.span initial={{ x: 0, skewX: 0 }} animate={{ x: -delta }} transition={{ ease: "easeOut" }}>
              {mainTitle}
            </motion.span>
          </motion.h3>
        )}

        {cardIcon && (
          <motion.div className={s.desc} {...customFadeInUp}>
            <p className={`p-alt`}>{cardDescription}</p>
          </motion.div>
        )}

        {first && (
          <motion.h3 className={`${s.subTitle} scroll-card-title`} {...customFadeIn}>
            <em>{subTitle}</em>
          </motion.h3>
        )}
      </div>
    </motion.div>
  );
}

export default ScrollCard;
