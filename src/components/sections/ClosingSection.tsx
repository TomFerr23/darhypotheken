"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { fadeSlideUp, defaultViewport } from "@/lib/animations";

export default function ClosingSection() {
  const t = useTranslations("closing");

  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-16 md:pt-24">
      <div
        className="pointer-events-none absolute top-[8%] z-0 w-[80px] opacity-60 md:w-[120px]"
        style={{ animation: "cloud-move-right 22s linear infinite" }}
      >
        <Image src="/images/cloud-blue-last.svg" alt="" width={430} height={210} className="h-auto w-full" aria-hidden />
      </div>
      <div
        className="pointer-events-none absolute top-[18%] z-0 w-[100px] opacity-40 md:w-[160px]"
        style={{ animation: "cloud-move-left 32s linear infinite" }}
      >
        <Image src="/images/two-clouds.svg" alt="" width={586} height={321} className="h-auto w-full" aria-hidden />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <p className="text-2xl font-semibold text-dar-slate md:text-4xl lg:text-5xl">
          {t("tagline")}
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-6xl items-end justify-center px-6 md:mt-14">
        <motion.div
          className="w-[45%] max-w-[585px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src="/images/Artwork.svg" alt="" width={585} height={313} className="h-auto w-full" aria-hidden />
        </motion.div>
        <motion.div
          className="-ml-[5%] w-[55%] max-w-[633px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <Image src="/images/Artwork-2.svg" alt="" width={633} height={314} className="h-auto w-full" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
