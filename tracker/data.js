// Roadmap data — the single source of truth for the tracker.
// Edit here to change the curriculum; app.js renders it.

// Progress state can be baked in here at deploy time; localStorage overlays on top.
const SYNCED = { done: [], hours: {} };

const MONTHS = {
  1: "Month 1 — DL fundamentals + PyTorch + DS core · Weeks 1–4",
  2: "Month 2 — Transformers & NLP core · Weeks 5–8",
  3: "Month 3 — Finetune, eval, serve (+ backend thread) · Weeks 9–12",
  4: "Month 4 — MLOps, capstone, buffer · Weeks 13–18"
};

// kinds: b=build c=course p=paper s=ship v=prove-it g=gate
const KIND = { b:"BUILD", c:"COURSE", p:"PAPER", s:"SHIP", v:"PROVE-IT", g:"GATE" };

const WEEKS = [
{ id:"w1", m:1, title:"Autograd + math bootcamp", items:[
  ["b",'Build micrograd from scratch — <a href="https://karpathy.ai/zero-to-hero.html" target="_blank" rel="noopener">Zero to Hero #1</a> · <a href="https://github.com/karpathy/micrograd" target="_blank" rel="noopener">micrograd repo</a>'],
  ["b",'3Blue1Brown <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">Essence of Linear Algebra</a> + <a href="https://www.3blue1brown.com/topics/calculus" target="_blank" rel="noopener">Essence of Calculus</a> in full (<a href="https://mml-book.github.io/" target="_blank" rel="noopener">MML book</a> for anything still fuzzy)'],
  ["b",'Baseline audit: attempt backprop + attention from memory, record exactly what fails'],
  ["b",'Set up <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener">Anki</a> deck — math/concepts, reviewed in dead time'],
  ["c",'<a href="https://anthropic.skilljar.com/" target="_blank" rel="noopener">Anthropic Academy</a> — Claude with the Anthropic API'],
  ["c",'Anthropic Academy — Claude Code in Action'],
  ["p",'Skim <a href="https://www.deeplearningbook.org/" target="_blank" rel="noopener">Goodfellow ch. 6</a> as reference'],
  ["v",'Fri: rebuild micrograd from memory + blog explainer']
]},
{ id:"w2", m:1, title:"makemore 1–3 + PyTorch properly", items:[
  ["b",'<a href="https://github.com/karpathy/makemore" target="_blank" rel="noopener">makemore</a> #1 — bigram language model'],
  ["b",'makemore #2 — MLP'],
  ["b",'makemore #3 — activations, gradients, BatchNorm'],
  ["b",'Rebuild the same models in idiomatic PyTorch: autograd, nn.Module, Dataset/DataLoader — <a href="https://docs.pytorch.org/tutorials/" target="_blank" rel="noopener">PyTorch tutorials</a>'],
  ["c",'Anthropic Academy — MCP Intro + Advanced'],
  ["c",'<a href="https://cohere.com/llmu" target="_blank" rel="noopener">Cohere LLMU</a> — fundamentals modules'],
  ["v",'Fri: MLP language model from memory + explainer']
]},
{ id:"w3", m:1, title:"makemore 4–5 + training dynamics", items:[
  ["b",'makemore #4 — becoming a backprop ninja (manual backprop, full network)'],
  ["b",'makemore #5 — WaveNet'],
  ["b",'Optimizers from scratch: SGD → momentum → RMSprop → Adam → AdamW'],
  ["b",'Init schemes, warmup/cosine LR schedules, gradient clipping, reading loss curves'],
  ["c",'Finish Anthropic Academy catalog (Bedrock + Vertex editions)'],
  ["p",'Karpathy — <a href="https://karpathy.github.io/2019/04/25/recipe/" target="_blank" rel="noopener">A Recipe for Training Neural Networks</a>'],
  ["v",'Fri: manual backprop through a 2-layer MLP on paper + explainer']
]},
{ id:"w4", m:1, title:"DS + classical ML sprint", items:[
  ["b",'<a href="https://www.kaggle.com/competitions" target="_blank" rel="noopener">Kaggle</a> tabular #1 end-to-end: EDA → features → CV → XGBoost → error analysis — publish notebook'],
  ["b",'Kaggle tabular #2 end-to-end — publish notebook'],
  ["b",'Stats essentials: distributions, hypothesis testing, bootstrap, A/B — <a href="https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/" target="_blank" rel="noopener">Practical Statistics</a> + <a href="https://www.youtube.com/@statquest" target="_blank" rel="noopener">StatQuest</a>'],
  ["b",'Classical sweep: regularized linear/logistic, trees/ensembles, SVM intuition, k-means, PCA'],
  ["b",'From scratch: logistic regression + k-means'],
  ["v",'Fri prove-it + explainer'],
  ["g",'MONTH 1 GATE: backprop on paper · micrograd from memory · explain bias/variance, BatchNorm, Adam vs SGD · diagnose a divergent run — no notes']
]},
{ id:"w5", m:2, title:"GPT from scratch", items:[
  ["b",'<a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank" rel="noopener">Let&rsquo;s build GPT</a> → <a href="https://github.com/karpathy/nanoGPT" target="_blank" rel="noopener">nanoGPT</a>, typed not cloned'],
  ["b",'Set up <a href="https://wandb.ai/site" target="_blank" rel="noopener">W&amp;B</a> — every training run from here on gets logged'],
  ["p",'<a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">Attention Is All You Need</a> + <a href="https://jalammar.github.io/illustrated-transformer/" target="_blank" rel="noopener">The Illustrated Transformer</a>'],
  ["b",'Start <a href="https://github.com/rasbt/LLMs-from-scratch" target="_blank" rel="noopener">Raschka — LLMs from Scratch</a> (ch. 1–3) as companion'],
  ["c",'<a href="https://web.stanford.edu/class/cs224n/" target="_blank" rel="noopener">CS224n</a> backfill: word vectors → neural nets lectures'],
  ["v",'Fri: attention block from memory + explainer']
]},
{ id:"w6", m:2, title:"Tokenization + generation", items:[
  ["b",'<a href="https://github.com/karpathy/minbpe" target="_blank" rel="noopener">minbpe</a> — BPE from scratch, then HF tokenizers'],
  ["b",'Positional encodings: learned vs sinusoidal vs RoPE'],
  ["p",'<a href="https://arxiv.org/abs/2104.09864" target="_blank" rel="noopener">RoFormer (RoPE)</a> + <a href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf" target="_blank" rel="noopener">GPT-2 paper</a>'],
  ["b",'Sampling: temperature, top-k, top-p, beam; perplexity as an eval'],
  ["b",'Train nanoGPT on a custom corpus (W&amp;B-logged)'],
  ["c",'CS224n — attention + transformer lectures'],
  ["v",'Fri: BPE from memory + explainer']
]},
{ id:"w7", m:2, title:"HF ecosystem + embeddings", items:[
  ["b",'datasets, transformers, Trainer, accelerate — <a href="https://huggingface.co/learn/nlp-course" target="_blank" rel="noopener">HF NLP course</a> chapters'],
  ["b",'Finetune a BERT-class encoder on a real task: honest splits, baselines, confusion analysis'],
  ["b",'Embeddings at depth: <a href="https://sbert.net/" target="_blank" rel="noopener">sentence-transformers</a>, contrastive training, hard negatives'],
  ["p",'<a href="https://arxiv.org/abs/1810.04805" target="_blank" rel="noopener">BERT</a> + <a href="https://arxiv.org/abs/2111.09543" target="_blank" rel="noopener">DeBERTa-v3</a>'],
  ["c",'Cohere LLMU — embeddings + semantic search modules'],
  ["v",'Fri: explain contrastive training + the finetune pipeline from memory']
]},
{ id:"w8", m:2, title:"Milestone — injection classifier", items:[
  ["b",'Curate prompt-injection datasets from the Hub (<a href="https://huggingface.co/datasets/deepset/prompt-injections" target="_blank" rel="noopener">deepset</a> and others — <a href="https://huggingface.co/datasets?search=prompt+injection" target="_blank" rel="noopener">browse the set</a>)'],
  ["b",'Train a DeBERTa-v3-small injection classifier — beat/match <a href="https://huggingface.co/protectai/deberta-v3-base-prompt-injection-v2" target="_blank" rel="noopener">ProtectAI&rsquo;s 94.28%</a>'],
  ["b",'Calibration + adversarial/robustness eval + system-prompt false-positive analysis'],
  ["s",'Model card → your HF Hub + blog write-up'],
  ["g",'MONTH 2 GATE: multi-head attention from memory in &lt;30 min · BPE from memory · explain RoPE, encoder-vs-decoder, classifier failure modes']
]},
{ id:"w9", m:3, title:"LoRA / QLoRA", items:[
  ["p",'<a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener">LoRA</a> + <a href="https://arxiv.org/abs/2305.14314" target="_blank" rel="noopener">QLoRA</a> — derive the math'],
  ["b",'Implement a LoRA layer from scratch'],
  ["b",'<a href="https://github.com/huggingface/peft" target="_blank" rel="noopener">PEFT</a> finetune a 1–8B model — <a href="https://github.com/ml-explore/mlx-lm" target="_blank" rel="noopener">MLX-LM</a> locally, rented GPU for bitsandbytes'],
  ["b",'Quantization theory: GPTQ vs AWQ vs GGUF vs bitsandbytes — what degrades and when'],
  ["c",'<a href="https://github.com/huggingface/smol-course" target="_blank" rel="noopener">HF smol-course</a>'],
  ["v",'Fri: LoRA math on a whiteboard + explainer']
]},
{ id:"w10", m:3, title:"Alignment: SFT → DPO", items:[
  ["b",'SFT → DPO via <a href="https://github.com/huggingface/alignment-handbook" target="_blank" rel="noopener">alignment-handbook</a> / <a href="https://github.com/huggingface/trl" target="_blank" rel="noopener">TRL</a> on the week-9 model (rented GPU)'],
  ["p",'<a href="https://arxiv.org/abs/2203.02155" target="_blank" rel="noopener">InstructGPT</a> + <a href="https://arxiv.org/abs/2305.18290" target="_blank" rel="noopener">DPO</a>'],
  ["p",'<a href="https://arxiv.org/abs/2203.15556" target="_blank" rel="noopener">Chinchilla scaling laws</a>'],
  ["b",'Synthetic data generation basics'],
  ["b",'Backend: Postgres for real — indexes, EXPLAIN, transactions, migrations (backend project)'],
  ["v",'Fri: defend SFT vs RLHF vs DPO cold + explainer']
]},
{ id:"w11", m:3, title:"Evals — the differentiator", items:[
  ["b",'<a href="https://github.com/EleutherAI/lm-evaluation-harness" target="_blank" rel="noopener">lm-evaluation-harness</a> on the finetunes'],
  ["b",'Custom RAG eval harness: recall@k, MRR, nDCG + answer grading'],
  ["p",'<a href="https://arxiv.org/abs/2306.05685" target="_blank" rel="noopener">LLM-as-judge (MT-Bench)</a> + its pitfalls'],
  ["b",'W&amp;B eval dashboards over every run since W5'],
  ["b",'Backend: Redis caching + rate limiting · <a href="https://dataintensive.net/" target="_blank" rel="noopener">DDIA</a> ch. 1–3'],
  ["v",'Fri: design an eval for an unseen task, out loud + explainer']
]},
{ id:"w12", m:3, title:"Serving: vLLM + gateway", items:[
  ["p",'<a href="https://arxiv.org/abs/2309.06180" target="_blank" rel="noopener">vLLM / PagedAttention</a>'],
  ["b",'<a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener">vLLM</a> deep dive on a rented Linux GPU: continuous batching, KV-cache math (+ GQA/MQA), prefill vs decode, speculative decoding'],
  ["b",'Serve the finetuned+quantized model behind a FastAPI gateway; <a href="https://locust.io/" target="_blank" rel="noopener">locust</a> load test; publish numbers'],
  ["b",'Head-to-head: same model on vLLM (GPU box) vs MLX (Mac)'],
  ["b",'Backend: background jobs + queues (backend project)'],
  ["g",'MONTH 3 GATE: LoRA math · quantization choice justified with numbers · load-test report published · backend service M1 shipped']
]},
{ id:"w13", m:4, title:"Training at scale", items:[
  ["b",'Mixed precision, gradient accumulation, gradient checkpointing'],
  ["b",'DDP hands-on — 2×GPU box for one Friday: <a href="https://www.youtube.com/watch?v=l8pRSuU81PU" target="_blank" rel="noopener">Let&rsquo;s reproduce GPT-2</a> + <a href="https://docs.pytorch.org/tutorials/intermediate/ddp_tutorial.html" target="_blank" rel="noopener">DDP tutorial</a>'],
  ["b",'torch.compile awareness + W&amp;B sweeps'],
  ["b",'Streaming data pipelines for large corpora'],
  ["b",'Backend: observability — structured logs, metrics, tracing'],
  ["v",'Fri: explain DDP + mixed precision cold + explainer']
]},
{ id:"w14", m:4, title:"ML system design + MLOps", items:[
  ["p",'<a href="https://huyenchip.com/books/" target="_blank" rel="noopener">Chip Huyen</a> — Designing ML Systems + AI Engineering, selective'],
  ["c",'<a href="https://madewithml.com/" target="_blank" rel="noopener">Made With ML</a> — MLOps track'],
  ["b",'CI for models, model registries, drift + monitoring concepts'],
  ["b",'4 design questions out loud: search ranker, moderation pipeline, recsys, metered LLM proxy'],
  ["b",'Backend: auth + metered billing correctness (backend project) · DDIA ch. 5 + 7'],
  ["v",'Fri: one full ML system design answer, recorded']
]},
{ id:"w15", m:4, title:"Capstone I — classifier v1", items:[
  ["b",'Two-stage system: regex + trained classifier, integrated'],
  ["b",'ONNX / CoreML export for on-device'],
  ["b",'Full eval suite vs <a href="https://github.com/protectai/llm-guard" target="_blank" rel="noopener">LLM Guard</a> / ProtectAI / Lakera'],
  ["p",'<a href="https://arxiv.org/abs/2407.21783" target="_blank" rel="noopener">Llama 3 tech report</a> (spans two weeks)']
]},
{ id:"w16", m:4, title:"Capstone II — ship it", items:[
  ["b",'Served API with monitoring'],
  ["s",'Model + dataset cards on HF Hub'],
  ["s",'Benchmark blog post'],
  ["p",'<a href="https://arxiv.org/abs/2307.03109" target="_blank" rel="noopener">Evals survey</a>'],
  ["v",'Fri: walk the capstone end-to-end as a system-design answer']
]},
{ id:"w17", m:4, title:"Buffer (deliberate slack)", items:[
  ["b",'Absorb overruns, hackathon weeks, job crunch — quota still 30h'],
  ["b",'If on schedule: a stretch project + capstone polish']
]},
{ id:"w18", m:4, title:"Consolidation + final gate", items:[
  ["b",'Re-run the Week 1 baseline audit — diff against the start'],
  ["b",'Anki sweep of all 4 months'],
  ["s",'Polish pinned repos; update resume + profile with sprint artifacts'],
  ["s",'Publish capstone write-up; plan next quarter'],
  ["g",'FINAL GATE: nanoGPT-level transformer from memory · capstone as an interview answer · every month has a live public artifact']
]}
];
