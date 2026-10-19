# Diagram audit against the current chapter text

**Date:** 2026-10-19 · **Scope:** the 58 causal figures of chapters 1-9 and X (Preface, Prologue and the appendices are out of scope) · **Rule:** the text wins; diagrams are flagged or redrawn, never the argument.

The diagrams were authored on 2026-04-09. Chapters 3, 6, 7, 9 and X were rewritten from 2026-04-16/17 on. Every figure's graph JSON (title, summary, nodes, edges, loops) was read against the passage it now sits next to.

| Class | Meaning | Count |
|---|---|---|
| **a** | still accurate (nits listed, nothing changed) | 28 |
| **b** | right subject; wording or structure had drifted, so the graph JSON, SVG and PNG were revised | 18 |
| **c** | subject no longer in the chapter; **held**, nothing deleted, author decides | 12 (incl. the 1.2 triptych composite) |

## Audit table

| Fig | Slug | Class | What is stale | Fix / status |
|---|---|---|---|---|
| 1.1 | `01-facebook-three-body` | a | Nit: text names the third body 'social system dynamics'; node says Emergent Contagion. | No change. |
| 1.2 | `ch01-failure-triptych` | c | Composite of 1.3-1.5 (2584px wide); has no graph of its own and is unreadable at page width. | Recommend dropping: the three diagrams are placed individually. Held (not placed). |
| 1.3 | `04-mars-orbiter-coordination-gap` | a | Nit: latent could read Interface Standards. | No change. |
| 1.4 | `05-2008-systemic-correlation` | b | Balancing loop 'Crisis correction' and the Cascade -> Models edge are not argued; the text says no corrective feedback existed. | Edge and loop removed; summary corrected; SVG/PNG regenerated. |
| 1.5 | `06-737max-mcas-human-machine` | a | Nit: latent 'Pilot Awareness' = the text's 'operational coordination'. | No change. |
| 1.6 | `07-hardware-software-knowware` | a | Optional: text says knowware arises from the interaction of hardware and software (no Hardware/Software -> Knowware edges drawn). | No change. |
| 1.7 | `10-universal-coordination-pattern` | a | Adapt -> Identify closure is implied by 'adapt continuously'. | No change. |
| 1.8 | `09-burning-man-three-elements` | c | Burning Man and Larry Harvey were cut from ch01. | Held. Proposed redraw: multipolar trap (Schmachtenberger) in _meta/diagram-proposals/replacements/1.8-multipolar-trap; or remove. |
| 2.1 | `01-netflix-recommendation-loop` | a | None. | No change. |
| 2.2 | `02-pearl-ladder-causation` | b | Latent 'Hidden Confounders' and the Causal Model -> Observation edge are not argued. The text: rung 1 two bodies, rung 2 adds causal context, rung 3 adds imagination. | Causal Context is now the latent; Imagination added; confounders removed; regenerated. |
| 2.3 | `03-musk-first-principles` | c | No Musk / first-principles / SpaceX passage in ch02. | Held. Proposed redraw: Oculus timing coordination (Luckey) in proposals/replacements/2.3-oculus-timing-coordination; or remove. |
| 2.4 | `04-game-of-life-emergence` | c | No Conway's Game of Life passage in ch02. | Held. Proposed redraw: Shannon sender-channel-receiver in proposals/replacements/2.4-shannon-channel-coordination (alt: Von Neumann constraint); or remove. |
| 2.5 | `05-hft-market-coordination` | b | Node said 'Liquidity Placement' (text: Liquidity Provision); loop R1 was not a closed path (no edge back to Information Flow). | Renamed; invalid loop removed, balancing inventory-risk loop kept; regenerated. |
| 3.1 | `ch03-01-iaac-learning-building` | a | None. | No change. |
| 3.2 | `ch03-02-constitutional-ai-rlaif` | b | Edge Critique Signal -> AI Capability (negative) contradicts the text ('capability and alignment grow together'); loop B1 therefore throttled capability. | Critique now a shrinking gap: Aligned Response -(-)-> Critique Signal -> Aligned Response (B1); capability edge removed; regenerated. |
| 3.3 | `ch03-03-jepa-coordination` | a | Nit: the text treats Prediction Task as the third body; the graph makes it a downstream outcome. | No change. |
| 3.4 | `ch03-04-alphago-three-networks` | a | None. | No change. |
| 3.5 | `ch03-05-alphafold-coordination` | a | Nit: 'Evolutionary Signal' vs text 'Evolutionary Information'. | No change. |
| 3.6 | `ch03-06-two-body-brittleness` | a | None. | No change. |
| 4.1 | `01-bogota-urban-coordination` | a | None. | No change. |
| 4.2 | `02-copenhagen-wheel-coordination` | a | None. | No change. |
| 4.3 | `03-medical-ai-three-body` | a | Nit: latent 'Coordination Wisdom' is generic; the text names trust, liability and reimbursement. | No change. |
| 4.4 | `04-23andme-genomic-coordination` | c | 23andMe / Wojcicki no longer in ch04. | Held. Proposed redraw: Sidewalk Labs coordination death spiral in proposals/replacements/4.4-sidewalk-labs-death-spiral (alt: Taleb antifragility); or remove. |
| 4.5 | `05-adaptive-markets-2008-collapse` | b | Node 'Systemic Leverage' does not appear in the text. The text: rational models create opaque instruments, herding drives adoption and mispricing, weak structure amplifies shocks. | Mediator is now Opaque Instruments with an instruments<->herding R loop; Market Structure -> Coordination Failure; regenerated. Re-anchored to the 'destructive feedback loop' paragraph. |
| 4.6 | `06-pni-healing-coordination` | b | Loop was balancing; the text argues a virtuous (reinforcing) cycle (meaning and lower stress -> immunity -> recovery -> emotional work). | Nodes now Emotional Healing / Spiritual Transformation as in the text; all-positive R1 loop; regenerated. |
| 5.1 | `ch05-01-neural-interface-coupling` | a | None. | No change. |
| 5.2 | `ch05-02-binary-deployment-failure` | a | Nit: 'User Task' vs text 'Human Capability'. | No change. |
| 5.3 | `ch05-03-attention-economy-trap` | a | None. | No change. |
| 5.4 | `ch05-04-virtue-ethics-moderation` | b | Figure is the content-moderation case (AI detection / human judgment / community context), not Vallor's bodies; feedback went to Community Context but the text sends community outcomes to AI training and human guidelines. | Retitled; Shared Feedback now reaches Human Judgment (guidelines) and AI Detection; re-anchored to the moderation 'coordination pattern' paragraph; regenerated. |
| 5.5 | `ch05-05-wikipedia-collective-intelligence` | b | Loop B1 was not a closed path; Contribution -> Platform edge not argued (text: platform lowers barriers). | Platform -> Contribution; Quality -> Norms closes two loops (self-correcting norms R1 via two negatives, virtuous participation R2); regenerated. Re-anchored to the 'coordination magic' paragraph. |
| 6.1 | `ch06-01-uber-classification-failure` | a | Text also argues the disabled factory AEB and the distracted safety driver (not drawn). | No change. |
| 6.2 | `ch06-02-russell-alignment-loop` | a | Nit: 'Ai' casing in labels (renders upper-case). | No change. |
| 6.3 | `ch06-03-gebru-injustice-amplification` | b | The 'fairness-washing' loop (harm -> training data -> fairness) is not argued. The text: accuracy fix + biased deployment -> more efficient surveillance -> wrongful arrests; third body = coordination with social justice. | Loop removed; Technical Accuracy + Biased Deployment -> Surveillance Efficiency -> Disparate Harm; latent Justice Coordination; regenerated. |
| 6.4 | `ch06-04-crawford-material-stack` | b | User Demand -> Extraction flywheel is not argued; text argues externalized costs and minimal accountability. | Loop removed; Human Labor, Externalized Costs, latent Material Accountability added; regenerated. Re-anchored to 'extractive industry' paragraph. |
| 6.5 | `ch06-05-consciousness-coordination` | a | None. | No change. |
| 7.1 | `ch07-01-generative-design-three-body` | a | None. | No change. |
| 7.2 | `ch07-02-oxman-silk-pavilion` | a | Worm -> design feedback edge is implied ('coordinating with them'), not stated. | No change. |
| 7.3 | `ch07-03-vqe-hybrid-loop` | a | None. | No change. |
| 7.4 | `ch07-04-covariant-sim-to-real` | c | Abbeel / Covariant / sim-to-real cut from ch07. | Held. Proposed redraw: MLOps feedback loop (§7.3) in proposals/replacements/7.4-mlops-feedback-loop; or remove. |
| 7.5 | `ch07-05-mlops-production-gap` | a | None. | No change. |
| 8.1 | `ch08-01-intelligence-explosion` | b | Two loops over the same cycle (B1 and an R1 with the same one negative edge): impossible. | R1 removed, B1 kept; summary reflects Tegmark; (svg unchanged). |
| 8.2 | `ch08-03-hassabis-agi` | a | None. (Text order puts Hassabis before Bostrom, so the site numbers it 8.2.) | No change. |
| 8.3 | `ch08-02-bostrom-control` | b | Loop B1 not a closed path (Existential Outcome had no edge to Value Learning); text proposes value learning, corrigibility and CEV after rejecting boxing, stunting and tripwires. | Corrigibility node added; loop and unsupported summary removed; regenerated. |
| 8.4 | `ch08-04-seti-coordination-signatures` | a | None. | No change. |
| 8.5 | `ch08-05-dark-forest` | b | Summary called the loop 'balancing' but R1 is reinforcing. | Summary reworded; drawing unchanged. |
| 8.6 | `ch08-06-consciousness-coordination` | b | 'Attention Schema' (Bach) not in the text; Anil Seth (prediction error as the coordinating third body) is. Shipped SVG was also older than its JSON. | Attention Schema -> Prediction Error; title and source now Chalmers, Seth, Nagel; regenerated. |
| 9.1 | `ch09-01-stanford-ai-deployment` | a | None. | No change. |
| 9.2 | `ch09-02-chollet-death-spiral` | a | None. | No change. |
| 9.3 | `ch09-05-raworth-doughnut-overshoot` | b | Planetary-pushback balancing loop is not argued anywhere; text optimises 'GDP growth' against an ecological ceiling and a social floor. | GDP Growth, Ecological Overshoot, Social Shortfall -> Human Flourishing with latent Regenerative Distribution; pushback removed; regenerated. |
| 9.4 | `ch09-03-yang-automation-distribution` | b | Yang/UBI no longer appear, but the same causal story (capability up, wages tied to jobs, income disappears, productivity-wage gap) is argued at the top of 9.2 and in Autor. Latent was UBI. | RECLASSIFIED (was in the site SKIP list). Latent is now Distribution Institutions (unions, progressive taxation, minimum wage per Autor); re-anchored to 'The technology works. The economy breaks.' Needs author OK. |
| 9.5 | `ch09-04-turkle-conversation-erosion` | b | Back-edge Conversation Skill -> Mediated Communication and loop R1 not argued; text: technology trains fragmented attention, empathy deficit; third body = cultural norms. | Loop removed; latent Cultural Norms added; regenerated. |
| 9.6 | `ch09-06-menegon-mutual-aid-fork` | c | Menegon is not in ch09. (Existing graph also has a loop parity error: R2 declares m=2, closed path has 1 negative.) | Held. Proposed redraw: Eisenstein gift economy or market logic in proposals/replacements/9.6-eisenstein-gift-or-market; or remove. |
| X.1 | `chX-01-three-ware-resolution` | b | Summary said knowware is 'an emergent third'; text says it is not a third thing added but the awareness of the relationship. Node 'Coordination Layer'. | Summary reworded; node renamed Conscious Coordination; regenerated. |
| X.2 | `chX-02-kurzweil-singularity-merger` | c | No Kurzweil in the rewritten capstone. The graph matches the Kurzweil paragraph in ch03 ('three bodies of transcendence'). | Held. Proposal: re-home to ch03 (no redraw needed), or redraw around chX 'knowware in action', or remove. |
| X.3 | `chX-03-blueprint-optimization-loop` | c | No Blueprint / Bryan Johnson in chX. | Held. Proposed redraw: the capstone's worked example (context panel) in proposals/replacements/X.3-worked-example-context-panel; or remove. |
| X.4 | `chX-04-commons-governance-triad` | c | No Ostrom / commons in chX. (Existing graph also has a parity error: R1 declares m=2, 0 negatives.) | Held. Proposed redraw: the book's three triads in proposals/replacements/X.4-three-triads; or remove. |
| X.5 | `chX-05-acceleration-gap` | c | No Verdon in chX; the graph matches Schmachtenberger's meta-crisis passage in ch01. | Held. Proposal: re-home to ch01 with renames (proposals/replacements/X.5-governance-gap-ch01), or remove. |
| X.6 | `chX-06-agi-alignment-scenarios` | c | No AGI-prepper scenarios in chX. (Existing graph also has an unclosed B1 loop.) | Held. Proposal: re-home to ch01 as the three attractors (proposals/replacements/X.6-three-attractors-ch01) or to ch08 (Tegmark scenarios), or remove. |

