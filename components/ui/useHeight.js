import { useState, useEffect, useCallback } from "react";

function useHeight(elementRef) {
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (elementRef && elementRef.current) {
      const { height } = elementRef.current.getBoundingClientRect();
      setHeight(height);
    }
  }, [elementRef]);

  useEffect(() => {
    updateHeight();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateHeight);

      return () => {
        window.removeEventListener("resize", updateHeight);
      };
    } else {
      global.addEventListener("resize", updateHeight);

      return () => {
        global.removeEventListener("resize", updateHeight);
      };
    }
  }, [updateHeight]);

  return [height];
}

export default useHeight;
