"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-dar-navy"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="flex h-full flex-col px-6 py-4">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-3xl text-dar-cream"
                aria-label={t("closeMenu")}
              >
                &times;
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-semibold text-dar-cream"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + NAV_ITEMS.length * 0.05 }}
            >
              <Link
                href="/aanmelden"
                onClick={onClose}
                className="mt-10 block rounded-full bg-dar-green px-5 py-3 text-center text-lg font-semibold text-white transition-opacity hover:opacity-90"
              >
                {t("anmelding")}
              </Link>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <LanguageSwitcher className="text-dar-cream text-lg" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
