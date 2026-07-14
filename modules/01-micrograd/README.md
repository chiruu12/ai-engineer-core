# 01 · micrograd

**Week 1 — autograd from scratch.** Build a tiny reverse-mode autodiff engine and a
small neural net on top of it, by hand. The goal is to *own* backprop, not to watch
it: a `Value` that tracks its parents and a local gradient, a topological backward
pass, and enough of an `nn` layer to train something.

→ Roadmap context: [Month 1, Week 1](../../roadmap/month-1-foundations.md#week-1--autograd--math-bootcamp) · [Modules index](../README.md) · [Hub](../../README.md)

## Resources

- Karpathy — [Zero to Hero #1: building micrograd](https://karpathy.ai/zero-to-hero.html)
- Reference (read *after* your own attempt): [karpathy/micrograd](https://github.com/karpathy/micrograd)
- Backup theory: [Goodfellow, Deep Learning ch. 6](https://www.deeplearningbook.org/)

More in [docs/resources.md](../../docs/resources.md).

## Done when

- [ ] `Value` supports `+ - * / **`, `tanh`/`relu`, and `.backward()` via a topo sort
- [ ] an MLP trains on a toy dataset and the loss actually goes down
- [ ] you can explain, out loud, why the backward pass visits nodes in reverse-topo order
- [ ] **Prove-it (Fri):** rebuild the engine from memory, blank file, no reference
- [ ] write-up published, and this module promoted to a project ([recipe](../README.md#how-a-module-becomes-a-project))

## Layout (fill in as you build)

```
01-micrograd/
├── engine.py      # Value + autograd
├── nn.py          # Neuron / Layer / MLP
├── train.py       # toy training loop
└── README.md      # you are here
```
