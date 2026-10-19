# Chapter 3 — Diagram Placements

> **Audit 2026-10-19.** Line numbers and anchors below were refreshed against the current `chapter-03.md` (the first-draft placements dated 2026-04-09 had drifted after the Apr 17+ rewrites). The quoted tail is the authoritative locator; the line number is a convenience. Rows marked **HELD (class c)** illustrate a passage that no longer exists and are not placed until the author decides (see `_meta/diagram-audit.md`).

**Diagram source:** `chapters/ch03/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch03/text/chapter-03.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 3.N` (book convention)

## Placements (6 placed, 0 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **3.1** | `ch03-01-iaac-learning-building.png` | **30** | "...You build it by designing coordination architectures that enable emergence." | Closes the IAAC opener. |
| **3.2** | `ch03-02-constitutional-ai-rlaif.png` | **93** | "...capabilities with values through internalized alignment rather than external filtering." | At the generate-critique-revise paragraph. |
| **3.3** | `ch03-03-jepa-coordination.png` | **127** | "...and causal relationships—the fundamental coordination patterns that govern the world." | At the JEPA paragraph. |
| **3.4** | `ch03-04-alphago-three-networks.png` | **145** | "...searches. Intuition guides calculation. Calculation refines intuition. Evaluation focuses both." | At the coordination-architecture paragraph (policy narrows, MCTS explores, value evaluates). |
| **3.5** | `ch03-05-alphafold-coordination.png` | **163** | "...atomic-level accuracy for over 200 million proteins—essentially all known proteins." | At the sentence where attention coordinates both inputs. |
| **3.6** | `ch03-06-two-body-brittleness.png` | **235** | "...emergence. The third body transforms brittle interaction into robust coordination." | Closes the MYCIN / robots / supervised learning / bureaucracy cases. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 3.1:

```markdown

---

![Figure 3.1 — The IAAC learning building as a three-body system: Building Sensors, AI Learning System, and Human Occupant Behavior form two reinforcing loops that produce adaptive architectural intelligence.](../diagrams/png/ch03-01-iaac-learning-building.png)

*Figure 3.1 — IAAC Barcelona learning-building three-body system. See `../diagrams/svg/ch03-01-iaac-learning-building.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 3.1** — IAAC learning building three-body · line 30
2. **Figure 3.2** — Constitutional AI self-critique loop · line 93
3. **Figure 3.3** — JEPA self-supervised coordination · line 127
4. **Figure 3.4** — AlphaGo three-network coordination · line 145
5. **Figure 3.5** — AlphaFold three-body folding · line 163
6. **Figure 3.6** — Two-body brittleness failure mode · line 235

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **3.2 (b)** — Edge Critique Signal -> AI Capability (negative) contradicts the text ('capability and alignment grow together'); loop B1 therefore throttled capability. Critique now a shrinking gap: Aligned Response -(-)-> Critique Signal -> Aligned Response (B1); capability edge removed; regenerated.
- **3.3 (a)** — Nit: the text treats Prediction Task as the third body; the graph makes it a downstream outcome. No change.
- **3.5 (a)** — Nit: 'Evolutionary Signal' vs text 'Evolutionary Information'. No change.
