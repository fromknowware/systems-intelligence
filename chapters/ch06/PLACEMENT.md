# Chapter 6 — Diagram Placements

> **Audit 2026-10-19.** Line numbers and anchors below were refreshed against the current `chapter-06.md` (the first-draft placements dated 2026-04-09 had drifted after the Apr 17+ rewrites). The quoted tail is the authoritative locator; the line number is a convenience. Rows marked **HELD (class c)** illustrate a passage that no longer exists and are not placed until the author decides (see `_meta/diagram-audit.md`).

**Diagram source:** `chapters/ch06/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch06/text/chapter-06.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 6.N` (book convention)

## Placements (5 placed, 0 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **6.1** | `ch06-01-uber-classification-failure.png` | **26** | "...five seconds cycling through wrong answers. Impact at 43 mph." | After the NTSB timeline. |
| **6.2** | `ch06-02-russell-alignment-loop.png` | **67** | "...behavior—humble intelligence that asks when uncertain rather than optimizing overconfidently." | At the IRL feedback paragraph. |
| **6.3** | `ch06-03-gebru-injustice-amplification.png` | **98** | "...be made just. Then the answer is: don't build it." | Closes the facial-recognition argument. |
| **6.4** | `ch06-04-crawford-material-stack.png` | **125** | "...generated image—is the result of this complex, often exploitative, coordination." | On 'AI as an extractive industry'. |
| **6.5** | `ch06-05-consciousness-coordination.png` | **161** | "...with awareness, grounded in bodies that have something at stake." | Synthesis paragraph. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 6.1:

```markdown

---

![Figure 6.1 — Uber's classification failure: Sensor Perception and Object Classification cycled without a closing feedback arc to Contextual Awareness (latent, dashed). Two confounding arcs from system design explain why the loop never closed.](../diagrams/png/ch06-01-uber-classification-failure.png)

*Figure 6.1 — Uber classification failure. See `../diagrams/svg/ch06-01-uber-classification-failure.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 6.1** — Uber crash: perception without awareness · line 26
2. **Figure 6.2** — Russell's alignment three-body loop · line 67
3. **Figure 6.3** — Gebru: technically fair, socially unjust · line 98
4. **Figure 6.4** — Crawford: AI's material three-body stack · line 125
5. **Figure 6.5** — Consciousness as coordination architecture · line 161

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **6.1 (a)** — Text also argues the disabled factory AEB and the distracted safety driver (not drawn). No change.
- **6.2 (a)** — Nit: 'Ai' casing in labels (renders upper-case). No change.
- **6.3 (b)** — The 'fairness-washing' loop (harm -> training data -> fairness) is not argued. The text: accuracy fix + biased deployment -> more efficient surveillance -> wrongful arrests; third body = coordination with social justice. Loop removed; Technical Accuracy + Biased Deployment -> Surveillance Efficiency -> Disparate Harm; latent Justice Coordination; regenerated.
- **6.4 (b)** — User Demand -> Extraction flywheel is not argued; text argues externalized costs and minimal accountability. Loop removed; Human Labor, Externalized Costs, latent Material Accountability added; regenerated. Re-anchored to 'extractive industry' paragraph.
