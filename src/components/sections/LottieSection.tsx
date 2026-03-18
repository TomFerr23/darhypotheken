"use client";

import { motion } from "motion/react";
import LottiePlayer from "@/components/ui/LottiePlayer";
import { fadeSlideUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function LottieSection() {
  return (
    <section className="-mt-10 -mb-10 bg-white md:-mt-20 md:-mb-16">
      <motion.div
        className="mx-auto grid max-w-6xl gap-0 px-6 grid-cols-2 md:grid-cols-3 items-end"
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div
          variants={fadeSlideUp}
          className="flex items-end justify-center"
          style={{ minHeight: 250, minWidth: 250 }}
        >
          <LottiePlayer
            src="/animations/animation-1.lottie"
            className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]"
          />
        </motion.div>
        <motion.div
          variants={fadeSlideUp}
          className="flex items-end justify-center"
          style={{ minHeight: 250, minWidth: 250 }}
        >
          <LottiePlayer
            src="/animations/animation-2.lottie"
            className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]"
          />
        </motion.div>
        <motion.div
          variants={fadeSlideUp}
          className="hidden items-end justify-center md:flex"
          style={{ minHeight: 400, minWidth: 400 }}
        >
          <LottiePlayer
            src="/animations/animation-1.lottie"
            className="h-[400px] w-[400px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
