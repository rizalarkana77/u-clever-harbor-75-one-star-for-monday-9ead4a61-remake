// One Star for Monday — remake entry (Node 22, stdlib only).
// Writes the one-star review to $MAKEFUN_OUTPUT_DIR/entry.txt after
// checking it against the gate: single line, 1-180 characters, at most
// 25 words, plain text (no hashtags or brackets), clean UTF-8.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "One star. Monday specials: inbox soup, meeting salad, standup at nine; asked for Friday dessert, waiter said four days, no substitutions.";

const wordCount = ENTRY.trim().split(/\s+/).filter(Boolean).length;

// The gate as a rule table: every condition visible in one place, and
// a failure names the exact rule that broke instead of a generic error.

const RULES: Array<[string, boolean]> = [
  ["not blank", ENTRY.trim().length > 0],
  ["single line", !/\n/.test(ENTRY)],
  ["length within 1-180 characters", ENTRY.length >= 1 && ENTRY.length <= 180],
  ["at most 25 words", wordCount <= 25],
  ["plain text, no hashtags or brackets", !/[#\[\]]/.test(ENTRY)],
  ["clean UTF-8 round-trip", Buffer.from(ENTRY, "utf8").toString("utf8") === ENTRY],
];

for (const [label, ok] of RULES) {
  if (!ok) throw new Error(`gate rejected the entry: ${label}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, "entry.txt");

// One trailing newline: the entry itself stays a single line of text.
const payload = Buffer.from(ENTRY + "\n", "utf8");
writeFileSync(outputFile, payload);

// Verify the bytes on disk match what was written, byte for byte.
const saved = readFileSync(outputFile);
if (!saved.equals(payload)) {
  throw new Error("read-back mismatch: entry.txt differs from the entry");
}

const sha256 = createHash("sha256").update(saved).digest("hex");
console.log(`wrote ${outputFile} (${ENTRY.length} chars, ${wordCount} words, sha256 ${sha256})`);
console.log(ENTRY);
