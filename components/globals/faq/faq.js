import { useEffect, useState } from "react";
import ArrowCircleSVG from "../../svgs/uparrow";
import style from "./faq.module.scss";

/**
 *
 * @param {{question: string, answer: string, isOpen: boolean, handleIsOpen: Function}} param0
 * @returns
 */
const FAQ = ({ question, answer, isOpen, handleIsOpen }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const _handleIsOpen = () => {
    if (handleIsOpen) {
      handleIsOpen(!isVisible);
      return;
    }
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <div className={style.faqSection}>
      <div className={style.faqQuestion} onClick={_handleIsOpen}>
        <p className="faqQuestion">{question}</p>

        <div
          className={
            isVisible ? style.faqExpandArrow : style.faqExpandArrowInverse
          }
        >
          <ArrowCircleSVG />
        </div>
      </div>
      {isVisible && (
        <p className={`${style.faqAnswer} small faq-answer`}>{answer}</p>
      )}
    </div>
  );
};

export default FAQ;
