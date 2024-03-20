export const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  viewport: { margin: "-10% 0%", once: true },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 1.2 } },
  viewport: { margin: "-10% 0%", once: true },
};
