# Compute plan

Most of this roadmap runs on a laptop. A few weeks don't — and knowing which ahead
of time keeps them from stalling. [← back to the hub](../README.md)

## The short version

| Phase | Weeks | Hardware |
|-------|-------|----------|
| Foundations → transformers | 1–8 | A Mac (Apple Silicon). [MLX-LM](https://github.com/ml-explore/mlx-lm) covers local model work. |
| Finetune / serve / scale | 9, 10, 12, 13 | A **rented CUDA GPU** — the libraries below are CUDA-only. |
| Everything else in M3–M4 | 11, 14–18 | Back on the Mac (eval, design, write-ups, capstone glue). |

Budget roughly **$60–120 total** for GPU rental across the sprint
([RunPod](https://www.runpod.io/) or [Lambda](https://lambdalabs.com)) — spin up per
session, tear down after.

## Which weeks need CUDA, and why

- **Week 9 — QLoRA:** `bitsandbytes` 4-bit quant is CUDA-only. Do the LoRA-from-scratch
  and MLX-LM parts on the Mac; rent a GPU for the bitsandbytes runs.
- **Week 10 — DPO:** SFT→DPO on a 1–8B model with TRL is realistic only on a GPU.
- **Week 12 — vLLM:** vLLM has **no Apple Silicon support** — it needs a Linux CUDA box.
  This is also where the Mac-vs-GPU serving comparison happens.
- **Week 13 — DDP:** distributed data parallel needs 2×GPU for one Friday.

## Working cheaply

- Develop and debug on the Mac; rent the GPU only when you're ready to run.
- Keep datasets and checkpoints out of the repo (see [`.gitignore`](../.gitignore)) —
  pull them on the box, don't carry them.
- Log every run to [Weights & Biases](https://wandb.ai/site) from Week 5 on, so a torn-down
  GPU box never takes your results with it.
