import { useContext } from "react";
import style from "./cursor-follow.module.scss";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import CursorFollowContext from "../context/cursor-follow-context";

function CursorFollow(props) {
  const { refVal } = props;

  const cursorCtx = useContext(CursorFollowContext);
  const activeVariant = cursorCtx.variantName;
  const activeText = cursorCtx.cursorText;

  const mouse = useMouse(refVal, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const variants = {
    default: {
      opacity: 0,
      height: 12,
      width: 12,
      scale: 1,
      fontSize: "16px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      backgroundSize: "222px 222px",
      backgroundPosition: "50% 50%",
      x: mouseXPosition - 6,
      y: mouseYPosition - 6,
      transition: {
        type: "spring",
        mass: 0.6, // mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0)",
      backgroundImage: "url(/images/fpf-mouse.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "190px 190px",
      backgroundPosition: "50% 50%",
      color: "#000",
      height: 190,
      width: 190,
      fontSize: "18px",
      x: mouseXPosition - 111,
      y: mouseYPosition - 111,
      rotate: [0, -360],
      transition: {
        type: "spring",
        mass: 0.6, // mass: 0.6,
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
    shh: {
      opacity: 1,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0)",
      backgroundSize: "222px 222px",
      backgroundPosition: "50% 50%",
      color: "#000",
      height: 20,
      width: 20,
      fontSize: "42px",
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
      transition: {
        type: "spring",
        mass: 0.6, // mass: 0.6,
      },
    },
    historyTimeline: {
      opacity: 1,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0)",
      backgroundImage: "url(/images/mouse-click-timeline.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "170px 170px",
      backgroundPosition: "50% 50%",
      color: "#000",
      height: 222,
      width: 222,
      fontSize: "18px",
      x: mouseXPosition - 111,
      y: mouseYPosition - 111,
      rotate: [0, -360],
      transition: {
        type: "spring",
        mass: 0.6, // mass: 0.6,
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
    // global: {
    //   opacity: 1,
    //   backgroundColor: "#d2bf8c",
    //   color: "#000",
    //   height: 64,
    //   width: 64,
    //   fontSize: "32px",
    //   x: mouseXPosition - 48,
    //   y: mouseYPosition - 48,
    // },
  };

  // function projectEnter(event) {
  //   setCursorText("View");
  //   setCursorVariant("project");
  // }

  // function projectLeave(event) {
  //   setCursorText("");
  //   setCursorVariant("default");
  // }

  // function contactEnter(event) {
  //   setCursorText("👋");
  //   setCursorVariant("contact");
  // }

  // function contactLeave(event) {
  //   setCursorText("");
  //   setCursorVariant("default");
  // }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        variants={variants}
        className={style.circle}
        animate={activeVariant}
        transition={spring}>
        <span className={style.cursorText}>{activeText}</span>
      </motion.div>
    </>
  );
}

export default CursorFollow;
