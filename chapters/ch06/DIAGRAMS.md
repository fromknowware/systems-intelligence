# Chapter 6 — Causal Diagrams

**Chapter:** Consciousness as Pattern Recognition
**Status:** 6 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

The text was rewritten on 2026-04-16 (Wiener, Damasio, Mitchell, In-Q-Tel, Penrose, Sheldrake added). The Cut list entries 'Hot-stove', 'paperclip' and the Open question about the safety driver still stand. New unillustrated arguments: see `_meta/diagram-proposals/README.md`.

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 6.1 | a | Text also argues the disabled factory AEB and the distracted safety driver (not drawn). | No change. |
| 6.2 | a | Nit: 'Ai' casing in labels (renders upper-case). | No change. |
| 6.3 | b | The 'fairness-washing' loop (harm -> training data -> fairness) is not argued. The text: accuracy fix + biased deployment -> more efficient surveillance -> wrongful arrests; third body = coordination with social justice. | Loop removed; Technical Accuracy + Biased Deployment -> Surveillance Efficiency -> Disparate Harm; latent Justice Coordination; regenerated. |
| 6.4 | b | User Demand -> Extraction flywheel is not argued; text argues externalized costs and minimal accountability. | Loop removed; Human Labor, Externalized Costs, latent Material Accountability added; regenerated. Re-anchored to 'extractive industry' paragraph. |
| 6.5 | a | None. | No change. |
| 6.6 | new | — | Placed 2026-10-20 (ch06-06-wiener-anti-aircraft-feedback). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch06-01-uber-classification-failure` | 5 (1 latent) | CLD · no loop, 2 confounding | "It could detect her presence... but it lacked the awareness to interpret these patterns as a human being in danger." |
| 02 | `ch06-02-russell-alignment-loop` | 5 (1 latent) | CLD · B1 (Midas correction via IRL) | "AI that learns to coordinate its capabilities with human values by understanding context." |
| 03 | `ch06-03-gebru-injustice-amplification` | 5 (1 latent) | CLD · no loops, 2 confounding | Gebru's justice problem: a technically fair model (the accuracy gap closed) coordinates with biased deployment in over-policed communities, so the improvement makes surveillance more efficient and wrongful arrests more likely. The missing third body is coordination of technical development with social justice and lived experience. |
| 04 | `ch06-04-crawford-material-stack` | 6 (1 latent) | CLD · no loops, 1 confounding | Every AI system coordinates three material bodies: resource extraction, computational infrastructure and human labor. The output marketed as 'intelligence' externalizes environmental and social costs; with minimal accountability the machines do exactly what they are told while the human and ecological context is devastated. |
| 05 | `ch06-05-consciousness-coordination` | 4 | CLD · R1 (consciousness loop) | "Consciousness isn't a feature you add. It's an emergent property of coordination architecture." |
| 06 | `ch06-06-wiener-anti-aircraft-feedback` | 4 | CLD · B1 Cybernetic correction | A gun fired at where the plane was misses again and again. Add feedback, observe the error, adjust, fire again, and the system coordinates with a moving, purposeful target without controlling it. The Uber system lacked exactly this arc closing through awareness. |

## Cut

- **"Three-body consciousness" opening frame** (perception / processing / awareness) — redundant with #01 Uber, which is the same triad rendered as a real failure. Abstract restatement earned no seat.
- **Paperclip maximizer / genie** — same shape as #02 Russell alignment; would duplicate the Midas structure.
- **Gender Shades benchmark DAG** (training data → accuracy disparity) — subsumed by #03 Gebru, which already captures the fairness→deployment→harm→data loop. A benchmark-only DAG would be narrower and weaker.
- **Hot-stove neural coordination example** — pedagogical analogy for #05, not a distinct causal structure.
- **"Unconscious vs conscious AI" contrast table** — prose comparison, not causal.

## Notes

- **#01 Uber** is intentionally loop-free. The failure is a *missing* feedback arc: awareness never closes back on perception. The latent `Contextual Awareness` node with dashed confounding arcs makes the absence visible.
- **#02 Russell** is the only balancing loop in the chapter. Inverse reinforcement learning is the corrective arc; `Human Intent` stays latent because IRL only partially identifies it.
- **#05 Consciousness coordination** is the chapter's synthesis. Kept to 4 nodes deliberately — it's the schematic that the other four diagrams are failure/success instances of.
- None of the interview files (6.01–6.03) introduce causal structures distinct from what the main chapter already articulates; they elaborate case evidence (Gender Shades numbers, cobalt supply chain, IRL formalism) but reuse the same three-body frames.

## Open questions

- **#01 Uber**: should the human safety driver (Vasquez) appear as a second latent awareness node, or does that dilute the AI-system focus? Current call: omit — the NTSB framing is about AI awareness failure; the driver is a separate layer.
- **#02 Russell**: Is `Stated Objective` really a mediator or a driver? Modeled as mediator because capability acts *through* it. Revisit if Ch07 reuses the frame.
- **#05 Consciousness**: this is schematic, not empirical. Flag in caption that it's normative/architectural rather than a claim about any real system.
