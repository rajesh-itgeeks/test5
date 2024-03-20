import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InView(props) {
  const { children, className, triggerOnce = true } = props;

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.98,
      y: 60,
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={className}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}>
        {children}
      </motion.div>
    </>
  );
}
