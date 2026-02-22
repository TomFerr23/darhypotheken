"use client";

import { motion } from "motion/react";
import ChevronIcon from "./ChevronIcon";
import { easeOutBack } from "@/lib/animations";

interface TimelineItemProps {
  title: string;
  description: string;
  index: number;
  alignment: "left" | "right";
}

export default function TimelineItem({
  title,
  description,
  index,
  alignment,
}: TimelineItemProps) {
  const isLeft = alignment === "left";

  return (
    <motion.div
      className="relative flex w-full items-center md:justify-center"
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: easeOutBack,
      }}
    >
      {/* Mobile layout: content always on the right */}
      <div className="flex w-full items-start gap-6 md:hidden">
        {/* Timeline dot */}
        <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dar-blue bg-white">
          <ChevronIcon />
        </div>
        <div className="flex-1 pb-10">
          <h3 className="text-lg font-semibold text-dar-slate">{title}</h3>
          <p className="mt-2 text-dar-gray">{description}</p>
        </div>
      </div>

      {/* Desktop layout: alternating */}
      <div className="hidden w-full md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
        {/* Left content */}
        <div
          className={`flex items-center ${isLeft ? "justify-end text-right" : ""}`}
        >
          {isLeft && (
            <div className="max-w-sm">
              <h3 className="text-xl font-semibold text-dar-slate">{title}</h3>
              <p className="mt-2 text-dar-gray">{description}</p>
            </div>
          )}
        </div>

        {/* Center dot */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dar-blue bg-white">
          <ChevronIcon />
        </div>

        {/* Right content */}
        <div className={`flex items-center ${!isLeft ? "" : ""}`}>
          {!isLeft && (
            <div className="max-w-sm">
              <h3 className="text-xl font-semibold text-dar-slate">{title}</h3>
              <p className="mt-2 text-dar-gray">{description}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
