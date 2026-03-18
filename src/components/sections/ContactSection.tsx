"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import { fadeSlideUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-[#1c3349] py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.h2
          className="text-3xl font-semibold text-[#f8fddb] md:text-5xl"
          variants={fadeSlideUp}
        >
          {t("heading")}
        </motion.h2>

        <motion.p
          className="mt-4 text-xl text-[#f8fddb]/80 md:text-2xl"
          variants={fadeSlideUp}
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          className="mt-6 text-[#f8fddb]/70"
          variants={fadeSlideUp}
        >
          {t("description1")}<br />
          {t("description2")}
        </motion.p>

        <motion.div className="mt-8" variants={fadeSlideUp}>
          <Button href="#contact" variant="green">
            {t("cta")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
