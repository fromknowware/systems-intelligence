# Chapter 5 — Diagram Placements

> **Audit 2026-10-19.** Line numbers and anchors below were refreshed against the current `chapter-05.md` (the first-draft placements dated 2026-04-09 had drifted after the Apr 17+ rewrites). The quoted tail is the authoritative locator; the line number is a convenience. Rows marked **HELD (class c)** illustrate a passage that no longer exists and are not placed until the author decides (see `_meta/diagram-audit.md`).

**Diagram source:** `chapters/ch05/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch05/text/chapter-05.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 5.N` (book convention)

## Placements (5 placed, 0 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **5.1** | `ch05-01-neural-interface-coupling.png` | **114** | "...than mechanical, because it emerges from coordination rather than command." | After the three-week coordination learning case. |
| **5.2** | `ch05-02-binary-deployment-failure.png` | **140** | "...ability to coordinate with their world, not just technical performance." | At Oxley's 'optimize for coordination effectiveness' passage. |
| **5.3** | `ch05-03-attention-economy-trap.png` | **241** | "...designing systems that coordinate multiple values to create emergent wellbeing." | Closes Harris. |
| **5.4** | `ch05-04-virtue-ethics-moderation.png` | **209** | "...three coordinate to create moderation that's both scalable and nuanced." | On the content-moderation 'coordination pattern' paragraph. |
| **5.5** | `ch05-05-wikipedia-collective-intelligence.png` | **318** | "...community norms. This is coordination creating quality, not central control." | On Wales's bad-edit paragraph. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 5.1:

```markdown

---

![Figure 5.1 — Neural interface coupling: Brain, Interface, and AI System form a reinforcing loop as each adapts to the others. The latent "Body Schema" node (dashed) is Nicolelis's confounder — the brain's self-representation absorbs the device and makes the interface→agency effect non-identifiable.](../diagrams/png/ch05-01-neural-interface-coupling.png)

*Figure 5.1 — Three-body neural interface coupling. See `../diagrams/svg/ch05-01-neural-interface-coupling.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 5.1** — Neural interface three-body coupling · line 114
2. **Figure 5.2** — Binary AI deployment failure mode · line 140
3. **Figure 5.4** — Content moderation: AI, judgment, community · line 209
4. **Figure 5.3** — Attention economy coordination trap · line 241
5. **Figure 5.5** — Wikipedia collective intelligence · line 318

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **5.2 (a)** — Nit: 'User Task' vs text 'Human Capability'. No change.
- **5.4 (b)** — Figure is the content-moderation case (AI detection / human judgment / community context), not Vallor's bodies; feedback went to Community Context but the text sends community outcomes to AI training and human guidelines. Retitled; Shared Feedback now reaches Human Judgment (guidelines) and AI Detection; re-anchored to the moderation 'coordination pattern' paragraph; regenerated.
- **5.5 (b)** — Loop B1 was not a closed path; Contribution -> Platform edge not argued (text: platform lowers barriers). Platform -> Contribution; Quality -> Norms closes two loops (self-correcting norms R1 via two negatives, virtuous participation R2); regenerated. Re-anchored to the 'coordination magic' paragraph.
