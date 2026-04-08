import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { freePort, LOCAL_PREVIEW_PORT } from "./port-4783.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const buildIdPath = path.join(root, ".next", "BUILD_ID");
const PORT = LOCAL_PREVIEW_PORT;
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

let ok = await isPortAvailable(PORT, HOST);

if (!ok && process.env.START_LOCAL_NO_KILL === "1") {
  console.error(`
  ✖ Port ${HOST}:${PORT} is already in use.

  Set START_LOCAL_NO_KILL unset and re-run to auto-free the port, or run:
    npm run start:local:free
`);
  process.exit(1);
}

if (!ok) {
  console.log(`  ▶ Port ${PORT} is busy — freeing listeners once, then starting …`);
  freePort(PORT);
  await new Promise((r) => setTimeout(r, 450));
  ok = await isPortAvailable(PORT, HOST);
}

if (!ok) {
  console.error(`
  ✖ Port ${HOST}:${PORT} is still in use after trying to free it.

  Close the other program manually or pick another port (advanced).
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
  • To skip auto-kill (safety): set START_LOCAL_NO_KILL=1
`);

const child = spawn(process.execPath, [nextCli, "start", "-p", String(PORT), "--hostname", HOST], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env },
});

child.on("exit", (code) => process.exit(code ?? 0));
