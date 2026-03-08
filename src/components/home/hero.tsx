"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Server, TerminalSquare } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-300"
          >
            Linux • Bare Metal • Networking • Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {siteConfig.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
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
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="surface-card p-6 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Operating Focus
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                icon: Server,
                title: "Production Linux Platforms",
                description: "Reliable systems operations across enterprise and production environments.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Infrastructure",
                description: "Hardening, operational discipline, identity control, and secure-by-default thinking.",
              },
              {
                icon: TerminalSquare,
                title: "Automation That Matters",
                description: "Practical scripting and tooling that reduce repetitive risk and improve consistency.",
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
