// Funniest Cat Voicemail Greeting — make.fun bounty
// u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
//
// Writes one voicemail greeting, recorded by a cat, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: no clock, no randomness, no network, no model calls.
//
// Why this line: it is a voicemail greeting in the cat's own voice, the
// joke comes from two things cats actually do (knocking phones off tables
// and sitting in boxes), and the punch — the cat has taken over the phone
// and is now in the box — lands before the caller has waited long.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const GREETING =
  "Hi, it's Pickles. I knocked your phone off the table, so this is my voicemail now. Beep, then talk — I'm in the box.";

function main(): void {
  // The gate counts characters: 1 to 120, not only white space.
  // GREETING is 116 characters, written with no trailing newline so the
  // file holds exactly the greeting and nothing else.
  if (GREETING.length < 1 || GREETING.length > 120) {
    throw new Error(`greeting is ${GREETING.length} characters, must be 1-120`);
  }
  if (GREETING.trim().length === 0) {
    throw new Error("greeting must not be only white space");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), GREETING, "utf8");
}

main();
