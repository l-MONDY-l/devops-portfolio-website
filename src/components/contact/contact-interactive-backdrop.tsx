"use client";

import dynamic from "next/dynamic";
import { CanvasBoundary } from "@/components/canvas-boundary";

const contactSceneFallback = (
  <div
    className="pointer-events-none absolute inset-0 min-h-[70vh] bg-[radial-gradient(ellipse_100%_80%_at_50%_30%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(ellipse_60%_50%_at_80%_70%,rgba(167,139,250,0.1),transparent)]"
    aria-hidden
  />
);

const ContactScene = dynamic(() => import("./contact-scene").then((m) => m.ContactScene), {
  ssr: false,
  loading: () => contactSceneFallback,
});

export function ContactInteractiveBackdrop() {
  return (
    <>
      <CanvasBoundary fallback={contactSceneFallback}>
        <ContactScene />
      </CanvasBoundary>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_120%,rgba(2,6,23,0.95),transparent)]"
        aria-hidden
      />
    </>
  );
}
