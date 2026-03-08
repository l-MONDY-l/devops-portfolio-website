import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { featuredProjects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <div className="container-shell">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Projects</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Infrastructure projects and operational tooling
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A growing portfolio of Linux administration scripts, monitoring tools, backup automation, and practical infrastructure utilities.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <article className="surface-card h-full p-6">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

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
                  Open GitHub <ArrowUpRight size={16} />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
