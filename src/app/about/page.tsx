import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Building2, GraduationCap, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { AboutHero } from "@/components/about/about-hero";
import {
  certifications,
  education,
  redHatVerifyUrl,
  siteConfig,
  skills,
  webLab,
} from "@/data/site";

function resolveVerifyHref(entry: (typeof certifications)[number], label: string, href: string) {
  if (label === "Verify on Red Hat") return redHatVerifyUrl(entry.credentialId);
  return href;
}

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

        <FadeIn delay={0.03}>
          <div className="surface-card border-sky-400/15 bg-slate-950/40 p-8 backdrop-blur-md md:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                  <GraduationCap className="text-sky-300" size={22} aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/90">Education</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Academic background</h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-500">
                    Summaries reflect your public LinkedIn profile—extend the list with schools, dates, or honours in site data whenever you like.
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-sky-400/25 hover:text-sky-200"
              >
                Verify on LinkedIn
                <ArrowUpRight size={14} className="opacity-80" aria-hidden />
              </a>
            </div>

            <ul className="mt-8 space-y-6">
              {education.map((entry) => (
                <li
                  key={entry.institution}
                  className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-white underline-offset-4 transition hover:text-sky-200 hover:underline"
                      >
                        {entry.institution}
                      </a>
                      {entry.department ? (
                        <p className="mt-1 text-sm">
                          <a
                            href={entry.department.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-sky-300/95 underline-offset-2 transition hover:text-sky-200 hover:underline"
                          >
                            {entry.department.name}
                          </a>
                        </p>
                      ) : null}
                    </div>
                    <div className="text-sm text-slate-400">
                      <span className="font-medium text-slate-300">{entry.credential}</span>
                      {entry.focus ? (
                        <>
                          {" "}
                          · <span>{entry.focus}</span>
                        </>
                      ) : null}
                      {entry.period ? (
                        <>
                          {" "}
                          <span className="text-slate-500">({entry.period})</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{entry.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.035}>
          <div className="surface-card border-emerald-400/15 bg-slate-950/40 p-8 backdrop-blur-md md:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10">
                  <BadgeCheck className="text-emerald-300" size={22} aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
                    Certifications
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Credentials & verification</h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-500">
                    ISO/IEC 27001 plus Red Hat RHCSA, RHCE (Certified Engineer—not “RHCSE”), and a third Specialist badge.
                    Confirm on LinkedIn licenses &amp; certifications or Red Hat’s verifier. Set optional{" "}
                    <code className="rounded bg-white/10 px-1 text-slate-300">credentialId</code> per row in{" "}
                    <code className="rounded bg-white/10 px-1 text-slate-300">src/data/site.ts</code> for a direct Red Hat
                    lookup.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 self-start sm:items-end">
                <a
                  href={siteConfig.linkedinCertifications}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-emerald-400/25 hover:text-emerald-200"
                >
                  Search credentials on LinkedIn
                  <ArrowUpRight size={14} className="opacity-80" aria-hidden />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 underline-offset-2 transition hover:text-slate-400 hover:underline"
                >
                  Open full LinkedIn profile
                  <ArrowUpRight size={12} className="opacity-70" aria-hidden />
                </a>
              </div>
            </div>

            <ul className="mt-8 space-y-6">
              {certifications.map((entry) => (
                <li
                  key={entry.title}
                  className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                      <p className="mt-1 text-sm font-medium text-emerald-300/90">{entry.issuer}</p>
                    </div>
                    {entry.period ? (
                      <p className="text-sm text-slate-500">{entry.period}</p>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{entry.summary}</p>
                  {entry.verify?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.verify.map((v) => (
                        <a
                          key={`${entry.title}-${v.label}`}
                          href={resolveVerifyHref(entry, v.label, v.href)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-emerald-400/30 hover:text-emerald-200"
                        >
                          {v.label}
                          <ArrowUpRight size={12} className="opacity-70" aria-hidden />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
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
