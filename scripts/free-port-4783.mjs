import { freePort, LOCAL_PREVIEW_PORT } from "./port-4783.mjs";

const n = freePort(LOCAL_PREVIEW_PORT);
if (n === 0) {
  console.log(`  ▶ Port ${LOCAL_PREVIEW_PORT} is free.`);
}
