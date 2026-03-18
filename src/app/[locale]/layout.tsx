import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { gilroy } from "@/lib/fonts";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const baseUrl = "https://darhypotheken.nl";

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/images/dar-logo-dec.svg",
    },
    alternates: {
      canonical: locale === "nl" ? baseUrl : `${baseUrl}/en`,
      languages: {
        nl: baseUrl,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "nl" ? baseUrl : `${baseUrl}/en`,
      siteName: "DAR Hypotheken",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={gilroy.variable}>
      <body className="antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
