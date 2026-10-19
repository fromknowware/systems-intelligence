# Chapter 2 — Causal Diagrams

**Chapter:** The Dawn of Systems Intelligence
**Status:** 🟢 5 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19)

Notes and Cut list refer to #03 Musk and #04 Game of Life, both held (class c). The cut 'Von Neumann bottleneck' and 'Shannon' ideas are now the proposed replacements for #04 (see `_meta/diagram-proposals`).

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 2.1 | a | None. | No change. |
| 2.2 | b | Latent 'Hidden Confounders' and the Causal Model -> Observation edge are not argued. The text: rung 1 two bodies, rung 2 adds causal context, rung 3 adds imagination. | Causal Context is now the latent; Imagination added; confounders removed; regenerated. |
| 2.3 | c | No Musk / first-principles / SpaceX passage in ch02. | Held. Proposed redraw: Oculus timing coordination (Luckey) in proposals/replacements/2.3-oculus-timing-coordination; or remove. |
| 2.4 | c | No Conway's Game of Life passage in ch02. | Held. Proposed redraw: Shannon sender-channel-receiver in proposals/replacements/2.4-shannon-channel-coordination (alt: Von Neumann constraint); or remove. |
| 2.5 | b | Node said 'Liquidity Placement' (text: Liquidity Provision); loop R1 was not a closed path (no edge back to Information Flow). | Renamed; invalid loop removed, balancing inventory-risk loop kept; regenerated. |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (5)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-netflix-recommendation-loop` | 4 | CLD · 2 reinforcing loops | "Viewing data influences production decisions, which creates new content…" |
| 02 | `02-pearl-ladder-causation` | 5 (1 latent) | DAG · no loops, 2 confounding | Pearl's ladder: association works with two bodies (data and patterns), intervention adds causal context, counterfactuals add the ability to imagine alternatives. Each rung adds a body to the coordination stack; the missing causal context is what current AI lacks. |
| 03 | `03-musk-first-principles` | 4 | CLD · 1 reinforcing loop | "First principles thinking reveals coordination opportunities that optimization can never see…" |
| 04 | `04-game-of-life-emergence` | 4 | CLD · 1 reinforcing loop | "Three simple rules, coordinating across the grid, create emergence…" |
| 05 | `05-hft-market-coordination` | 5 | BOTH · B1 Inventory risk control | HFT edge is not raw speed but coordination of information flow, price discovery and liquidity provision, with inventory risk acting as a balancing check on how much liquidity is provided. |

## Cut (from the initial 10-candidate spec)

- **Quantum supremacy** — too abstract, restates the three-body frame without adding structure
- **Von Neumann bottleneck** — same failure pattern as Pearl's Ladder; redundant
- **NSA anomaly detection** — same DAG shape as PayPal; the pair is one pattern
- **PayPal trust coordination** — simpler example of the NSA pattern; neither earns solo treatment
- **Catalytic cycles** — redundant with Game of Life as an "emergence from local rules" example

## Notes
- None of the Ch02 diagrams are drawn from the individual interview files (2.01–2.09); they're all from the main chapter text. The interviews elaborate but don't introduce distinct causal structures.
