---
title: Pollster bias in Texas Senate races
summary: A hierarchical Bayesian model of how Texas Senate polls have missed since 2018, used to adjust the polls of the 2026 Paxton–Talarico race.
kind: code
year: 2026
tags: [Bayesian, PyMC, Elections, Hierarchical models]
repo: https://github.com/e-riveras/tx-senate-polls
image: ../../assets/projects/tx-senate-polls.png
imageAlt: Polls of the 2026 Texas Senate race with the bias-adjusted trend and its interval
featured: true
order: 1
---

Polls of the 2018, 2020 and 2024 Texas Senate races are compared with the certified results. That gives the miss shared by the whole industry in each cycle and the lasting lean of each pollster, which then adjust the polls of the 2026 race.

## Model

The outcome is the Democratic share of the two-party vote. For poll *i* of cycle *c*, taken *w* weeks before the election by pollster *p*:

```
poll_i ~ Normal(race[c, w] + bias_i, sqrt(se_i^2 + sigma_extra^2))
bias_i = industry[c] + house[p] + house_cycle[p, c] + rv_effect + sponsor_effect
```

- `race` is a random walk back from election day. In past cycles election day is pinned to the result, which is what makes bias measurable.
- `industry[c]` is the miss all pollsters share in a cycle. For 2026 it is predicted from the three past cycles, and that uncertainty carries into the estimate.
- `house[p]` is a pollster's lasting lean, `house_cycle` how far it strays from that in one cycle.
- `rv_effect` and `sponsor_effect` cover registered-voter samples and partisan-tagged polls.

## Findings (polls to 11 October 2026)

- Polls average 51.6 for Talarico. Adjusted for past misses, the election-day estimate is **50.0, with a 90% interval from 45.9 to 53.6**.
- Texas Senate polls overstated the Democrat by 1.5 points in 2020 and 2.2 in 2024, after understating by 1.3 in 2018.
- Most of what separates pollsters is the partisan tag, not the firm. Lasting firm-level differences are about a quarter of a point.
- The family of the priors does not change the answers; their width does. The report tests both.

A second report adds a two-stage explanation of the miss: a share of rural voters who never answer polls, plus a cycle residual centred on presidential approval.

## Stack

PyMC and ArviZ, data scraped from Wikipedia revisions and committed so the report is reproducible offline. Written as a cell script for [pystudio](/projects/pystudio/).
