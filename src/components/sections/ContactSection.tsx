"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { fadeSlideUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function ContactSection() {
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
          Contact
        </motion.h2>

        <motion.p
          className="mt-4 text-xl text-[#f8fddb]/80 md:text-2xl"
          variants={fadeSlideUp}
        >
          Klaar om meer te ontdekken?
        </motion.p>

        <motion.p
          className="mt-6 text-[#f8fddb]/70"
          variants={fadeSlideUp}
        >
          Vul het formulier in en ontvang meer informatie<br />
          over de mogelijkheden van een DAR hypotheek.
        </motion.p>

        <motion.div className="mt-8" variants={fadeSlideUp}>
          <Button href="#contact" variant="green">
            Aanmelding
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
