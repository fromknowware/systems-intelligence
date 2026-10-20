# Chapter 4 — Causal Diagrams

**Chapter:** Systems Intelligence in Action — Ternary Coordination Case Studies
**Status:** 🟢 6 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

Cut list: Raschke and 'failed smart cities' still stand. 'Sidewalk Labs' and Taleb are argued in the chapter without a figure and are offered as replacements for the held #04 23andMe figure.

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 4.1 | a | None. | No change. |
| 4.2 | a | None. | No change. |
| 4.3 | a | Nit: latent 'Coordination Wisdom' is generic; the text names trust, liability and reimbursement. | No change. |
| 4.4 | c, resolved | 23andMe / Wojcicki no longer in ch04. | Replaced by 4.7 (Sidewalk Labs death spiral). Original in `diagrams/_cut/`. |
| 4.5 | b | Node 'Systemic Leverage' does not appear in the text. The text: rational models create opaque instruments, herding drives adoption and mispricing, weak structure amplifies shocks. | Mediator is now Opaque Instruments with an instruments<->herding R loop; Market Structure -> Coordination Failure; regenerated. Re-anchored to the 'destructive feedback loop' paragraph. |
| 4.6 | b | Loop was balancing; the text argues a virtuous (reinforcing) cycle (meaning and lower stress -> immunity -> recovery -> emotional work). | Nodes now Emotional Healing / Spiritual Transformation as in the text; all-positive R1 loop; regenerated. |
| 4.7 | new | — | Placed 2026-10-20 (ch04-07-sidewalk-labs-death-spiral). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-bogota-urban-coordination`        | 4          | CLD · 1 reinforcing loop         | "Political Vision ←→ Citizen Behavior ←→ Infrastructure Systems… emergent city intelligence" |
| 02 | `02-copenhagen-wheel-coordination`    | 5          | CLD · 1 balancing loop           | "Rider effort ←→ Terrain data ←→ Motor assistance… coordination creates an experience that feels like the bike understands you" |
| 03 | `03-medical-ai-three-body`            | 6 (1 latent) | DAG+CLD · no loops, 2 confounding | "AI coordinating with doctors coordinating with patients to create care that's both more effective and more human" |
| 05 | `05-adaptive-markets-2008-collapse`   | 5 | CLD · R1 Herding-instrument bubble | Lo's three-body market frame applied to 2008: rational models created complex, opaque instruments; herding drove their adoption and mispricing; fragile market structure amplified the shock. The three coordinated destructively into systemic collapse. |
| 06 | `06-pni-healing-coordination`         | 5 | CLD · R1 Virtuous healing cycle | Myss's healing frame grounded in psychoneuroimmunology: physical treatment, emotional healing and spiritual transformation coordinate through immune function. Meaning and lower stress strengthen immunity, which supports recovery, which in turn supports emotional work: a virtuous cycle that chronic stress runs in reverse. |
| 07 | `ch04-07-sidewalk-labs-death-spiral` | 5 (1 latent) | BOTH · R1 Coordination death spiral, 1 confounding | Fear travels at internet speed; trust builds at relationship speed. When one body (government, private sector or civil society) retreated, it raised fear and eroded trust among the others, accelerating their retreat. The Quayside project collapsed in 2020: coordination is a living system that has to survive politics, fear and time. |

## Cut

- **Failed smart cities (Songdo/Masdar)** — redundant with Copenhagen Wheel as the positive form of the same claim; a "two-body failure" diagram would just be the Copenhagen Wheel with nodes deleted.
- **Raschke trading three-body (pattern/emotion/context)** — same shape as the Lo 2008 diagram at a smaller scale; the 2008 case carries more narrative weight and earns the slot.
- **Bogotá "other cities fail" contrast** — same argument as Bogotá #01 inverted; doesn't add causal structure.
- **Section "What Makes Coordination Work in Practice" (bidirectional influence, continuous adaptation, context, coordination health, emergence)** — prescriptive principles, not a system with variables; would force a template rather than earn a diagram.
- **"The Pattern Across Domains"** — meta-summary of the chapter; no causal structure of its own.

## Notes

- The chapter is unusually uniform: every major section is explicitly pitched as a three-body coordination system, so one diagram per case study is the natural carve. Six case studies → six diagrams, right at the ceiling of the "max 7" rule.
- **#03 Medical AI** is the only diagram in Ch04 using the latent-confounder pattern (like Ch01's Facebook three-body). It uses `fmt: "both"` so the `is_confounding` edges from the latent "Coordination Wisdom" node actually render.
- **#02 Copenhagen Wheel** is the only diagram whose loop is balancing — the assistance→effort arc is genuinely equilibrium-seeking, which distinguishes it from the otherwise reinforcing-heavy chapter.
- None of the Ch04 interviews (4.01–4.09) introduce distinct causal structures beyond what the main chapter text already makes explicit; they deepen the case studies rather than add new systems.
