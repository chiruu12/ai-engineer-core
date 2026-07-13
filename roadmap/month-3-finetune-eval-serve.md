# Month 3 — Finetune · Eval · Serve

**Weeks 9–12.** Adapt models efficiently, learn to measure them honestly, and serve
them fast. A **backend thread** runs alongside — the infrastructure a real ML service
needs. Several weeks need a rented GPU; see the [compute plan](../docs/compute.md).

[← Month 2](month-2-transformers-nlp.md) · [Roadmap index](README.md) · Next: [Month 4 →](month-4-scale-mlops-capstone.md)

---

## Week 9 — LoRA / QLoRA

Parameter-efficient finetuning, from the math up.

- `PAPER` — [LoRA](https://arxiv.org/abs/2106.09685) + [QLoRA](https://arxiv.org/abs/2305.14314) — derive the math
- `BUILD` — implement a LoRA layer from scratch
- `BUILD` — [PEFT](https://github.com/huggingface/peft)-finetune a 1–8B model — [MLX-LM](https://github.com/ml-explore/mlx-lm) locally, rented GPU for bitsandbytes
- `BUILD` — quantization theory: GPTQ vs. AWQ vs. GGUF vs. bitsandbytes — what degrades and when
- `COURSE` — [HF smol-course](https://github.com/huggingface/smol-course)
- `PROVE-IT` — LoRA math on a whiteboard + explainer

## Week 10 — Alignment: SFT → DPO

Turn a base model into an instruction-follower.

- `BUILD` — SFT → DPO via [alignment-handbook](https://github.com/huggingface/alignment-handbook) / [TRL](https://github.com/huggingface/trl) on the Week 9 model (rented GPU)
- `PAPER` — [InstructGPT](https://arxiv.org/abs/2203.02155) + [DPO](https://arxiv.org/abs/2305.18290)
- `PAPER` — [Chinchilla scaling laws](https://arxiv.org/abs/2203.15556)
- `BUILD` — synthetic data generation basics
- `BUILD` — **backend:** Postgres for real — indexes, `EXPLAIN`, transactions, migrations
- `PROVE-IT` — defend SFT vs. RLHF vs. DPO, cold + explainer

## Week 11 — Evals — the differentiator

The skill that separates people who ship models from people who guess.

- `BUILD` — [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) on the finetunes
- `BUILD` — a custom RAG eval harness: recall@k, MRR, nDCG + answer grading
- `PAPER` — [LLM-as-judge (MT-Bench)](https://arxiv.org/abs/2306.05685) + its pitfalls
- `BUILD` — W&B eval dashboards over every run since Week 5
- `BUILD` — **backend:** Redis caching + rate limiting · [DDIA](https://dataintensive.net/) ch. 1–3
- `PROVE-IT` — design an eval for an unseen task, out loud + explainer

## Week 12 — Serving: vLLM + gateway

Make it fast and put it behind an API. vLLM needs a Linux CUDA box.

- `PAPER` — [vLLM / PagedAttention](https://arxiv.org/abs/2309.06180)
- `BUILD` — [vLLM](https://github.com/vllm-project/vllm) deep dive: continuous batching, KV-cache math (+ GQA/MQA), prefill vs. decode, speculative decoding
- `BUILD` — serve the finetuned+quantized model behind a FastAPI gateway; [locust](https://locust.io/) load test; publish the numbers
- `BUILD` — head-to-head: same model on vLLM (GPU box) vs. MLX (Mac)
- `BUILD` — **backend:** background jobs + queues

---

## `GATE` — Month 3

No notes, cold:

- LoRA math
- quantization choice **justified with numbers**
- a **published** load-test report
- backend service M1 shipped

---

Resources: [docs/resources.md](../docs/resources.md) · Compute: [docs/compute.md](../docs/compute.md) · Track in the [tracker](../tracker/).
