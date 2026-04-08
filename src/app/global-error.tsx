"use client";

/** Catches errors in the root layout. Must include html/body. */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#020617",
          color: "#e5eefb",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <p style={{ color: "#38bdf8", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Error
          </p>
          <h1 style={{ marginTop: 12, fontSize: "1.5rem", fontWeight: 700 }}>The app failed to load</h1>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: "#94a3b8" }}>
            If you just ran a new production build, close this tab, start the server again, and use Ctrl+Shift+R
            (hard refresh). Stale cached scripts will otherwise fail to load.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: "12px 24px",
                borderRadius: 16,
                border: "none",
                background: "#38bdf8",
                color: "#020617",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reload page
            </button>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: "12px 24px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
