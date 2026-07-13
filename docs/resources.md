# Resources

Everything the [roadmap](../roadmap/) links to, in one place. [← back to the hub](../README.md)

## Courses

- [Anthropic Academy](https://anthropic.skilljar.com/) — Claude API, Claude Code, MCP, Bedrock/Vertex editions
- [Cohere LLMU](https://cohere.com/llmu) — fundamentals, embeddings, semantic search
- **Cohere ML School** — cohort-based; live sessions preempt the course block when they land
- [Stanford CS224n](https://web.stanford.edu/class/cs224n/) — NLP with deep learning
- [Hugging Face NLP course](https://huggingface.co/learn/nlp-course) — datasets, transformers, Trainer, accelerate
- [HF smol-course](https://github.com/huggingface/smol-course) — small-model finetuning
- [Made With ML](https://madewithml.com/) — MLOps track

## Codebases to build from

| Repo | Used in |
|------|---------|
| [karpathy/micrograd](https://github.com/karpathy/micrograd) | Week 1 |
| [karpathy/makemore](https://github.com/karpathy/makemore) | Weeks 2–3 |
| [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT) | Week 5 |
| [karpathy/minbpe](https://github.com/karpathy/minbpe) | Week 6 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Weeks 5–6 (companion) |
| [huggingface/peft](https://github.com/huggingface/peft) | Week 9 |
| [huggingface/trl](https://github.com/huggingface/trl) · [alignment-handbook](https://github.com/huggingface/alignment-handbook) | Week 10 |
| [EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | Week 11 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Week 12 |
| [protectai/llm-guard](https://github.com/protectai/llm-guard) | Week 15 (baseline to beat) |

Karpathy's full [Zero to Hero](https://karpathy.ai/zero-to-hero.html) series underpins Weeks 1–6.

## Papers

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — the transformer (W5)
- [GPT-2: Language Models are Unsupervised Multitask Learners](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) (W6)
- [RoFormer (RoPE)](https://arxiv.org/abs/2104.09864) — rotary position embeddings (W6)
- [BERT](https://arxiv.org/abs/1810.04805) + [DeBERTa-v3](https://arxiv.org/abs/2111.09543) — encoders (W7)
- [LoRA](https://arxiv.org/abs/2106.09685) + [QLoRA](https://arxiv.org/abs/2305.14314) — parameter-efficient finetuning (W9)
- [InstructGPT](https://arxiv.org/abs/2203.02155) + [DPO](https://arxiv.org/abs/2305.18290) — alignment (W10)
- [Chinchilla scaling laws](https://arxiv.org/abs/2203.15556) (W10)
- [LLM-as-judge / MT-Bench](https://arxiv.org/abs/2306.05685) (W11)
- [vLLM / PagedAttention](https://arxiv.org/abs/2309.06180) (W12)
- [Llama 3 tech report](https://arxiv.org/abs/2407.21783) (W15–16)
- [A Survey on Evaluation of LLMs](https://arxiv.org/abs/2307.03109) (W16)

## Books

- [Deep Learning](https://www.deeplearningbook.org/) (Goodfellow) — reference, esp. ch. 6
- [Mathematics for Machine Learning](https://mml-book.github.io/) — fill math gaps
- [Practical Statistics for Data Scientists](https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/) (W4)
- [Designing Data-Intensive Applications](https://dataintensive.net/) — backend thread (M3–4)
- [Chip Huyen — Designing ML Systems / AI Engineering](https://huyenchip.com/books/) (W14)

## Tools

- [Weights & Biases](https://wandb.ai/site) — experiment tracking (from W5)
- [sentence-transformers](https://sbert.net/) — embeddings (W7)
- [MLX-LM](https://github.com/ml-explore/mlx-lm) — local model work on Apple Silicon
- [Anki](https://apps.ankiweb.net/) — spaced repetition for concepts
- [locust](https://locust.io/) — load testing (W12)
- [3Blue1Brown](https://www.3blue1brown.com/) — [Linear Algebra](https://www.3blue1brown.com/topics/linear-algebra) · [Calculus](https://www.3blue1brown.com/topics/calculus)
- [StatQuest](https://www.youtube.com/@statquest) — statistics intuition
- GPU rental: [RunPod](https://www.runpod.io/) · [Lambda](https://lambdalabs.com) — see [compute plan](compute.md)

## Datasets & baselines (Week 8 classifier)

- [deepset/prompt-injections](https://huggingface.co/datasets/deepset/prompt-injections) and others — [browse the set](https://huggingface.co/datasets?search=prompt+injection)
- [ProtectAI DeBERTa-v3 prompt-injection-v2](https://huggingface.co/protectai/deberta-v3-base-prompt-injection-v2) — the 94.28% baseline to match or beat
