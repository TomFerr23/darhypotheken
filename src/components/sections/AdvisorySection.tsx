"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ADVISORY_MEMBERS } from "@/lib/constants";
import {
  fadeSlideUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

export default function AdvisorySection() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-12 text-center"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <h2 className="text-3xl font-semibold text-dar-slate md:text-5xl">
            Advisory Board
          </h2>
          <button
            onClick={() => setVisible(!visible)}
            className="mt-4 text-dar-blue underline transition-opacity hover:opacity-80"
          >
            {visible ? "Verbergen" : "Bekijk ons Advisory Board"}
          </button>
        </motion.div>

        <AnimatePresence>
          {visible && (
            <motion.div
              className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              {ADVISORY_MEMBERS.map((member) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col items-center text-center"
                  variants={fadeSlideUp}
                >
                  <div className="relative mb-4 h-[300px] w-[230px] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="230px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-dar-slate">
                    {member.name}
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {member.credentials.map((cred) => (
                      <li key={cred} className="flex items-center gap-2 text-sm text-dar-gray">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="shrink-0"
                        >
                          <path
                            d="M4.5 2L8.5 6L4.5 10"
                            stroke="#565D66"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {cred}
                      </li>
                    ))}
                  </ul>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3"
                      aria-label={`${member.name} op LinkedIn`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#80C33F"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
