# Chapter X — Diagram Placements

**Diagram source:** `chapters/chX/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/chX/text/chapter-X.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure X.N` (literal "X" — capstone convention, not "10")

## Placements (1 placed, 5 held)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **X.1** | `chX-01-three-ware-resolution.png` | **135** | "...and the fix lives in the coordination, not the components." | On the fractal three-ware table. |
| **X.2** | `chX-02-kurzweil-singularity-merger.png` | **320** | "...This is the future Kurzweil is living for: not replacing humanity, but evolving it through coordination with technology." | **HELD (class c).** No Kurzweil in the rewritten capstone. The graph matches the Kurzweil paragraph in ch03 ('three bodies of transcendence'). Held. Proposal: re-home to ch03 (no redraw needed), or redraw around chX 'knowware in action', or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **X.3** | `chX-03-blueprint-optimization-loop.png` | **397** | "...coordinating what we are with what technology enables to become what we could be." | **HELD (class c).** No Blueprint / Bryan Johnson in chX. Held. Proposed redraw: the capstone's worked example (context panel) in proposals/replacements/X.3-worked-example-context-panel; or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **X.4** | `chX-04-commons-governance-triad.png` | **780** | "...coordinating individual participation with collective benefit and sustainable governance to create abundance for all." | **HELD (class c).** No Ostrom / commons in chX. (Existing graph also has a parity error: R1 declares m=2, 0 negatives.) Held. Proposed redraw: the book's three triads in proposals/replacements/X.4-three-triads; or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **X.5** | `chX-05-acceleration-gap.png` | **971** | "...coordinating technological progress with human evolution to create the future faster." | **HELD (class c).** No Verdon in chX; the graph matches Schmachtenberger's meta-crisis passage in ch01. Held. Proposal: re-home to ch01 with renames (proposals/replacements/X.5-governance-gap-ch01), or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |
| **X.6** | `chX-06-agi-alignment-scenarios.png` | **1085** | "...preparing for the most important coordination challenge in human history." | **HELD (class c).** No AGI-prepper scenarios in chX. (Existing graph also has an unclosed B1 loop.) Held. Proposal: re-home to ch01 as the three attractors (proposals/replacements/X.6-three-attractors-ch01) or to ch08 (Tegmark scenarios), or remove. (Audit 2026-10-19: `_meta/diagram-audit.md`.) |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure X.1:

```markdown

---

![Figure X.1 — The Three Ware resolution: Hardware ←→ Software ←→ Knowware coordinating through an explicit Coordination Layer. Two reinforcing loops show how substrate and patterns co-produce emergent intelligence when a mediator is present.](../diagrams/png/chX-01-three-ware-resolution.png)

*Figure X.1 — Three Ware resolution (thesis diagram). See `../diagrams/svg/chX-01-three-ware-resolution.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure X.1** — Three Ware Problem: Hardware ↔ Software ↔ Knowware · line 135
- **Figure X.2** — Kurzweil singularity merger · HELD (class c, not placed)
- **Figure X.3** — Blueprint protocol: biology ↔ data ↔ intervention · HELD (class c, not placed)
- **Figure X.4** — Commons governance triad (Ostrom) · HELD (class c, not placed)
- **Figure X.5** — Verdon acceleration gap · HELD (class c, not placed)
- **Figure X.6** — AGI alignment: three-body scenario fork · HELD (class c, not placed)

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter (held). Full table: `_meta/diagram-audit.md`.

- **X.1 (b)** — Summary said knowware is 'an emergent third'; text says it is not a third thing added but the awareness of the relationship. Node 'Coordination Layer'. Summary reworded; node renamed Conscious Coordination; regenerated.
- **X.2 (c)** — No Kurzweil in the rewritten capstone. The graph matches the Kurzweil paragraph in ch03 ('three bodies of transcendence'). Held. Proposal: re-home to ch03 (no redraw needed), or redraw around chX 'knowware in action', or remove.
- **X.3 (c)** — No Blueprint / Bryan Johnson in chX. Held. Proposed redraw: the capstone's worked example (context panel) in proposals/replacements/X.3-worked-example-context-panel; or remove.
- **X.4 (c)** — No Ostrom / commons in chX. (Existing graph also has a parity error: R1 declares m=2, 0 negatives.) Held. Proposed redraw: the book's three triads in proposals/replacements/X.4-three-triads; or remove.
- **X.5 (c)** — No Verdon in chX; the graph matches Schmachtenberger's meta-crisis passage in ch01. Held. Proposal: re-home to ch01 with renames (proposals/replacements/X.5-governance-gap-ch01), or remove.
- **X.6 (c)** — No AGI-prepper scenarios in chX. (Existing graph also has an unclosed B1 loop.) Held. Proposal: re-home to ch01 as the three attractors (proposals/replacements/X.6-three-attractors-ch01) or to ch08 (Tegmark scenarios), or remove.
