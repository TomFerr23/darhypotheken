"use client";

import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
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
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-3xl text-dar-cream"
                aria-label="Menu sluiten"
              >
                &times;
              </button>
            </div>

            {/* Nav links */}
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
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
