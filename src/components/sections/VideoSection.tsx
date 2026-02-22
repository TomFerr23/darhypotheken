"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { fadeSlideUp, defaultViewport } from "@/lib/animations";

export default function VideoSection() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="bg-white py-10 md:py-16">
      <motion.div
        className="mx-auto max-w-5xl px-6"
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <div className="overflow-hidden rounded-2xl">
          <video
            ref={videoRef}
            controls
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
        </div>
      </motion.div>
    </section>
  );
}
