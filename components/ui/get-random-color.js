import { useEffect } from "react";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function useRandomColor() {
  useEffect(() => {
    const id = setInterval(() => {
      document.documentElement.style.setProperty("--random-color", getRandomColor());
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);
}
