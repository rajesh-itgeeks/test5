import s from "./marquee-header.module.scss";
import { motion } from "framer-motion";

function MarqueeHeader({ duration = "60s", outlineText, hoverPause, className, data }) {
  const contentLoop = () => {
    let content = [];

    for (let i = 0; i < 6; i++) {
      content.push(
        <div className={s.contentInner} key={i}>
          {data &&
            data.map((item, index) => {
              return (
                <span key={index} className="nav-marquee-type">
                  {item}
                </span>
              );
            })}
        </div>
      );
    }

    return content;
  };

  return (
    <>
      <section className={`${s.marqueeHeader} ${className}`}>
        <motion.div
          className={`${s.track} ${hoverPause ? `hoverPause ${s.hoverPause}` : null} ${outlineText ? s.outlineText : null}`}
          style={{
            animationDuration: duration,
          }}>
          <motion.div className={s.contentHolder}>{contentLoop()}</motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default MarqueeHeader;
