"use client";

import { motion } from "motion/react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "green";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const baseClasses = clsx(
    "inline-block rounded-full px-10 py-5 font-semibold text-center transition-all cursor-pointer",
    "text-base md:text-lg",
    "max-md:px-7 max-md:py-4",
    variant === "primary" && "bg-dar-yellow text-dar-slate hover:brightness-105",
    variant === "green" && "bg-dar-green text-white hover:brightness-105",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
