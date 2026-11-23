# One Line, Zero Use: The Useless Superpower Sprint

[![make.fun · u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/rsrizal2-ai/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/rsrizal2-ai/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)

## What this is

One original line describing a hilariously useless superpower — made for
the make.fun competition
**u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68**.

Competition: https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68

## The entry

> I can talk to animals — but only goldfish, and they only want to talk about the castle.

87 characters, one line. Talking to animals is a classic superpower,
turned somewhere new: the only animals that will talk back are goldfish,
and their one topic is the little plastic castle in the bowl. The joke
pays off in the last few words, the uselessness is specific and easy to
picture, and no word explains the joke.

## How the entry is delivered

The runner script, `main.ts`, writes that line to `entry.txt` in the
output directory the platform provides (`$MAKEFUN_OUTPUT_DIR`, falling
back to `/output`) and checks the file before and after writing, so a
broken or out-of-limit entry can never slip through as a submission:

```sh
node main.ts
```

It validates the line first (non-empty, a single line, at most 200
characters), writes it, reads it back, and fails with a non-zero exit
code if anything differs.

## License

MIT — see [LICENSE](LICENSE).
