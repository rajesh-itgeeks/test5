import SpinningObject from "../globals/3d/spinning-object";
import s from "./product-intro.module.scss";
import animateWords from "../ui/animate-words";
import { useRef, useEffect } from "react";
import BigSpin from "../svgs/big-spin";
import MarqueeGlobal from "../globals/marquee-global/marquee-global";
import ScrollDirectionMarquee from "../home/scroll-direction-marquee";

const marqueeData1 = ["A Taste of Luck", "A Taste of Luck", "A Taste of Luck", "A Taste of Luck", "A Taste of Luck"];

function ProductIntro({ data: { product } }) {
  const containerRef = useRef(null);

  useEffect(() => {
    animateWords(containerRef);
  }, []);

  let str = product?.adjust3d?.value || 1;
  let scalerNum = parseFloat(str);

  return (
    <>
      <MarqueeGlobal
        data={product?.productMarqueeText?.value ? JSON.parse(product?.productMarqueeText?.value) : marqueeData1}
        borderTop
        borderBottom
        className={s.spacer}
        customColor={product?.productMainColor?.value}
      />

      <section className={s.productIntro}>
        <div className={s.container}>
          <div className={`animateText ${s.contentContain}`} ref={containerRef}>
            <h3 className={s.text}>{product?.productIntroText?.value || ""}</h3>
          </div>
          <div className={s.mediaContain}>
            <div className={s.objectContain}>
              <SpinningObject
                image={product?.image3d?.reference?.image?.url}
                object={product?.object3d?.reference?.url}
                scaler={scalerNum}
              />
            </div>

            <div className={s.bigSpinContain}>
              <BigSpin color="rgba(202,202,202,0.6)" />
            </div>
          </div>
        </div>
      </section>
      <div className={s.spacer}>
        <ScrollDirectionMarquee darkMode={false} data={product?.productMarqueeImages?.references?.nodes} />
      </div>
    </>
  );
}

export default ProductIntro;
