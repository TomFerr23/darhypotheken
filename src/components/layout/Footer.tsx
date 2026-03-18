"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const privacyHref = locale === "nl" ? "/privacy" : "/en/privacy";

  return (
    <footer className="bg-dar-navy">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image
              src="/images/dar-logo.svg"
              alt="DAR Hypotheken"
              width={80}
              height={32}
            />
            <p className="mt-4 text-sm text-dar-cream/70">{t("tagline")}</p>
            <a
              href="https://maps.google.com/?q=Oostenburgermiddenstraat+119,+1018+LH+Amsterdam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm leading-snug text-dar-cream/50 underline hover:text-dar-cream/70"
            >
              Oostenburgermiddenstraat 119<br />
              1018 LH, Amsterdam (NL)
            </a>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-dar-cream">
              {t("navigation")}
            </h4>
            <ul className="space-y-2 text-sm text-dar-cream/70">
              <li>
                <a href="#about" className="hover:text-dar-cream">
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-dar-cream">
                  {t("howItWorks")}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-dar-cream">
                  {t("team")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-dar-cream">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-dar-cream">
              {t("legal")}
            </h4>
            <ul className="space-y-2 text-sm text-dar-cream/70">
              <li>
                <a href={privacyHref} className="hover:text-dar-cream">
                  {t("privacy")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-dar-cream">
              {t("contactHeading")}
            </h4>
            <p className="text-sm text-dar-cream/70">info@darhypotheken.nl</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-dar-cream/20 pt-6 text-sm text-dar-cream/50">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <LanguageSwitcher className="text-dar-cream/70" />
        </div>
      </div>
    </footer>
  );
}
