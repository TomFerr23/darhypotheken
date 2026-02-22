"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { TeamMember } from "@/lib/types";
import { fadeSlideUp } from "@/lib/animations";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={fadeSlideUp}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="relative mb-4 h-[300px] w-[230px] overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out hover:scale-105"
          sizes="230px"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#f8fddb]">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-white/70">{member.title}</p>
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          aria-label={`Email ${member.name}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13L2 4" />
          </svg>
          {member.email}
        </a>
      )}
    </motion.div>
  );
}
