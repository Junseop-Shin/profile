"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { findProject, type ProjectGroup } from "@/data/project-groups";

export default function ProjectGroupBlock({
  group,
  index,
}: {
  group: ProjectGroup;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const main = findProject(group.main);

  if (!main) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-card rounded-2xl border border-border overflow-hidden"
    >
      {/* Main header */}
      <div className="p-6">
        <p className="text-xs text-muted-foreground mb-2">
          {main.company}
          {main.company && " · "}
          {main.period}
        </p>

        <Link
          href={`/projects/${main.slug}`}
          className="group inline-flex items-center gap-1.5"
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {main.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </Link>

        <p className="text-sm text-muted-foreground mt-1">{main.subtitle}</p>

        <p className="text-sm leading-relaxed text-foreground mt-4">
          {main.summary}
        </p>

        {main.metrics && main.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {main.metrics.map((m) => (
              <span
                key={m.label}
                className="px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
              >
                <span className="text-muted-foreground">{m.label}</span>{" "}
                {m.value}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-2">
          {main.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Children */}
      <div className="border-t border-border divide-y divide-border">
        {group.children.map((child) => {
          if ("ref" in child) {
            const sub = findProject(child.ref);
            if (!sub) return null;
            return (
              <Link
                key={child.ref}
                href={`/projects/${sub.slug}`}
                className="group/row flex items-start gap-3 px-6 py-3.5 hover:bg-accent/40 transition-colors"
              >
                <ArrowRight
                  size={14}
                  className="shrink-0 mt-1 text-primary group-hover/row:translate-x-0.5 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-sm font-medium text-foreground">
                      {sub.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {sub.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {sub.subtitle}
                  </p>
                </div>
              </Link>
            );
          }

          return (
            <div key={child.title} className="flex items-start gap-3 px-6 py-3.5">
              <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-medium text-foreground">
                    {child.title}
                  </span>
                  {child.period && (
                    <span className="text-xs text-muted-foreground">
                      {child.period}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {child.note}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
