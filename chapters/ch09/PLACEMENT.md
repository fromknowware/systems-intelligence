# Chapter 9 — Diagram Placements

**Diagram source:** `chapters/ch09/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch09/text/chapter-09.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 9.N` (book convention)

## Placements (8 placed)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **9.1** | `ch09-01-stanford-ai-deployment.png` | **45** | "...The technology worked. The coordination failed." | Chapter opener. |
| **9.2** | `ch09-02-chollet-death-spiral.png` | **150** | "...which creates cognitive load, which in turn creates more complexity." | At the coordination death spiral. |
| **9.3** | `ch09-05-raworth-doughnut-overshoot.png` | **233** | "...creates flourishing. This is economics done right: coordination-first, regenerative, distributive." | Closes Raworth. |
| **9.4** | `ch09-03-yang-automation-distribution.png` | **223** | "...The technology works. The economy breaks." | After the automation example in §9.2. |
| **9.5** | `ch09-04-turkle-conversation-erosion.png` | **307** | "...shared discomfort, and the emotional challenge that builds relational resilience." | At Turkle's conversation crisis. |
| **9.7** | `ch09-07-eisenstein-gift-or-market.png` | **261** | "...where connection matters, with both working together to create flourishing." | Closes Eisenstein's gift-economy fork. |
| **9.8** | `ch09-08-senge-shifting-the-burden.png` | **183** | "...that can learn from what those systems do—coordination-first, abstraction-enabled, emergence-focused." | On the Shifting the Burden archetype. |
| **9.9** | `ch09-09-autor-atm-paradox.png` | **243** | "...to anchor the coordination, and the job is eliminated wholesale." | After Autor's ATM paradox and task-bundle argument. |

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
3. **Figure 9.8** — Senge: shifting the burden · line 183
4. **Figure 9.4** — Automation–distribution coordination break · line 223
5. **Figure 9.3** — Raworth doughnut overshoot and shortfall · line 233
6. **Figure 9.9** — Autor: why ATMs raised teller employment · line 243
7. **Figure 9.7** — Eisenstein: AI as gift economy or market logic · line 261
8. **Figure 9.5** — Turkle conversation erosion loop · line 307

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19, resolved 2026-10-20)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter. Every class c figure has been resolved (below); nothing is held. Full table: `_meta/diagram-audit.md`.

- **9.3 (b)** — Planetary-pushback balancing loop is not argued anywhere; text optimises 'GDP growth' against an ecological ceiling and a social floor. GDP Growth, Ecological Overshoot, Social Shortfall -> Human Flourishing with latent Regenerative Distribution; pushback removed; regenerated.
- **9.4 (b)** — Yang/UBI no longer appear, but the same causal story (capability up, wages tied to jobs, income disappears, productivity-wage gap) is argued at the top of 9.2 and in Autor. Latent was UBI. RECLASSIFIED (was in the site SKIP list). Latent is now Distribution Institutions (unions, progressive taxation, minimum wage per Autor); re-anchored to 'The technology works. The economy breaks.' Needs author OK.
- **9.5 (b)** — Back-edge Conversation Skill -> Mediated Communication and loop R1 not argued; text: technology trains fragmented attention, empathy deficit; third body = cultural norms. Loop removed; latent Cultural Norms added; regenerated.
- **9.6 (resolved)** — Replaced by 9.7 (Eisenstein gift economy or market logic). The original drawing is in `diagrams/_cut/`.
- **9.7 (new)** — Replacement for 9.6; drawn only from what the chapter says at this passage.
- **9.8 (new)** — Arguments the text makes without a figure; drawn only from what the chapter says at this passage.
- **9.9 (new)** — Arguments the text makes without a figure; drawn only from what the chapter says at this passage.
