import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectsHero } from "@/components/projects/projects-hero";
import {
  featuredProjects,
  projectGroupLabels,
  projectGroupOrder,
} from "@/data/site";

function ProjectCta({ href, cta }: { href: string; cta: string }) {
  const className =
    "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} data-cursor-hover>
        {cta} <ArrowUpRight size={16} />
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} data-cursor-hover>
      {cta} <ArrowUpRight size={16} />
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-transparent text-foreground">
      <ProjectsHero />
      <div className="container-shell pb-20 pt-12 md:pt-16">
        {projectGroupOrder.map((group) => {
          const items = featuredProjects.filter((p) => p.group === group);
          if (items.length === 0) return null;
          return (
            <section key={group} className="interactive-section mb-16 md:mb-24 rounded-3xl px-2 py-2 md:-mx-2 md:px-4 md:py-6">
              <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {projectGroupLabels[group]}
                </h2>
                <p className="mt-2 max-w-3xl text-sm text-slate-500">
                  {group === "saas" &&
                    "Product-style delivery: ERP and finance-grade workflows, tenancy boundaries, and release discipline."}
                  {group === "enterprise" &&
                    "Observability, alerting, and cloud governance for estates that need evidence—not heroics—when things drift."}
                  {group === "web" &&
                    "CMS-backed programs and agency-scale delivery for brands that own large digital footprints."}
                  {group === "opensource" &&
                    "Public repositories for Linux, bare metal bootstrap, automation, and operations fundamentals."}
                </p>
              </FadeIn>
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((project, index) => (
                  <FadeIn key={project.title} delay={index * 0.04}>
                    <article className="surface-card flex h-full flex-col border-white/10 bg-slate-950/35 p-6 backdrop-blur-md">
                      <h3 className="text-lg font-semibold text-white md:text-xl">{project.title}</h3>
                      <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <ProjectCta href={project.href} cta={project.cta} />
                    </article>
                  </FadeIn>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
