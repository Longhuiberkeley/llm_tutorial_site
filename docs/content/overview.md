# LLM Tutorial Site - Refined Content Overview

**Group 1: BASICS** | **Group 2: ADVANCED** | **Group 3: BUSINESS**

---

## 🎨 Pedagogical Style: "The Dummy's Guide to LLMs"
- **Playful & Irreverent:** Use emojis, relatable metaphors (pizza, laundry, cocktail parties), and zero-math explanations.
- **Visual-First:** If a concept can be a diagram, it shouldn't be a paragraph.
- **Predefined Interactions:** Duolingo-style (tap, slide, toggle). No open-ended typing.

---

# GROUP 1: BASICS

## Chapter 1: Intuition (5 pages)
- 1.1 Autocomplete x 999
- 1.2 Word Distance (IQ Test)
- 1.3 Context Matters (River vs Money Bank)
- 1.4 Sentence Distance
- 1.5 The Generation Loop

## Chapter 2: Under the Hood (5 pages)
- 2.1 **Tokenization:** Chunks, not words. Link to Xenova Playground.
- 2.2 **ELI5 Attention:** The "Cocktail Party Effect". How your brain filters out noise to focus on one voice. LLMs do the same with words.
- 2.3 **The Math of Context:** Simple bars showing "attention weights".
- 2.4 **Paragraphs:** Cross-sentence pronoun tracking.
- 2.5 **Context Capacity:** 📄 vs 📚. What "fitting in the head" means.

## Chapter 3: The LLM Black Box (5 pages)
- 3.1 **The Chat Illusion:** AI doesn't "remember" you; it re-reads the whole transcript every time you hit enter.
- 3.2 **The Paper Tape Metaphor:** Visualizing the context window as a literal growing roll of paper.
- 3.3 **System Prompts:** The hidden "personality" behind the curtain.
- 3.4 **Chain-of-Thought:** Why "thinking step-by-step" is just a prompt trick.
- 3.5 **Custom Spaces:** GPTs/Claude Projects are just pre-packaged system prompts.

## Chapter 4: LLM Limitations (6 pages)
- 4.1 **Counting Problems:** Why 🍓 has 3 "r"s is hard for tokens.
- 4.2 **Hallucination:** Not a bug, but a feature of statistical guessing.
- 4.3 **Randomness & Temperature:** The "Creativity" vs "Reliability" slider.
- 4.4 **Context Poisoning:** How irrelevant info makes the model dumber.
- 4.5 **When the Head is Full:** Truncation vs. Summarization.
- 4.6 **The "Stochastic Parrot":** Understanding vs. Pattern Matching.
- 4.7 **Jailbreaking & Security:** Hidden instructions and "Ignore previous rules".

## Chapter 5: Prompting Framework (5 pages)
- 5.1 **The SPEC Kit:** Goal, Context, Constraints, Format.
- 5.2 **Zero-Shot vs. Few-Shot:** Show, don't just tell.
- 5.3 **Negative Constraints:** What NOT to do.
- 5.4 **The Drafting Engine:** Why AI is a 1st-draft machine, not a final-product machine.
- 5.5 **Privacy 🔒:** What never to paste (Secrets, PII).

---

# GROUP 2: ADVANCED

## Chapter 6: Tools & Agents (5 pages)
- 6.1 **Delegation:** LLMs can't do math, but they can use a calculator.
- 6.2 **MCP (Model Context Protocol):** The "USB-C" for AI tools.
- 6.3 **Agentic Loops:** Perceive → Plan → Act → Observe.
- 6.4 **Autonomous Failures:** When agents get stuck in infinite loops.
- 6.5 **Building a Simple Agent:** Predefined Duolingo-style builder.

## Chapter 7: RAG & Context Engineering (6 pages)
- 7.1 **The Lawyer Case Study:** Too many files for the context window.
- 7.2 **Retrieval-Augmented Generation:** Search + LLM.
- 7.3 **Vector Embeddings:** Storing meaning as coordinates.
- 7.4 **The "Plumbing" of RAG:** Why the quality of your search determines the quality of the AI.
- 7.5 **Context Injection:** Feeding the "Head" only what it needs.
- 7.6 **Data Formats are Destiny:** Markdown vs PDF.
- 7.7 **RAG vs. Fine-Tuning:** The "Open Book" vs. "Studying for a Test" metaphor.

## Chapter 8: Memory & The Jarvis Problem (5 pages)
- 8.1 **State vs. Stateless:** Why LLMs start from zero every time.
- 8.2 **The "Jarvis" Myth:** Why a truly "all-knowing" assistant is actually a massive context-fetching problem.
- 8.3 **Context Management:** Ongoing fetching vs. static memory.
- 8.4 **OpenCanvas/OpenManus:** Exploring collaborative workspaces where AI helps organize the context.
- 8.5 **Privacy vs. Personalization:** The cost of "knowing" the user.

## Chapter 9: Beyond Text (3 pages)
- 9.1 **Multimodal AI:** Vision, Audio, Video.
- 9.2 **Understanding vs. Generating:** Why AI is better at "seeing" than "drawing".
- 9.3 **OCR & Document Extraction:** Turning messy scans into clean logic.

---

# GROUP 3: BUSINESS

## Chapter 10: The Landscape (5 pages)
- 10.1 **The Big 3:** OpenAI, Anthropic, Google.
- 10.2 **Model Tiers:** Flagship (Opus/GPT-5) vs. Fast (Haiku/4o-mini).
- 10.3 **Open Source:** Llama, DeepSeek, and local hosting.
- 10.4 **The Cost of Intelligence:** Pricing per 1M tokens.
- 10.5 **The "Build vs. Buy" Quadrant.**

## Chapter 11: To Automate or Not? (6 pages)
- 11.1 **RPA vs. Agentic:** Rigid Rules vs. Fuzzy Logic.
- 11.2 **The Volume vs. Variance Matrix:** What to automate, what to delegate, what to keep human.
- 11.3 **Human-in-the-Loop (HITL):** Why "Review" is more important than "Run".
- 11.4 **Exception Routing:** Using AI to flag what it *can't* do.
- 11.5 **Communication Skills:** How to verbalize human processes for AI replacement.
- 11.6 **ROI Calculation:** Time saved vs. Verification cost.

## Chapter 12: The MBA of AI Change (5 pages)
- 12.1 **Leadership & Change:** Encouraging a culture of "AI Literacy" without fear.
- 12.2 **Adapting Workplace Workflows:** Why you can't automate a broken process.
- 12.3 **Psychological Safety:** Managing the fear of job replacement.
- 12.4 **The "Augmentation" Narrative:** Shifting from "Replacing People" to "Supercharging Output".
- 12.5 **Case Study:** How top companies adapted to previous tech shifts (The Cloud, Mobile).

## Chapter 13: Project Management & Debt (6 pages)
- 13.1 **Harness Engineering:** Designing the "Cage" that makes AI reliable.
- 13.2 **Spec-Driven Modeling:** Turning vague vibes into technical requirements.
- 13.3 **The "Vibe Coding" Trap:** Invisible technical debt and phantom code.
- 13.4 **Golden Datasets:** How to prove your AI app actually works.
- 13.5 **Traceability:** Why every AI decision needs an audit trail.
- 13.6 **AI-Driven Review:** Using a second LLM to catch the first one's mistakes.
