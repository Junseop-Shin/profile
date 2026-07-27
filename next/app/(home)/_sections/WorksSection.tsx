"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { ExternalLink, Github, Briefcase, User } from "lucide-react";
import { projects } from "@/data/projects";
import { projectGroups, groupedSlugs } from "@/data/project-groups";
import ProjectGroupBlock from "./ProjectGroupBlock";
import { cn } from "@/lib/utils";

export default function WorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const standalone = projects
    .filter((p) => !groupedSlugs.has(p.slug))
    .sort((a, b) => {
      const parse = (p: string) => p.slice(0, 7).replace(".", "");
      return parse(b.period) > parse(a.period) ? 1 : -1;
    });

  return (
    <section id="works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            프로젝트
          </h2>
        </motion.div>

        <h3 className="text-lg font-semibold text-foreground mb-5">
          업무 프로젝트
        </h3>
        <div className="space-y-5 mb-16">
          {projectGroups.map((group, i) => (
            <ProjectGroupBlock key={group.main} group={group} index={i} />
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-5">
          개인 프로젝트
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {standalone.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const router = useRouter();

  const imageSrc =
    project.thumbnail && project.thumbnail !== "/no_image_available.jpg"
      ? project.thumbnail
      : project.ogImage ?? null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden cursor-pointer transition-shadow hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-accent overflow-hidden relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className={cn(
              "transition-transform duration-500 group-hover:scale-105",
              project.thumbnailContain ? "object-contain p-8" : "object-cover"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {project.type === "work" ? (
              <Briefcase size={32} className="text-muted-foreground" />
            ) : (
              <User size={32} className="text-muted-foreground" />
            )}
          </div>
        )}
        {project.company && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs bg-background/80 backdrop-blur-sm text-foreground border border-border">
            {project.company}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-foreground text-base">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <span className="text-xs text-muted-foreground shrink-0 mt-0.5">
            {project.period.split(" ")[0]}
          </span>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.metrics.slice(0, 2).map((m) => (
              <span
                key={m.label}
                className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
              >
                {m.value}
              </span>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.web || project.github) && (
          <div className="flex gap-3 mt-4 pt-4 border-t border-border">
            {project.web && (
              <a
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={13} /> 바로가기
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={13} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
