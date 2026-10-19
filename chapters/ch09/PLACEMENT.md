# Chapter 9 — Diagram Placements

**Diagram source:** `chapters/ch09/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch09/text/chapter-09.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 9.N` (book convention)

## Placements (5 placed, 1 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **9.1** | `ch09-01-stanford-ai-deployment.png` | **45** | "...The technology worked. The coordination failed." | Chapter opener. |
| **9.2** | `ch09-02-chollet-death-spiral.png` | **150** | "...which creates cognitive load, which in turn creates more complexity." | At the coordination death spiral. |
| **9.3** | `ch09-05-raworth-doughnut-overshoot.png` | **233** | "...creates flourishing. This is economics done right: coordination-first, regenerative, distributive." | Closes Raworth. |
| **9.4** | `ch09-03-yang-automation-distribution.png` | **223** | "...The technology works. The economy breaks." | After the automation example in §9.2. |
| **9.5** | `ch09-04-turkle-conversation-erosion.png` | **307** | "...shared discomfort, and the emotional challenge that builds relational resilience." | At Turkle's conversation crisis. |
| **9.6** | `ch09-06-menegon-mutual-aid-fork.png` | **359** | "...coordinating technology with human connection to create resilience and belonging." | **HELD (class c).** Menegon is not in ch09. (Existing graph also has a loop parity error: R2 declares m=2, closed path has 1 negative.) Held. Proposed redraw: Eisenstein gift economy or market logic in proposals/replacements/9.6-eisenstein-gift-or-market; or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 9.1:

```markdown

---

![Figure 9.1 — Stanford AI deployment three-body failure: AI Capability undermines Radiologist Workflow and Hospital Operations when the latent Integration Coordination layer (dashed) is absent. The technology worked; the coordination failed.](../diagrams/png/ch09-01-stanford-ai-deployment.png)

*Figure 9.1 — Stanford AI deployment three-body failure. See `../diagrams/svg/ch09-01-stanford-ai-deployment.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 9.1** — Stanford AI deployment three-body failure · line 45
2. **Figure 9.2** — Chollet coordination death spiral · line 150
3. **Figure 9.4** — Automation–distribution coordination break · line 223
4. **Figure 9.3** — Raworth doughnut overshoot and shortfall · line 233
5. **Figure 9.5** — Turkle conversation erosion loop · line 307
- **Figure 9.6** — Menegon mutual aid: enabling vs replacing · HELD (class c, not placed)

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **9.3 (b)** — Planetary-pushback balancing loop is not argued anywhere; text optimises 'GDP growth' against an ecological ceiling and a social floor. GDP Growth, Ecological Overshoot, Social Shortfall -> Human Flourishing with latent Regenerative Distribution; pushback removed; regenerated.
- **9.4 (b)** — Yang/UBI no longer appear, but the same causal story (capability up, wages tied to jobs, income disappears, productivity-wage gap) is argued at the top of 9.2 and in Autor. Latent was UBI. RECLASSIFIED (was in the site SKIP list). Latent is now Distribution Institutions (unions, progressive taxation, minimum wage per Autor); re-anchored to 'The technology works. The economy breaks.' Needs author OK.
- **9.5 (b)** — Back-edge Conversation Skill -> Mediated Communication and loop R1 not argued; text: technology trains fragmented attention, empathy deficit; third body = cultural norms. Loop removed; latent Cultural Norms added; regenerated.
- **9.6 (c)** — Menegon is not in ch09. (Existing graph also has a loop parity error: R2 declares m=2, closed path has 1 negative.) Held. Proposed redraw: Eisenstein gift economy or market logic in proposals/replacements/9.6-eisenstein-gift-or-market; or remove.
