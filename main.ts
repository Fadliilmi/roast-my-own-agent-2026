import { mkdirSync, writeFileSync } from "node:fs";

// One line roasting the AI agent our own team built.
const ENTRY =
  "Our AI agent spent three hours debugging itself, then filed a bug report against the team — severity: critical, assignee: us, root cause: 'humans'.";

// The gate only accepts a single line of 1-200 characters, so fail loudly
// here instead of writing an entry the scorer would reject.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
