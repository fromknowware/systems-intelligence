# Chapter X — Causal Diagrams

**Chapter:** The Grand Coordination — Synthesis and Transcendence (capstone)
**Status:** 3 diagrams authored as arc_engine graph JSONs

This is the book's capstone, so the diagram count runs slightly above the 3–5 ceiling we hold to in earlier chapters. Each diagram had to carry a structure that was *not* already rendered in Ch01–Ch09.

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

The chapter was rewritten on 2026-04-17; none of #02-#06's subjects (Kurzweil, Blueprint, Ostrom, Verdon, AGI Prepper) appears in it. Notes and Open questions below describe the held drawings.

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| X.1 | b | Summary said knowware is 'an emergent third'; text says it is not a third thing added but the awareness of the relationship. Node 'Coordination Layer'. | Summary reworded; node renamed Conscious Coordination; regenerated. |
| X.2 | c, resolved | No Kurzweil in the rewritten capstone. The graph matches the Kurzweil paragraph in ch03 ('three bodies of transcendence'). | Re-homed to ch03 as 3.8 (redrawn: Neural Integration, Transcendence, latent Coordination Architecture). Original in `diagrams/_cut/`. |
| X.3 | c, resolved | No Blueprint / Bryan Johnson in chX. | Replaced by X.7 (the worked example). Original in `diagrams/_cut/`. |
| X.4 | c, resolved | No Ostrom / commons in chX. (Existing graph also has a parity error: R1 declares m=2, 0 negatives.) | Replaced by X.8 (the book as a coordination system). Original in `diagrams/_cut/`. |
| X.5 | c, resolved | No Verdon in chX; the graph matches Schmachtenberger's meta-crisis passage in ch01. | Re-homed to ch01 as 1.10 (meta-crisis). Original in `diagrams/_cut/`. |
| X.6 | c, resolved | No AGI-prepper scenarios in chX. (Existing graph also has an unclosed B1 loop.) | Re-homed to ch01 as 1.11 (three attractors). Original in `diagrams/_cut/`. |
| X.7 | new | — | Placed 2026-10-20 (chX-07-worked-example-context-panel). |
| X.8 | new | — | Placed 2026-10-20 (chX-08-three-triads). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (3)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `chX-01-three-ware-resolution` | 4 | CLD · R1 Knowware self-lift, R2 Pattern evolution | Hardware (substrate) and software (pattern) coordinate consciously; what emerges is knowware, not a third thing added to the first two but the awareness that arises when hardware running software reflects on its own coordination. That awareness feeds back into both. |
| 07 | `chX-07-worked-example-context-panel` | 5 (1 latent) | BOTH · no loops, 2 confounding | An excellent AI tool stalled at 11% adoption: the tool spoke, the user decided, and context was invisible to both. A context panel showing what information was available, what was missing and how confident the tool was made the third body legible. Adoption on that team reached 74% in three weeks; nothing about the tool or the users changed. |
| 08 | `chX-08-three-triads` | 4 | CLD · no loops | Foundation provides the physics, Application provides the proof, Transcendence provides the stakes. Remove any triad and the book collapses; together they produce a way of seeing that changes how you act, which is the claim the book itself makes about coordination. |

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
