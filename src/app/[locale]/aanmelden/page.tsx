import type { Metadata } from "next";
import AanmeldenContent from "./AanmeldenContent";

const baseUrl = "https://darhypotheken.nl";

const meta = {
  nl: {
    title: "Aanmelden — DAR Hypotheken | Halalhypotheek Aanvragen",
    description:
      "Meld u aan voor de eerste halalhypotheek in Nederland. Vul uw gegevens in en ontvang meer informatie zodra DAR beschikbaar is.",
  },
  en: {
    title: "Register — DAR Hypotheken | Apply for Halal Mortgage",
    description:
      "Register for the first halal mortgage in the Netherlands. Fill in your details and receive more information when DAR launches.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = locale === "en" ? meta.en : meta.nl;
  const canonical =
    locale === "nl" ? `${baseUrl}/aanmelden` : `${baseUrl}/en/aanmelden`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        nl: `${baseUrl}/aanmelden`,
        en: `${baseUrl}/en/aanmelden`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: "DAR Hypotheken",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
    },
  };
}

export default function AanmeldenPage() {
  return <AanmeldenContent />;
}
