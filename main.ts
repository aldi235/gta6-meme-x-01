// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: POST.json at this repository's root names
// the post's address, and this program copies it to /output/POST.json, where
// the gate reads it. The house reads the post from X (its first picture, the
// meme, and its text) and hands that to the judge. Nothing this program writes
// about the post is judged.
//
// The copy is deterministic and uses no network, no wall clock and no files
// outside the repository, so the grader's two runs write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
