import { FadeIn } from "@/components/motion/fade-in";
import { getPublishedBlogPosts } from "@/data/blog";
import { BlogPostCard } from "@/components/blog/blog-post-card";

export default function BlogPage() {
  const blogPosts = getPublishedBlogPosts();

  return (
    <main className="interactive-section py-20">
      <div className="container-shell">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Engineering notes—systems, delivery, and automation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A writing space for operational lessons, technical breakdowns, and how reliable infrastructure supports better product work.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
