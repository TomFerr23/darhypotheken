"use client";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({
  children,
  speed = 20,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
