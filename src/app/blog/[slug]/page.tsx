import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedBlogPosts, getPublishedPostBySlug } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogPostBody } from "@/components/blog/blog-post-body";

type Props = { params: Promise<{ slug: string }> };

/** Unpublished / unscheduled slugs are not built; direct URLs 404 until `publishedAt`. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | ${siteConfig.fullName}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <BlogPostHeader post={post} />
      <div className="container-shell py-14 md:py-20">
        <BlogPostBody post={post} />
      </div>
    </main>
  );
}
