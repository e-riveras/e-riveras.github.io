---
title: chessllm
summary: Fine-tuning Llama 3.2 3B for chess position commentary with LoRA, entirely on a 16 GB MacBook Air with Apple's MLX.
kind: code
year: 2026
tags: [LLMs, LoRA, MLX, Fine-tuning]
repo: https://github.com/e-riveras/chessllm
featured: true
order: 4
---

Fine-tunes a 4-bit Llama 3.2 3B Instruct model to analyze chess positions, with no cloud GPU.

| | |
|---|---|
| Base model | `mlx-community/Llama-3.2-3B-Instruct-4bit` |
| Fine-tuning | LoRA, rank 8 |
| Hardware | 16 GB M4 MacBook Air |
| Task | Position analysis and commentary |

The pipeline converts annotated PGN games into training JSONL, trains LoRA adapters with MLX, and serves an interactive analysis CLI.
