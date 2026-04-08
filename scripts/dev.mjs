import { spawn } from "node:child_process";
import { createServer } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");

/** Avoid 3000 / 3456 / 5173 — set PORTFOLIO_DEV_PORT to override the first port tried */
const DEV_PORT_START = parseInt(process.env.PORTFOLIO_DEV_PORT || "4782", 10);

function portFree(port) {
  return new Promise((resolve) => {
    const s = createServer();
    s.once("error", () => resolve(false));
    s.listen(port, "127.0.0.1", () => s.close(() => resolve(true)));
  });
}

async function findPort(start, attempts = 25) {
  for (let i = 0; i < attempts; i++) {
    const p = start + i;
    if (await portFree(p)) return p;
  }
  throw new Error(`No free TCP port between ${start} and ${start + attempts - 1} on 127.0.0.1`);
}

const port = await findPort(DEV_PORT_START);
console.log(`\n  ▶ Next dev → http://127.0.0.1:${port}\n`);

const child = spawn(process.execPath, [nextCli, "dev", "--hostname", "127.0.0.1", "--port", String(port)], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 0));
