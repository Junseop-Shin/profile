"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function StackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            기술 스택
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + gi * 0.08 + si * 0.04,
                    }}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                      skill.level === "primary"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-accent border-border text-muted-foreground"
                    )}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
