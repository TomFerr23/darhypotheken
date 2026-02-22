"use client";

import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => (
      <div className="h-[450px] w-[450px] animate-pulse rounded-lg bg-gray-100" />
    ),
  }
);

interface LottiePlayerProps {
  src: string;
  className?: string;
}

export default function LottiePlayer({ src, className }: LottiePlayerProps) {
  return (
    <DotLottieReact
      src={src}
      autoplay
      loop
      className={className}
    />
  );
}
