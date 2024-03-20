import { motion } from "framer-motion";

function CloseBtnX() {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37 37"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}>
        <defs>
          <clipPath id="close-x-clip-path">
            <rect
              id="Rectangle_27569"
              data-name="Rectangle 27569"
              width="37"
              height="37"
              transform="translate(-0.372)"
              fill="#fff"
            />
          </clipPath>
        </defs>
        <g id="Group_25479" data-name="Group 25479" transform="translate(0.372)">
          <g id="Group_25478" data-name="Group 25478" clipPath="url(#close-x-clip-path)">
            <path
              id="Path_23413"
              data-name="Path 23413"
              d="M34.026.45,19.365,15.111a1.451,1.451,0,0,1-2.1,0L2.6.45A1.451,1.451,0,0,0,.5.45a1.451,1.451,0,0,0,0,2.1L15.161,17.213a1.451,1.451,0,0,1,0,2.1L.45,34.026a1.451,1.451,0,0,0,0,2.1,1.451,1.451,0,0,0,2.1,0L17.213,21.466a1.451,1.451,0,0,1,2.1,0L34.026,36.177a1.486,1.486,0,1,0,2.1-2.1L21.516,19.365a1.451,1.451,0,0,1,0-2.1L36.177,2.6a1.451,1.451,0,0,0,0-2.1A1.557,1.557,0,0,0,34.026.45Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </g>
      </motion.svg>
    </>
  );
}

export default CloseBtnX;
