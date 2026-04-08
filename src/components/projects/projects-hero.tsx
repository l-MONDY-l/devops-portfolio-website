"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { CanvasBoundary } from "@/components/canvas-boundary";

const sceneFallback = (
  <div
    className="pointer-events-none absolute inset-0 min-h-[260px] bg-[radial-gradient(ellipse_85%_70%_at_45%_35%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_55%_45%_at_80%_60%,rgba(167,139,250,0.1),transparent)] md:min-h-[320px]"
    aria-hidden
  />
);

const ProjectsScene = dynamic(() => import("./projects-scene").then((m) => m.ProjectsScene), {
  ssr: false,
  loading: () => sceneFallback,
});

export function ProjectsHero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-bg opacity-[0.12]" aria-hidden />
      <div className="relative min-h-[260px] w-full md:min-h-[320px]">
        <CanvasBoundary fallback={sceneFallback}>
          <ProjectsScene />
        </CanvasBoundary>
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/20 md:via-slate-950/85"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/65"
          aria-hidden
        />
      </div>
      <div className="container-shell relative z-10 pb-12 pt-4 md:pb-16 md:pt-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200"
        >
          <Layers className="text-sky-300" size={15} />
          Portfolio
        </motion.div>
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          SaaS platforms, enterprise ops &amp; open infrastructure
        </motion.h1>
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl"
        >
          From regulated finance and production ERP to real-time observability, cloud governance, and battle-tested
          automation on bare metal — a cross-section of product work and operator-grade tooling.
        </motion.p>
      </div>
    </header>
  );
}
