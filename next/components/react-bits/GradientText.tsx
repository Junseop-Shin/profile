"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "motion/react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#60a5fa", "#a78bfa", "#34d399", "#60a5fa"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    elapsedRef.current += time - lastTimeRef.current;
    lastTimeRef.current = time;

    const fullCycle = animationDuration * 2;
    const cycleTime = elapsedRef.current % fullCycle;
    progress.set(
      cycleTime < animationDuration
        ? (cycleTime / animationDuration) * 100
        : 100 - ((cycleTime - animationDuration) / animationDuration) * 100
    );
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress]);

  const backgroundPosition = useTransform(
    progress,
    (p) => `${p}% 50%`
  );

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${[...colors, colors[0]].join(", ")})`,
    backgroundSize: "300% 100%",
    backgroundRepeat: "repeat" as const,
    backgroundClip: "text" as const,
    WebkitBackgroundClip: "text" as const,
    color: "transparent" as const,
    display: "inline-block" as const,
  };

  return (
    <span
      className={className}
      onMouseEnter={useCallback(() => setIsPaused(true), [])}
      onMouseLeave={useCallback(() => setIsPaused(false), [])}
    >
      <motion.span style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.span>
    </span>
  );
}
