import style from "./parallax-box.module.scss";
import Image from "next/image";
import { Tween, ScrollTrigger } from "react-gsap";

function ParallaxBox({ data }) {
  const topimg = data?.parallaxImageForeground?.mediaItemUrl;
  const bgimg = data?.parallaxImageBackground?.mediaItemUrl;
  let video = "";
  if (data.videoCheck == "video") {
    video = data?.parallaxImageForegroundVideo?.mediaItemUrl;
  }

  return (
    <div className={style.parallaxBox}>
      <ScrollTrigger start="top bottom" end="bottom top" scrub={1}>
        <Image src={bgimg} fill className={style.bg} alt="" aria-hidden="true" />
        <div className={style.innerWrap}>
          <Tween
            to={{
              y: "-12%",
            }}>
            {data.videoCheck != null && data.videoCheck == "video" ? (
              <video muted loop autoPlay playsInline className={style.inner}>
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <Image src={topimg} fill className={style.inner} alt="" aria-hidden="true" />
            )}
          </Tween>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default ParallaxBox;
