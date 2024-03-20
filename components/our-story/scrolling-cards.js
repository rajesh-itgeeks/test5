import s from "./scrolling-cards.module.scss";
import { useRef, useEffect, useState } from "react";
import ScrollCard from "./scroll-card";
import { transformFieldsToObject, transformFieldsImage } from "../ui/field-helpers";
import { debounce } from "lodash";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StoryCard from "./story-card";
gsap.registerPlugin(ScrollTrigger);

const cardDummyData = [
  {
    mainTitle: "You define your",
    subTitle: "LUCK",
    icon: "",
    image: "",
    description: "",
  },
  {
    mainTitle: "Retrospective Luck",
    subTitle: "",
    icon: "/images/icon-time-clock.svg",
    image: "/images/scroll-img-1.jpg",
    description:
      "Remember when you didn't have tickets to that show, yet you still got in and met the artist? Or the time you missed that flight but met the love of your life waiting at the airport? The time where you bet your bottom dollar and won it all? How about the time where you stared death directly in the face and lived to tell the tale? We all have that story where we were ONE LUCKY F*CK. In retrospect, it all worked out, right?",

  },
  {
    mainTitle: "in the moment luck",
    subTitle: "",
    iconCard: false,
    icon: "/images/icon-pin.svg",
    image: "/images/scroll-img-2.jpg",
    description:
      "Did you know the LUCKIEST moment in life is the one you are in right now? We are a generation of unapologetic individuals who live a life full of magic f*cking moments. F*ck the ordinary; we live in the extraordinary and are grateful for every second of it.",
  },
  {
    mainTitle: "Tomorrow Luck",
    subTitle: "",
    iconCard: false,
    icon: "/images/icon-time-clock-forward.svg",
    image: "/images/scroll-img-3.jpg",
    description:
      "They say luck is random. Something that comes and goes by circumstance, with no rhyme or reason. We know better. We believe the power existed inside all along. We create our own luck that then defines our world and reality. The future is bright, and it's our time to OWN what happens next. So, let's enter it with open minds and kind hearts. The future of LUCK starts with your first sip.",
  },

];

function ScrollingCards({ data }) {
  const scrollContainer = useRef(null);
  const spacerRef = useRef(null); // Ref for ourSpacer

  const [isMobileView, setIsMobileView] = useState(true); // Always start with mobile view

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 950); // adjust the value as needed
    };

    checkMobileView(); // Initial check on client-side only

    window.addEventListener("resize", checkMobileView); // Check when window resizes

    // Cleanup after component unmount
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      let scrollTriggerInstance = null;

      const calculateChildrenWidth = () => {
        if (!scrollContainer.current) return 0;

        const children = scrollContainer.current.children;
        let totalWidth = 0;

        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          const { width, marginLeft, marginRight } = window.getComputedStyle(child);
          const childWidth = parseFloat(width) + parseFloat(marginLeft) + parseFloat(marginRight);
          totalWidth += childWidth;
        }

        return totalWidth;
      };

      const updateScrollWidth = () => {
        if (!scrollContainer.current || !spacerRef.current) {
          return;
        }
        const totalWidth = calculateChildrenWidth();
        const scrollHeight = scrollContainer.current.clientHeight;

        // Set the height of ourSpacer
        spacerRef.current.style.height = `${totalWidth + scrollHeight}px`;

        const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

        tl.to(scrollContainer.current, {
          x: () => -(calculateChildrenWidth() - (window.innerWidth - 80)),
          scrollTrigger: {
            trigger: ".scrollingCardsTrigger",
            pin: true,
            scrub: true,
            pinSpacer: ".ourSpacer",
            end: () => `+=${totalWidth}`,
            onUpdate: (self) => (scrollTriggerInstance = self),
            // markers: true,
          },
        });
      };

      updateScrollWidth();

      const handleResize = debounce(() => {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();

          if (!scrollContainer.current) {
            return;
          }
          updateScrollWidth();

          const newEnd = `+=${calculateChildrenWidth()}`;

          if (scrollTriggerInstance.end !== newEnd) {
            scrollTriggerInstance.end = newEnd;
            scrollTriggerInstance.refresh();
          }

          gsap.to(scrollContainer.current, {
            x: 0,
            duration: 0,
            ease: "power1.inOut",
          });
        }
      }, 300);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMobileView]);

  return (
    <section className={`${s.scrollingCards}`}>
      <img className={s.bgStar} alt="Bg-Star" src='/images/gray-star.svg' />
      <div className={s.mainContainer}>
      {
        cardDummyData.map((item, index) => (
          <StoryCard key={`${item.mainTitle}-${index}`} index={index} {...item} />
        ))
      }
      </div>
      <img className={s.bgStarBtm} alt="Bg-Star" src="/images/our-version-left.svg" />
    </section>
  );
}

export default ScrollingCards;
