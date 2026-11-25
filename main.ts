import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The meeting to discuss the missed deadline ended by moving the deadline, which is the only thing this meeting has ever delivered on time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
