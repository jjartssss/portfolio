const useSlideInAnimation = () => {
  return {
    initial: { x: 0 },
    transition: { duration: 1 },
    whileInView: { x: -200 },
    viewport: { once: true },
  };
};