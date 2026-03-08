import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{siteConfig.fullName}</p>
          <p className="mt-1 text-sm text-slate-400">{siteConfig.role}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link href={siteConfig.github} target="_blank" className="hover:text-white">
            GitHub
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" className="hover:text-white">
            LinkedIn
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-white">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
