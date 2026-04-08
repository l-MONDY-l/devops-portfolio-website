"use client";

import { useEffect } from "react";

function isChunkOrAssetError(error: Error): boolean {
  const msg = error.message ?? "";
  return (
    error.name === "ChunkLoadError" ||
    msg.includes("Loading chunk") ||
    msg.includes("Failed to fetch dynamically imported module") ||
    msg.includes("Importing a module script failed")
  );
}

export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const staleBuild = isChunkOrAssetError(error);

  return (
    <main className="container-shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">Something went wrong</p>
      <h1 className="mt-4 max-w-lg text-2xl font-bold tracking-tight text-white">
        {staleBuild ? "This page needs a fresh load" : "We hit an unexpected error"}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
        {staleBuild
          ? "The app was probably rebuilt while this tab was open. Old JavaScript chunks no longer exist on the server, which triggers a client-side error."
          : "Please try again. If it keeps happening, reload the page or clear the site cache."}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-2xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Hard reload
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Try again
        </button>
      </div>
      <p className="mt-8 text-xs text-slate-600">
        Tip: after <code className="text-slate-500">npm run build</code>, stop the old server, run{" "}
        <code className="text-slate-500">npm run rebuild:serve</code>, then open a new tab or use Ctrl+Shift+R.
      </p>
    </main>
  );
}
