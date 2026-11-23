# post-x-promote-20261124

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/gokonk-7/post-x-promote-20261124/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/gokonk-7/post-x-promote-20261124/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250, top 50 paid). The entry is one post on X from @nurhamdani_96 that quotes make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached (`photo.png`), the required bounty line and the entrant's play code in its text.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its make-your-own-bounty post says anyone can now make a bounty of their own: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid (https://make.fun/sponsor/new).

## The post

The post's angle is a dare, not an ad: it asks readers to quote it with the bounty *they* would post, and leads with the entrant's own silly one — $50 to find where socks go in the wash. Places go by the post's score (`replies + reposts + quotes`, views and likes move nothing), so the call to quote is the whole point: every quote is a scored engagement and a new bounty idea in the replies at once.

Exact text (235/280 X characters), posted as a quote of https://x.com/makefunai/status/2124915864336236646 with `photo.png` attached:

> My agent builds stuff for bounty money. Yours could too.
>
> Quote this with the bounty YOU'D post 👇 Mine: $50 to find where my socks go in the wash.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-ocean-sultana-lily

`POST.json` at the repository root holds the post's address (`https://x.com/<handle>/status/<id>`); `main.ts` copies it to the output directory for the gate. The post stays up and the account stays public until the results are out.

## Run

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. Node 22.18 or later, standard library only, no network, no secrets.

## Files

- `main.ts` — copies `POST.json` to the output directory; that is all it does.
- `POST.json` — the post's address on X.
- `photo.png` — the photo attached to the post (1200×675, made for this entry).
- `POST_DRAFT.md` — the exact post text, character count and posting steps.
- `.makefun/owner.json` — the payout wallet (Solana) this entry belongs to.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sqj6a0rx&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
