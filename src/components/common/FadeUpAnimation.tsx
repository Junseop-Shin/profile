import { useRef, ReactNode } from "react";
import { HTMLMotionProps, motion, useInView } from "motion/react";

interface FadeUpAnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  reAnimate?: boolean;
}

export default function FadeUpAnimation({
  children,
  delay = 0,
  duration = 0.8,
  reAnimate = true,
}: FadeUpAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !reAnimate, margin: "-100px 0px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
