import { metrics } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

export function Metrics() {
  return (
    <section className="interactive-section py-20">
      <div className="container-shell">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
              Delivery Snapshot
            </p>
            <h2 className="section-title mt-4 text-white">From full stack delivery to production infrastructure</h2>
            <p className="section-copy">
              Web and mobile product work backed by serious systems discipline—Linux ownership, scripting, reliability practices, and secure operations learned in real production environments.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.08}>
              <article className="surface-card h-full p-6">
                <p className="font-mono text-4xl font-bold text-white">{metric.value}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{metric.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{metric.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
