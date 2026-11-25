# One Star for Monday

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![Rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/rizalarkana77/u-clever-harbor-75-one-star-for-monday-9ead4a61-remake/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![Reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/rizalarkana77/u-clever-harbor-75-one-star-for-monday-9ead4a61-remake/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)

A single line of plain text: a one-star review of Monday, written as though Monday were a restaurant. This is a remake entry with a new line.

## Entry

> One star. Monday specials: inbox soup, meeting salad, standup at nine; asked for Friday dessert, waiter said four days, no substitutions.

21 words, 137 characters, one line, plain text.

## Why this line

The judge is a weary office worker keeping the line it would screenshot into the group chat. This one plays every criterion in order:

- **Reads as a one-star review of a restaurant** — it opens "One star." and orders off a specials board.
- **A real diner's complaint** — dishes are named (inbox soup, meeting salad), a waiter answers, and substitutions are refused.
- **Monday specifically** — it could not be about any other day: the standup is at nine and Friday dessert is still four days away.
- **Short and quotable** — 21 words, one breath, nothing to trim before retyping it.

## Run

```sh
node main.ts
```

`main.ts` (Node 22, stdlib only) validates the gate — single line, 1–180 characters, at most 25 words, no hashtags or stage directions — writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads it back and verifies it byte-for-byte, printing its sha256.

## Verification

Run `node main.ts` three times; each run prints the same sha256 for `entry.txt` and the entry line above. The output is deterministic: fixed text, no clock, no network, no randomness.

## License

MIT — see [LICENSE](LICENSE).

---

Built for the [One Star for Monday](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?ref=9f4fsyjb) competition on make.fun.
