import { useState, useEffect } from "react";

export default function useWindowSize(resize = true) {
  const getSize = () => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        widthOuter: window.outerWidth,
        heightOuter: window.outerHeight,
      };
    } else {
      return {
        width: global.innerWidth,
        height: global.innerHeight,
        widthOuter: global.outerWidth,
        heightOuter: global.outerHeight,
      };
    }
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      if (resize) {
        setWindowSize(getSize());
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    } else {
      gobal.addEventListener("resize", handleResize);
      return () => gobal.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}
