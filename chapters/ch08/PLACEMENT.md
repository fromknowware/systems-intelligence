# Chapter 8 — Diagram Placements

> **Audit 2026-10-19.** Line numbers and anchors below were refreshed against the current `chapter-08.md` (the first-draft placements dated 2026-04-09 had drifted after the Apr 17+ rewrites). The quoted tail is the authoritative locator; the line number is a convenience. Rows marked **HELD (class c)** illustrate a passage that no longer exists and are not placed until the author decides (see `_meta/diagram-audit.md`).

**Diagram source:** `chapters/ch08/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch08/text/chapter-08.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 8.N` (book convention)

## Placements (6 placed, 0 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **8.1** | `ch08-01-intelligence-explosion.png` | **200** | "...capability with values with coordination itself to create aligned superintelligence." | Closes the recursion argument. |
| **8.2** | `ch08-03-hassabis-agi.png` | **267** | "...but AGI coordinating with humans to create capabilities transcending both." | Closes Hassabis. |
| **8.3** | `ch08-02-bostrom-control.png` | **302** | "...aligned superintelligence. The future of consciousness depends on solving it." | Closes Bostrom. |
| **8.4** | `ch08-04-seti-coordination-signatures.png` | **471** | "...as coordination science: searching for intelligence by searching for coordination." | Closes Tarter. |
| **8.5** | `ch08-05-dark-forest.png` | **543** | "...It's whether intelligence can coordinate across the cosmic three-body problem." | Closes Liu Cixin. |
| **8.6** | `ch08-06-consciousness-coordination.png` | **686** | "...explaining mind from body, but understanding coordination that creates both." | Closes Nagel. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 8.1:

```markdown

---

![Figure 8.1 — The intelligence-explosion three-body: Human Design, AI Self-Improvement, and Recursive Enhancement as a mixed loop set. A B1 corrigibility brake and an R1 aligned-acceleration flywheel run on the same nodes with opposite sign paths; coordination — not capability — is what's recursively improved.](../diagrams/png/ch08-01-intelligence-explosion.png)

*Figure 8.1 — Intelligence explosion as three-body recursion. See `../diagrams/svg/ch08-01-intelligence-explosion.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 8.1** — Intelligence explosion as three-body recursion · line 200
2. **Figure 8.2** — Hassabis: AGI as coordination of capabilities · line 267
3. **Figure 8.3** — Bostrom: orthogonality and the control problem · line 302
4. **Figure 8.4** — SETI: searching for coordination signatures · line 471
5. **Figure 8.5** — Liu Cixin: dark forest as coordination failure · line 543
6. **Figure 8.6** — Consciousness as coordination (Chalmers, Seth, Nagel) · line 686

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **8.1 (b)** — Two loops over the same cycle (B1 and an R1 with the same one negative edge): impossible. R1 removed, B1 kept; summary reflects Tegmark; (svg unchanged).
- **8.3 (b)** — Loop B1 not a closed path (Existential Outcome had no edge to Value Learning); text proposes value learning, corrigibility and CEV after rejecting boxing, stunting and tripwires. Corrigibility node added; loop and unsupported summary removed; regenerated.
- **8.5 (b)** — Summary called the loop 'balancing' but R1 is reinforcing. Summary reworded; drawing unchanged.
- **8.6 (b)** — 'Attention Schema' (Bach) not in the text; Anil Seth (prediction error as the coordinating third body) is. Shipped SVG was also older than its JSON. Attention Schema -> Prediction Error; title and source now Chalmers, Seth, Nagel; regenerated.
