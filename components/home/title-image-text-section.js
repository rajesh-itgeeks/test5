import style from './title-image-text-section.module.scss';
import Button from '../Button';
import Image from 'next/image';
import SpinningAsterisk from '../svgs/spinning-asterisk';
import { Tween, ScrollTrigger } from 'react-gsap';
import { useRef, useEffect } from 'react';
import animateWords from '../ui/animate-words';
import { motion } from 'framer-motion';
import { fadeInUp } from '../ui/animations';
import { isMobile } from 'react-device-detect';

function TitleImageTextSection({ data }) {
  const containerRef = useRef(null);
  // const containerRef2 = useRef(null);

  useEffect(() => {
    animateWords(containerRef);
    // animateWords(containerRef2);
  }, []);

  const mainImage = data?.image_text_section_image?.reference?.image?.url;

  return (
    <ScrollTrigger start="top bottom" end="bottom top" scrub={2}>
      <section className={style.titleImageTextSection}>
        <div className={style.container}>
          <div className={style.title} ref={containerRef}>
            <p className={`leadin ${style.leadin}`}>Life's Hard—Get Harder</p>
            <h2 className={`h2 ${style.mainTitle}`}>
              YOUR LUCKIEST MOMENT IS THIS ONE.
            </h2>
          </div>
          <div className={style.sideBySide}>
            <div className={style.left}>
              <div className={style.imagery}>
                <Tween
                  from={{ y: '0vw', scale: 1 }}
                  to={{ y: isMobile ? '-15vw' : '-5vw', scale: 1.05 }}
                >
                  <Image
                    alt="Girl drinking coffee"
                    src={mainImage}
                    fill
                    className={style.image}
                    alt=""
                    aria-hidden="true"
                  />
                </Tween>
              </div>
            </div>
            <div className={style.right}>
              <motion.h2 className={`h2-alt ${style.subTitle}`} {...fadeInUp}>
                Keep going.
              </motion.h2>
              <motion.p className={style.reg} {...fadeInUp}>
                We inspire radical change in the way the world sees luck. Tap
                into the undeniable luck that got you here and will take you
                farther than you ever imagined. Dive head first in to our Lucky
                F*ck movement.
              </motion.p>
              <motion.div className={style.ctaWrap} {...fadeInUp}>
                <Button
                  href="/our-story"
                  title="Our Story"
                  bordered
                  transparentColor
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}

export default TitleImageTextSection;
