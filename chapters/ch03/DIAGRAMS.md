# Chapter 3 — Causal Diagrams

**Chapter:** Architecture of Systems Intelligence
**Status:** 8 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

The text was rewritten on 2026-04-16 (Feynman, Gosling, Delangue, McGilchrist, Capra, Kurzweil added). New unillustrated arguments are listed in `_meta/diagram-proposals/README.md`.

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 3.1 | a | None. | No change. |
| 3.2 | b | Edge Critique Signal -> AI Capability (negative) contradicts the text ('capability and alignment grow together'); loop B1 therefore throttled capability. | Critique now a shrinking gap: Aligned Response -(-)-> Critique Signal -> Aligned Response (B1); capability edge removed; regenerated. |
| 3.3 | a | Nit: the text treats Prediction Task as the third body; the graph makes it a downstream outcome. | No change. |
| 3.4 | a | None. | No change. |
| 3.5 | a | Nit: 'Evolutionary Signal' vs text 'Evolutionary Information'. | No change. |
| 3.6 | a | None. | No change. |
| 3.7 | new | — | Placed 2026-10-20 (ch03-07-mcgilchrist-three-part-loop). |
| 3.8 | new | — | Placed 2026-10-20 (ch03-08-kurzweil-singularity-merger). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (8)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-iaac-learning-building` | 5 | CLD · 2 reinforcing loops | "Building Sensors ↔ AI Learning System ↔ Human Occupant Behavior" (IAAC Barcelona) |
| 02 | `02-constitutional-ai-rlaif` | 5 | CLD · B1 Self-critique correction | Constitutional AI coordinates capability with human values through a constitutional framework: the model critiques and revises its own responses against the principles (RLAIF), so the critique signal shrinks as responses align. Capability and alignment grow together instead of trading off. |
| 03 | `03-jepa-coordination` | 5 | CLD · 1 reinforcing loop | "Past Context ↔ Future Context ↔ Prediction Task" (LeCun / JEPA) |
| 04 | `04-alphago-three-networks` | 5 | CLD · 2 reinforcing loops | "Policy Network · Value Network · Monte Carlo Tree Search" (AlphaGo / Move 37) |
| 05 | `05-alphafold-coordination` | 5 | DAG · no loops, identifiable | "Evolutionary Information · Physical Constraints · Attention Architecture" (AlphaFold) |
| 06 | `06-two-body-brittleness` | 6 (1 latent) | DAG · 2 confounding | "When Two Bodies Aren't Enough" — MYCIN, industrial robots, supervised learning, bureaucracy |
| 07 | `ch03-07-mcgilchrist-three-part-loop` | 5 (1 latent) | BOTH · R1 Experience-representation-reintegration, 1 confounding | Right-hemisphere experience is re-presented by the left hemisphere in a form that can be used, then must be returned to the right hemisphere to be checked against reality. When that loop breaks, confident models go unchecked and the Emissary usurps the Master: confabulation in split-brain patients, hallucination in AI. |
| 08 | `ch03-08-kurzweil-singularity-merger` | 5 (1 latent) | BOTH · no loops, 2 confounding | Biological intelligence (consciousness, creativity, values), artificial intelligence (scale, speed, memory, logical consistency) and neural integration (the interfaces that let them coordinate seamlessly) form a three-body system. Coordinated, the merger expands human capability while preserving consciousness, values and identity; whether it serves human flourishing depends on the coordination architecture we build around it. |

## Cut

- **Biological intelligence (Neurons ↔ Synapses ↔ Network Architecture)** — Chapter uses it as a framing analogy, not a mechanism the book actually reasons about. Would restate the three-body pattern without adding new structure distinct from IAAC or AlphaGo.
- **"Why all intelligent systems share the same pattern" triple-panel (Biological / Artificial / Hybrid)** — It's a comparison table, not a single causal system. Rendering it would produce three weak diagrams where each is just a labeled triangle.
- **The Five Principles of Coordination Architecture** — Normative design framework, not a causal structure. Each principle is illustrated with a different example (self-driving, supply chain, ed-tech, medical diagnosis, creative studio) — turning any one into a diagram would be arbitrary and none of the examples are the chapter's actual argument.
- **Individual two-body failure cases (MYCIN, industrial robots, supervised learning, bureaucracy)** — Collapsed into the single `06-two-body-brittleness` DAG. They share the same causal shape; four near-duplicates would violate the "one pattern, one diagram" rule from the Ch01/Ch02 retrospective.
- **AlphaGo vs AlphaFold as separate entries** — Kept both because they have genuinely different shapes: AlphaGo is a CLD with self-play feedback loops (meta-learning), AlphaFold is a feed-forward DAG with three independent input channels merging through attention. Only one would miss the identifiability contrast.

## Notes

- **#05 AlphaFold** is the chapter's only `identifiable` diagram, because each information channel (sequence, evolution, physics) can be ablated independently — a nice counterpoint to the loop-heavy systems where causes and effects co-evolve.
- **#06 Two-body brittleness** is the book's first explicit "missing third body" diagram. The latent node `n5` represents whatever third coordinating element is absent (context, feedback, meta-learner), and it acts as a confounder on both the rigid-rules path and the brittleness outcome.
- None of the Ch03 diagrams are drawn solely from the three interview files (3.01 Amodei, 3.02 LeCun, 3.03 Hassabis). The interview material is already consolidated into the chapter text sections on Constitutional AI, JEPA, AlphaGo and AlphaFold, so the graph JSONs track the chapter text.

## Open questions for the author

1. **AlphaGo loop count.** I modeled the self-play feedback as *two* reinforcing loops (one through the policy network, one through the value network) since they're trained jointly but updated separately. If you'd prefer a single combined loop through a shared "self-play" node, I can collapse R1 and R2.
2. **Constitutional AI critique edge.** I drew `critique → capability` as a *negative* edge (suppressing misaligned patterns) to make the balancing loop explicit. An alternative reading is `critique → capability` positive (strengthening aligned patterns), which would make the loop reinforcing. The chapter text supports both; pick one.
3. **Two-body brittleness latent node.** The "Missing Third Body" node is intentionally abstract since the chapter uses it as a *class* covering four different failures. If you'd rather anchor the diagram to one specific failure (e.g. MYCIN), I can specialize it.
4. **IAAC meta-learning loop.** I included a separate R2 "occupant adaptation" loop because the chapter explicitly says occupants' behavior changes as the building adapts. If that feels like overreach vs. the source text, R2 can be dropped to leave a cleaner 5-node / 1-loop diagram.
