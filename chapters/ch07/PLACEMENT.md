# Chapter 7 — Diagram Placements

**Diagram source:** `chapters/ch07/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch07/text/chapter-07.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 7.N` (book convention)

## Placements (4 placed, 1 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **7.1** | `ch07-01-generative-design-three-body.png` | **221** | "...from coordinating human judgment with AI exploration with manufacturing reality." | Closes the GM seat bracket case. |
| **7.2** | `ch07-02-oxman-silk-pavilion.png` | **357** | "...nature to create emergence that serves both humanity and nature." | At the Silk Pavilion paragraph. |
| **7.3** | `ch07-03-vqe-hybrid-loop.png` | **488** | "...coordinating with hybrid strategy to create capabilities neither has alone." | Closes VQE. |
| **7.4** | `ch07-04-covariant-sim-to-real.png` | **593** | "...The future of AI robotics isn't perfect models deployed once, but adaptive systems that continuously improve through coordination." | **HELD (class c).** Abbeel / Covariant / sim-to-real cut from ch07. Held. Proposed redraw: MLOps feedback loop (§7.3) in proposals/replacements/7.4-mlops-feedback-loop; or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **7.5** | `ch07-05-mlops-production-gap.png` | **578** | "...and business reality, requiring appropriate tools, processes, culture, and metrics." | At Huyen's 70% paragraph. |

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
2. **Figure 7.2** — Silk Pavilion: material ecology coordination · line 357
3. **Figure 7.3** — VQE hybrid quantum-classical loop · line 488
4. **Figure 7.5** — MLOps production gap: missing coordination · line 578
- **Figure 7.4** — Sim-to-real closed-loop correction · HELD (class c, not placed)

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **7.2 (a)** — Worm -> design feedback edge is implied ('coordinating with them'), not stated. No change.
- **7.4 (c)** — Abbeel / Covariant / sim-to-real cut from ch07. Held. Proposed redraw: MLOps feedback loop (§7.3) in proposals/replacements/7.4-mlops-feedback-loop; or remove.
