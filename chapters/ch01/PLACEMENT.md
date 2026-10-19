# Chapter 1 — Diagram Placements

**Diagram source:** `chapters/ch01/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch01/text/chapter-01.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 1.N` (book convention)

## Placements (6 placed, 2 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **1.1** | `01-facebook-three-body.png` | **33** | "...coordination space---is where emergence happens. Where the real intelligence lives." | Hero figure on the first explicit three-body statement; the R1 loop is the engagement ratchet Meadows describes later (reinforcing with no balancing partner). |
| **1.2** | `ch01-failure-triptych.png` | **85** | Section heading "## The Pattern Across Every Domain" | **HELD (class c).** Composite of 1.3-1.5 (2584px wide); has no graph of its own and is unreadable at page width. Recommend dropping: the three diagrams are placed individually. Held (not placed). (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **1.3** | `04-mars-orbiter-coordination-gap.png` | **95** | "...system becomes literally mindless despite being composed of brilliant minds." | End of the Mars Orbiter case paragraph. |
| **1.4** | `05-2008-systemic-correlation.png` | **105** | "...market, along with regulatory mechanisms to manage that systemic coordination." | End of the 2008 crisis paragraph, on 'systemic correlation... how risks coordinated'. |
| **1.5** | `06-737max-mcas-human-machine.png` | **113** | "...system, where perfect components coordinating poorly led to fatal outcomes." | End of the 737 MAX paragraph. |
| **1.6** | `07-hardware-software-knowware.png` | **163** | "...system's ability to learn, adapt, and make sense of context." | On the canonical three-layer definitions. |
| **1.7** | `10-universal-coordination-pattern.png` | **198** | "...elements learn from their interactions and refine their coordination mechanisms?)" | Closes the numbered four-step list. |
| **1.8** | `09-burning-man-three-elements.png` | **202** | "...something emerges that none could create alone." | **HELD (class c).** Burning Man and Larry Harvey were cut from ch01. Held. Proposed redraw: multipolar trap (Schmachtenberger) in _meta/diagram-proposals/replacements/1.8-multipolar-trap; or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 1.1:

```markdown

---

![Figure 1.1 — Facebook's three-body system: Human Behavior, Algorithmic Curation, and Emergent Contagion form a reinforcing loop. The latent "Coordination Wisdom" node (dashed) is the missing norm-set Facebook never built.](../diagrams/png/01-facebook-three-body.png)

*Figure 1.1 — Facebook's three-body system. See `../diagrams/svg/01-facebook-three-body.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 1.1** — Facebook three-body system · line 33
2. **Figure 1.3** — Mars Climate Orbiter coordination gap · line 95
3. **Figure 1.4** — 2008 Crisis: hidden systemic correlation · line 105
4. **Figure 1.5** — 737 MAX MCAS three-body failure · line 113
5. **Figure 1.6** — Hardware ↔ Software ↔ Knowware · line 163
6. **Figure 1.7** — Universal coordination pattern · line 198
- **Figure 1.2** — Failure triptych (Mars / 2008 / 737) · HELD (class c, not placed)
- **Figure 1.8** — Burning Man three-element coordination · HELD (class c, not placed)

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **1.1 (a)** — Nit: text names the third body 'social system dynamics'; node says Emergent Contagion. No change.
- **1.2 (c)** — Composite of 1.3-1.5 (2584px wide); has no graph of its own and is unreadable at page width. Recommend dropping: the three diagrams are placed individually. Held (not placed).
- **1.3 (a)** — Nit: latent could read Interface Standards. No change.
- **1.4 (b)** — Balancing loop 'Crisis correction' and the Cascade -> Models edge are not argued; the text says no corrective feedback existed. Edge and loop removed; summary corrected; SVG/PNG regenerated.
- **1.5 (a)** — Nit: latent 'Pilot Awareness' = the text's 'operational coordination'. No change.
- **1.6 (a)** — Optional: text says knowware arises from the interaction of hardware and software (no Hardware/Software -> Knowware edges drawn). No change.
- **1.7 (a)** — Adapt -> Identify closure is implied by 'adapt continuously'. No change.
- **1.8 (c)** — Burning Man and Larry Harvey were cut from ch01. Held. Proposed redraw: multipolar trap (Schmachtenberger) in _meta/diagram-proposals/replacements/1.8-multipolar-trap; or remove.
