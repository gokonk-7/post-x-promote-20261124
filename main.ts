// post-x-promote-make-your-own-bounty-01 — entry program (Node 22, standard library only).
//
// The entry itself is a post on X: one post of the entrant's own that quotes
// make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached, make.fun / @makefunai and the entrant's play code
// in its text. This program's only job is to hand the post's address to the house:
// it copies POST.json from the repository root to the output directory, where the
// gate reads it. Nothing this program writes about the post is scored — the house
// reads the post itself from X and counts its replies + reposts + quotes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json holds a placeholder until the post is published on X; replace the
// placeholder with the post's real address (https://x.com/<handle>/status/<id>)
// before submitting. The gate refuses the placeholder on purpose — a starter
// that passed with no post at all would need no post.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

const sourcePath = join(BOT_DIR, POST_FILE);

// Fail loudly, before copying, when POST.json is not a JSON object with a url string.
let post;
try {
  post = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`${POST_FILE} could not be read as JSON from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof post.url !== 'string' || post.url.length === 0) {
  console.error(`${POST_FILE} must be a JSON object with a non-empty "url" string.`);
  process.exit(1);
}
// The placeholder is not a post: refuse it here so a submission can never go
// out with the template address still in place.
if (post.url.includes('<id>') || post.url.includes('<handle>')) {
  console.error(`${POST_FILE} still holds the placeholder address — replace <id> with the published post's id first.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(sourcePath, join(OUTPUT_DIR, POST_FILE));
} catch (err) {
  console.error(`${POST_FILE} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
