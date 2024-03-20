import { motion } from "framer-motion";

function spinningAsterisk() {
  const spinningAnimation = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.431 182.959"
      initial="initial"
      animate="animate"
      variants={spinningAnimation}>
      <path
        id="Path_15820"
        data-name="Path 15820"
        d="M64.523,0H74.879l-2.39,72.448,61.337-38.214L139,42.991,74.879,77.224,139,111.458l-5.178,8.757L72.489,82l2.39,72.448H64.523L66.913,82,5.178,120.215,0,111.458,64.125,77.224,0,42.991l5.178-8.757L66.913,72.448Z"
        transform="translate(42.686 180.523) rotate(-107)"
        fill="#fff"
        stroke="#fff"
        strokeWidth="3"
      />
    </motion.svg>
  );
}

export default spinningAsterisk;
