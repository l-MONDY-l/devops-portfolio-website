"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { CanvasBoundary } from "@/components/canvas-boundary";

const blogSceneFallback = (
  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(56,189,248,0.12),transparent)]"
    aria-hidden
  />
);

const BlogHeroScene = dynamic(() => import("./blog-hero-scene").then((m) => m.BlogHeroScene), {
  ssr: false,
  loading: () => blogSceneFallback,
});

export function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div className="relative h-[220px] min-h-[200px] w-full md:h-[260px]">
        <CanvasBoundary fallback={blogSceneFallback}>
          <BlogHeroScene category={post.category} />
        </CanvasBoundary>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"
          aria-hidden
        />
      </div>

      <div className="container-shell relative z-10 pb-12 pt-2">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200"
          >
            <ArrowLeft size={16} /> All posts
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-start">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{post.category}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>{post.date}</span>
              <span className="text-slate-600">·</span>
              <span>{post.readingTime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 shadow-soft lg:aspect-[4/3]"
          >
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
