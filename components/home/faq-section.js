import { useMemo, useRef, useState } from "react";
import Button from "../Button";
import FAQ from "../globals/faq/faq";
import style from "./faq-section.module.scss";

const faqs = [
  {
    q: "What makes LUCKY FCK Energy different from other energy drinks?",
    ans: "LUCKY FCK Energy is unique due to its blend of five super ingredients including maca ans beta-alanine, offering a balanced and sustained energy boost without crash or jitters. It has zero sugar, zero aftertaste, and only five calories."
  },
  {
    q: "What flavors does LUCKY FCK Energy come in?",
    ans: "LUCKY FCK Energy is available in 5 flavors: OG Luck, Bodacious Berry, Tropical Thrill, Red Ryder Punch, and Orange Drizzle."
  },
  {
    q: "What are the ingredients in LUCKY FCK Energy?",
    ans: "The ingredients include carbonated water, citric acid, natural flavors, caffeine, taurine, beta-alanine, ginseng extract, and maca extract."
  }
];

const FAQSection = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState();
  const mediaRef = useRef();

  const faqsData = useMemo(() => {
    return faqs.map((faq, index) => {
      return (
        <div className={style.faqBox} key={index}>
          <FAQ
            question={faq.q}
            answer={faq.ans}
            isOpen={selectedQuestionIndex === index}
            handleIsOpen={(isOpen) => {
              if (!isOpen) {
                setSelectedQuestionIndex(null);
                return;
              }
              setSelectedQuestionIndex(index);
            }}
          />
        </div>
      );
    });
  }, [selectedQuestionIndex]);

  return (
    <div className={style.questionContainer}>
      <div className={style.questionBox}>
        <div style={{ width: "100%" }}>
          <p className={`${style.questionTitle} faqHeaderText questions-text`}>
            Questions? Start here
          </p>
          {faqsData}
        </div>
        <div className={style.ctaContain}>
          <Button href="/faq" title="View All FAQs" />
        </div>
      </div>

      <div className={style.mediaContain} ref={mediaRef}>
        <video playsInline muted loop autoPlay>
          <source src={"media/coin-white.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FAQSection;
