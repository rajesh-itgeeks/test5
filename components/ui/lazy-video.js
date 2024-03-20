import React, { useEffect, useRef } from "react";

const LazyVideo = ({ src, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // As soon as the video is in view, we set the source
          if (videoRef.current) {
            videoRef.current.src = src;
            videoRef.current.load();
          }
        } else {
          // If the video is not in view, we remove the source
          if (videoRef.current) {
            videoRef.current.src = "";
          }
        }
      },
      {
        rootMargin: "100px 0px", // Start loading the video a little before it comes into view
      }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [src]);

  return <video ref={videoRef} {...props} />;
};

export default LazyVideo;
