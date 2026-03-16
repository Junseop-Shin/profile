"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { about } from "@/data/about";

export default function BioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bio" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-8">
            소개
          </h2>

          <div className="space-y-3 mb-16">
            {about.intro.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {about.strengths.map((strength, i) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold text-foreground mb-3">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {strength.description}
                </p>
                {strength.metrics.length > 0 && (
                  <ul className="space-y-2">
                    {strength.metrics.map((m) => (
                      <li
                        key={m.label}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-muted-foreground">{m.label}</span>
                        <span className="font-semibold text-primary">
                          {m.value} {m.suffix}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            <span className="text-xs text-muted-foreground mr-2 self-center">
              자격증
            </span>
            {about.certifications.map((cert) => (
              <span
                key={cert.name}
                className={`px-3 py-1 rounded-full text-xs font-medium border border-border bg-card transition-colors ${
                  cert.muted ? "text-muted-foreground/40 border-border/40" : "text-foreground"
                }`}
              >
                {cert.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
