# Content TODOs

**Source of truth:** `docs/content/overview.md` — every page is described in detail there.

**How to use this file:** Work through each task below. For each content `.md` file, read the corresponding section in `overview.md` and write/rewrite the content to match. Follow the format established in `docs/md2html_guide.md` and the existing Ch 1 files (e.g., `chapter-01-01.md`).

**Rules:**
- Follow `GEMINI.md` directives strictly
- Never reference chapters by number in content (use topic references)
- Use the `:::callout-tldr`, `:::callout-dyk`, `:::callout-error` syntax
- Use `:::visual{name="..."}` and `:::interactive{id="..."}` for components
- End every page with `:::quiz{id="XX-XX"}`
- Keep content concise: bullet points, short paragraphs, playful tone

---

## File Management

### Files to DELETE (topics removed or merged)
- [ ] `chapter-03-05.md` — "Custom Spaces" moved to 03-04
- [ ] `chapter-08-05.md` — Ch 8 reduced from 5 to 4 pages
- [ ] `chapter-11-06.md` — Ch 11 restructured (5 pages now)

### Files to CREATE (new pages)
- [ ] `chapter-02-06.md` — "RLHF & the Reasoning Era"
- [ ] `chapter-05-06.md` — "Privacy — What Never to Paste"
- [ ] `chapter-06-06.md` — "Building a Simple Agent"
- [ ] `chapter-12-06.md` — "ROI Calculation"

---

## Chapter 1: Building Intuition (EDIT — content is good, minor fixes)

- [ ] **01-01:** Rephrase away from "x 999" — use "on steroids" or "at massive scale"
- [ ] **01-02:** No changes needed (verify alignment with overview)
- [ ] **01-03:** No changes needed (verify alignment with overview)
- [ ] **01-04:** Add a second example (see overview: "I love my new phone" vs "I adore my recent smartphone" vs "The phone rang at midnight")
- [ ] **01-05:** Change probability bars to have colored fills. Change trailing "..." to "others ...". Add callout-dyk about LLMs only looking forward.

---

## Chapter 2: Under the Hood (EDIT ch 1-2, REWRITE ch 3-5, CREATE ch 6)

- [ ] **02-01:** Add "pool of tokens" concept. Add callout about "predict" meaning "guess" in ML context.
- [ ] **02-02:** REWRITE — Better ELI5 with Cocktail Party analogy. Add callout-dyk about "Attention Is All You Need" paper. Fix attention arrows interactive: should show MANY arrows between ALL word pairs with varying thickness, not just a few.
- [ ] **02-03:** REWRITE — Was "Math of Context". Now "Attention Weights". Merge old 2.3 + 2.4 (paragraphs/pronoun tracking) content. Show attention weight bars, pronoun resolution ("it" -> "cat"), cross-sentence tracking.
- [ ] **02-04:** REWRITE — Was "Paragraphs". Now "Context Capacity" (moved from old 2.5). Use stacked books visual (NOT buildings for 1M). Style buttons like 1.3 scene selector. 200K = ~2 novels, 1M = ~10 novels (200K x 5). Fix inaccurate "libraries of books" claim.
- [ ] **02-05:** REWRITE — Was "Context Window". Now "How LLMs Are Trained — Pre-training & Post-training". Completely new content: two-phase diagram, student/tutor analogy, SFT + RLHF.
- [ ] **02-06:** CREATE — "RLHF & the Reasoning Era". RLHF loop diagram, thinking tokens concept, callout about wrong reasoning still improving accuracy.

---

## Chapter 3: How Chat Really Works (EDIT 01, REWRITE 02-04, DELETE 05)

- [ ] **03-01:** Good content. Verify alignment with overview. Minor edits only.
- [ ] **03-02:** REWRITE — Was "Paper Tape". Now "The Sandwich". Show layered payload: system prompt / pre-prompt / conversation history / thinking tokens / reply. Two-view: user sees clean chat vs actual sandwich. Use the example conversation from overview.
- [ ] **03-03:** EDIT — Still "System Prompts". Align with overview (toggle between different system prompts showing different outputs).
- [ ] **03-04:** REWRITE — Was "Chain-of-Thought" (moved to Ch 5). Now "Custom Spaces — Pre-packaged Sandwiches". GPTs, Claude Projects, Gemini Gems = system prompt + docs + tools bundled.
- [ ] **03-05:** DELETE — Content absorbed into new 03-04.

---

## Chapter 4: LLM Limitations (REWRITE all — topics shifted)

