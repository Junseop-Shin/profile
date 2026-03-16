"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import CountUp from "@/components/react-bits/CountUp";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import GradientText from "@/components/react-bits/GradientText";
import Particles from "@/components/react-bits/Particles";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-14 overflow-hidden relative">
      {/* Particles background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles
          particleCount={120}
          particleSpread={12}
          speed={0.06}
          particleColors={["#3b82f6", "#8b5cf6", "#6366f1", "#a78bfa"]}
          alphaParticles
          particleBaseSize={60}
          sizeRandomness={1.2}
          disableRotation={false}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            뒤로가기
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            {project.company ?? (project.type === "work" ? "Work" : "Personal")}
          </p>

          {/* GradientText title */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3">
            <GradientText
              colors={["#60a5fa", "#a78bfa", "#34d399", "#60a5fa"]}
              animationSpeed={6}
            >
              {project.title}
            </GradientText>
          </h1>

          <p className="text-xl text-muted-foreground">{project.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className="text-sm text-muted-foreground">{project.period}</span>
            <div className="flex gap-3">
              {project.web && (
                <a
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={14} /> 바로가기
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-accent/80 backdrop-blur-sm text-accent-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Metrics — SpotlightCard + CountUp */}
        {project.metrics && project.metrics.length > 0 && (
          <MetricsGrid metrics={project.metrics} />
        )}

        {/* Summary */}
        <SummaryCard summary={project.summary} />

        {/* Sections */}
        {project.sections?.map((section, i) => (
          <ContentSection key={i} section={section} delay={0.5 + i * 0.1} />
        ))}
      </div>
    </div>
  );
}

// ── 수치 파싱 헬퍼 ─────────────────────────────────────────────
function parseMetricValue(value: string): { number: number; prefix: string; suffix: string } | null {
  // "90%" → number=90, suffix="%"
  // "월 260만원" → null (숫자로 카운트업 불가)
  // 콤마 제거 후 파싱 (e.g. "$2,700+" → prefix="$", number=2700, suffix="+")
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^([\D]*?)(\d+(?:\.\d+)?)(.*?)$/);
  if (!match) return null;
  const number = parseFloat(match[2]);
  if (isNaN(number) || number > 99999) return null;
  return { prefix: match[1].trim(), number, suffix: match[3].trim() };
}

function MetricsGrid({ metrics }: { metrics: NonNullable<Project["metrics"]> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
    >
      {metrics.map((m, i) => {
        const parsed = parseMetricValue(m.value);
        return (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.07 }}
          >
            <SpotlightCard
              className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center h-full"
              spotlightColor="rgba(96, 165, 250, 0.25)"
            >
              <p className="text-xl font-bold text-primary mb-1">
                {parsed ? (
                  <>
                    {parsed.prefix && <span>{parsed.prefix} </span>}
                    <CountUp to={parsed.number} duration={1.5} delay={0.5 + i * 0.1} />
                    {parsed.suffix}
                  </>
                ) : (
                  m.value
                )}
              </p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </SpotlightCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function SummaryCard({ summary }: { summary: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-6"
    >
      <SpotlightCard
        className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 sm:p-8"
        spotlightColor="rgba(139, 92, 246, 0.15)"
      >
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Overview
        </h2>
        <p className="text-base leading-relaxed text-foreground">{summary}</p>
      </SpotlightCard>
    </motion.div>
  );
}

function ContentSection({
  section,
  delay,
}: {
  section: NonNullable<Project["sections"]>[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <SpotlightCard
        className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 sm:p-8"
        spotlightColor="rgba(99, 102, 241, 0.15)"
      >
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
          {section.heading}
        </h2>
        <ul className="space-y-3">
          {section.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + 0.1 + i * 0.06 }}
              className="flex gap-3 text-sm leading-relaxed text-foreground"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </SpotlightCard>
    </motion.div>
  );
}
