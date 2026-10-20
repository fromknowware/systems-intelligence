# Chapter 7 — Diagram Placements

**Diagram source:** `chapters/ch07/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch07/text/chapter-07.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 7.N` (book convention)

## Placements (6 placed)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **7.1** | `ch07-01-generative-design-three-body.png` | **221** | "...from coordinating human judgment with AI exploration with manufacturing reality." | Closes the GM seat bracket case. |
| **7.2** | `ch07-02-oxman-silk-pavilion.png` | **357** | "...nature to create emergence that serves both humanity and nature." | At the Silk Pavilion paragraph. |
| **7.3** | `ch07-03-vqe-hybrid-loop.png` | **488** | "...coordinating with hybrid strategy to create capabilities neither has alone." | Closes VQE. |
| **7.5** | `ch07-05-mlops-production-gap.png` | **578** | "...and business reality, requiring appropriate tools, processes, culture, and metrics." | At Huyen's 70% paragraph. |
| **7.6** | `ch07-06-mlops-feedback-loop.png` | **560** | "...MLOps: Coordinate model with infrastructure with continuous learning (three-body)" | On the MLOps three-body definition. |
| **7.7** | `ch07-07-mapreduce-failure-handling.png` | **341** | "...utterly impossible with traditional approaches that optimized for perfect components." | On Dean's MapReduce failure-handling paragraph. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 7.1:

```markdown

---

![Figure 7.1 — Generative design three-body system: Engineer Goals, AI Generation, and Manufacturing Reality form a reinforcing loop that converges on the GM seat bracket (40% lighter, 8 parts → 1).](../diagrams/png/ch07-01-generative-design-three-body.png)

*Figure 7.1 — Generative design three-body loop. See `../diagrams/svg/ch07-01-generative-design-three-body.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 7.1** — Generative design three-body system · line 221
2. **Figure 7.7** — Dean's MapReduce: coordinate with failure · line 341
3. **Figure 7.2** — Silk Pavilion: material ecology coordination · line 357
4. **Figure 7.3** — VQE hybrid quantum-classical loop · line 488
5. **Figure 7.6** — MLOps: model, system, continuous improvement · line 560
6. **Figure 7.5** — MLOps production gap: missing coordination · line 578

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19, resolved 2026-10-20)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter. Every class c figure has been resolved (below); nothing is held. Full table: `_meta/diagram-audit.md`.

- **7.2 (a)** — Worm -> design feedback edge is implied ('coordinating with them'), not stated. No change.
- **7.4 (resolved)** — Replaced by 7.6 (MLOps feedback loop). The original drawing is in `diagrams/_cut/`.
- **7.6 (new)** — Replacement for 7.4; drawn only from what the chapter says at this passage.
- **7.7 (new)** — Arguments the text makes without a figure; drawn only from what the chapter says at this passage.
