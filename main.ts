// Entry program for post-x-promote-make-your-own-bounty-01.
//
// The entry itself is a public post on X; this repository only has to hand
// the post in. main.ts copies POST.json (which names the post's address)
// from the repository root to the output directory, byte for byte, so the
// house can read the post and its counts itself. Nothing else is written:
// the house replaces post.counts.json with its own reading after the runs.
// The copy is deterministic: same POST.json in, same bytes out, every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The output directory is mounted by the grader: create it if missing,
// never remove it.
mkdirSync(outputDir, { recursive: true });

copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
