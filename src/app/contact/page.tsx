import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container-shell">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Contact</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let’s build something solid
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Open to infrastructure roles, technical collaboration, and real-world systems work where Linux, reliability, automation, and operational ownership matter.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn delay={0.05}>
            <Link href={`mailto:${siteConfig.email}`} className="surface-card flex h-full flex-col p-6 hover:bg-white/10">
              <Mail className="text-sky-300" size={22} />
              <h2 className="mt-4 text-xl font-semibold text-white">Email</h2>
              <p className="mt-2 text-sm text-slate-400">{siteConfig.email}</p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Link href={siteConfig.github} target="_blank" className="surface-card flex h-full flex-col p-6 hover:bg-white/10">
              <Github className="text-sky-300" size={22} />
              <h2 className="mt-4 text-xl font-semibold text-white">GitHub</h2>
              <p className="mt-2 text-sm text-slate-400">View projects and tooling</p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Link href={siteConfig.linkedin} target="_blank" className="surface-card flex h-full flex-col p-6 hover:bg-white/10">
              <Linkedin className="text-sky-300" size={22} />
              <h2 className="mt-4 text-xl font-semibold text-white">LinkedIn</h2>
              <p className="mt-2 text-sm text-slate-400">Professional profile and network</p>
            </Link>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
