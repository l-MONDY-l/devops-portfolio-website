import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-slate-950/90">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl"
        aria-hidden
      />

      <div className="container-shell relative py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-12">
          <div className="md:col-span-5 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/90">Portfolio</p>
            <p className="mt-4 text-lg font-semibold tracking-tight text-white">{siteConfig.fullName}</p>
            <p className="mt-2 text-sm font-medium text-slate-300">{siteConfig.role}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="shrink-0 text-sky-500/70" size={14} aria-hidden />
              {siteConfig.location}
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</p>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-1 text-sm text-slate-400 transition hover:text-white"
                  data-cursor-hover
                >
                  <span className="border-b border-transparent transition group-hover:border-sky-400/50 group-hover:text-sky-200">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Connect</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-connect-card group text-slate-300 hover:text-sky-200"
                  data-cursor-hover
                >
                  <Github className="shrink-0 text-slate-500 transition group-hover:text-sky-300" size={18} />
                  <span className="font-medium">GitHub</span>
                  <ArrowUpRight
                    className="ml-auto shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    size={16}
                    aria-hidden
                  />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-sky-400/25 hover:bg-sky-400/5 hover:text-sky-200"
                >
                  <Linkedin className="shrink-0 text-slate-500 transition group-hover:text-sky-300" size={18} />
                  <span className="font-medium">LinkedIn</span>
                  <ArrowUpRight
                    className="ml-auto shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    size={16}
                    aria-hidden
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="footer-connect-card group text-slate-300 hover:text-sky-200"
                  data-cursor-hover
                >
                  <Mail className="shrink-0 text-slate-500 transition group-hover:text-sky-300" size={18} />
                  <span className="font-medium">Email</span>
                  <ArrowUpRight
                    className="ml-auto shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    size={16}
                    aria-hidden
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <a
            href={siteConfig.domain}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-sky-300"
            data-cursor-hover
          >
            {siteConfig.domain.replace(/^https?:\/\//, "")}
            <ArrowUpRight size={12} className="opacity-70" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
