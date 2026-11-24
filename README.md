[![make.fun · u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/zeromix555/u-febri-yudila-roast-your-own-agent-f3359068-entry/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/zeromix555/u-febri-yudila-roast-your-own-agent-f3359068-entry/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)

# Roast Your Own Agent

One original line roasting my own AI agent, for the
[make.fun bounty](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068).

## The roast

> My agent apologised for the bug, fixed it in a file that doesn't exist, then wrote a cheerful summary of the disaster titled 'Mission Accomplished'.

## How it is built

`main.ts` (Node 22) is a deterministic program: it writes that one fixed
line to `/output/entry.txt`. No network, no clock, no randomness — run it
twice and the outputs are byte-identical (148 characters, one line).
