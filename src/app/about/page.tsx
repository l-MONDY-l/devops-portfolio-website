import Link from "next/link";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { AboutHero } from "@/components/about/about-hero";
import { skills, webLab } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="relative">
      <AboutHero />

      <div className="container-shell space-y-16 py-16 md:space-y-20 md:py-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90 p-8 shadow-[0_0_60px_rgba(251,191,36,0.06)] md:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
            <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" aria-hidden />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/90">
                Leadership & company
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">{webLab.legalName}</h2>
              <p className="mt-2 text-sm font-medium text-sky-300 md:text-base">
                {webLab.title} · <span className="text-slate-300">{webLab.tagline}</span>
              </p>
              <p className="mt-2 inline-flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <Building2 className="inline shrink-0 text-slate-500" size={16} />
                Headquarters: {webLab.headquarters}
                <span className="text-slate-600">·</span>
                <MapPin className="inline shrink-0 text-slate-500" size={16} />
                Presence: {webLab.presence.join(" · ")}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {webLab.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {webLab.websites.map((site) => (
                  <a
                    key={site.href}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-sky-400/35 hover:bg-sky-400/10 hover:text-sky-100"
                  >
                    {site.label}
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-slate-500">
                Official agency properties:{" "}
                <a
                  href={webLab.websites[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline-offset-2 hover:text-sky-300 hover:underline"
                >
                  WebLab Solutions
                </a>{" "}
                (Sri Lanka focus) and{" "}
                <a
                  href={webLab.websites[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline-offset-2 hover:text-sky-300 hover:underline"
                >
                  WebLab Solutions UK
                </a>
                .
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.05}>
            <div className="surface-card h-full border-white/10 bg-slate-950/40 p-8 backdrop-blur-md md:p-9">
              <h2 className="text-2xl font-semibold text-white">Professional focus</h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-400">
                <p>
                  Across more than <strong className="text-slate-200">nine years</strong> of delivery, my work spans
                  full stack engineering, product direction, and the systems discipline that keeps platforms secure and
                  observable—from mobile and web experiences to Linux estates and automation.
                </p>
                <p>
                  As {webLab.title} at {webLab.legalName}, I bridge creative digital strategy with dependable execution:
                  high-performing websites, marketing technology, and the infrastructure patterns that let teams scale
                  without surprises.
                </p>
                <p>
                  I care about resilient systems, clear architecture, predictable operations, and tooling that reduces
                  repetitive work—whether on the device, in the browser, or under the hood.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="surface-card h-full border-white/10 bg-slate-950/40 p-8 backdrop-blur-md md:p-9">
              <h2 className="text-2xl font-semibold text-white">Core stack</h2>
              <p className="mt-3 text-sm text-slate-500">
                Engineering, platforms, and delivery capabilities I bring to product and agency programs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/25 hover:bg-sky-400/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
              >
                Get in touch <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
