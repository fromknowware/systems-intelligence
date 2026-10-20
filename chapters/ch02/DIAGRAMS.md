# Chapter 2 — Causal Diagrams

**Chapter:** The Dawn of Systems Intelligence
**Status:** 🟢 5 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

Notes and Cut list refer to #03 Musk and #04 Game of Life, both held (class c). The cut 'Von Neumann bottleneck' and 'Shannon' ideas are now the proposed replacements for #04 (see `_meta/diagram-proposals`).

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 2.1 | a | None. | No change. |
| 2.2 | b | Latent 'Hidden Confounders' and the Causal Model -> Observation edge are not argued. The text: rung 1 two bodies, rung 2 adds causal context, rung 3 adds imagination. | Causal Context is now the latent; Imagination added; confounders removed; regenerated. |
| 2.3 | c, resolved | No Musk / first-principles / SpaceX passage in ch02. | Replaced by 2.6 (Oculus timing coordination). Original in `diagrams/_cut/`. |
| 2.4 | c, resolved | No Conway's Game of Life passage in ch02. | Replaced by 2.7 (Shannon sender, channel, receiver). Original in `diagrams/_cut/`. |
| 2.5 | b | Node said 'Liquidity Placement' (text: Liquidity Provision); loop R1 was not a closed path (no edge back to Information Flow). | Renamed; invalid loop removed, balancing inventory-risk loop kept; regenerated. |
| 2.6 | new | — | Placed 2026-10-20 (ch02-06-oculus-timing-coordination). |
| 2.7 | new | — | Placed 2026-10-20 (ch02-07-shannon-channel-coordination). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (5)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-netflix-recommendation-loop` | 4 | CLD · 2 reinforcing loops | "Viewing data influences production decisions, which creates new content…" |
| 02 | `02-pearl-ladder-causation` | 5 (1 latent) | DAG · no loops, 2 confounding | Pearl's ladder: association works with two bodies (data and patterns), intervention adds causal context, counterfactuals add the ability to imagine alternatives. Each rung adds a body to the coordination stack; the missing causal context is what current AI lacks. |
| 05 | `05-hft-market-coordination` | 5 | BOTH · B1 Inventory risk control | HFT edge is not raw speed but coordination of information flow, price discovery and liquidity provision, with inventory risk acting as a balancing check on how much liquidity is provided. |
| 06 | `ch02-06-oculus-timing-coordination` | 6 (1 latent) | BOTH · no loops, 1 confounding | VR made people sick not because displays were low-resolution but because display latency, head tracking and rendering were out of sync, producing a sensory conflict. Oculus coordinated the three timings until the latency was imperceptible. |
| 07 | `ch02-07-shannon-channel-coordination` | 5 | CLD · no loops | Communication is a three-body system, not a pipe: noise is a property of the channel, so sender and receiver must encode and decode around it. Structured redundancy (error-correcting codes shaped to the channel) is the coordination architecture that lets communication survive noise, up to the channel's capacity. |

## Cut (from the initial 10-candidate spec)

- **Quantum supremacy** — too abstract, restates the three-body frame without adding structure
- **Von Neumann bottleneck** — same failure pattern as Pearl's Ladder; redundant
- **NSA anomaly detection** — same DAG shape as PayPal; the pair is one pattern
- **PayPal trust coordination** — simpler example of the NSA pattern; neither earns solo treatment
- **Catalytic cycles** — redundant with Game of Life as an "emergence from local rules" example

## Notes
- None of the Ch02 diagrams are drawn from the individual interview files (2.01–2.09); they're all from the main chapter text. The interviews elaborate but don't introduce distinct causal structures.