PLACEMENT labels are the source labels; the website renumbers placed figures in reading order (e.g. source 5.4 is shown before 5.3, 8.3 before 8.2).

## Decisions for the author (class c)

Each held figure has two options. "Redraw" drafts are in `_meta/diagram-proposals/replacements/` (graph JSON, SVG, PNG); nothing is placed until you choose. Leaving a figure undecided keeps it unplaced, exactly as it is on the website today.

| Fig | Option 1: redraw / re-home (draft) | Option 2 |
|---|---|---|
| 1.2 triptych | none (composite of 1.3-1.5) | drop for good |
| 1.8 Burning Man | multipolar trap (`1.8-multipolar-trap`), on Schmachtenberger's second paragraph | remove |
| 2.3 Musk | Oculus timing coordination (`2.3-oculus-timing-coordination`) | remove |
| 2.4 Game of Life | Shannon sender-channel-receiver (`2.4-shannon-channel-coordination`); alt: Von Neumann constraint | remove |
| 4.4 23andMe | Sidewalk Labs death spiral (`4.4-sidewalk-labs-death-spiral`); alt: Taleb antifragility | remove |
| 7.4 Covariant | MLOps feedback loop (`7.4-mlops-feedback-loop`); alt: Dean MapReduce (see new candidates) | remove |
| 9.6 Menegon | Eisenstein gift economy or market logic (`9.6-eisenstein-gift-or-market`) | remove |
| X.2 Kurzweil | **re-home to ch03** (the existing graph already matches the Kurzweil paragraph there; no redraw) or redraw around chX "knowware in action" | remove |
| X.3 Blueprint | the capstone's worked example (`X.3-worked-example-context-panel`) | remove |
| X.4 Ostrom | the book's three triads (`X.4-three-triads`) | remove |
| X.5 Verdon | **re-home to ch01** meta-crisis paragraph (`X.5-governance-gap-ch01`) | remove |
| X.6 AGI prepper | **re-home to ch01** three attractors (`X.6-three-attractors-ch01`) or to ch08 (Tegmark's scenarios) | remove |

Also for your sign-off: **9.4 (Yang) was reclassified from c to b.** Yang and UBI are gone, but the same causal story is argued at the top of 9.2 ("The technology works. The economy breaks.") and in Autor's productivity-wage gap. The latent is now "Distribution Institutions" instead of "Universal Basic Income".

If 1.8, X.5 and X.6 all land in ch01 that is three figures in the Schmachtenberger passage (one per paragraph: the gap, the trap, the attractors). Pick one or two if that is too many.

## Findings beyond text drift

- **Invalid loops** (declared loop is not a closed path, or its R/B type does not match its negative-edge parity). Fixed where the figure was revised: 2.5, 5.5, 8.1, 8.3. Still present in held (class c) figures: 9.6 R2 (parity), X.4 R1 (parity), X.6 B1 (not closed); and in Appendix B figures 02 (not closed) and 03 (parity), which were out of scope. `_meta/tools/validate-graphs.py` checks this for every graph.
- **The shipped SVGs are rendered in the engine's "both" view** (latent nodes and the identifiability badge always visible) whatever the JSON's `fmt` says. That is now documented in `_meta/tools/render-diagram.mjs`.
- **Stale artefacts:** the `*-capture.png` viewer screenshots of the 16 revised figures were not regenerated (nothing references them). The Appendix A figure `appA-03-attractor-basin-fork.svg` no longer matches its JSON (not touched; out of scope). Ch08 figure 8.6's SVG was older than its JSON; now regenerated.
- **Stale domain.** `systemsofintelligence.com` and `someone@systemsofintelligence.com` still appear in `chapters/chX/text/chapter-X.md` (the last two lines), and in the preface, book-index, appendix-c, about-author and README. The domain is now knowware.systems. Not changed; book text is the author's call.
- **`chapter-NN-with-figures.md` preview files** (insertion pass from the original plan) were not regenerated and still embed figures at the old positions, including the held ones.
- **DIAGRAMS.md Cut lists** in ch09 (Eisenstein, Autor, Mostaque) and ch08 (Tegmark, Bach) are out of date: three of those are now in the prose.

## Tools added (`_meta/tools/`)

- `render-diagram.mjs` renders graph JSON to the book's SVG, byte-for-byte what `arc_engine.jsx` `DiagramSVG` draws (61 of 63 shipped SVGs reproduce exactly; `--check` lists any that drift).
- `validate-graphs.py` flags loops that are not closed paths or whose type disagrees with the negative-edge parity, and over-long labels.
- `_meta/viewer/build-data.sh` no longer hard-codes a path on another machine; `chapters-data.js` was regenerated.

## New diagrams proposed (not placed)

See `_meta/diagram-proposals/README.md`: McGilchrist's loop (ch03), Wiener's anti-aircraft predictor (ch06), Dean's MapReduce (ch07), Senge's shifting the burden and Autor's ATM paradox (ch09).
