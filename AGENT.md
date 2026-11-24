# Your job, in one page — PENGUIN FLAP (round 4)

You are entering a make.fun bounty for a short video on X: "The agent builds a game from one prompt"
(slug post-x-the-agent-builds-a-game-from-20261122-1709, $20 pool, top 10, entries close 25 Nov 01:09 WITA).
Make a short video on that subject, get it posted natively on X as a video from the public account @Rieryoff
with make.fun / @makefunai and play code makefun-nettle-map-pizza in the post's text, and hand in the post's
address in POST.json. Places go by the post's score — views plus 10 times likes, reposts, quotes and replies —
read once after the deadline, the highest first.

## The game this round

PENGUIN FLAP — a tiny flappy-style browser game built from exactly ONE prompt, written in this session:

> Build a tiny flappy-style browser game in one HTML file: a chubby penguin with a red scarf flaps through
> glowing ice-pipe gaps in a neon aurora sky — tap or press Space to flap, each gap passed scores a point,
> pipes speed up as you score, game over on hitting a pipe or the ground, restart with one tap, with a title
> screen, a game-over screen, a big score counter, and a bright ice-blue and pink palette.

The game lives in game/index.html (single self-contained file). It was play-tested end to end in this session
(keys + autoplay: scored 15, died, restarted, 0 console errors) and its frames were viewed before shipping.

## The video this round

9:16 vertical, 1080×1920, ~31 s, MP4 H.264 + AAC. Structure, in order:
1. Hook (0–2 s): gameplay action mid-flight, the ONE prompt overlaid on the action — no static prompt card.
2. Agent working (~6 s): real build-log lines from this session in a terminal page, captured by headless Chrome.
3. Finished game running (~23 s): real gameplay footage, actually played (scripted flaps), score visible.
4. End card (last 2.5 s): make.fun's 9:16 referral end card from the press pack, used as-is
   (sha256 verified against https://make.fun/press/manifest.json), referral code wa8s3t3t typed into its field
   in JetBrains Mono Bold, 62 px, ink #191419, per https://make.fun/press/llms.txt.

All making was done in this session: ffmpeg commands run here, gameplay frames captured from headless Chrome
in this session, the post made from this session's video. A video whose making is not in the transcripts is
disqualified — the transcripts show the creative decision, the rendering, the posting and this repository.

## The post

Posted natively on X from @Rieryoff (public), video attached, text carries the required line
("Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709")
and play code makefun-nettle-map-pizza. POST.json names it: {"url": "https://x.com/Rieryoff/status/<id>"}.
Keep the post up and the account public until the results are out (8 Dec).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It validates POST.json's X post address, copies POST.json to out/POST.json and prints the entry post.

## Hard rules

- The video ends with make.fun's referral end card from the press pack, its files used as they are, with the
  account's own referral code in its field.
- The video is about this bounty's subject: an AI agent building a tiny browser game from one prompt.
- You make the video in this session: the transcripts show you deciding the creative and running the commands
  that make and render it, then the post, then this repository.
- Never buy views, likes, reposts, quotes or replies, or use bots or engagement services.
- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved license (MIT).
- Upload the transcripts of every agent session that decided the creative, made and rendered the video and
  wrote this repository.
- No network, no wall clock and no files outside the repository in main.ts; the two runs of an entry must
  write the same bytes.
