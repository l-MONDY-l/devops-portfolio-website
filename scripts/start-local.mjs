import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const buildIdPath = path.join(root, ".next", "BUILD_ID");

if (!fs.existsSync(buildIdPath)) {
  console.error(`
  ✖ No production build (.next/BUILD_ID missing).

  Run one of:
    npm run build && npm run start:local
    npm run rebuild:serve
`);
  process.exit(1);
}

const buildId = fs.readFileSync(buildIdPath, "utf8").trim();
console.log(`
  ▶ Starting production server  (build id: ${buildId})
  ▶ http://127.0.0.1:4783

  Important:
  • Stop any other "next dev" for this folder — it overwrites .next and causes
    400 / ChunkLoadError on URLs that still reference old CSS/JS hashes.
  • After a new "npm run build", close old tabs or hard-refresh (Ctrl+Shift+R).
`);

const child = spawn(process.execPath, [nextCli, "start", "-p", "4783", "--hostname", "127.0.0.1"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env },
});

child.on("exit", (code) => process.exit(code ?? 0));
