"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TIMELINE_STEPS } from "@/lib/constants";
import { fadeSlideUp, defaultViewport } from "@/lib/animations";
import TimelineItem from "@/components/ui/TimelineItem";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
          Hypotheekproces
        </motion.h2>

        <div className="relative" ref={containerRef}>
          {/* Background line (grey track) */}
          <div className="timeline-line-track" />
          {/* Animated fill line */}
          <motion.div className="timeline-line-fill" style={{ height: lineHeight }} />

          <div className="flex flex-col gap-12">
            {TIMELINE_STEPS.map((step, i) => (
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
      </div>
    </section>
  );
}
