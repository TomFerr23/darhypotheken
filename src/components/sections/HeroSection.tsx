"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroEntrance, staggerContainer, easeOutBack } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-dar-navy">
      {/* Cloud moving left → right (top area) */}
      <div
        className="pointer-events-none absolute top-[10%] z-0 w-[140px] opacity-70 md:w-[200px]"
        style={{ animation: "cloud-move-right 18s linear infinite" }}
      >
        <Image
          src="/images/cloud.svg"
          alt=""
          width={353}
          height={233}
          className="h-auto w-full"
          aria-hidden
        />
      </div>

      {/* Cloud moving right → left (slightly lower & a bit larger) */}
      <div
        className="pointer-events-none absolute top-[25%] z-0 w-[180px] opacity-50 md:w-[260px]"
        style={{ animation: "cloud-move-left 30s linear infinite" }}
      >
        <Image
          src="/images/cloud.svg"
          alt=""
          width={353}
          height={233}
          className="h-auto w-full"
          aria-hidden
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center md:py-40"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-tight text-dar-cream md:text-6xl lg:text-[72px] lg:leading-[1.1]"
          variants={heroEntrance}
        >
          De eerste halalhypotheek
          <br />
          in Nederland
        </motion.h1>

        <motion.p
          className="mt-6 text-xl font-semibold text-white md:text-3xl lg:text-[40px]"
          variants={heroEntrance}
        >
          DAR &hellip; kan je mee thuiskomen!
        </motion.p>

        <motion.p
          className="mt-8 text-lg tracking-widest text-dar-cream/80 md:text-xl"
          variants={heroEntrance}
        >
          Duurzaam. Alternatief. Rentevrij.
        </motion.p>
      </motion.div>

      {/* Bottom artwork illustrations – slide in on load */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-between pointer-events-none">
        <motion.div
          className="w-[38%] max-w-[500px]"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: easeOutBack, delay: 0.3 }}
        >
          <Image
            src="/images/Artwork-1-blue.svg"
            alt=""
            width={585}
            height={313}
            className="h-auto w-full"
            aria-hidden
          />
        </motion.div>
        <motion.div
          className="w-[42%] max-w-[540px]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: easeOutBack, delay: 0.3 }}
        >
          <Image
            src="/images/Artwork-2-blue.svg"
            alt=""
            width={633}
            height={314}
            className="h-auto w-full"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
