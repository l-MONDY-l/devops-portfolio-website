import { execSync } from "node:child_process";
import process from "node:process";

const PORT = 4783;

/** @returns {string[]} */
function listeningPidsWindows() {
  const out = execSync("netstat -ano", { encoding: "utf8" });
  const pids = new Set();
  for (const line of out.split(/\r?\n/)) {
    if (!line.includes("LISTENING")) continue;
    if (!line.includes(`127.0.0.1:${PORT}`) && !line.includes(`0.0.0.0:${PORT}`) && !line.includes(`[::]:${PORT}`))
      continue;
    const parts = line.trim().split(/\s+/);
    const pid = parts[parts.length - 1];
    if (/^\d+$/.test(pid)) pids.add(pid);
  }
  return [...pids];
}

/** @returns {string[]} */
function listeningPidsUnix() {
  try {
    const out = execSync(`lsof -ti :${PORT}`, { encoding: "utf8" }).trim();
    if (!out) return [];
    return [...new Set(out.split(/\n/).filter(Boolean))];
  } catch {
    return [];
  }
}

function main() {
  const pids = process.platform === "win32" ? listeningPidsWindows() : listeningPidsUnix();
  if (pids.length === 0) {
    console.log(`  ▶ Port ${PORT} is free.`);
    return;
  }
  for (const pid of pids) {
    console.log(`  ▶ Stopping process on port ${PORT} (PID ${pid})`);
    try {
      if (process.platform === "win32") {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "inherit" });
      } else {
        execSync(`kill -9 ${pid}`, { stdio: "inherit" });
      }
    } catch {
      console.error(`  ✖ Could not stop PID ${pid}; close it manually or run the terminal as admin.`);
    }
  }
}

main();
