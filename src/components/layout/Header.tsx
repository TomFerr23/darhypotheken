"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-dar-navy">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <Image
              src="/images/dar-logo.svg"
              alt="DAR Hypotheken"
              width={100}
              height={40}
              priority
            />
          </a>

          {/* Desktop Nav — centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 nav:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-dar-cream transition-opacity hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Anmelding button — desktop */}
          <a
            href="#contact"
            className="hidden shrink-0 rounded-full bg-dar-green px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 nav:inline-flex"
          >
            Anmelding
          </a>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 nav:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu openen"
          >
            <span className="block h-0.5 w-6 bg-dar-cream" />
            <span className="block h-0.5 w-6 bg-dar-cream" />
            <span className="block h-0.5 w-6 bg-dar-cream" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
