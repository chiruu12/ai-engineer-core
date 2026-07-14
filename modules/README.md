# Modules

The code — one directory per build, in [roadmap](../roadmap/) order. Scratch code
graduates into a small, presentable project once its Friday prove-it passes.
[← back to the hub](../README.md)

## Ledger

| # | Module | Week | Status | Project |
|---|--------|------|--------|---------|
| 01 | [micrograd](01-micrograd/) | [1](../roadmap/month-1-foundations.md#week-1--autograd--math-bootcamp) | building | — |

> Statuses: `not started` → `building` → `done` → `shipped` (promoted to a project and
> write-up published). Add a row when you start each module.

## How a module becomes a project

When the build works and the Friday prove-it passes, promote it:

1. **README** — what it is, what you learned, how to run it, one honest limitation.
2. **Clean the code** — real names, docstrings on the non-obvious parts, dead code out.
3. **Deps + reproducibility** — pinned `requirements.txt`/`pyproject.toml`, one command to run.
4. **One test or worked example** — proof it does what the README claims.
5. **Write it up** — the prove-it post is the artifact that proves it stuck.
6. **Optionally stand it up on its own** — `gh repo create` if it's repo-worthy, then link it in the ledger.

## Naming

- One numbered directory per module: `NN-name/`, matching the roadmap order.
- Keep weights, datasets, and W&B runs out of git — see [`.gitignore`](../.gitignore).
