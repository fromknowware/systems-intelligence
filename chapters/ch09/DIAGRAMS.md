# Chapter 9 — Causal Diagrams

**Chapter:** No Way? Know-How — Three-Body Integration: Challenges, Barriers, and Conscious Participation
**Status:** 8 diagrams authored as arc_engine graph JSONs

## Audit against the current text (2026-10-19; held figures resolved 2026-10-20)

Cut list statements are stale: Eisenstein (sacred economics), Autor (9.10) and Mostaque are now woven into the chapter prose. Yang and Menegon are gone. 'Yang UBI direction' and 'Menegon loop polarity' Open questions are obsolete.

| Fig | Class | What was stale | Fix |
|---|---|---|---|
| 9.1 | a | None. | No change. |
| 9.2 | a | None. | No change. |
| 9.3 | b | Planetary-pushback balancing loop is not argued anywhere; text optimises 'GDP growth' against an ecological ceiling and a social floor. | GDP Growth, Ecological Overshoot, Social Shortfall -> Human Flourishing with latent Regenerative Distribution; pushback removed; regenerated. |
| 9.4 | b | Yang/UBI no longer appear, but the same causal story (capability up, wages tied to jobs, income disappears, productivity-wage gap) is argued at the top of 9.2 and in Autor. Latent was UBI. | RECLASSIFIED (was in the site SKIP list). Latent is now Distribution Institutions (unions, progressive taxation, minimum wage per Autor); re-anchored to 'The technology works. The economy breaks.' Needs author OK. |
| 9.5 | b | Back-edge Conversation Skill -> Mediated Communication and loop R1 not argued; text: technology trains fragmented attention, empathy deficit; third body = cultural norms. | Loop removed; latent Cultural Norms added; regenerated. |
| 9.6 | c, resolved | Menegon is not in ch09. (Existing graph also has a loop parity error: R2 declares m=2, closed path has 1 negative.) | Replaced by 9.7 (Eisenstein gift economy or market logic). Original in `diagrams/_cut/`. |
| 9.7 | new | — | Placed 2026-10-20 (ch09-07-eisenstein-gift-or-market). |
| 9.8 | new | — | Placed 2026-10-20 (ch09-08-senge-shifting-the-burden). |
| 9.9 | new | — | Placed 2026-10-20 (ch09-09-autor-atm-paradox). |

Rows in the table above for revised (class b) figures were regenerated from their graph JSON; notes about those figures that described the old drawings were removed. Full audit: `_meta/diagram-audit.md`.

## Survivors (8)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch09-01-stanford-ai-deployment` | 5 (1 latent) | DAG · 2 confounding | Opening case — "The technology worked. The coordination failed." AI capability undermines workflow and operations when integration coordination is absent. |
| 02 | `ch09-02-chollet-death-spiral` | 5 (1 latent) | CLD · 1 reinforcing loop | Chollet §9.1 — "complexity creates coordination overhead, which creates cognitive load, which in turn creates more complexity." |
| 03 | `ch09-03-yang-automation-distribution` | 5 (1 latent) | BOTH · no loops, 2 confounding | Automation raises productivity, but wages tie income to jobs. As routine tasks and whole jobs are automated, income falls even as abundance grows (the productivity-wage gap). The institutions that once distributed gains broadly (unions, progressive taxation, minimum wage) are the missing coordination layer. |
| 04 | `ch09-04-turkle-conversation-erosion` | 5 (1 latent) | BOTH · no loops, 1 confounding | Technology mediation trains fragmented attention, which erodes the skills of face-to-face conversation and, with them, empathy: Turkle's conversation crisis and empathy deficit. New cultural norms (device-free zones, intentional use) are the missing coordination. |
| 05 | `ch09-05-raworth-doughnut-overshoot` | 5 (1 latent) | BOTH · no loops, 2 confounding | GDP growth optimises one metric without coordinating with ecology or wellbeing: it pushes the economy through the ecological ceiling while the social floor stays unmet. Regenerative, distributive economics is the missing coordination layer that would land the economy inside the doughnut. |
| 07 | `ch09-07-eisenstein-gift-or-market` | 5 (1 latent) | BOTH · no loops, 2 confounding | The same matching technology can enable a gift economy at scale (matching needs with gifts, tracking reciprocity) or amplify market logic (monetising everything and destroying the remaining gift relationships). The resolution is to coordinate markets with the gift economy, not replace one with the other. |
| 08 | `ch09-08-senge-shifting-the-burden` | 4 | CLD · B1 Quick fix, B2 Fundamental solution, R3 Shifting the burden | A problem produces symptoms; a quick fix relieves the pressure but not the cause, so the motivation to pursue the real solution fades and the capacity to implement it atrophies. Every content filter, alignment patch and guardrail added after deployment follows this pattern. |
| 09 | `ch09-09-autor-atm-paradox` | 5 | CLD · no loops | ATMs automated the routine part of a teller's day, which freed tellers for advice and relationships and cut the cost of a branch, so banks opened many more branches. Tellers per branch fell but total tellers rose from about 300,000 to 500,000. If a job is almost entirely routine there is no residual human task and it is eliminated. |

## Cut

- **Mostaque open-source coordination** — structurally a near-duplicate of Chollet's "abstractions enable coordination" frame. The death-spiral version earns it because it has a closed reinforcing loop; Mostaque's version is a taxonomy more than a causal claim.
- **Digital Wellbeing coach** — the engagement→dopamine→life-cost loop is real but is a smaller restatement of Turkle's erosion loop. One representative suffices.
- **Eisenstein sacred economics** — the "material / relational / sacred" frame is normative and doesn't yield a distinct causal structure beyond what Raworth already carries.
- **Rosedale virtual presence** — descriptive ("virtual is a different kind of real"), no directional causal claim strong enough to anchor a diagram.
- **David Autor (9.10)** — the interview is present in sources but not woven into the chapter prose; cutting avoids a diagram that over-reads the text.
- **"Three-Body Integration Reality" summary triangle** (Human Core / AI Enhancement / Systemic Context) — this is the chapter's conceptual scaffold, not a causal diagram. Keeping it out of the graph set preserves diagrams for claims with polarity.

## Notes

- **#06 Menegon** is the chapter's sharpest *fork*: two reinforcing loops sharing nodes, switched by a latent governance variable. It's the most Pearl-flavored diagram in the chapter and the strongest argument for why "is it the tech?" is the wrong question.

## Open questions

- **Stanford sources.** The chapter asserts the 2016 Stanford pneumonia deployment but offers no citation. The diagram encodes the failure mechanism as narrated, not as independently verified. Flag for fact-check pass.
- **Yang UBI direction.** Modeled UBI (n5) as affecting Economic Security positively via two confounding arcs. If later chapters treat UBI as an endogenous intervention rather than a latent alternative, this should be promoted to a visible mediator node.
- **Menegon loop polarity.** R2 (extraction cycle) counts two negative edges (commodification→trust negative; trust→tech positive) for even parity. If the "trust→tech" arc is reframed as "low trust → low adoption → less extraction," the polarity flips. Current choice matches Menegon's framing that extractive platforms persist *because* early trust seeds adoption that is then hollowed out.
- **Autor (9.10) integration.** The David Autor interview file is in sources but not cited in the chapter text. If a later edit weaves him in, a seventh diagram around skill-biased automation + labor market polarization may earn a slot — probably displacing #03 Yang, which would then become the DAG branch of an Autor-Yang pair.
- **Chollet latent node.** "Coordination Abstractions" is modeled as latent because the chapter treats it as the missing-but-prescribed layer. If the accompanying interview elevates it to an observed design choice, recategorize as mediator.