- [ ] **04-01:** REWRITE — "Counting Problems". Align with overview. Challenge-based format.
- [ ] **04-02:** REWRITE — "Hallucination". Align with overview. Fake revenue numbers example.
- [ ] **04-03:** REWRITE — "Randomness & Temperature". Add warmup exercise: "My favorite piece of tech is ___" with multiple valid options showing probabilities. Then temperature slider demo.
- [ ] **04-04:** REWRITE — "Context Poisoning". Clean vs cluttered context visual.
- [ ] **04-05:** REWRITE — "When the Head is Full". Add Peter's phone number / Mary's address human exercise. Show truncation vs summarization strategies.
- [ ] **04-06:** REWRITE — Was "Stochastic Parrot". Now "Needle in the Haystack / Context Rot". Color-coded attention by position (green/red/green). Callout about researcher experiments.
- [ ] **04-07:** REWRITE — Still "Jailbreaking & Security". Add white-text CV interactive (two buttons: no highlight / with highlight). Add hidden acronym example.

---

## Chapter 5: Prompting Best Practices (REWRITE all — different topics)

- [ ] **05-01:** REWRITE — Was "SPEC Kit" (moved to Ch 13). Now "Know When to Trust It". Four-zone trust spectrum. Emphasize AI CAN be used in production with proper engineering.
- [ ] **05-02:** REWRITE — Was "Zero/Few-Shot". Now "Be Explicit — No Mind Reading". Before/after comparison, interactive adding-specificity demo.
- [ ] **05-03:** REWRITE — Was "Negative Constraints". Now "Zero-Shot vs Few-Shot". Side-by-side 0/1/few-shot comparison.
- [ ] **05-04:** REWRITE — Was "Drafting Engine". Now "Chain-of-Thought & Reasoning Tokens" (moved from old Ch 3). Step-by-step examples, connect to thinking models, callout about wrong reasoning improving accuracy.
- [ ] **05-05:** REWRITE — Was "Privacy". Now "Using LLMs to Learn". Provider learning features, power of extrapolation, dangers of confident wrong answers.
- [ ] **05-06:** CREATE — "Privacy — What Never to Paste". Red/green list. Samsung incident callout.

---

## Chapter 6: Tool Use & Agents (REWRITE all — placeholders + restructured)

- [ ] **06-01:** REWRITE — "What is Tool Use?" Add API callout box explaining what an API is. Before/after calculator example.
- [ ] **06-02:** REWRITE — "MCP — Model Context Protocol". USB-C analogy. Simulink-style diagram.
- [ ] **06-03:** REWRITE — Was "Agentic Loops". Now "What Makes a Good Agent?" Responsive, adaptive, self-correcting, goal-directed checklist. Feedback loop diagram.
- [ ] **06-04:** REWRITE — Was "Autonomous Failures". Now "Agentic Loops — Perceive, Plan, Act, Observe". Step-by-step animation example.
- [ ] **06-05:** REWRITE — Was "Building Agent". Now "When Agents Go Wrong". Bug gallery with click-to-reveal.
- [ ] **06-06:** CREATE — "Building a Simple Agent". Duolingo-style step builder (choose task, add tools, set prompt, test).

---

## Chapter 7: RAG & Context Engineering (REWRITE all — placeholders)

- [ ] **07-01:** REWRITE — "The Lawyer Case Study". 500+ cases, 20 years, can't fit in context.
- [ ] **07-02:** REWRITE — "What is RAG?" Flowchart animation. Before/after comparison.
- [ ] **07-03:** REWRITE — "Vector Embeddings". Add XY graph interactive: lion/cat/tiger/banana as coordinates, user calculates distance. Optional 3D view.
- [ ] **07-04:** REWRITE — Was "Plumbing of RAG". Now "Alternatives to RAG". Keyword search, subagent, concatenation comparison table.
- [ ] **07-05:** REWRITE — "Context Injection". Two-pile visualization. Chunking strategies.
- [ ] **07-06:** REWRITE — "Data Formats are Destiny". Markdown vs Word vs PDF. File format trap.
- [ ] **07-07:** REWRITE — "RAG vs Fine-Tuning". Open book vs studying analogy.

---

## Chapter 8: Memory & Personalization (REWRITE all, DELETE 05)

- [ ] **08-01:** REWRITE — "State vs Stateless". Fresh whiteboard metaphor.
- [ ] **08-02:** REWRITE — "What Companies Are Trying". ChatGPT Memory, Claude Projects, Gemini Gems.
- [ ] **08-03:** REWRITE — "Why It's Not Solved Yet". Lawyer example revisited. Core retrieval problem.
- [ ] **08-04:** REWRITE — "Privacy vs Personalization". Spectrum visualization.
- [ ] **08-05:** DELETE — Ch 8 reduced to 4 pages.

---

## Chapter 9: Beyond Text (REWRITE all — placeholders)

- [ ] **09-01:** REWRITE — "Multimodal AI". Visual gallery. Note: many LLMs can't natively generate images.
- [ ] **09-02:** REWRITE — "Understanding vs Generating". Input vs output distinction.
- [ ] **09-03:** REWRITE — "Multimodal RAG & Document Extraction". OCR explained. Multimodal RAG concept.

