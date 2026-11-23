// main.ts — make.fun entry: "One Line, Zero Use: The Useless Superpower Sprint"
// (u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
//
// The competition asks for exactly one line, at most 200 characters,
// describing a hilariously useless superpower. This program is the whole
// entry: it writes that single line to entry.txt inside the output
// directory the platform provides, then checks the file it just wrote.
//
// Nothing here is random or time-dependent. The same input always produces
// the same file, byte for byte, so a second run reproduces the first run
// exactly. The program validates the line before writing it (one line,
// non-empty, within the 200-character limit) and validates the file again
// after writing it (read back, compare byte for byte). Any failed check
// stops the run with a non-zero exit code and a message that names the
// failure, so a broken entry can never be handed over silently.
//
// Safety note: this script never deletes anything. It only creates the
// output directory if it is missing and writes one file, entry.txt, into
// it. It never removes the output directory or anything inside it.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The entry line
// ---------------------------------------------------------------------------
//
// Drafted candidates (all original, written for this bounty):
//   1. "I can teleport anywhere in the world — but only three inches to the
//      left." (73 chars) — tight, but the teleport punchline is a familiar
//      shape; the judge has likely seen its cousins.
//   2. "I can talk to animals — but only goldfish, and they only ever want
//      to talk about the castle." (92 chars) — the pick. Talking to animals
//      is a classic power, turned somewhere new: the only animals that will
//      talk back are goldfish, and their one topic is the little plastic
//      castle in the bowl. The joke pays off in the last few words, the
//      uselessness is specific and easy to picture, and no word explains
//      the joke.
//   3. "I can fly — but only downwards, and only once." (48 chars) —
//      punchy, but the darkness does the work instead of the uselessness.
//
// Revised after the first run: "ever" earned nothing — "they only want to
// talk about the castle" lands the same payoff one word tighter, so the
// final line drops it.
const ENTRY_LINE =
  "I can talk to animals — but only goldfish, and they only want to talk about the castle.";

// The competition gate: 1 to 200 characters, not only white space.
const MAX_ENTRY_CHARS = 200;

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Validate the line, then write and verify it
// ---------------------------------------------------------------------------

if (ENTRY_LINE.trim().length === 0) {
  fail("entry line is empty or only white space");
}

// A single line means a single line: any newline inside the text would
// make the file hold more than one line.
if (/[\r\n]/.test(ENTRY_LINE)) {
  fail("entry line must not contain a line break");
}

if (ENTRY_LINE.length > MAX_ENTRY_CHARS) {
  fail(
    `entry line is ${ENTRY_LINE.length} characters, over the ${MAX_ENTRY_CHARS}-character limit`,
  );
}

// The platform provides the output directory in MAKEFUN_OUTPUT_DIR; the
// documented fallback for a local run is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, ENTRY_LINE, "utf8");

const writtenBack = readFileSync(outputPath, "utf8");
if (writtenBack !== ENTRY_LINE) {
  fail("entry.txt read back differently from the entry line");
}

console.log(
  `Wrote ${ENTRY_LINE.length} characters to ${outputPath} (1 line, within the ${MAX_ENTRY_CHARS}-character limit).`,
);
