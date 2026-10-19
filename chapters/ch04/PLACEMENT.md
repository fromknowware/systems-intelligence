# Chapter 4 — Diagram Placements

**Diagram source:** `chapters/ch04/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch04/text/chapter-04.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 4.N` (book convention)

## Placements (5 placed, 1 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **4.1** | `ch04-01-bogota-urban-coordination.png` | **45** | "...system where vision, infrastructure, and human behavior danced in harmony." | At the vision -> infrastructure -> behavior -> mandate cycle. |
| **4.2** | `ch04-02-copenhagen-wheel-coordination.png` | **101** | "...context, allowing technology to augment, rather than dictate, urban life." | Retained position at the smart-cities contrast. |
| **4.3** | `ch04-03-medical-ai-three-body.png` | **167** | "...from the intelligent dance between algorithm, expert, and patient context." | Closes the medical AI section. |
| **4.4** | `ch04-04-23andme-genomic-coordination.png` | **167** | "...a coordinated effort between individuals and researchers could yield results far faster than traditional methods." | **HELD (class c).** 23andMe / Wojcicki no longer in ch04. Held. Proposed redraw: Sidewalk Labs coordination death spiral in proposals/replacements/4.4-sidewalk-labs-death-spiral (alt: Taleb antifragility); or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **4.5** | `ch04-05-adaptive-markets-2008-collapse.png` | **221** | "...the emergent, often destructive, properties of a complex adaptive system." | On Lo's 'destructive feedback loop' paragraph. |
| **4.6** | `ch04-06-pni-healing-coordination.png` | **297** | "...of disease, but a state of vibrant health and wholeness." | Closes the PNI section. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 4.1:

```markdown

---

![Figure 4.1 — Bogotá's three-body urban coordination: Political Vision, Citizen Behavior, and Infrastructure Systems form a reinforcing loop whose emergent property is city intelligence.](../diagrams/png/ch04-01-bogota-urban-coordination.png)

*Figure 4.1 — Bogotá urban coordination. See `../diagrams/svg/ch04-01-bogota-urban-coordination.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 4.1** — Bogotá three-body urban coordination · line 45
2. **Figure 4.2** — Copenhagen Wheel rider-terrain-motor coordination · line 101
3. **Figure 4.3** — Medical AI three-body diagnosis · line 167
4. **Figure 4.5** — Adaptive Markets and the 2008 coordination failure · line 221
5. **Figure 4.6** — Psychoneuroimmunology healing three-body · line 297
- **Figure 4.4** — 23andMe patient-data-research flywheel · HELD (class c, not placed)

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **4.3 (a)** — Nit: latent 'Coordination Wisdom' is generic; the text names trust, liability and reimbursement. No change.
- **4.4 (c)** — 23andMe / Wojcicki no longer in ch04. Held. Proposed redraw: Sidewalk Labs coordination death spiral in proposals/replacements/4.4-sidewalk-labs-death-spiral (alt: Taleb antifragility); or remove.
- **4.5 (b)** — Node 'Systemic Leverage' does not appear in the text. The text: rational models create opaque instruments, herding drives adoption and mispricing, weak structure amplifies shocks. Mediator is now Opaque Instruments with an instruments<->herding R loop; Market Structure -> Coordination Failure; regenerated. Re-anchored to the 'destructive feedback loop' paragraph.
- **4.6 (b)** — Loop was balancing; the text argues a virtuous (reinforcing) cycle (meaning and lower stress -> immunity -> recovery -> emotional work). Nodes now Emotional Healing / Spiritual Transformation as in the text; all-positive R1 loop; regenerated.
