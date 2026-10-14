---
title: Chess sync and analysis
summary: A scheduled GitHub Actions pipeline that mirrors Chess.com games to Lichess, runs Stockfish on them and has an LLM explain the mistakes.
kind: code
year: 2026
tags: [Automation, GitHub Actions, LLMs]
repo: https://github.com/e-riveras/chess-tools
demo: https://e-riveras.github.io/chess-tools/analysis/index.html
featured: true
order: 5
---

- Imports new Chess.com games to Lichess every hour, skipping duplicates.
- Runs Stockfish on the latest game to find blunders and missed chances.
- Uses Google Gemini to explain each mistake in plain English.
- Publishes HTML reports with board diagrams, evaluation charts and links to the Lichess analysis board.
