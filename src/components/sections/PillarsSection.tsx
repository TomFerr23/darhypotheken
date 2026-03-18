"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  fadeSlideUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";
import CheckmarkIcon from "@/components/ui/CheckmarkIcon";

export default function PillarsSection() {
  const t = useTranslations("pillars");

  const pillars = [
    {
      heading: t("duurzaamHeading"),
      items: [
        { label: t("inclusiviteitLabel"), text: t("inclusiviteitText") },
        { label: t("duurzaamLabel"), text: t("duurzaamText") },
      ],
    },
    {
      heading: t("alternatiefHeading"),
      items: [
        { label: t("medeEigendomLabel"), text: t("medeEigendomText") },
        { label: t("vasteBetalingenLabel"), text: t("vasteBetalingenText") },
      ],
    },
    {
      heading: t("rentevrijHeading"),
      items: [
        { label: t("geenRenteLabel"), text: t("geenRenteText") },
        { label: t("vermogensopbouwLabel"), text: t("vermogensopbouwText") },
      ],
    },
  ];

  return (
    <>
      <section id="purpose" className="bg-dar-navy py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.h2
              className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              variants={fadeSlideUp}
            >
              {t("purposeHeading")}
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl"
              variants={fadeSlideUp}
            >
              {t("purposeDescription")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f9ff] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-y-12 md:grid-cols-3"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.heading}
                className={`px-0 md:px-8 ${index > 0 ? "md:border-l md:border-[#d0dde8]" : ""}`}
                variants={fadeSlideUp}
              >
                <h3 className="mb-6 text-3xl font-semibold text-[#1e293b] md:text-4xl">
                  {pillar.heading}
                </h3>
                <ul className="space-y-4">
                  {pillar.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <CheckmarkIcon className="mt-1 shrink-0 text-[#2384f9]" />
                      <div>
                        <span className="font-semibold text-[#67768e]">
                          {item.label}:
                        </span>{" "}
                        <span className="text-[#67768e]">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
