// One Star for Monday (remake) — make.fun entry
// Writes one plain-text line to $MAKEFUN_OUTPUT_DIR/entry.txt:
// a one-star restaurant review of Monday, told through its specials board.
// Node 22, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. Monday specials: inbox soup, meeting salad, standup at nine; asked for Friday dessert, waiter said four days, no substitutions.";

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

async function main(): Promise<void> {
  // Gate checks: one line, 1-180 characters, 25 words at most, not blank.
  if (ENTRY.trim().length === 0) throw new Error("entry is empty");
  if (/\n/.test(ENTRY)) throw new Error("entry must be a single line");
  if (ENTRY.length < 1 || ENTRY.length > 180) {
    throw new Error(`entry must be 1-180 chars, got ${ENTRY.length}`);
  }
  const words = countWords(ENTRY);
  if (words > 25) throw new Error(`entry must be at most 25 words, got ${words}`);
  // Plain text only: no hashtags, brackets, or stage directions.
  if (/[#\[\]]/.test(ENTRY)) {
    throw new Error("entry must be plain text: no hashtags or stage directions");
  }
  // The scorer reads UTF-8; require a clean round-trip.
  if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
    throw new Error("entry is not clean UTF-8 text");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // One trailing newline: the entry itself stays a single line of text.
  const payload = Buffer.from(ENTRY + "\n", "utf8");
  writeFileSync(outPath, payload);

  // Verify the file on disk matches what was written, byte for byte.
  const back = readFileSync(outPath);
  if (!back.equals(payload)) throw new Error("read-back mismatch");

  const { createHash } = await import("node:crypto");
  const sha256 = createHash("sha256").update(back).digest("hex");
  console.log(`wrote ${outPath} (${ENTRY.length} chars, ${words} words, sha256 ${sha256})`);
  console.log(ENTRY);
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
