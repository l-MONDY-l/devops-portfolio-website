import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

export function ProjectsPreview() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                Featured Projects
              </p>
              <h2 className="section-title mt-4 text-white">Tooling and scripts built for actual infrastructure work</h2>
              <p className="section-copy">
                Focused on practical Linux administration, monitoring, automation, backup routines, and systems operations.
              </p>
            </div>

            <Link href="/projects" className="text-sm font-semibold text-sky-300 hover:text-sky-200">
              View all projects
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
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

                <Link
                  href={project.href}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-300"
                >
                  Open project <ArrowUpRight size={16} />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
