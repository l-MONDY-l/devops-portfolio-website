/**
 * Sitewide atmospheric layer (CSS only — avoids stacking a second WebGL context on top of hero scenes).
 */
export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="ambient-aurora" />
      <div className="ambient-blobs" />
      <div className="ambient-grid" />
      <div className="ambient-noise" />
      <div className="ambient-vignette" />
    </div>
  );
}
