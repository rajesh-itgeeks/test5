import BurstOutline from "../../svgs/burst-outline-avg";
import s from "./marquee-global.module.scss";
import { motion } from "framer-motion";
import { useMemo, Fragment } from "react";

function useHoverSpinAnimation() {
  const variants = {
    hover: {
      rotate: 360,
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" },
    },
    unhover: { rotate: 0, transition: { duration: 0.5, ease: "power2.inOut" } },
  };

  return { variants };
}

function MarqueeGlobal({
  data,
  duration = "120s",
  outlineText,
  hoverPause,
  className,
  darkMode = false,
  darkModeAlt = false,
  reverse = false,
  borderTop = false,
  borderBottom = false,
  customColor = false,
  forwardedRef,
  ...misc
}) {
  const marqueeData = data ? data : ["Get Lucky", "Get Lucky", "Get Lucky", "Get Lucky"];

  const { variants } = useHoverSpinAnimation();

  const TextWithOutline = ({ index, value }) => (
    <span
      key={index}
      className={`outline-text ${darkMode ? "stroke-white" : "stroke-black"} ${customColor ? s.customColor : null}`}>
      <motion.div className={s.svgContain} whileHover="hover" whileTap="hover" variants={variants}>
        <BurstOutline />
      </motion.div>
      {value}
    </span>
  );

  const contentLoop = useMemo(() => {
    let content = [];

    for (let i = 0; i < 6; i++) {
      content.push(
        <div className={s.contentInner} key={i}>
          {marqueeData?.map((item, index) => (
            <Fragment key={index}>
              <TextWithOutline key={index} value={item} />
            </Fragment>
          ))}
        </div>
      );
    }

    return content;
  }, [data, darkMode, variants]);

  return (
    <>
      <section
        className={`${s.marqueeGlobal} ${className} ${darkMode ? s.darkMode : null}  
        ${darkModeAlt ? s.darkModeAlt : null}  ${reverse ? s.reverse : null} ${borderTop ? s.borderTop : null} ${
          borderBottom ? s.borderBottom : null
        }`}
        ref={forwardedRef}
        {...misc}>
        <motion.div
          className={`${s.track} ${hoverPause ? `hoverPause ${s.hoverPause}` : null} ${outlineText ? s.outlineText : null}`}
          style={{
            animationDuration: duration,
          }}>
          <motion.div className={s.contentHolder}>{contentLoop}</motion.div>
        </motion.div>
      </section>

      {customColor ? (
        <style jsx global>{`
          :root {
            --product-main-color: ${customColor ? customColor : ""};
          }
        `}</style>
      ) : null}
    </>
  );
}

export default MarqueeGlobal;
