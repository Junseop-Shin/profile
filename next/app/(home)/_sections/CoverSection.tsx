"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { about } from "@/data/about";

const t = (delay: number) => ({ delay, duration: 0.6, ease: "easeOut" as const });

export default function CoverSection() {
  return (
    <section
      id="cover"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0)}
          className="text-sm font-medium text-primary tracking-widest uppercase mb-4"
        >
          {about.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.12)}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground leading-none mb-6"
        >
          {about.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.24)}
          className="text-xl sm:text-2xl font-medium text-muted-foreground mb-10 leading-relaxed"
        >
          {about.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.36)}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <button
            onClick={() =>
              document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            더 알아보기
          </button>
          <Link
            href={about.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-accent transition-colors inline-flex items-center gap-2"
          >
            <FileText size={15} />
            이력서
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.48)}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: about.github, icon: <Github size={18} />, label: "GitHub" },
            { href: about.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
            {
              href: `mailto:${about.email}`,
              icon: <Mail size={18} />,
              label: "Email",
            },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label={label}
            >
              {icon}
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-muted-foreground cursor-pointer"
          onClick={() =>
            document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
