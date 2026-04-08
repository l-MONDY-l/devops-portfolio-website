"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Smartphone, Server } from "lucide-react";
import { siteConfig } from "@/data/site";
import { CanvasBoundary } from "@/components/canvas-boundary";

const heroSceneFallback = (
  <div
    className="pointer-events-none absolute inset-0 min-h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(56,189,248,0.12),transparent)] md:min-h-[640px]"
    aria-hidden
  />
);

const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => heroSceneFallback,
});

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <CanvasBoundary fallback={heroSceneFallback}>
        <HeroScene />
      </CanvasBoundary>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/25 md:via-slate-950/88 lg:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/55"
        aria-hidden
      />
      <div className="container-shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-300"
          >
            Full Stack • Web & APIs • Mobile • Linux & Infrastructure
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_0_40px_rgba(2,6,23,0.85)] md:text-6xl lg:text-7xl"
          >
            {siteConfig.role}
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.aside
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="surface-card border-white/15 bg-slate-950/40 p-6 backdrop-blur-xl md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Engineering focus
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                icon: Layers,
                title: "End-to-end product work",
                description:
                  "Web apps, APIs, and integrations—from polished interfaces to dependable backends.",
              },
              {
                icon: Smartphone,
                title: "Mobile application development",
                description:
                  "Native-feel experiences on iOS and Android with disciplined architecture and release thinking.",
              },
              {
                icon: Server,
                title: "Production-grade platforms",
                description:
                  "Linux systems, automation, security-conscious operations, and the reliability work behind the scenes.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <item.icon className="mb-3 text-sky-300" size={20} />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
