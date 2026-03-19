import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-dar-navy md:min-h-[85vh]">
      {/* Decorative clouds — CSS background instead of Image to avoid extra requests */}
      <div
        className="pointer-events-none absolute top-[12%] z-0 w-[60px] opacity-90 md:w-[100px]"
        style={{
          animation: "cloud-move-right 22s linear infinite",
          backgroundImage: "url(/images/cloud.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          aspectRatio: "353 / 233",
        }}
        role="presentation"
      />
      <div
        className="pointer-events-none absolute top-[22%] z-0 w-[80px] opacity-50 md:w-[120px]"
        style={{
          animation: "cloud-move-left 30s linear infinite",
          backgroundImage: "url(/images/cloud.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          aspectRatio: "353 / 233",
        }}
        role="presentation"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center md:py-40">
        <h1
          className="hero-animate text-[42px] font-bold leading-tight text-dar-cream md:text-6xl lg:text-[72px] lg:leading-[1.1]"
          style={{ animationDelay: "0s" }}
        >
          {t("heading1")}
          <br />
          {t("heading2")}
        </h1>

        <p
          className="hero-animate mt-6 text-xl font-semibold text-white md:text-3xl lg:text-[40px]"
          style={{ animationDelay: "0.2s" }}
        >
          {t("subheading")}
        </p>

        <p
          className="hero-animate mt-8 text-sm tracking-widest text-dar-cream/80 md:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          {t("tagline")}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-between pointer-events-none">
        <div className="hero-slide-left w-[38%] max-w-[500px]">
          <Image
            src="/images/Artwork-1-blue.svg"
            alt=""
            width={585}
            height={313}
            className="h-auto w-full"
            loading="lazy"
            sizes="(max-width: 768px) 38vw, 500px"
            aria-hidden
          />
        </div>
        <div className="hero-slide-right w-[42%] max-w-[540px]">
          <Image
            src="/images/Artwork-2-blue.svg"
            alt=""
            width={633}
            height={314}
            className="h-auto w-full"
            loading="lazy"
            sizes="(max-width: 768px) 42vw, 540px"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
