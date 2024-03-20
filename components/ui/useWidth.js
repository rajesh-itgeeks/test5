import { useState, useEffect, useCallback } from 'react';

function useWidth(elementRef) {
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (elementRef && elementRef.current) {
      const { width } = elementRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, [elementRef]);

  useEffect(() => {
    updateWidth();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWidth);

      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    } else {
      global.addEventListener('resize', updateWidth);

      return () => {
        global.removeEventListener('resize', updateWidth);
      };
    }
  }, [updateWidth]);

  return [width];
}

export default useWidth;
