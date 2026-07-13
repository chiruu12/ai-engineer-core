# AI Engineer Core

A four-month, build-first path from deep-learning fundamentals to shipping ML
systems. Build everything from scratch, re-derive it from memory every Friday, ship
it in public. Deep learning → NLP, a bit of data science, a solid backend spine —
**18 weeks at ~30 hours a week.**

**[▶ Open the interactive tracker](https://chiruu12.github.io/ai-engineer-core/tracker/)** · [Roadmap](roadmap/) · [Modules](modules/) · [How it works](docs/how-it-works.md) · [Resources](docs/resources.md)

---

## Navigate

| Where | What's there |
|-------|--------------|
| **[roadmap/](roadmap/)** | The curriculum, week by week, split across four months |
| **[modules/](modules/)** | The code — one directory per build, plus a progress ledger |
| **[tracker/](tracker/)** | The interactive tracker (checkable, pace-aware) — [open it live](https://chiruu12.github.io/ai-engineer-core/tracker/) |
| **[docs/](docs/)** | [How it works](docs/how-it-works.md) · [Compute plan](docs/compute.md) · [Resources](docs/resources.md) |

## The four months

| Month | Weeks | Focus | Milestone / gate |
|-------|-------|-------|------------------|
| **[1 · Foundations](roadmap/month-1-foundations.md)** | 1–4 | Autograd, PyTorch, training dynamics, classical ML + DS | Backprop on paper · micrograd from memory |
| **[2 · Transformers & NLP](roadmap/month-2-transformers-nlp.md)** | 5–8 | GPT from scratch, tokenization, HF, embeddings | Injection classifier that beats a public baseline |
| **[3 · Finetune · Eval · Serve](roadmap/month-3-finetune-eval-serve.md)** | 9–12 | LoRA/QLoRA, SFT→DPO, evals, vLLM serving | Load-tested served model · justified quantization |
| **[4 · Scale · MLOps · Capstone](roadmap/month-4-scale-mlops-capstone.md)** | 13–18 | DDP, system design, capstone, buffer + final gate | nanoGPT from memory · capstone as an interview answer |

## How it works

- **~30 hours a week, Monday–Friday.** Weekends off; flexible daily timing, fixed weekly quota.
- **Every Friday is a prove-it** — rebuild the week's core from a blank file and write it up. Can't rebuild it → didn't learn it.
- **Monthly gates are no-notes checkpoints.** Don't advance until you pass.
- **Build first, then make it a project.** Each module graduates into a small, presentable repo — see the [module ledger](modules/README.md).

Full detail in **[docs/how-it-works.md](docs/how-it-works.md)**. What runs on a Mac vs. what needs a rented GPU is in **[docs/compute.md](docs/compute.md)**.

## Progress

Tracked two ways: the **[interactive tracker](https://chiruu12.github.io/ai-engineer-core/tracker/)** (check items off; it tells you whether you're on pace from your own start date) and the **[module ledger](modules/README.md)** (what's been built and shipped).

## Repository layout

```
ai-engineer-core/
├── roadmap/     # the curriculum, week by week (four month files)
├── modules/     # code — one directory per build + progress ledger
├── tracker/     # interactive tracker (index.html · styles.css · data.js · app.js)
├── docs/        # how-it-works · compute · resources
├── README.md    # you are here
└── LICENSE
```

## License

[MIT](LICENSE) — take the roadmap, fork it, make it yours.
