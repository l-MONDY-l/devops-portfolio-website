import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig, skills } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container-shell">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">About</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I work at the intersection of Linux systems, infrastructure operations, networking, automation, and secure production support. My focus is simple: build stable systems, reduce operational friction, and keep environments reliable under real-world pressure.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.1}>
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold text-white">Professional Focus</h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-400">
                <p>
                  My background is rooted in infrastructure ownership, Linux administration, server operations, monitoring, security-conscious system management, and practical automation.
                </p>
                <p>
                  I care about resilient systems, clean execution, predictable operations, and tooling that actually reduces repetitive work instead of adding more complexity.
                </p>
                <p>
                  The long-term direction is clear: stronger infrastructure engineering, deeper platform reliability, more automation, and modern cloud-aligned operational design.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold text-white">Core Stack</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
