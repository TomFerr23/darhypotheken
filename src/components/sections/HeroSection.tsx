"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { heroEntrance, staggerContainer, easeOutBack } from "@/lib/animations";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-dar-navy md:min-h-[85vh]">
      {/* Decorative clouds — CSS background instead of Image to avoid extra requests */}
      <div
        className="pointer-events-none absolute top-[12%] z-0 w-[60px] opacity-90 md:w-[100px]"
        style={{
          animation: "cloud-move-right 22s linear infinite",
          backgroundImage: "url(/images/cloud.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          aspectRatio: "353 / 233",
        }}
        role="presentation"
      />
      <div
        className="pointer-events-none absolute top-[22%] z-0 w-[80px] opacity-50 md:w-[120px]"
        style={{
          animation: "cloud-move-left 30s linear infinite",
          backgroundImage: "url(/images/cloud.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          aspectRatio: "353 / 233",
        }}
        role="presentation"
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center md:py-40"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[42px] font-bold leading-tight text-dar-cream md:text-6xl lg:text-[72px] lg:leading-[1.1]"
          variants={heroEntrance}
        >
          {t("heading1")}
          <br />
          {t("heading2")}
        </motion.h1>

        <motion.p
          className="mt-6 text-xl font-semibold text-white md:text-3xl lg:text-[40px]"
          variants={heroEntrance}
        >
          {t("subheading")}
        </motion.p>

        <motion.p
          className="mt-8 text-sm tracking-widest text-dar-cream/80 md:text-xl"
          variants={heroEntrance}
        >
          {t("tagline")}
        </motion.p>
      </motion.div>

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
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 38vw, 500px"
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
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 42vw, 540px"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
