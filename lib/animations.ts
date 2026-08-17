import { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay: custom * 0.1,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.5,
    },
  },
};


export const floatTransition = {
  y: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
  rotate: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};
