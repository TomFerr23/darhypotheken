"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { fadeSlideUp, defaultViewport } from "@/lib/animations";
import TimelineItem from "@/components/ui/TimelineItem";

export default function TimelineSection() {
  const t = useTranslations("timeline");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: t("step1Title"), description: t("step1Description") },
    { title: t("step2Title"), description: t("step2Description") },
    { title: t("step3Title"), description: t("step3Description") },
    { title: t("step4Title"), description: t("step4Description") },
  ];

  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-16 text-center text-3xl font-semibold text-dar-slate md:text-5xl"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {t("heading")}
        </motion.h2>

        <div className="relative" ref={containerRef}>
          <div className="timeline-line-track" />
          <motion.div className="timeline-line-fill" style={{ height: lineHeight }} />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <TimelineItem
                key={step.title}
                title={step.title}
                description={step.description}
                index={i}
                alignment={i % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>

        {/* Sharia Compliance Certification */}
        <motion.div
          className="mt-20 flex items-center gap-8"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <span className="text-[16px] leading-tight text-dar-gray">
            Sharia Compliance<br />Certification provided by:
          </span>
          <a
            href="https://noorshariah.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/noor-shariah-logo.png"
              alt="Noor Shariah Solutions"
              width={160}
              height={60}
              className="h-auto w-[140px]"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
