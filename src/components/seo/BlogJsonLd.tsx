interface BlogJsonLdProps {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  author: string;
  url: string;
}

export default function BlogJsonLd({
  title,
  description,
  image,
  datePublished,
  author,
  url,
}: BlogJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    ...(image && { image }),
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    url,
    publisher: {
      "@type": "Organization",
      name: "DAR Hypotheken B.V.",
      url: "https://darhypotheken.nl",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
