import type { Variants, Transition } from "motion/react";

export const easeOutBack: [number, number, number, number] = [
  0.175, 0.885, 0.32, 1.275,
];

export const fadeSlideUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutBack },
  },
};

export const slideFromLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutBack },
  },
};

export const slideFromRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutBack },
  },
};

export const staggerContainer = (staggerDelay = 0.15): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay },
  },
});

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutBack },
  },
};

export const defaultViewport = { once: true, amount: 0.1 as const };

export const heroEntrance: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOutBack,
    },
  },
};
