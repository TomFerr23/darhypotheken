import Image from "next/image";
import Marquee from "@/components/ui/Marquee";

export default function LogoMarquee() {
  const logos = Array.from({ length: 8 });

  return (
    <section className="overflow-hidden bg-white py-5">
      <Marquee speed={25} className="py-2">
        {logos.map((_, i) => (
          <div key={i} className="mx-12 flex items-center">
            <Image
              src="/images/dar-logo-blue.svg"
              alt="DAR"
              width={100}
              height={46}
              className="opacity-100"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
