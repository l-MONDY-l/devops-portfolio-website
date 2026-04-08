import { execSync } from "node:child_process";
import process from "node:process";

/** Single source of truth for local production preview */
export const LOCAL_PREVIEW_PORT = 4783;

/** @returns {string[]} */
function listeningPidsWindows(port) {
  const out = execSync("netstat -ano", { encoding: "utf8" });
  const pids = new Set();
  for (const line of out.split(/\r?\n/)) {
    if (!line.includes("LISTENING")) continue;
    if (
      !line.includes(`127.0.0.1:${port}`) &&
      !line.includes(`0.0.0.0:${port}`) &&
      !line.includes(`[::]:${port}`) &&
      !line.includes(`[::1]:${port}`)
    )
      continue;
    const parts = line.trim().split(/\s+/);
    const pid = parts[parts.length - 1];
    if (/^\d+$/.test(pid)) pids.add(pid);
  }
  return [...pids];
}

/** @returns {string[]} */
function listeningPidsUnix(port) {
  try {
    const out = execSync(`lsof -ti :${port}`, { encoding: "utf8" }).trim();
    if (!out) return [];
    return [...new Set(out.split(/\n/).filter(Boolean))];
  } catch {
    return [];
  }
}

/**
 * Kill processes listening on `port`. Returns PID count attempted.
 */
export function freePort(port = LOCAL_PREVIEW_PORT) {
  const pids = process.platform === "win32" ? listeningPidsWindows(port) : listeningPidsUnix(port);
  for (const pid of pids) {
    console.log(`  ▶ Stopping process on port ${port} (PID ${pid})`);
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
  return pids.length;
}
