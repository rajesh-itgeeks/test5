// Import necessary libraries and components
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "./video-section-with-modal.module.scss";
import PlayVideoSVG from "../svgs/play-video-svg";
import PlayArrow from "../svgs/play-arrow-svg";
import LazyVideo from "../ui/lazy-video";
import CloseBtnX from "../svgs/close-x";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

// VideoSectionWithModal component
function VideoSectionWithModal({ data }) {
  // State and refs initialization

  const [showModal1, setShowModal1] = useState(false);

  const [iframeKey1, setIframeKey1] = useState(Math.random());

  const [toggleClass1, setToggleClass1] = useState(false);
  const sectionRef = useRef(null);
  const elementRef = useRef(null);
  const sliderRef = useRef(null);

  const [isYouTubeVideos, setIsYouTubeVideos] = useState(null);
  

  const handlePlayClick1 = (bgVideoUrl) => {
    setShowModal1(true);
    setToggleClass1((prevToggleClass) => !prevToggleClass);
    setIframeKey1(Math.random());
    setIsYouTubeVideos(bgVideoUrl);
  };

  // Handle play button click for modal 2
  
  // Handle click outside the video modal for modal 1
  const handleOutsideClick1 = () => {
    setShowModal1(false);
    setToggleClass1((prevToggleClass) => !prevToggleClass);
    setIframeKey1(Math.random());
  };

  // Handle click outside the video modal for modal 2

  // useEffect for mousemove event
  useEffect(() => {
    const section = sectionRef.current;
    const element = elementRef.current;

    const onMouseMove = (e) => {
      gsap.to(element, {
        x: e.clientX - section.getBoundingClientRect().left,
        y: e.clientY - section.getBoundingClientRect().top,
        left: 0,
        top: 0,
        duration: 1,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", onMouseMove);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // useEffect for modal open/close
  useEffect(() => {
    const body = document.body;

    if (toggleClass1) {
      body.classList.add("modal-open");
      body.style.overflow = "hidden";
    } else {
      body.classList.remove("modal-open");
      body.style.overflow = "auto";
    }

    return () => {
      body.classList.remove("modal-open");
      body.style.overflow = "auto";
    };
  }, [toggleClass1]);

  



  // Get video URLs and poster images
  const bgVideoUrl = data?.homepage_video_bg?.reference.sources.filter(
    (target) => target.format === "mp4"
  )[0].url;

  const bgVideoUrlPreviewImage =
    data?.homepage_video_bg?.reference?.previewImage?.url;

  const modalVideoUrl = data?.homepage_video_modal?.reference.sources.filter(
    (target) => target.format === "mp4"
  )[0].url;
  const modalVideoUrlPreviewImage =
    data?.homepage_video_modal?.reference?.previewImage?.url;

  const isYouTubeVideo = data?.homepage_video_youtube?.value;

  const getYoutubeEmbedUrl = (url, autoplay = false) => {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}${
      autoplay ? "?autoplay=1&rel=0" : ""
    }`;
  };

  const drive_video1 = "media/BEDROOM.mov";
  const drive_video2 = "media/COFFEE.mov";
  const drive_video3 = "media/CEO.mov";
  // <iframe src="https://drive.google.com/file/d/1qOSB9FJUBjNm6f8keq1urS1gRCtf8lWV/preview" width="640" height="480" allow="autoplay"></iframe>
  // <iframe src="https://drive.google.com/file/d/1f6qhJQk5g4ttlQEnJRy5OQdP-ljxv0V3/preview" width="640" height="480" allow="autoplay"></iframe>

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  // Render component
  return (
    <section className={style.videoSectionWithModal}>
      <div className={style.mouseHoverBoundary} ref={sectionRef}></div>
      <div className={style.container}>
        {/* Preview video */}
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 30000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className={style.mouseHoverBoundary} ref={sectionRef}></div>
            {/* Preview video */}
            <div className={style.previewWrap}>
              <LazyVideo
                className={style.previewVideo}
                src={bgVideoUrl}
                poster={bgVideoUrlPreviewImage}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
              {/* Play button */}
              <button
                aria-label={"Play Video"}
                ref={elementRef}
                className={style.playBtn}
                aria-controls="videoSection-Modal-1"
                aria-expanded={showModal1 === true ? true : false}
                onClick={() => handlePlayClick1(bgVideoUrl)}
                style={{
                  backgroundImage: "/images/play.svg",
                }}
              >
                <span className={`visuallyhidden`}>
                  Click here to play the full version of the video
                </span>
                <span className={style.spinny}>
                  <PlayVideoSVG />
                </span>
                <span className={style.playArrow}>
                  <PlayArrow />
                </span>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={style.mouseHoverBoundary} ref={sectionRef}></div>
            {/* Preview video */}
            <div className={style.previewWrap}>
              <LazyVideo
                className={style.previewVideo}
                src={drive_video1}
                poster={drive_video1}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
              {/* Play button */}
              <button
                aria-label={"Play Video"}
                ref={elementRef}
                className={style.playBtn}
                aria-controls="videoSection-Modal-1"
                aria-expanded={showModal1 === true ? true : false}
                onClick={() => handlePlayClick1("https://drive.google.com/file/d/1qOSB9FJUBjNm6f8keq1urS1gRCtf8lWV/preview")}
                style={{
                  backgroundImage: "/images/play.svg",
                }}
              >
                <span className={`visuallyhidden`}>
                  Click here to play the full version of the video
                </span>
                <span className={style.spinny}>
                  <PlayVideoSVG />
                </span>
                <span className={style.playArrow}>
                  <PlayArrow />
                </span>
              </button>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className={style.mouseHoverBoundary} ref={sectionRef}></div>
            {/* Preview video */}
            <div className={style.previewWrap}>
              <LazyVideo
                className={style.previewVideo}
                src={drive_video2}
                poster={drive_video2}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
              {/* Play button */}
              <button
                aria-label={"Play Video"}
                ref={elementRef}
                className={style.playBtn}
                aria-controls="videoSection-Modal-1"
                aria-expanded={showModal1 === true ? true : false}
                onClick={() => handlePlayClick1("https://drive.google.com/file/d/1f6qhJQk5g4ttlQEnJRy5OQdP-ljxv0V3/preview")}
                style={{
                  backgroundImage: "/images/play.svg",
                }}
              >
                <span className={`visuallyhidden`}>
                  Click here to play the full version of the video
                </span>
                <span className={style.spinny}>
                  <PlayVideoSVG />
                </span>
                <span className={style.playArrow}>
                  <PlayArrow />
                </span>
              </button>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className={style.mouseHoverBoundary} ref={sectionRef}></div>
            {/* Preview video */}
            <div className={style.previewWrap}>
              <LazyVideo
                className={style.previewVideo}
                src={drive_video3}
                poster={drive_video3}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
              {/* Play button */}
              <button
                aria-label={"Play Video"}
                ref={elementRef}
                className={style.playBtn}
                aria-controls="videoSection-Modal-1"
                aria-expanded={showModal1 === true ? true : false}
                onClick={() => handlePlayClick1("https://drive.google.com/file/d/1f6qhJQk5g4ttlQEnJRy5OQdP-ljxv0V3/preview")}
                style={{
                  backgroundImage: "/images/play.svg",
                }}
              >
                <span className={`visuallyhidden`}>
                  Click here to play the full version of the video
                </span>
                <span className={style.spinny}>
                  <PlayVideoSVG />
                </span>
                <span className={style.playArrow}>
                  <PlayArrow />
                </span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Modal */}
      <aside
        className={`${style.fullVideo} ${
          showModal1 === true ? style.active : null
        }`}
        id="videoSection-Modal-1"
        aria-hidden={showModal1 === true ? false : true}
        aria-modal={showModal1 === true ? true : false}
        aria-expanded={showModal1 === true ? true : false}
      >
        <div
          className={style.outsideTheVideo}
          onClick={handleOutsideClick1}
        ></div>

        {isYouTubeVideo && showModal1 ? (
          <div className={style.iframeContain}>
            <button
              aria-label={"Close Video"}
              className={style.closeBtn}
              onClick={handleOutsideClick1}
            >
              <CloseBtnX />
            </button>
            <iframe
              key={iframeKey1}
              src={isYouTubeVideos}
              title="LUCKY F*CK"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className={style.iframeContain}>
            <button
              aria-label={"Close Video"}
              className={style.closeBtn}
              onClick={handleOutsideClick1}
            >
              <CloseBtnX />
            </button>
            <LazyVideo
              className={style.previewVideo}
              src={modalVideoUrl}
              poster={modalVideoUrlPreviewImage}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
            />
          </div>
        )}
      </aside>
    </section>
  );
}

export default VideoSectionWithModal;
