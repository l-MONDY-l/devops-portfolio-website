import { skills } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

export function SkillsSection() {
  return (
    <section className="border-y border-white/10 py-20">
      <div className="container-shell">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
              Core Expertise
            </p>
            <h2 className="section-title mt-4 text-white">
              Systems reliability plus modern application engineering
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <FadeIn key={skill} delay={index * 0.03}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                {skill}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
