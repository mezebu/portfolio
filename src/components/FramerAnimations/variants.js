export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.9,
    },
  },
};

export const item = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
