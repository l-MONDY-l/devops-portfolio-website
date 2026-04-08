"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const ringSpring = { damping: 32, stiffness: 420, mass: 0.55 };
const dotSpring = { damping: 38, stiffness: 900, mass: 0.12 };

export function CursorFollower() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const ringX = useSpring(rawX, ringSpring);
  const ringY = useSpring(rawY, ringSpring);
  const dotX = useSpring(rawX, dotSpring);
  const dotY = useSpring(rawY, dotSpring);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, summary, label[for], [data-cursor-hover]",
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onOver, true);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver, true);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [rawX, rawY]);

  if (!active) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.55 : 1 }}
        transition={{ type: "spring", stiffness: 520, damping: 34 }}
      >
        <div
          className={`h-10 w-10 rounded-full border border-sky-400/50 bg-sky-400/[0.06] shadow-[0_0_24px_rgba(56,189,248,0.22)] backdrop-blur-[2px] transition-opacity duration-300 ${
            hovering ? "opacity-90" : "opacity-70"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-gradient-to-br from-sky-200 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 0.35 : 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 38 }}
      />
    </>
  );
}
