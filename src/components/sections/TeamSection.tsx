"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { TEAM_MEMBERS } from "@/lib/constants";
import {
  fadeSlideUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";
import TeamCard from "@/components/ui/TeamCard";

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <section id="team" className="bg-[#1c5490] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="mb-16 text-center text-3xl font-semibold text-[#f8fddb] md:text-5xl"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {t("heading")}
        </motion.h2>

        <motion.div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} member={member} title={t(member.titleKey)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
