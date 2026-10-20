# Chapter 2 — Diagram Placements

**Diagram source:** `chapters/ch02/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch02/text/chapter-02.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 2.N` (book convention)

## Placements (5 placed)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **2.1** | `ch02-01-netflix-recommendation-loop.png` | **29** | "...a self-reinforcing ecosystem that continuously evolves and generates new value." | Closes the Netflix section on the self-reinforcing ecosystem. |
| **2.2** | `ch02-02-pearl-ladder-causation.png` | **162** | "...and it's a coordination problem, not just a computational one." | After the ladder summary: 'a coordination problem, not just a computational one'. |
| **2.5** | `ch02-05-hft-market-coordination.png` | **353** | "...vs. speed, or data vs. data) in a ternary world." | On the HFT savant's closing quote. |
| **2.6** | `ch02-06-oculus-timing-coordination.png` | **290** | "...a triumph of coordination over raw optimization of individual components." | On the Oculus latency / tracking / rendering paragraph. |
| **2.7** | `ch02-07-shannon-channel-coordination.png` | **239** | "...Shannon's coordination architecture. The entire digital world runs on it." | On redundancy as coordination architecture. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 2.1:

```markdown

---

![Figure 2.1 — Netflix's recommendation loop: viewing data, content production, and user preferences form two nested reinforcing loops. The coordination context (algorithmic curation) is what turns a feedback loop into a self-optimizing ecosystem.](../diagrams/png/ch02-01-netflix-recommendation-loop.png)

*Figure 2.1 — Netflix recommendation loop. See `../diagrams/svg/ch02-01-netflix-recommendation-loop.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 2.1** — Netflix content-coordination loop · line 29
2. **Figure 2.2** — Pearl's Ladder of Causation · line 162
3. **Figure 2.7** — Shannon: sender, channel, receiver · line 239
4. **Figure 2.6** — Oculus VR: timing coordination, not specs · line 290
5. **Figure 2.5** — HFT market-making coordination · line 353

The website renumbers placed figures in reading order, so its labels can differ from the source labels above.

## Notes (audit 2026-10-19, resolved 2026-10-20)

Class a = still accurate; b = right subject, drawing revised to match the current prose; c = subject no longer in the chapter. Every class c figure has been resolved (below); nothing is held. Full table: `_meta/diagram-audit.md`.

- **2.2 (b)** — Latent 'Hidden Confounders' and the Causal Model -> Observation edge are not argued. The text: rung 1 two bodies, rung 2 adds causal context, rung 3 adds imagination. Causal Context is now the latent; Imagination added; confounders removed; regenerated.
- **2.5 (b)** — Node said 'Liquidity Placement' (text: Liquidity Provision); loop R1 was not a closed path (no edge back to Information Flow). Renamed; invalid loop removed, balancing inventory-risk loop kept; regenerated.
- **2.3 (resolved)** — Replaced by 2.6 (Oculus timing coordination). The original drawing is in `diagrams/_cut/`.
- **2.4 (resolved)** — Replaced by 2.7 (Shannon sender, channel, receiver). The original drawing is in `diagrams/_cut/`.
- **2.6 (new)** — Replacement for 2.3; drawn only from what the chapter says at this passage.
- **2.7 (new)** — Replacement for 2.4; drawn only from what the chapter says at this passage.
