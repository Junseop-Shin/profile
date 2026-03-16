"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const hasTasks = event.tasks && event.tasks.length > 0;

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

      <div
        className={cn(
          "rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden",
          hasTasks && "cursor-pointer"
        )}
      >
        {/* Header */}
        <button
          className={cn(
            "w-full text-left p-5",
            hasTasks && "hover:bg-accent/30 transition-colors"
          )}
          onClick={() => hasTasks && setOpen(!open)}
          disabled={!hasTasks}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
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
            {hasTasks && (
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 mt-1"
              >
                <ChevronDown size={16} className="text-muted-foreground" />
              </motion.div>
            )}
          </div>
        </button>

        {/* Tasks accordion */}
        <AnimatePresence>
          {open && event.tasks && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="border-t border-border px-5 pb-5 pt-4 space-y-5">
                {event.tasks.map((task, ti) => (
                  <div key={ti}>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {task.title}
                      </h4>
                      {task.period && (
                        <span className="text-xs text-muted-foreground">
                          {task.period}
                        </span>
                      )}
                    </div>
                    {task.stack && (
                      <p className="text-xs text-primary mb-2">{task.stack}</p>
                    )}
                    <ul className="space-y-1.5">
                      {task.items.map((item, ii) => (
                        <li
                          key={ii}
                          className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
