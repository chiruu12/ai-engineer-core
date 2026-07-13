# Month 2 — Transformers & NLP

**Weeks 5–8.** Build a GPT from nothing, understand tokenization and generation, get
fluent in the Hugging Face stack, and finish with a real, benchmarked model.

[← Month 1](month-1-foundations.md) · [Roadmap index](README.md) · Next: [Month 3 →](month-3-finetune-eval-serve.md)

---

## Week 5 — GPT from scratch

The transformer, typed by hand. Experiment tracking goes in now so nothing is
retrofitted later.

- `BUILD` — [Let's build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY) → [nanoGPT](https://github.com/karpathy/nanoGPT), **typed not cloned**
- `BUILD` — set up [Weights & Biases](https://wandb.ai/site) — every training run from here on gets logged
- `PAPER` — [Attention Is All You Need](https://arxiv.org/abs/1706.03762) + [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- `BUILD` — start [Raschka — LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) (ch. 1–3) as a companion
- `COURSE` — [CS224n](https://web.stanford.edu/class/cs224n/) backfill: word vectors → neural nets lectures
- `PROVE-IT` — an attention block from memory + explainer

## Week 6 — Tokenization + generation

How text becomes tokens, and how tokens become text.

- `BUILD` — [minbpe](https://github.com/karpathy/minbpe) — BPE from scratch, then HF tokenizers
- `BUILD` — positional encodings: learned vs. sinusoidal vs. RoPE
- `PAPER` — [RoFormer (RoPE)](https://arxiv.org/abs/2104.09864) + [GPT-2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
- `BUILD` — sampling: temperature, top-k, top-p, beam; perplexity as an eval
- `BUILD` — train nanoGPT on a custom corpus (W&B-logged)
- `COURSE` — CS224n: attention + transformer lectures
- `PROVE-IT` — BPE from memory + explainer

## Week 7 — HF ecosystem + embeddings

Get fast with the tooling everyone uses, and go deep on embeddings.

- `BUILD` — datasets, transformers, Trainer, accelerate — [HF NLP course](https://huggingface.co/learn/nlp-course) chapters
- `BUILD` — finetune a BERT-class encoder on a real task: honest splits, baselines, confusion analysis
- `BUILD` — embeddings at depth: [sentence-transformers](https://sbert.net/), contrastive training, hard negatives
- `PAPER` — [BERT](https://arxiv.org/abs/1810.04805) + [DeBERTa-v3](https://arxiv.org/abs/2111.09543)
- `COURSE` — Cohere LLMU: embeddings + semantic search modules
- `PROVE-IT` — explain contrastive training + the finetune pipeline from memory

## Week 8 — Milestone: injection classifier

The month's proof of work — a real model, benchmarked against the state of the art.

- `BUILD` — curate prompt-injection datasets from the Hub ([deepset](https://huggingface.co/datasets/deepset/prompt-injections) and others — [browse](https://huggingface.co/datasets?search=prompt+injection))
- `BUILD` — train a DeBERTa-v3-small classifier — match/beat [ProtectAI's 94.28%](https://huggingface.co/protectai/deberta-v3-base-prompt-injection-v2)
- `BUILD` — calibration + adversarial/robustness eval + system-prompt false-positive analysis
- `SHIP` — model card → your HF Hub + a blog write-up

---

## `GATE` — Month 2

No notes, cold:

- multi-head attention **from memory in < 30 min**
- BPE **from memory**
- explain RoPE, encoder-vs-decoder, and the classifier's failure modes

---

Resources: [docs/resources.md](../docs/resources.md) · Code lands in [modules/](../modules/) · Track in the [tracker](../tracker/).
