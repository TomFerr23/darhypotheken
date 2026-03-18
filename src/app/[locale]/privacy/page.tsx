import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

const baseUrl = "https://darhypotheken.nl";

const meta = {
  nl: {
    title: "Privacyverklaring — DAR Hypotheken",
    description:
      "Lees hoe DAR Hypotheken uw persoonsgegevens verwerkt volgens de AVG. Informatie over gegevensverwerking, beveiliging en uw rechten.",
  },
  en: {
    title: "Privacy Statement — DAR Hypotheken",
    description:
      "Learn how DAR Hypotheken processes your personal data under GDPR. Information about data processing, security, and your rights.",
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
    locale === "nl" ? `${baseUrl}/privacy` : `${baseUrl}/en/privacy`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        nl: `${baseUrl}/privacy`,
        en: `${baseUrl}/en/privacy`,
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

export default function PrivacyPage() {
  return <PrivacyContent />;
}
