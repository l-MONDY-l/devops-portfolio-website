import { getPublishedBlogPosts } from "@/data/blog";
import { FadeIn } from "@/components/motion/fade-in";
import { BlogPreviewCard } from "@/components/home/blog-preview-card";

export function BlogPreview() {
  const preview = getPublishedBlogPosts().slice(0, 3);

  return (
    <section className="interactive-section border-t border-white/10 py-20">
      <div className="container-shell">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
              Writing
            </p>
            <h2 className="section-title mt-4 text-white">
              Ideas on Linux, infrastructure, automation, and reliability
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {preview.map((post, index) => (
            <BlogPreviewCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
