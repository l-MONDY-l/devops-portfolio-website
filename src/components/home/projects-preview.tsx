import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

const homeProjects = featuredProjects.filter((p) => p.highlight);

export function ProjectsPreview() {
  return (
    <section className="interactive-section py-20">
      <div className="container-shell">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                Featured Projects
              </p>
              <h2 className="section-title mt-4 text-white">
                ERP, finance ops, observability, CMS estates &amp; open infrastructure
              </h2>
              <p className="section-copy">
                A sample across SaaS platforms, enterprise monitoring and cloud governance, high-scale CMS programs, and
                public automation on Linux and bare metal.
              </p>
            </div>

            <Link
              href="/projects"
              className="group relative text-sm font-semibold text-sky-300 transition hover:text-sky-100"
              data-cursor-hover
            >
              View all projects
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-50 bg-sky-400/60 transition group-hover:scale-x-100" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <article className="surface-card flex h-full flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
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

                {project.href.startsWith("/") ? (
                  <Link
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                    data-cursor-hover
                  >
                    {project.cta} <ArrowUpRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                    data-cursor-hover
                  >
                    {project.cta} <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
