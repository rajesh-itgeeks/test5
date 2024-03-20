import { createContext, useState } from "react";

const CursorFollowContext = createContext({
  variantName: "default",
  cursorText: "",
  mouseEnter: function () {},
  mouseShh: function () {},
  mouseLeave: function () {},
});

export function CursorFollowContextProvider({ children }) {
  const [hoverEnter, setHoverEnter] = useState("default");
  const [cursorText, setCursorText] = useState("");

  function runEnter() {
    setHoverEnter("project");
    // setCursorText("View");
  }

  function runShh() {
    setHoverEnter("shh");
    setCursorText("🤫");
    // console.log(hoverEnter);
  }

  function runExit() {
    setHoverEnter("default");
    setCursorText("");
    // console.log(hoverEnter);
  }

  function runTimeline() {
    setHoverEnter("historyTimeline");
    // console.log(hoverEnter);
    // setCursorText("View");
  }

  const context = {
    variantName: hoverEnter,
    cursorText: cursorText,
    mouseShh: runShh,
    mouseEnter: runEnter,
    mouseLeave: runExit,
    mouseTimeline: runTimeline,
  };

  return <CursorFollowContext.Provider value={context}>{children}</CursorFollowContext.Provider>;
}

export default CursorFollowContext;
