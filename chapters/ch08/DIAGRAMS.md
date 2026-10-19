# Chapter 8 — Causal Diagrams

**Chapter:** Beyond Human Intelligence — Cosmic Three-Body Dynamics
**Status:** 6 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19)

Cut list: 'Tegmark-specific diagram' and 'Bach attention schema' are stale: Tegmark's three scenarios are in the prose and #01 covers them; Bach is no longer in the chapter (Seth replaces him in #06).

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 8.1 | b | Two loops over the same cycle (B1 and an R1 with the same one negative edge): impossible. | R1 removed, B1 kept; summary reflects Tegmark; (svg unchanged). |
| 8.2 | a | None. (Text order puts Hassabis before Bostrom, so the site numbers it 8.2.) | No change. |
| 8.3 | b | Loop B1 not a closed path (Existential Outcome had no edge to Value Learning); text proposes value learning, corrigibility and CEV after rejecting boxing, stunting and tripwires. | Corrigibility node added; loop and unsupported summary removed; regenerated. |
| 8.4 | a | None. | No change. |
| 8.5 | b | Summary called the loop 'balancing' but R1 is reinforcing. | Summary reworded; drawing unchanged. |
| 8.6 | b | 'Attention Schema' (Bach) not in the text; Anil Seth (prediction error as the coordinating third body) is. Shipped SVG was also older than its JSON. | Attention Schema -> Prediction Error; title and source now Chalmers, Seth, Nagel; regenerated. |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch08-01-intelligence-explosion` | 5 | CLD · B1 Coordination brake | Recursive self-improvement is not one body but three: human intent, AI capability and the coordination layer that preserves alignment. Capability that grows faster than coordination erodes the layer that keeps values aligned (Tegmark's uncoordinated explosion); coordination is the check on runaway recursion. |
| 02 | `ch08-02-bostrom-control` | 7 (1 latent) | BOTH · no loops, 2 confounding | Intelligence and goals are orthogonal. Instrumental convergence pushes almost any goal toward self-preservation and resource acquisition, which defeats boxing, stunting and tripwires. Only approaches that act on the goal structure itself (value learning and corrigibility) coordinate capability with human values. |
| 03 | `ch08-03-hassabis-agi` | 5 | CLD · R1 | "AGI is a coordination system routing specialized capabilities, meta-learning, and goals." (8.1 Hassabis) |
| 04 | `ch08-04-seti-coordination-signatures` | 6 (1 latent) | DAG · R1, 2 confounding | "SETI should search for coordination signatures, not messages — human hypothesis + AI detection + physics." (8.2 Tarter, Seager) |
| 05 | `ch08-05-dark-forest` | 6 (1 latent) | CLD · R1 Silence begets silence | Light-speed delay and unknowable values raise perceived threat, which triggers preemption and hiding. Silence then feeds suspicion in turn: a self-reinforcing trap of stable silence, not stable peace. A coordination architecture is the only escape. |
| 06 | `ch08-06-consciousness-coordination` | 5 (2 latent) | BOTH · R1 Meta-coordination loop, 2 confounding | The hard problem becomes a coordination problem: physical processes and subjective experience are bound by prediction-error coordination (Seth) under psychophysical laws (Chalmers), two aspects of one reality (Nagel). Perception is the coordination, not what follows it, which is what current AI lacks. |

## Cuts (from the long-list)

- **Apollo three-body opener** — vivid as prose but structurally identical to Ch01's facebook-three-body; no new shape.
- **Pattern Scales ladder (Planetary / Cosmic / Universal)** — a rhetorical restatement of the book's core frame, not a causal claim.
- **Tegmark-specific diagram** — already fully captured by `ch08-01-intelligence-explosion`; a separate Tegmark CLD would duplicate nodes.
- **Sara Seager biosignature sub-diagram** — folded into `ch08-04-seti-coordination-signatures`; the causal structure (hypothesis -> AI -> signature -> detection) is the same as Tarter's.
- **Bach attention schema as its own CLD** — the attention loop is the core of `ch08-06-consciousness-coordination`; a separate diagram would only relabel nodes.
- **Nagel "what is it like to be a bat" DAG** — his claim (subjective experience is irreducible) is a *latent* in the consciousness diagram, not a distinct structure.
- **"Fractal coordination / Ray of Creation" closing diagram** — metaphor, not a causal graph; nothing to intervene on.

## Notes

## Open questions
- Should `ch08-01` split the B1 and R1 loops into two diagrams? They share nodes but tell opposite stories; rendering both loop badges on one canvas may be visually crowded.
- Is there a distinct "Apollo as ground truth" diagram worth authoring as a historical counter-example to the dark-forest trap? Currently cut for redundancy with Ch01, but it could anchor the chapter's opener visually.
- The consciousness diagram treats `Subjective Experience` as latent. An alternative is to treat it as observed-but-private, which would change the DAG to "not-identifiable due to measurement" rather than "not-identifiable due to latency." Worth a second pass with the philosophy interviews.
