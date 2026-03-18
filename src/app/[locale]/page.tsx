import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import PillarsSection from "@/components/sections/PillarsSection";
import LottieSection from "@/components/sections/LottieSection";
import TaglineMarquee from "@/components/sections/TaglineMarquee";
import TimelineSection from "@/components/sections/TimelineSection";
import TeamSection from "@/components/sections/TeamSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import ClosingSection from "@/components/sections/ClosingSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LogoMarquee />
        <PillarsSection />
        <LottieSection />
        <TaglineMarquee />
        <TimelineSection />
        <TeamSection />
        <BlogPreviewSection locale={locale} />
        <ClosingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
