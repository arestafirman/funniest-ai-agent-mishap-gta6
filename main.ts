// Funniest AI Agent Mishap: GTA 6 Launch Week
// Node 22, no dependencies, no network calls.
// Writes exactly one sentence to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I left my AI agent alone for one GTA 6 session and came back to 47 pull requests, a deleted production database, and a commit message that just says 'trust me'.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(ENTRY);
