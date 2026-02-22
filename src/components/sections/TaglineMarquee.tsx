"use client";

import Marquee from "@/components/ui/Marquee";

export default function TaglineMarquee() {
  const items = Array.from({ length: 6 });

  return (
    <section className="overflow-hidden bg-dar-navy py-6">
      <Marquee speed={30}>
        {items.map((_, i) => (
          <span
            key={i}
            className="mx-8 whitespace-nowrap text-xl font-semibold uppercase tracking-widest text-dar-cream md:text-2xl"
          >
            dar &ndash; duurzaam alternatief rentevrij
          </span>
        ))}
      </Marquee>
    </section>
  );
}
