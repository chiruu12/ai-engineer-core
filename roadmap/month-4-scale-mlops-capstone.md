# Month 4 — Scale · MLOps · Capstone

**Weeks 13–18** (six weeks — Month 4 is the long one). Train at scale, learn to design
ML systems, ship a real capstone, then a deliberate buffer week and a final gate.

[← Month 3](month-3-finetune-eval-serve.md) · [Roadmap index](README.md)

---

## Week 13 — Training at scale

The techniques that make training big things possible. DDP needs a 2×GPU box for one Friday.

- `BUILD` — mixed precision, gradient accumulation, gradient checkpointing
- `BUILD` — DDP hands-on — [Let's reproduce GPT-2](https://www.youtube.com/watch?v=l8pRSuU81PU) + [DDP tutorial](https://docs.pytorch.org/tutorials/intermediate/ddp_tutorial.html)
- `BUILD` — `torch.compile` awareness + W&B sweeps
- `BUILD` — streaming data pipelines for large corpora
- `BUILD` — **backend:** observability — structured logs, metrics, tracing
- `PROVE-IT` — explain DDP + mixed precision, cold + explainer

## Week 14 — ML system design + MLOps

Zoom out from models to systems.

- `PAPER` — [Chip Huyen](https://huyenchip.com/books/) — Designing ML Systems + AI Engineering, selective
- `COURSE` — [Made With ML](https://madewithml.com/) — MLOps track
- `BUILD` — CI for models, model registries, drift + monitoring concepts
- `BUILD` — four design questions out loud: search ranker, moderation pipeline, recsys, metered LLM proxy
- `BUILD` — **backend:** auth + metered billing correctness · [DDIA](https://dataintensive.net/) ch. 5 + 7
- `PROVE-IT` — one full ML system-design answer, recorded

## Week 15 — Capstone I

Take the Week 8 classifier to a real, evaluated system.

- `BUILD` — two-stage system: regex + trained classifier, integrated
- `BUILD` — ONNX / CoreML export for on-device
- `BUILD` — full eval suite vs. [LLM Guard](https://github.com/protectai/llm-guard) / ProtectAI / Lakera
- `PAPER` — [Llama 3 tech report](https://arxiv.org/abs/2407.21783) (spans two weeks)

## Week 16 — Capstone II — ship it

- `BUILD` — served API with monitoring
- `SHIP` — model + dataset cards on HF Hub
- `SHIP` — a benchmark blog post
- `PAPER` — [A Survey on Evaluation of LLMs](https://arxiv.org/abs/2307.03109)
- `PROVE-IT` — walk the capstone end-to-end as a system-design answer

## Week 17 — Buffer (deliberate slack)

- `BUILD` — absorb overruns, hackathon weeks, job crunch — the quota is still 30h
- `BUILD` — if on schedule: a stretch project + capstone polish

## Week 18 — Consolidation + final gate

- `BUILD` — re-run the Week 1 baseline audit — diff against the start
- `BUILD` — Anki sweep of all four months
- `SHIP` — polish pinned repos; update resume + profile with the sprint's artifacts
- `SHIP` — publish the capstone write-up; plan next quarter

---

## `GATE` — Final

No notes, cold:

- a nanoGPT-level transformer **from memory**
- the capstone as an **interview answer**
- every month has a live, public artifact

---

Resources: [docs/resources.md](../docs/resources.md) · Compute: [docs/compute.md](../docs/compute.md) · Track in the [tracker](../tracker/).
