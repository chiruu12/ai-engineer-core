# Month 1 — Foundations · PyTorch · DS core

**Weeks 1–4.** Own the fundamentals: automatic differentiation, the training loop,
and enough classical ML + statistics to not be fooled by a model. Everything is built
from scratch before any framework touches it.

[← Roadmap index](README.md) · Next: [Month 2 — Transformers & NLP →](month-2-transformers-nlp.md)

---

## Week 1 — Autograd + math bootcamp

Build a scalar autodiff engine by hand and get the calculus and linear algebra under
it into muscle memory. → code in [`modules/01-micrograd/`](../modules/01-micrograd/)

- `BUILD` — [micrograd](../modules/01-micrograd/) from scratch — [Zero to Hero #1](https://karpathy.ai/zero-to-hero.html) · [repo](https://github.com/karpathy/micrograd)
- `BUILD` — 3Blue1Brown [Essence of Linear Algebra](https://www.3blue1brown.com/topics/linear-algebra) + [Calculus](https://www.3blue1brown.com/topics/calculus) in full ([MML book](https://mml-book.github.io/) for gaps)
- `BUILD` — Baseline audit: attempt backprop + attention from memory, record exactly what fails
- `BUILD` — Set up an [Anki](https://apps.ankiweb.net/) deck for math/concepts, reviewed in dead time
- `COURSE` — [Anthropic Academy](https://anthropic.skilljar.com/): Claude with the API + Claude Code in Action
- `PAPER` — skim [Goodfellow ch. 6](https://www.deeplearningbook.org/) as reference
- `PROVE-IT` — rebuild micrograd from memory + blog explainer

## Week 2 — makemore 1–3 + PyTorch properly

Move from scalar autograd to real tensors, then rebuild the same models the idiomatic
PyTorch way.

- `BUILD` — [makemore](https://github.com/karpathy/makemore) #1 bigram · #2 MLP · #3 activations, gradients, BatchNorm
- `BUILD` — rebuild those models in idiomatic PyTorch: autograd, `nn.Module`, `Dataset`/`DataLoader` — [PyTorch tutorials](https://docs.pytorch.org/tutorials/)
- `COURSE` — Anthropic Academy: MCP intro + advanced
- `COURSE` — [Cohere LLMU](https://cohere.com/llmu) — fundamentals modules
- `PROVE-IT` — an MLP language model from memory + explainer

## Week 3 — makemore 4–5 + training dynamics

Understand what actually happens during training — by hand, then by intuition.

- `BUILD` — makemore #4 (becoming a backprop ninja — manual backprop, full network) · #5 (WaveNet)
- `BUILD` — optimizers from scratch: SGD → momentum → RMSprop → Adam → AdamW
- `BUILD` — init schemes, warmup/cosine LR schedules, gradient clipping, reading loss curves
- `COURSE` — finish the Anthropic Academy catalog (Bedrock + Vertex editions)
- `PAPER` — Karpathy, [A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/)
- `PROVE-IT` — manual backprop through a 2-layer MLP on paper + explainer

## Week 4 — DS + classical ML sprint

The data-science thread: classical models, honest evaluation, and statistics.

- `BUILD` — [Kaggle](https://www.kaggle.com/competitions) tabular #1 end-to-end (EDA → features → CV → XGBoost → error analysis), publish the notebook
- `BUILD` — Kaggle tabular #2 end-to-end, publish the notebook
- `BUILD` — stats essentials: distributions, hypothesis testing, bootstrap, A/B — [Practical Statistics](https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/) + [StatQuest](https://www.youtube.com/@statquest)
- `BUILD` — classical sweep: regularized linear/logistic, trees/ensembles, SVM intuition, k-means, PCA
- `BUILD` — from scratch: logistic regression + k-means
- `PROVE-IT` — Friday prove-it + explainer

---

## `GATE` — Month 1

No notes, cold:

- backprop **on paper**
- micrograd **from memory**
- explain bias/variance, BatchNorm, and Adam vs. SGD
- diagnose a divergent training run

---

Resources for this month are collected in [docs/resources.md](../docs/resources.md).
Check items off in the [tracker](../tracker/).
