import faqNl from "@/data/faq/faq-nl.json";
import faqEn from "@/data/faq/faq-en.json";

/**
 * Indices (0-based) of the 10 most important FAQ entries to include
 * in the FAQPage structured data. These correspond to positions in
 * both faq-nl.json and faq-en.json (which share the same ordering).
 *
 *  0 — Wat is een halal hypotheek / What is a halal mortgage
 *  1 — Wat is DAR Hypotheken / What is DAR Hypotheken
 *  2 — Hoe werkt mede-eigendom / How does co-ownership work
 *  3 — Maandelijkse kosten / Monthly costs
 *  4 — Sharia-compliant / Sharia-compliant
 *  5 — Voor wie geschikt / Who is it for
 *  6 — Verschil met gewone hypotheek / Difference with regular mortgage
 *  7 — Looptijd / Term length
 * 12 — Hoe vraag ik aan / How do I apply
 * 19 — Belastingaftrek / Tax deduction
 */
const SELECTED_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 12, 19];

interface FaqJsonLdProps {
  locale: string;
}

export default function FaqJsonLd({ locale }: FaqJsonLdProps) {
  const faqData = locale === "en" ? faqEn : faqNl;

  const mainEntity = SELECTED_INDICES.map((idx) => {
    const entry = faqData[idx];
    // Use the first pattern as the question (it's the most natural phrasing)
    const question = entry.patterns[0];
    return {
      "@type": "Question",
      name: question.charAt(0).toUpperCase() + question.slice(1),
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
