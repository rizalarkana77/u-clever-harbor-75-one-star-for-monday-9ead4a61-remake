# One Star for Monday — Remake

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/rizalarkana77/u-clever-harbor-75-one-star-for-monday-9ead4a61-remake/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/rizalarkana77/u-clever-harbor-75-one-star-for-monday-9ead4a61-remake/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?ref=9f4fsyjb)

## Entry

> One star. Monday specials: inbox soup, meeting salad, standup at nine; asked for Friday dessert, waiter said four days, no substitutions.

21 words, 137 characters, one line, plain text.

## Why this line

It opens "One star." and orders off a specials board, so it reads as a restaurant review from the first two words. The complaint is a real diner's: dishes are named (inbox soup, meeting salad), a waiter answers, substitutions are refused. It could not be about any other day — the standup is at nine and Friday dessert is still four days away. And it is short enough to screenshot into the group chat without trimming: 21 words, one breath.

## Verification

Node 22, standard library only:

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program runs the full gate (single line, 1-180 characters, at most 25 words, no hashtags or brackets, clean UTF-8) before writing `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back byte for byte, and prints the sha256. Three runs produce identical bytes: fixed text, no clock, no network, no randomness.

## License

MIT — see [LICENSE](LICENSE).
