# Chapter 1 — Diagram Placements

**Diagram source:** `chapters/ch01/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch01/text/chapter-01.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 1.N` (book convention)

## Placements (9 placed)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **1.1** | `01-facebook-three-body.png` | **33** | "...coordination space---is where emergence happens. Where the real intelligence lives." | Hero figure on the first explicit three-body statement; the R1 loop is the engagement ratchet Meadows describes later (reinforcing with no balancing partner). |
| **1.3** | `04-mars-orbiter-coordination-gap.png` | **95** | "...system becomes literally mindless despite being composed of brilliant minds." | End of the Mars Orbiter case paragraph. |
| **1.4** | `05-2008-systemic-correlation.png` | **105** | "...market, along with regulatory mechanisms to manage that systemic coordination." | End of the 2008 crisis paragraph, on 'systemic correlation... how risks coordinated'. |
| **1.5** | `06-737max-mcas-human-machine.png` | **113** | "...system, where perfect components coordinating poorly led to fatal outcomes." | End of the 737 MAX paragraph. |
| **1.6** | `07-hardware-software-knowware.png` | **163** | "...system's ability to learn, adapt, and make sense of context." | On the canonical three-layer definitions. |
| **1.7** | `10-universal-coordination-pattern.png` | **198** | "...elements learn from their interactions and refine their coordination mechanisms?)" | Closes the numbered four-step list. |
| **1.9** | `11-multipolar-trap.png` | **204** | "...that make cooperation the rational choice for every actor simultaneously." | On Schmachtenberger's multipolar-trap paragraph. |
| **1.10** | `12-governance-gap.png` | **202** | "...between those curves is what Schmachtenberger calls the catastrophe corridor." | On the meta-crisis paragraph (capability exponential, governance linear). |
| **1.11** | `13-three-attractors.png` | **206** | "...software. The knowware---the coordination architecture governing their use---is catastrophically underdeveloped." | On the three-attractors paragraph. |

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
7. **Figure 1.10** — Meta-crisis: capability outruns governance · line 202
8. **Figure 1.9** — Multipolar trap: capability race without coordination · line 204
9. **Figure 1.11** — Three attractors: chaos, lock-in, coordination · line 206

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19, resolved 2026-10-20)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter. Every class c figure has been resolved (below); nothing is held. Full table: `_meta/diagram-audit.md`.

- **1.1 (a)** — Nit: text names the third body 'social system dynamics'; node says Emergent Contagion. No change.
- **1.3 (a)** — Nit: latent could read Interface Standards. No change.
- **1.4 (b)** — Balancing loop 'Crisis correction' and the Cascade -> Models edge are not argued; the text says no corrective feedback existed. Edge and loop removed; summary corrected; SVG/PNG regenerated.
- **1.5 (a)** — Nit: latent 'Pilot Awareness' = the text's 'operational coordination'. No change.
- **1.6 (a)** — Optional: text says knowware arises from the interaction of hardware and software (no Hardware/Software -> Knowware edges drawn). No change.
- **1.7 (a)** — Adapt -> Identify closure is implied by 'adapt continuously'. No change.
- **1.2 (resolved)** — Dropped: the composite of 1.3-1.5; its three diagrams are placed individually. The original drawing is in `diagrams/_cut/`.
- **1.8 (resolved)** — Replaced by 1.9 (multipolar trap). The original drawing is in `diagrams/_cut/`.
- **1.9 (new)** — Replacement for 1.8; drawn only from what the chapter says at this passage.
- **1.10 (new)** — Replacement for X.5; drawn only from what the chapter says at this passage.
- **1.11 (new)** — Replacement for X.6; drawn only from what the chapter says at this passage.
