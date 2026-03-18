import type { Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { gilroy } from "@/lib/fonts";
import DynamicChatWidget from "@/components/chat/DynamicChatWidget";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
      icon: "/images/favicon.svg",
      apple: "/images/favicon.svg",
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
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "DAR Hypotheken",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${baseUrl}/images/og-image.jpg`],
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
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preload" href="/images/Artwork-1-blue.svg" as="image" />
        <link rel="preload" href="/images/Artwork-2-blue.svg" as="image" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider>
          {children}
          <DynamicChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
