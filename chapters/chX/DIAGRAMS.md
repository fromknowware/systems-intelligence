# Chapter X — Causal Diagrams

**Chapter:** The Grand Coordination — Synthesis and Transcendence (capstone)
**Status:** 6 diagrams authored as arc_engine graph JSONs

This is the book's capstone, so the diagram count runs slightly above the 3–5 ceiling we hold to in earlier chapters. Each diagram had to carry a structure that was *not* already rendered in Ch01–Ch09.

## Audit against the current text (2026-10-19)

The chapter was rewritten on 2026-04-17; none of #02-#06's subjects (Kurzweil, Blueprint, Ostrom, Verdon, AGI Prepper) appears in it. Notes and Open questions below describe the held drawings.

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| X.1 | b | Summary said knowware is 'an emergent third'; text says it is not a third thing added but the awareness of the relationship. Node 'Coordination Layer'. | Summary reworded; node renamed Conscious Coordination; regenerated. |
| X.2 | c | No Kurzweil in the rewritten capstone. The graph matches the Kurzweil paragraph in ch03 ('three bodies of transcendence'). | Held. Proposal: re-home to ch03 (no redraw needed), or redraw around chX 'knowware in action', or remove. |
| X.3 | c | No Blueprint / Bryan Johnson in chX. | Held. Proposed redraw: the capstone's worked example (context panel) in proposals/replacements/X.3-worked-example-context-panel; or remove. |
| X.4 | c | No Ostrom / commons in chX. (Existing graph also has a parity error: R1 declares m=2, 0 negatives.) | Held. Proposed redraw: the book's three triads in proposals/replacements/X.4-three-triads; or remove. |
| X.5 | c | No Verdon in chX; the graph matches Schmachtenberger's meta-crisis passage in ch01. | Held. Proposal: re-home to ch01 with renames (proposals/replacements/X.5-governance-gap-ch01), or remove. |
| X.6 | c | No AGI-prepper scenarios in chX. (Existing graph also has an unclosed B1 loop.) | Held. Proposal: re-home to ch01 as the three attractors (proposals/replacements/X.6-three-attractors-ch01) or to ch08 (Tegmark scenarios), or remove. |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `chX-01-three-ware-resolution` | 4 | CLD · R1 Knowware self-lift, R2 Pattern evolution | Hardware (substrate) and software (pattern) coordinate consciously; what emerges is knowware, not a third thing added to the first two but the awareness that arises when hardware running software reflects on its own coordination. That awareness feeds back into both. |
| 02 | `chX-02-kurzweil-singularity-merger` | 5 | CLD · 2 reinforcing loops | 10.01 Kurzweil — biology + AI + neural interface → hybrid consciousness + recursive self-improvement |
| 03 | `chX-03-blueprint-optimization-loop` | 5 | CLD · 1 reinforcing loop | 10.02 Bryan Johnson — biology→biomarkers→AI→intervention→biology, biological age as outcome |
| 04 | `chX-04-commons-governance-triad` | 4 | CLD · B1 tragedy + R1 stewardship | 10.06 Commons builder / Ostrom — governance as the third body that converts tragedy into abundance |
| 05 | `chX-05-acceleration-gap` | 5 | CLD · 1 balancing loop | 10.08 Verdon — tech vs human adaptation gap, coordination bridge as the closer |
| 06 | `chX-06-agi-alignment-scenarios` | 6 (1 latent) | DAG + CLD · B1 alignment-vs-concentration | 10.09 AGI Prepper — capability / readiness / alignment determining the extinction / tyranny / flourishing fork |

## Cut (candidates that didn't earn a slot)

- **Mikey Siegel consciousness-hacking triad (10.03)** — same shape as the Blueprint loop (practice → tech feedback → experience → practice). One biological-feedback loop is enough for the capstone; Blueprint is the more vivid instance.
- **Fei-Fei Li human-centered-AI triad (10.04)** — capability / values / impact. Structurally identical to Ch06's ternary-ethics diagram and Ch01's three-body frame. Restates rather than adds.
- **Clément Delangue open-source AI triad (10.05)** — models / community / platform. Same shape as the commons triad in #04, which is the stronger Ostrom-rooted version.
- **Joscha Bach computational-consciousness triad (10.07)** — substrate / patterns / integration. This *is* the Three Ware frame (#01) at a different scale; rendering it twice would double-count.
- **Knowware Manifesto "binary is confinary" (10.01 second file)** — rhetorical, not a causal structure. The binary→ternary claim is already the meta-frame behind every diagram in the book.
- **Daily coordination practice (morning / day / evening)** — a behavioral checklist, not a causal graph.
- **Nine-chapter fractal diagram** — tempting, but it would just be nine copies of the three-body node arrangement. Adds visual weight, not new structure.

## Notes

- **#02 (Kurzweil)** and **#05 (Verdon)** are structurally complementary: #02 is the optimistic reinforcing-spiral view of merger; #05 is the balancing-loop view of the same phenomenon seen as a closing gap. Together they cover the e/acc vs. safety framing without a separate diagram.
- **#04 (Commons)** is the chapter's only mixed R+B diagram and the only one where the *same* edge set produces a tragedy loop if n3 is removed. It's the cleanest counterfactual argument in the chapter.
- **#06 (AGI)** is the only `fmt: "both"` diagram in ChX and the only one with a latent confounder. The latent (Coordination Wisdom) is deliberately the same conceptual node used in Ch01's `01-facebook-three-body` — the book ends where it began, with the missing third body finally named.

## Open questions

- Should #01 (Three Ware) render at a larger canvas than the default 800×600 given its role as the thesis diagram? The arc_engine default works, but a 1000×700 hero treatment might be warranted in print.
- #02 and #05 cover Kurzweil/Verdon — Fei-Fei Li and Delangue were cut. If reviewers feel the "human values" thread is under-represented visually, `chX-05-acceleration-gap` could be re-scoped to put values on an explicit axis, or a 7th diagram could be added for human-centered AI. For now I've kept the cut clean.
- The `10.01_Knowware_Manifesto` file reads like a preface/coda rather than an interview — worth confirming with the author whether it belongs in `interviews/` or should move to a ChX-specific `supplements/` folder.
