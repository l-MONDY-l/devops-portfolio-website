"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

export function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group surface-card flex h-full flex-col overflow-hidden border-white/10 transition-shadow hover:border-sky-400/20 hover:shadow-[0_20px_50px_rgba(8,47,73,0.35)]"
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            unoptimized
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-sky-200 backdrop-blur-md">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="text-xs text-slate-500">{post.date}</p>
          <h2 className="mt-3 text-lg font-semibold leading-snug text-white md:text-xl">{post.title}</h2>
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{post.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200">
            Read article <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
