export const styleAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 1, duration: 0.5 },
  }),
};
