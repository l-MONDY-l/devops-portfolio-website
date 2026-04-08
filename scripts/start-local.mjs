import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const buildIdPath = path.join(root, ".next", "BUILD_ID");
const PORT = 4783;
const HOST = "127.0.0.1";

if (!fs.existsSync(buildIdPath)) {
  console.error(`
  ✖ No production build (.next/BUILD_ID missing).

  Run one of:
    npm run build
    npm run rebuild:serve
`);
  process.exit(1);
}

/** @returns {Promise<boolean>} */
function isPortAvailable(port, host) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", (err) => {
      if (/** @type {NodeJS.ErrnoException} */ (err).code === "EADDRINUSE") resolve(false);
      else reject(err);
    });
    server.listen(port, host, () => {
      server.close(() => resolve(true));
    });
  });
}

const buildId = fs.readFileSync(buildIdPath, "utf8").trim();

const ok = await isPortAvailable(PORT, HOST);
if (!ok) {
  console.error(`
  ✖ Port ${HOST}:${PORT} is already in use.

  Another "next start" (or npm run start:local) is probably still running.
  • Open http://${HOST}:${PORT} — the site may already be there.
  • Or free the port and start again:
      npm run start:local:free
`);
  process.exit(1);
}

console.log(`
  ▶ Starting production server  (build id: ${buildId})
  ▶ http://${HOST}:${PORT}

  Important:
  • Stop any other "next dev" for this folder — it overwrites .next and causes
    400 / ChunkLoadError on URLs that still reference old CSS/JS hashes.
  • After a new "npm run build", close old tabs or hard-refresh (Ctrl+Shift+R).
`);

const child = spawn(process.execPath, [nextCli, "start", "-p", String(PORT), "--hostname", HOST], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env },
});

child.on("exit", (code) => process.exit(code ?? 0));
