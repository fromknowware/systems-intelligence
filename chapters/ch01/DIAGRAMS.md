# Chapter 1 — Causal Diagrams

**Chapter:** The Coordination Intelligence Revolution
**Status:** 🟢 7 diagrams authored as arc_engine graph JSONs (cut from initial 12)

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

The Cut list and Notes still describe the 2026-04-09 drawings; Burning Man (#09) and the triptych are held (class c).

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 1.1 | a | Nit: text names the third body 'social system dynamics'; node says Emergent Contagion. | No change. |
| 1.2 | c, resolved | Composite of 1.3-1.5 (2584px wide); has no graph of its own and is unreadable at page width. | Dropped: the composite of 1.3-1.5; its three diagrams are placed individually. Original in `diagrams/_cut/`. |
| 1.3 | a | Nit: latent could read Interface Standards. | No change. |
| 1.4 | b | Balancing loop 'Crisis correction' and the Cascade -> Models edge are not argued; the text says no corrective feedback existed. | Edge and loop removed; summary corrected; SVG/PNG regenerated. |
| 1.5 | a | Nit: latent 'Pilot Awareness' = the text's 'operational coordination'. | No change. |
| 1.6 | a | Optional: text says knowware arises from the interaction of hardware and software (no Hardware/Software -> Knowware edges drawn). | No change. |
| 1.7 | a | Adapt -> Identify closure is implied by 'adapt continuously'. | No change. |
| 1.8 | c, resolved | Burning Man and Larry Harvey were cut from ch01. | Replaced by 1.9 (multipolar trap). Original in `diagrams/_cut/`. |
| 1.9 | new | — | Placed 2026-10-20 (11-multipolar-trap). |
| 1.10 | new | — | Placed 2026-10-20 (12-governance-gap). |
| 1.11 | new | — | Placed 2026-10-20 (13-three-attractors). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (14)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-facebook-three-body` | 4 (1 latent) | CLD · 1 reinforcing loop + 2 confounding arcs | "Human behavior ↔ Algorithm optimization ↔ Social system dynamics" — the chapter's opening case |
| 04 | `04-mars-orbiter-coordination-gap` | 5 (1 latent) | DAG · no loops, 1 confounding arc | Mars Climate Orbiter — competent components, missing coordination interface |
| 05 | `05-2008-systemic-correlation` | 6 (1 latent) | BOTH · no loops, 1 confounding | Individual risk models plus diversification looked safe, but uniform models and interconnected products created hidden systemic correlation that cascaded into collapse. The missing third element was monitoring how risks coordinated across the whole market. |
| 06 | `06-737max-mcas-human-machine` | 6 (1 latent) | DAG · no loops, 1 confounding arc | 737 MAX — MCAS software, operational stress, pilot override, missing awareness |
| 07 | `07-hardware-software-knowware` | 4 | CLD · 1 reinforcing loop | The canonical book schema — the **foundational three-body pattern** every other diagram specializes |
| 10 | `10-universal-coordination-pattern` | 4 | CLD · 1 reinforcing loop | The operational template: Identify → Design → Enable → Adapt, cycling back |

**Triptych (composite figure):** `ch01-failure-triptych.png` — Mars + 2008 + 737 MAX side-by-side, introduced at the top of §"The Pattern Across Every Domain" before each case is examined individually. Not a new graph JSON; rendered from the three underlying PNGs (normalized to 600px height with labels).

## Cut from the original 12

During the first-pass review, we authored 12 diagrams for Ch01. Revisiting with fresh eyes, five didn't earn their place:

| # | Cut diagram | Why |
|---|---|---|
| 02 | `pask-conversation-loop` | Theoretically beautiful but Pask/Pangaro gets only one paragraph in the chapter. Moved to `_cut/` for possible revival in Ch02 or as a standalone reference. |
| 03 | `binary-vs-ternary` | A conceptual contrast, not a causal system. Forcing it into arc_engine lost the point. Better handled as an inline side-by-side graphic outside the arc_engine pipeline. |
| 08 | `heros-journey-three-act` | Campbell reference is brief — one sentence. A full CLD was more than the claim needed. |
| 11 | `three-body-vs-two-body-physics` | The abstract version of every other diagram in the chapter — redundant with #07, #09, and the entire rest of the book. |
| 12 | `ternary-applications-grid` | Only AI integration would have belonged — the other four were a quick list, not central to the chapter's argument. |
| 11 | `11-multipolar-trap` | 5 (1 latent) | BOTH · R1 Multipolar trap, 2 confounding | Every lab, government and company makes a locally rational choice: if we slow down, a competitor will not. Each choice raises the pressure on the others, and the collective result is capability racing ahead of safety and governance. Individual virtue cannot beat these incentives; only a coordination architecture that makes cooperation rational for every actor can. |
| 12 | `12-governance-gap` | 5 | CLD · no loops | Capabilities grow exponentially; governance evolves linearly. The space between the curves is the catastrophe corridor. A new coordination architecture capable of governing exponential technology is what narrows it. |
| 13 | `13-three-attractors` | 5 | CLD · no loops | On the current trajectory the capability race ends in one of two catastrophic attractors: multipolar chaos, where the arms race produces civilisational harm, or totalitarian lock-in, where one actor wins and establishes permanent control. The third attractor is a coordination architecture that governs exponential technology while preserving human agency and diversity. |

Cut JSONs are archived in `chapters/ch01/diagrams/_cut/` for possible future revival.

## Why the re-cut mattered

The first pass produced 12 diagrams, most of them fitting the same 5-node template (3 drivers + 1 mediator + 1 outcome). It looked comprehensive but flattened the variety of the underlying systems. The re-cut revealed that each diagram wants its **natural shape**:

- Some systems are genuine **4-node three-body loops** (Facebook with latent, HW/SW/Knowware, Burning Man, Universal pattern)
- Some are **5–6 node failure decompositions** (Mars with Thrust Calculation + latent Unit Translation, 2008 Crisis with all the cascade stages)
- Some of the original 12 weren't causal diagrams at all — they were comparison tables, conceptual frames, or process flows trying to fit a CLD template

The ruthless cut + natural-size rewrite produced a tighter set where **every diagram earns its place and every shape matches its claim**. The lesson propagated to Ch02–ChX + Appendix A: each later chapter was ruthlessly cut from the start.

## Notes

- **#07 `hardware-software-knowware`** is the canonical book schema. It appears as the book's root three-body diagram in Ch01 and is specialized by every subsequent chapter's case-study diagrams. It shares the same causal shape as **Appendix A's Figure A.1** (the formal `C(A, B, Θ) → E` operator) — in fact #07 is the concrete naming of A.1's abstract triple.
- **The "missing third element" pattern** recurs across #01, #04, #05, #06 — all four have a latent node representing the coordination wisdom / translation layer / monitoring / pilot awareness that *would have* prevented the failure. This visual echo is intentional: the chapter's core claim is that two-body thinking always leaves a latent third body unaccounted for.
- **The "success case" pattern** in #07, #09, #10 uses the same circular three-body shape *without* the latent confounder — demonstrating what the coordination layer looks like when it's present and working.
- **Placements for all 8 figures** (including the triptych) are in `PLACEMENT.md`. Figure numbering runs 1.1 through 1.8, matching reading order rather than slug order.

## Open questions

1. Should `02-pask-conversation-loop` be revived as an inline sidebar in the one paragraph where Pangaro is introduced? It's a beautiful recursive loop and the graph JSON still exists in `_cut/`.
2. Should the chapter's "ternary applications" list (meetings, product, productivity, problem-solving, AI) get a single consolidated diagram that shows the pattern in five domains at once?
3. The triptych (Figure 1.2) is currently a 2584×730 composite PNG. For print layouts, a tighter three-panel side-by-side at smaller sizes may be better. Worth re-rendering at a smaller height (400px?) and comparing.
