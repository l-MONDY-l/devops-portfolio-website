"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

/** SSR-safe shell while `usePathname` client chunk resolves (avoids static-route edge cases). */
export function NavbarPending() {
  return (
    <header className="nav-shell sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
      <div className="container-shell flex h-[4.5rem] items-center justify-between md:h-20">
        <div className="h-6 w-44 max-w-[55%] animate-pulse rounded-lg bg-white/10" aria-hidden />
        <div className="hidden h-6 w-56 animate-pulse rounded-lg bg-white/10 md:block" aria-hidden />
        <div className="h-10 w-10 shrink-0 animate-pulse rounded-2xl bg-white/10 md:hidden" aria-hidden />
      </div>
    </header>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="nav-shell sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 shadow-[0_4px_30px_rgba(2,6,23,0.45)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="container-shell flex h-[4.5rem] items-center justify-between md:h-20">
        <Link
          href="/"
          className="group relative text-lg font-semibold tracking-tight text-white"
          data-cursor-hover
        >
          <span className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent transition-opacity group-hover:opacity-90">
            {siteConfig.fullName}
          </span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="nav-pill group relative px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {active ? <span className="absolute inset-0 rounded-full bg-sky-400/10 ring-1 ring-sky-400/20" aria-hidden /> : null}
                <span className="relative z-[1]">{link.label}</span>
                <span
                  className={`absolute bottom-1 left-4 right-4 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                    active ? "scale-x-100 opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="btn-icon-shine inline-flex rounded-2xl border border-white/12 bg-white/[0.06] p-2.5 text-white shadow-soft transition md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="container-shell flex flex-col gap-1 py-4"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-sky-200"
                    onClick={() => setOpen(false)}
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
