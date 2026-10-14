---
title: pystudio
summary: A terminal IDE for Python data science. Embedded Neovim, a Jupyter kernel, a variable explorer and inline plots in one screen, over SSH.
kind: code
year: 2026
tags: [Python, Developer tools, Jupyter, Neovim]
repo: https://github.com/e-riveras/pystudio
image: ../../assets/projects/pystudio.png
imageAlt: pystudio with the editor and console on the left, variables and a plot on the right
featured: true
order: 2
---

A mix of RStudio and Jupyter, with a real Neovim as the editor. Four panes, one Jupyter kernel, one screen. It works over SSH, with no browser.

The editor is not a reimplementation. pystudio spawns `nvim --embed` and attaches to it as a UI, so your `init.lua`, plugins, LSP, treesitter, macros and registers behave exactly as in your daily editor. Send a line to the kernel and the result appears in the console, the variable explorer updates, and figures land in the plot pane.

## Details

- Plots render with Kitty graphics or Sixel (Kitty, Ghostty, WezTerm, iTerm2) and fall back to half-cell blocks elsewhere.
- Scripts are split into cells; run one cell or the whole file.
- Each project's own virtual environment drives the kernel.

## Install

```sh
uv tool install git+https://github.com/e-riveras/pystudio
pystudio analysis.py
```
