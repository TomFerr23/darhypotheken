"use client";

import { motion } from "motion/react";
import { PILLARS } from "@/lib/constants";
import {
  fadeSlideUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";
import CheckmarkIcon from "@/components/ui/CheckmarkIcon";

export default function PillarsSection() {
  return (
    <section className="bg-dar-navy py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Purpose heading + description */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            variants={fadeSlideUp}
          >
            Purpose
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl"
            variants={fadeSlideUp}
          >
            DAR streeft ernaar de bestaande woningmarkt te verrijken met een
            alternatief, modern financieel product dat rentevrij is.
          </motion.p>
        </motion.div>

        {/* Three pillars with dividers */}
        <motion.div
          className="grid gap-y-12 md:grid-cols-3"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.heading}
              className={`px-0 md:px-8 ${index > 0 ? "md:border-l md:border-white/20" : ""}`}
              variants={fadeSlideUp}
            >
              <h3 className="mb-6 text-3xl font-semibold text-dar-yellow md:text-4xl">
                {pillar.heading}
              </h3>
              <ul className="space-y-4">
                {pillar.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckmarkIcon className="mt-1 shrink-0 text-[#2384f9]" />
                    <div>
                      <span className="font-semibold text-white">
                        {item.label}:
                      </span>{" "}
                      <span className="text-white/70">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
