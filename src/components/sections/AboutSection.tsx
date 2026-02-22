"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeSlideUp, defaultViewport, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.controls = true;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="about" className="bg-[#2167a5] py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-5xl px-6"
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {/* Heading */}
        <motion.h2
          className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight text-[#f8fddb] md:text-5xl lg:text-[48px] lg:leading-[70px]"
          variants={fadeSlideUp}
        >
          Ontdek hoe we samen werken aan een toekomst waarin iedereen meedoet
        </motion.h2>

        {/* Description */}
        <motion.div
          className="mx-auto mt-8 max-w-4xl text-center"
          variants={fadeSlideUp}
        >
          <p className="text-sm leading-snug text-white/80 md:text-base">
            DAR transformeert de financiële sector met het eerste inclusieve hypotheekplatform van Nederland.
          </p>
          <p className="mt-1 text-sm leading-snug text-white/80 md:text-base">
            Onze innovatieve oplossingen maken de toegang tot de koopwoningmarkt toegankelijker voor een breder publiek.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div className="mt-14" variants={fadeSlideUp}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <video
              ref={videoRef}
              loop
              playsInline
              poster="/images/poster-image.jpg"
              preload="metadata"
              className="w-full"
              key={isMobile ? "mobile" : "desktop"}
            >
              <source
                src={
                  isMobile
                    ? "/videos/intro-dar-v8.mp4"
                    : "/videos/DAR-Mo-Chara-WebOptimized.mp4"
                }
                type="video/mp4"
              />
              Je browser ondersteunt geen video.
            </video>

            {/* Dark overlay + play button */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40"
                  onClick={handlePlay}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Play button */}
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg md:h-24 md:w-24"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="ml-1.5 h-8 w-8 text-dar-navy md:h-10 md:w-10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
