import type { NextConfig } from "next";

/** Subpath only for hosts like GitHub Pages: NEXT_PUBLIC_BASE_PATH=/your-repo */
const rawBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(rawBase ? { basePath: rawBase } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Windows: long hashed paths under `.next/cache/images` often break deletes and can corrupt dev.
    // Production builds still optimize images (NODE_ENV=production).
    ...(isDev ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
