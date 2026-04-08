"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Globe2, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { CanvasBoundary } from "@/components/canvas-boundary";

const sceneFallback = (
  <div
    className="pointer-events-none absolute inset-0 min-h-[280px] bg-[radial-gradient(ellipse_90%_70%_at_50%_35%,rgba(56,189,248,0.14),transparent_50%),radial-gradient(ellipse_60%_50%_at_75%_60%,rgba(251,191,36,0.08),transparent)] md:min-h-[360px]"
    aria-hidden
  />
);

const AboutScene = dynamic(() => import("./about-scene").then((m) => m.AboutScene), {
  ssr: false,
  loading: () => sceneFallback,
});

export function AboutHero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.12]" aria-hidden />
      <div className="relative min-h-[280px] w-full md:min-h-[360px]">
        <CanvasBoundary fallback={sceneFallback}>
          <AboutScene />
        </CanvasBoundary>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/25 md:via-slate-950/88"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/75"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(56,189,248,0.08),transparent)]"
          aria-hidden
        />
      </div>

      <div className="container-shell relative z-10 pb-14 pt-4 md:pb-20 md:pt-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-wrap gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            <Sparkles className="text-sky-300" size={14} />
            About
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-100">
            <Globe2 size={14} className="text-amber-200" />
            9+ years experience
          </span>
        </motion.div>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="mt-8 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {siteConfig.fullName}
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl"
        >
          {siteConfig.role} · {siteConfig.tagline}
        </motion.p>
      </div>
    </header>
  );
}
