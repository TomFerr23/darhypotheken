export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DAR Hypotheken B.V.",
    url: "https://darhypotheken.nl",
    email: "info@darhypotheken.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Oostenburgermiddenstraat 119",
      addressLocality: "Amsterdam",
      postalCode: "1018 LH",
      addressCountry: "NL",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
