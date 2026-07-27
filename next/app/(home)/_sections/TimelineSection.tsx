"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { career } from "@/data/career";
import { cn } from "@/lib/utils";

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            이력
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-6">
            {career.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
}: {
  event: (typeof career)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="pl-8 relative"
    >
      {/* Dot */}
      <div
        className={cn(
          "absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-colors",
          event.highlight
            ? "bg-primary border-primary"
            : "bg-background border-border"
        )}
      />

      <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="font-semibold text-foreground">{event.company}</h3>
          <span className="text-sm text-muted-foreground">{event.role}</span>
        </div>
        <p className="text-xs text-muted-foreground mb-2">
          {event.period}
          {event.duration && ` · ${event.duration}`}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {event.summary}
        </p>
      </div>
    </motion.div>
  );
}