---

## Chapter 10: The LLM Landscape (REWRITE all — placeholders + restructured)

- [ ] **10-01:** REWRITE — "The Big Players". Visual landscape map. Don't over-specify model versions.
- [ ] **10-02:** REWRITE — "Model Tiers & Costs". Generic tiers (flagship/mid/fast). Cost per million tokens explained.
- [ ] **10-03:** REWRITE — "Open Source vs Closed Source". Trade-off table. Hidden costs of self-hosting.
- [ ] **10-04:** REWRITE — Was "Cost of Intelligence". Now "Web UI vs API". Decision tree. Include API reminder callout.
- [ ] **10-05:** REWRITE — Was "Build vs Buy". Now "Choosing Your Model — Thought Exercise". Interactive evaluation framework.

---

## Chapter 11: Culture & AI Change (REWRITE all — completely new topics, DELETE 06)

- [ ] **11-01:** REWRITE — Was "RPA vs Agentic". Now "The Augmentation Narrative". Supercharging not replacing.
- [ ] **11-02:** REWRITE — Was "Volume vs Variance". Now "Building AI Literacy". Managing fear, encouraging experimentation.
- [ ] **11-03:** REWRITE — Was "HITL". Now "Is Your Company Ready?" Big data/analytics historical parallel.
- [ ] **11-04:** REWRITE — Was "Exception Routing". Now "The Software Transition Trap". Company A story (US firm, Chinese software, address format problem).
- [ ] **11-05:** REWRITE — Was "Communication Skills". Now "Lessons from Past Tech Shifts". Cloud, mobile, big data, AI pattern.
- [ ] **11-06:** DELETE — Ch 11 reduced to 5 pages.

---

## Chapter 12: Automation & Implementation (REWRITE all — completely new topics, CREATE 06)

- [ ] **12-01:** REWRITE — Was "Leadership & Change". Now "You Can't Automate What You Can't Explain". Checklist for any process. Broken process + automation = automated disaster.
- [ ] **12-02:** REWRITE — Was "Adapting Workflows". Now "Right vs Wrong in Business Logic". Child essay vs invoice number. Hidden rules problem.
- [ ] **12-03:** REWRITE — Was "Psychological Safety". Now "RPA vs Agentic AI". Side-by-side comparison. Railroad tracks vs car with GPS.
- [ ] **12-04:** REWRITE — Was "Augmentation Narrative". Now "The Volume vs Variance Matrix". 2x2 matrix with examples.
- [ ] **12-05:** REWRITE — Was "Case Study". Now "Human-in-the-Loop". Full agentic vs HITL. Where each works.
- [ ] **12-06:** CREATE — "ROI Calculation". Cost/benefit framework. Reality check on break-even.

---

## Chapter 13: Managing AI-Assisted Projects (REWRITE all — rearranged)

- [ ] **13-01:** REWRITE — Was "Harness Engineering". Now "Why AI Projects Are Different". Non-deterministic, continuous eval, risk matrix.
- [ ] **13-02:** REWRITE — Was "Spec-Driven Modeling". Now "Frameworks in Practice". SPEC Kit template (moved from old Ch 5) + BMAD + why devs need structure.
- [ ] **13-03:** REWRITE — Was "Vibe Coding Trap". Now "Evaluation & Test Sets". Plain-language explanation of curated test inputs with known-correct outputs. How to measure and track accuracy.
- [ ] **13-04:** REWRITE — Was "Golden Datasets". Now "Traceability & Audit Trails". Log every AI decision. Reconstruct the why.
- [ ] **13-05:** REWRITE — Was "Traceability". Now "The Vibe Coding Trap". Borrowed money metaphor. Phantom code, scattered logic, speed trap.
- [ ] **13-06:** REWRITE — Still "AI-Driven Review" but expanded. Add AI pitfalls: lint disabled, test cheating, hardcoded values, dead code. Review framework: automated + AI + human.

---

## Technical / Visual Bugs (not content)

- [ ] **Nav bar inconsistency:** index.html and About page nav bar differs from chapter pages. Chapter nav bar is better (clicking "LLM Tutorial" goes home). Unify.
- [ ] **02-02 attention arrows:** Currently broken. Rebuild with many arrows connecting all word pairs, varying thickness.
- [ ] **02-04 context capacity visual:** Buttons should match 1.3 scene-selector style. Use stacked books (not buildings) for 1M. Fix accuracy: 200K ~ 2 novels, 1M ~ 10 novels.
- [ ] **02-03 quiz (dog box):** Green highlight not showing after correct click. Investigate quiz component.
- [ ] **Component reuse:** System prompt / custom spaces components should reuse existing interactive patterns (scene-selector buttons, quiz options, etc.) rather than creating new ones.
