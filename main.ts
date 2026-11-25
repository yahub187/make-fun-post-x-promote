import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The deliverable of this entry is the X post named in POST.json, which sits
// next to this file at the repository root. Running the program copies that
// file, unchanged, into the output directory the grader provides.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const POST_FILENAME = "POST.json";
const DEFAULT_OUTPUT_DIR = "/output";
const sourcePath = join(repoRoot, POST_FILENAME);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;

if (!existsSync(sourcePath)) {
  throw new Error(`${POST_FILENAME} is missing from the repository root`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, POST_FILENAME));
console.log(`wrote ${POST_FILENAME} to ${outputDir}`);
