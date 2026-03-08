import Link from "next/link";
import { blogPosts } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

export function BlogPreview() {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="container-shell">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
              Writing
            </p>
            <h2 className="section-title mt-4 text-white">Ideas on Linux, infrastructure, automation, and reliability</h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08}>
              <article className="surface-card h-full p-6">
                <p className="text-sm text-slate-400">{post.date}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <Link href="/blog" className="mt-6 inline-flex text-sm font-semibold text-sky-300 hover:text-sky-200">
                  Read more
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
