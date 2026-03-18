"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "nl" ? "en" : "nl";

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className={`flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80 ${className}`}
      aria-label={`Switch to ${otherLocale === "nl" ? "Dutch" : "English"}`}
    >
      <span className={locale === "nl" ? "font-bold" : "opacity-60"}>NL</span>
      <span className="opacity-40">/</span>
      <span className={locale === "en" ? "font-bold" : "opacity-60"}>EN</span>
    </button>
  );
}
