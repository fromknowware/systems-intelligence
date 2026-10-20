# Chapter 7 — Causal Diagrams

**Chapter:** Engineering Reality — Ternary Engineering Patterns
**Status:** 6 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

Notes about #04 refer to the Covariant figure, which is held (class c).

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 7.1 | a | None. | No change. |
| 7.2 | a | Worm -> design feedback edge is implied ('coordinating with them'), not stated. | No change. |
| 7.3 | a | None. | No change. |
| 7.4 | c, resolved | Abbeel / Covariant / sim-to-real cut from ch07. | Replaced by 7.6 (MLOps feedback loop). Original in `diagrams/_cut/`. |
| 7.5 | a | None. | No change. |
| 7.6 | new | — | Placed 2026-10-20 (ch07-06-mlops-feedback-loop). |
| 7.7 | new | — | Placed 2026-10-20 (ch07-07-mapreduce-failure-handling). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch07-01-generative-design-three-body` | 4 | CLD · 1 reinforcing loop | GM seat bracket: "Engineer intent ↔ AI generation ↔ manufacturing reality" converges on an emergent design (§7.1) |
| 02 | `ch07-02-oxman-silk-pavilion` | 4 | CLD · 1 reinforcing loop | Oxman's Silk Pavilion coordinates silkworms, computational scaffold, and robotic fabrication (§7.1, Oxman) |
| 03 | `ch07-03-vqe-hybrid-loop` | 5 | CLD · 1 reinforcing loop (with decoherence constraint) | VQE iterates classical proposal → quantum measurement → classical optimization within coherence time (§7.2, Preskill) |
| 05 | `ch07-05-mlops-production-gap` | 5 (1 latent) | Both · no loop, 3 confounding edges | Chip Huyen's 70% failure pattern: a missing coordination layer confounds model, system, and business drivers (§7.3, Huyen) |
| 06 | `ch07-06-mlops-feedback-loop` | 4 | CLD · R1 Learning loop | Machine learning in production is a three-body problem: model performance, system reliability and continuous improvement. 'Train, deploy, hope' is the two-body version; feedback loops and retraining close the loop so the model keeps getting better against real use. |
| 07 | `ch07-07-mapreduce-failure-handling` | 5 | CLD · B1 Failure absorbed | In a cluster of a thousand machines something is always failing. Instead of preventing every failure, MapReduce coordinates with it: the master re-assigns a crashed machine's task to a healthy node, so the whole web can be processed on unreliable parts. |

## Cut (from candidate set)

- **Andrew Ng manufacturing QC hybrid intelligence** — restates the generic three-body frame; no distinct structure beyond §7.1 diagram #01.
- **Russinovich / Netflix chaos engineering** — duplicates the generic "app ↔ infra ↔ ops" three-body shape; no unique causal content.
- **D-Wave / Volkswagen traffic optimization** — same hybrid-loop topology as VQE (#03); VQE is the better-documented exemplar.
- **Seth Lloyd quantum-as-reality metaphor** — philosophical framing, not a causal structure. Belongs in prose.
- **Chollet "Coordination API" vision** — speculative future abstraction, no concrete causal claim to diagram.
- **Jeff Dean Google-scale infra** — interview covers the same infra ↔ app ↔ ops pattern as Russinovich; cut for the same reason.
- **Generic "MLOps three-body" opener** — subsumed by #05 (production gap), which adds the latent coordination insight.

## Notes

- **#03 VQE** is the only Ch07 diagram with a driver-mediator-feedback mix; decoherence enters as a negative-polarity constraint on the quantum node rather than as a loop participant. This matches Preskill's NISQ framing.
- **#04 sim-to-real** is the only balancing loop in the chapter — fitting, since it's the only case study where the coordination work is explicitly *closing an error gap* rather than *generating emergence*.
- **#05 MLOps production gap** is the only `fmt: "both"` diagram — the latent coordination layer is a Pearl-style confounder, so the DAG rendering matters for the "not identifiable" claim. It's also the chapter's contrarian diagram: emergence *fails* without explicit coordination infrastructure.
- The chapter is structurally repetitive — every interviewee delivers the same "three bodies coordinate" template. The cuts above reflect picking one exemplar per *causal pattern*, not one per interviewee.

## Open questions

- **Should #01 and #02 merge?** Both are "three drivers → emergent form" reinforcing loops. Kept separate because (a) Silk Pavilion has a directional bio→comp→fab ordering that GM bracket doesn't, and (b) Oxman is a distinct enough case study to earn its own panel. Could be cut to 4 diagrams if space is tight.
- **Decoherence as node vs. edge annotation?** #03 models decoherence as a node (`n4`) with a negative edge into the quantum measurement. A leaner version would drop `n4` and use `has_delay: true` on the quantum edges. Current version keeps it explicit because Preskill's NISQ argument *is* the decoherence constraint.
- **#05 identifiability claim** assumes the coordination layer is truly unmeasured. In mature MLOps orgs it's instrumented (via platform teams, SLOs, model cards). Worth a footnote that the latent status is stage-dependent.
- No diagram captures Chollet's ARC insight that intelligence = coordination, not optimization. It's a meta-claim about the whole chapter rather than a causal graph — flagged as prose-only.
