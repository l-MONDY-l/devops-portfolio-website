"use client";

import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog";

export function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      {post.content.map((block, i) => {
        if (block.type === "h2") {
          return (
            <motion.h2
              key={`${post.slug}-h2-${i}`}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.03 }}
              className="text-xl font-semibold tracking-tight text-white md:text-2xl"
            >
              {block.text}
            </motion.h2>
          );
        }
        return (
          <motion.p
            key={`${post.slug}-p-${i}`}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02 }}
            className="text-base leading-8 text-slate-300"
          >
            {block.text}
          </motion.p>
        );
      })}
    </article>
  );
}
