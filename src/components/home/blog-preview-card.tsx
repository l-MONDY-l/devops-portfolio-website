"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog";

export function BlogPreviewCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="group surface-card flex h-full flex-col overflow-hidden border-white/10"
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            unoptimized
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs text-slate-500">{post.date}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{post.excerpt}</p>
          <span className="mt-5 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200">
            Read more →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
