import type { Metadata } from "next";
import { gilroy } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAR Hypotheken — Duurzaam. Alternatief. Rentevrij.",
  description:
    "De eerste halalhypotheek in Nederland. DAR streeft ernaar de bestaande woningmarkt te verrijken met een alternatief, modern financieel product dat rentevrij is.",
  openGraph: {
    title: "DAR Hypotheken — Duurzaam. Alternatief. Rentevrij.",
    description:
      "De eerste halalhypotheek in Nederland. Een alternatief, modern financieel product dat rentevrij is.",
    url: "https://darhypotheken.nl",
    siteName: "DAR Hypotheken",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={gilroy.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
