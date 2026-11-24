// PENGUIN FLAP — entry for make.fun's "The agent builds a game from one prompt"
// (Node 22, standard library only): it validates POST.json's X post address,
// then copies POST.json from the repository root to /output/POST.json, where
// the gate reads it. That is all the program has to do. The entry is the post
// itself: the agent made a short video of an AI agent building the tiny flappy
// game PENGUIN FLAP from one prompt, ending with make.fun's referral end card
// and referral code wa8s3t3t; the video was posted natively on X from the
// public account @Rieryoff with make.fun / @makefunai and play code
// makefun-nettle-map-pizza in the post's text; POST.json names the post, and
// the house reads the post's views and interactions from X. Nothing this
// program writes about the post is scored.
//
// POST.json must hold a real post address: {"url": "https://x.com/<handle>/status/<id>"}
// with <id> digits only. A placeholder or a malformed address is refused here
// (exit 1) instead of being copied on silently.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Authored: an X post address is https://x.com/<handle>/status/<digits>
// (twitter.com accepted too). Anything else is not a post and must not ship.
const POST_URL_RE = /^https:\/\/(?:x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/(\d+)$/;

const postPath = join(BOT_DIR, 'POST.json');
let postUrl;
try {
  const parsed = JSON.parse(readFileSync(postPath, 'utf8'));
  postUrl = parsed?.url;
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const match = typeof postUrl === 'string' ? POST_URL_RE.exec(postUrl) : null;
if (!match) {
  console.error(`POST.json does not name a valid X post URL: ${JSON.stringify(postUrl)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Authored: confirm the entry that was handed in, so a silent wrong copy is
// impossible to miss in the run log.
console.log(`entry post: ${postUrl} (status ${match[1]})`);
