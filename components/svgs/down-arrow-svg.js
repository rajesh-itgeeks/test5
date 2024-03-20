import { motion } from "framer-motion";

function OriginDownArrow({ color = "#1c1c1c" }) {
  const animVariants = {
    animate: {
      y: ["-100px", "0px"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "linear",
        },
      },
    },
  };

  return (
    <>
      <svg width="42" height="113.068" viewBox="0 0 42 113.068">
        <g id="Down_Arrow" data-name="Down Arrow" transform="translate(-67 -866)">
          <g
            id="Outlne"
            transform="translate(67 866)"
            fill="none"
            stroke={color}
            strokeWidth="1.5">
            <rect width="42" height="113" rx="21" stroke="none" />
            <rect x="0.75" y="0.75" width="40.5" height="111.5" rx="20.25" fill="none" />
          </g>
          <motion.g variants={animVariants} animate="animate">
            <g
              id="Arrow-3"
              data-name="Arrow"
              transform="translate(106 961.015) rotate(180)">
              <path
                id="Path_6488-3"
                data-name="Path 6488"
                d="M18,57.529V7.5"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                id="Path_6489-2"
                data-name="Path 6489"
                d="M7.5,18,18,7.5,28.5,18"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
            <g
              id="Arrow-4"
              data-name="Arrow"
              transform="translate(106 1061.015) rotate(180)">
              <path
                id="Path_6488-3"
                data-name="Path 6488"
                d="M18,57.529V7.5"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                id="Path_6489-2"
                data-name="Path 6489"
                d="M7.5,18,18,7.5,28.5,18"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </motion.g>
        </g>
      </svg>
    </>
  );
}

export default OriginDownArrow;
