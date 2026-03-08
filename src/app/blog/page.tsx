import { FadeIn } from "@/components/motion/fade-in";
import { blogPosts } from "@/data/site";

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="container-shell">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Thoughts on infrastructure, Linux, and automation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A simple writing space for operational lessons, technical breakdowns, and systems thinking.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-6">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08}>
              <article className="surface-card p-6 md:p-8">
                <p className="text-sm text-slate-400">{post.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{post.excerpt}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
