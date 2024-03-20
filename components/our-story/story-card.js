import React from 'react'
import styles from "./story-card.module.scss";
import animateWords from "../ui/animate-words";
import { useRef, useEffect } from "react";

function StoryCard({ mainTitle, subTitle, icon, image, description, index }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      animateWords(containerRef);
    }
  }, []);
  return (
    <div className={styles.storyCard}>
      {subTitle ? <section className={styles.headingSection}>
        <div className={`${styles.container} container`} ref={containerRef}>
          <p className={`${styles.mainTitle} `}>
            {mainTitle}
            <br />
            <span className={styles.luck}>
              {subTitle}
            </span>
          </p>
        </div>
      </section>
        :
        <div 
         className={`${styles.sideBySideContainer} ${ index % 2 == 0 ? styles.reverseContainer: styles.normalContainer}`}>
          <div className={styles.left}>
            <img src={image} alt={mainTitle} />
          </div>
          <div className={styles.right} ref={containerRef}>
            <div className={styles.rightContent}>
              <p className={`${styles.mainTitle} `}>
                {mainTitle}
              </p>
              <img src={icon} alt={'Icon'} />
            </div>
            <p className={styles.description}>
              {description}
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default StoryCard;
