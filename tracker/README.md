# Tracker

An interactive, pace-aware checklist for the [roadmap](../roadmap/). Check items off,
log hours per week, and it tells you whether you're ahead or behind — computed from
*your* start date. [← back to the hub](../README.md)

**[▶ Open it live](https://chiruu12.github.io/ai-engineer-core/tracker/)**

## Run it

- **Live:** the GitHub Pages link above.
- **Local:** open `index.html` in any browser — no build step, no dependencies.

## Files

| File | What it holds |
|------|---------------|
| `index.html` | markup + the page shell |
| `styles.css` | all styling — light + dark, theme-aware |
| `data.js` | the roadmap data: weeks, items, resource links — **edit here to change the curriculum** |
| `app.js` | the engine: rendering, pace math, persistence |

`data.js` is the single source of truth for what appears in the tracker; `app.js`
hard-codes no curriculum. The two load as ordinary scripts (`data.js` first), so the
data is just plain global constants the engine reads.

## Set your start date

The roadmap is 18 weeks from whatever day you begin. Set your start date at the top and
every week's dates — and the on-pace verdict — recompute for you. It defaults to the
reference start and persists in your browser.

## Your progress

Checkmarks, hours, and start date live in your browser (`localStorage`) — nothing is
uploaded. **Copy progress** exports a small JSON blob; **Import progress** loads one on
another device. To bake a synced state into the page itself, drop the blob's `done` and
`hours` into the `SYNCED` object at the top of [`data.js`](data.js) and commit.
