import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function rand(min = 0, max = 100) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

// Check if element is above fold
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top > -1 && rect.bottom <= window.innerHeight;
}

export default function Box(props) {
  const {
    children,
    className,
    anims = {},
    x = 0,
    y = 0,
    rotate = 0,
    scale = 1,
    opacity = 1,
    noBrakes,
  } = props;

  const ref = useRef(null);
  const [aboveFold, setAboveFold] = useState(false);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    // This checks whether or not parallaxed element is above the initial viewport fold at the top

    const onResize = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const foldVal =
        rect.top + window.scrollY > -1 &&
        rect.bottom + window.scrollY <= window.innerHeight;
      const fromTopViewport = window.innerHeight - (rect.top + window.scrollY);
      const fromPercent = (rect.top + window.scrollY) / window.innerHeight;
      const delta = window.innerHeight / (rect.top + window.scrollY);
      const theMath = fromTopViewport * ((1 - fromPercent) / delta);

      setProgress(scrollYProgress.current);
      setAboveFold(foldVal);
    };

    onResize();
    window.addEventListener('load resize', onResize);
    return () => window.removeEventListener('load resize', onResize);
  }, [progress]);

  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3),
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start end`, `end start`],
  });

  const initPlacement = progress;
  const aboveFoldInitial = aboveFold ? initPlacement : 0;

  const yVal = !noBrakes
    ? useSpring(
        useTransform(scrollYProgress, [scrollYProgress.current, 1], [0, y]),
        springConfig
      )
    : useTransform(scrollYProgress, [aboveFoldInitial, 1], [0, y]);

  const xVal = !noBrakes
    ? useSpring(
        useTransform(scrollYProgress, [aboveFoldInitial, 1], [0, x]),
        springConfig
      )
    : useTransform(scrollYProgress, [aboveFoldInitial, 1], [0, x]);

  const rotateVal = useSpring(
    useTransform(scrollYProgress, [aboveFoldInitial, 1], [0, rotate]),
    springConfig
  );

  const scaleVal = useSpring(
    useTransform(scrollYProgress, [aboveFoldInitial, 1], [1, scale]),
    springConfig
  );

  const opacityVal = useSpring(
    useTransform(scrollYProgress, [aboveFoldInitial, 1], [1, opacity]),
    springConfig
  );

  const styleObj = {
    x: xVal,
    y: yVal,
    rotate: rotateVal,
    scale: scaleVal,
    opacity: opacityVal,
  };

  // const newObj = Object.assign(
  //   {},
  //   ...Object.entries(anims).map(([k, v]) => {
  //     const absInitial = aboveFold ? -absolutePlacement : 0;
  //     const initial = k === "scale" || k === "opacity" ? 1 : absInitial;

  //     return {
  //       [k]: useSpring(useTransform(scrollYProgress, [0, 1], [initial, v]), springConfig),
  //     };
  //   })
  // );

  return (
    <motion.div ref={ref} className={className} style={styleObj}>
      {children}
    </motion.div>
  );
}
