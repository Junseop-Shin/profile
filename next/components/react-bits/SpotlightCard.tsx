"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255,255,255,0.15)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = divRef.current!.getBoundingClientRect();
    divRef.current!.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    divRef.current!.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    divRef.current!.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn("spotlight-card", className)}
      style={
        {
          position: "relative",
          overflow: "hidden",
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--spotlight-color": spotlightColor,
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover-spotlight"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)",
        }}
      />
      <style>{`
        .spotlight-card:hover .hover-spotlight,
        .spotlight-card:focus-within .hover-spotlight {
          opacity: 0.6;
        }
      `}</style>
      {children}
    </div>
  );
}
