# LLM Tutorial Site - Content Overview

**Total: 3 Groups, 13 Chapters, ~70 Pages** (increased from 67 with additions to Chapters 7, 8, 11, 13)

---

## Design Philosophy: Predefined Interactive Experiences ⭐ CRITICAL DECISION

**All "interactions" are PREDEFINED, CONTROLLED EXPERIENCES - not open-ended free-typing or complex generative interfaces.**

### What This Means (Concrete Examples):

| Type | Example | NOT This |
|------|---------|----------|
| **Button choices** | "[A] cat  [B] pizza  [C] car" - tap to select | Text input field: "Type your answer..." |
| **Hover reveals** | Hover over "attention" to show arrows to related words | Nothing happens without precise hover |
| **Tap cards** | Tap sentence card → flips to show tokenization | Multiple choice quiz with unlimited options |
| **Slider controls** | Drag slider: 100K → 200K → 500K tokens (watch books fill) | Open text: "Enter any number of tokens" |
| **Toggle switches** | Click: "System Prompt: ON/OFF" | Checkboxes that enable multiple options |
| **Click-to-expand** | Click diagram block → reveals details | Free navigation, no guided path |
| **Drag-and-drop** | Drag "hungry" to "food" cluster | Type: "Which words are related?" |

### Why Predefined Experiences?

1. **Feasible to build:** No complex NLP parsing, no "what did the user mean?", no edge cases
2. **Controlled learning:** Every interaction teaches ONE specific concept - no confusion
3. **Fast development:** 70 pages of rich content without R&D rabbit holes
4. **Reliable & testable:** Every user sees the same examples, gets the same learning
5. **Duolingo-like:** Familiar, friendly, gamified - not intimidating like ChatGPT

### The Mental Model:

**Think Duolingo, not ChatGPT.**

In Duolingo, you don't write essays in Spanish - you tap "gato" vs "perro", drag words to form sentences, tap to hear pronunciation. Controlled interactions that teach through repetition and exposure.

**We're doing the same for LLM education.**

---

# GROUP 1: BASICS - What are LLMs and what can't they do?

## Chapter 1: Intuition - How LLMs "Think" (5 pages)

**Chapter Goal:** Build intuitive mental models of how LLMs work by revealing that LLMs are just "autocomplete × 999" - not magic, not intelligence, just prediction.

### 1.1 Keyboard Autocomplete vs LLM Completion
**Page Goal:** Show that LLMs are fundamentally the same as phone autocomplete - just much, much bigger.
**How:** Animated comparison. Left side: phone keyboard with "Roses are..." → suggests "red" (single word). Right side: LLM with "Roses are..." → completes "Roses are red, violets are blue, sugar is sweet, and so are you!" Message: **LLM = autocomplete × 999**.
**Demo:** Predefined animation, not interactive typing.

### 1.2 Word Distance - Which Words Are "Close"?
**Page Goal:** Introduce the concept of "distance" between words - similar words are "close" in meaning-space.
**How:** Interactive 2D scatter plot showing emoji words. [🦁 lion] is close to [🐯 tiger] but far from [🍌 banana]. Hover over any word to see lines connecting to its "neighbors" - thicker lines = closer distance.
**Subtle hint:** This "distance" concept is how LLMs know what words are related.

### 1.3 Context Matters - Distance Can Change
**Page Goal:** Teach that meaning (and distance) changes based on context - "bank" can be close to "river" OR "money" depending on surrounding words.
**How:** Two scenes side-by-side. Scene 1: 🌊 river, 🚣 canoe, 🏦 bank → "bank" is closer to "river." Scene 2: 💰 money, 💳 credit, 🏦 bank → "bank" is closer to "money." Click button to toggle scenes, watch the distance lines shift.
**Subtle hint:** This is why LLMs need "attention" - to figure out which context applies.

### 1.4 Sentence Distance - What Does "Similar" Mean?
**Page Goal:** Extend distance concept from words to sentences - whole sentences can be "close" or "far" in meaning.
**How:** Five sentence cards: ["I'm hungry", "Let's eat", "I want food", "The sky is blue", "I'm full"]. Click cards to highlight - show that "I'm hungry" and "Let's eat" have strong connection (thick line), while "I'm hungry" and "The sky is blue" have no connection.
**Reveal:** This is "sentence distance" - how LLMs know what you mean even when you use different words.

### 1.5 Distance = How LLMs Generate
**Page Goal:** Tie it all together: distance is how LLMs decide what word comes next. They find words that are "close" to the context.
**How:** Interactive demo with word buttons. Start with "The delicious ___" - show candidate words [cat, 🍕 pizza, 🏃 ran, 📚 book] at different distances. Pizza is "close" to delicious → big line. Cat is "far" → tiny line. Click "Generate" and watch LLM pick the closest match.
**+ Quiz:** Check understanding of word distance, sentence distance, and how LLMs use distance to generate text.

---

## Chapter 2: Under the Hood - Tokenization & Attention (6 pages)

**Chapter Goal:** Understand what happens inside an LLM - how text becomes tokens, and how "attention" uses distance to connect words and understand meaning.

### 2.1 What is Tokenization?
**Page Goal:** Show that LLMs don't see words - they see chunks called "tokens" (roughly 4 characters).
**How:** Predefined sentence cards with tap-to-reveal. Card 1: "I'm hungry" → tap → ["I", "'m", " hungry"] → tap → [1043, 582, 8192]. Card 2: "hello" → [1234], Card 3: "hello!" → [1234, 45] (showing that punctuation can split words). No typing - just tap cards to reveal tokenization.
**Takeaway:** LLMs work with chunks, not words. This is why they sometimes mess up word boundaries.

### 2.2 Attention Arrows - Everything Connects to Everything
**Page Goal:** Teach that "attention" means every word looks at every other word - but some connections matter more.
**How:** Sentence displayed: "The cat sat on the mat because it was comfortable." All words have arrows to all other words (faint gray). Hover over "it" → arrows to "cat" and "mat" become THICK and DARK (these matter for understanding). Arrows to "the", "on" stay thin.
**Key insight:** "Attention" is just measuring distance - which words are close/relevant to each other.

### 2.3 Building a Sentence - Concrete Example
**Page Goal:** Show how attention and distance work together to predict the next word.
**How:** Predefined completion game. Sentence: "My favorite pet is a ___" with four button choices: [🐕 dog], [🍕 pizza], [🚗 car], [📱 phone]. Show attention visualization: "pet" is close to "dog" (thick line), far from "pizza" (thin line). Click each choice to see what happens - only "dog" makes sense based on distance.
**+ Quiz:** Check understanding of tokenization and attention.

### 2.4 From Sentences to Paragraphs - Looking Back and Ahead
**Page Goal:** Show that attention works across sentences - pronouns refer back, ideas flow forward.
**How:** Two-sentence example: "Sarah loves programming. She codes every day." Step-by-step animation: Step 1 - Show "She" looking at "Sarah" (thick line) because "she" = "Sarah." Step 2 - Show "codes" looking back at "programming" (related concepts). Step 3 - Show how first sentence gives context for second sentence.
**Concrete example:** Compare with broken version: "Sarah loves programming. He codes every day." → "He" has no good reference → confusion.

### 2.5 Context Window - How Much Can LLM Remember?
**Page Goal:** Make context windows concrete using real examples and visualizations.
**How:** Three examples with token counts:
- Example 1: This paragraph (87 tokens) - show the paragraph, count revealed
- Example 2: One page of Harry Potter (~250 tokens) - show actual page excerpt
- Example 3: Fellowship of the Ring Chapter 1 (~3,500 tokens) - show excerpt, note this is ~1.7% of 200K context window

Visualization: A bookshelf that fills as tokens increase. 200K tokens = ~150 pages (a novel). 1M tokens = ~750 pages (War and Peace).
**+ Quiz:** Check understanding of context windows and what fits.

**Note:** Old 2.6 (Context Window Visualization) content moved to Chapter 4 as "What Happens When Context Is Full?"

---

## Chapter 3: The LLM Black Box (5 pages)

**Chapter Goal:** Demystify the chat interface - see what's really happening behind the scenes, understand system prompts, chain-of-thought, and why the interface is an illusion.

### 3.1 The Chat Interface Illusion ⭐ MOVED TO FIRST
**Page Goal:** Expose the difference between what users SEE (chat bubbles) and what actually HAPPENS (full conversation sent every time).
**How:** Split-screen visualization. LEFT: What you see - [You: "What's my name?"] [AI: "I don't know"] [You: "My name is Sarah"] [AI: "Nice to meet you!"] [You: "What's my name?"]. RIGHT: What actually happens - Full transcript sent to API each time, including previous messages. Animation shows the "paper tape" growing with each message.
**Key reveal:** The AI doesn't "remember" - it rereads everything.

### 3.2 Input → Output - The Functional View
**Page Goal:** Present LLMs as simple functions using Simulink-style block diagram.
**How:** Functional block diagram: [User Input] → [API Call (includes full conversation history)] → [LLM Processes] → [Output Generated] → [Displayed in Chat]. Click each block to reveal details. Emphasize: It's just input → output, not "thinking."

### 3.3 What's Hidden? System Prompts
**Page Goal:** Reveal that every LLM interaction has hidden instructions you don't see - the "system prompt."
**How:** Split-view comparison. VISIBLE: "Write a poem about cats." HIDDEN (toggle to reveal): "You are a helpful AI assistant. Be friendly but concise. Don't write anything offensive." Show how changing the hidden system prompt changes the response - same user input, different outputs based on system prompt.

### 3.4 Chain-of-Thought & Few-Shot - Hidden Patterns
**Page Goal:** Show that "reasoning" and "examples" are just patterns in the prompt, not magic.
**How:** Example breakdown. User sees: "What is 23 × 47?" → "1081." Behind the scenes (reveal): System prompt includes "Let's think step by step. First, break it down..." - this is chain-of-thought. Few-shot: "Translate hello to Spanish: Hola. Translate goodbye: Adiós. Translate thank you:" - examples are in the prompt.
**Takeaway:** "AI reasoning" is just prompt patterns, not actual thought.

### 3.5 Custom Spaces = Pre-packaged Prompts
**Page Goal:** Show that "GPTs," "Claude Spaces," "Gemini Gems" are just saved system prompts + examples.
**How:** Visual breakdown of a "Space": [Name: "Coding Assistant"] + [System Prompt: "You are an expert programmer..."] + [Starter Examples: "Debug this code:"]. Demo: Click through 3 preset "spaces" to see their hidden prompts.
**+ Quiz:** Check understanding of system prompts, chain-of-thought, few-shot, and the chat illusion.

---

## Chapter 4: LLM Limitations - LLMs Are Statistical, Not Intelligent (6 pages)

**Chapter Goal:** Deeply understand that LLMs are statistical pattern-matchers, not intelligent beings. Learn what they CAN'T do and why - including randomness, context window limits, and context poisoning.

### 4.1 Counting Problems - It's Pattern Matching, Not Math
**Page Goal:** Show LLMs can't reliably count or do math - they predict next words based on patterns.
**How:** Predefined challenges. Challenge 1: "How many 'a's in 'banana'?" - show LLM's wrong answer. Explain: LLM predicts "3" because it's seen similar patterns, not because it counted. Challenge 2: "What is 1+1+1+1... (repeated 20 times)?" - LLM fails. Explain: LLM doesn't compute, it predicts.
**Key insight:** Word prediction ≠ calculation.

### 4.2 Hallucination - Confident Fabrication
**Page Goal:** Explain that LLMs make things up confidently - "hallucination" is a feature, not a bug.
**How:** Example: "What were the revenue numbers for fashion industry in 2024?" - LLM gives plausible-sounding but completely fake numbers. Explain: LLM generates based on patterns from training data, not actual facts. The numbers look real but are invented.
**Takeaway:** LLMs = pattern generators, not truth tellers.

### 4.3 Randomness & Temperature ⭐ NEW
**Page Goal:** Show that the same prompt can give different results - LLMs have a "temperature" setting that controls randomness.
**How:** Side-by-side comparison. Prompt: "Write a short story about a cat" shown 3 times with temperature=0 (same result each time) vs temperature=0.8 (3 different stories). Slider: adjust temperature, see how randomness changes. Explain: Higher temperature = more creative/random, lower = more predictable.
**Takeaway:** LLMs are statistical - they don't "know" anything, they just predict based on probabilities.

### 4.4 Right vs Wrong - When Does It Matter?
**Page Goal:** Teach that "wrong" is context-dependent: creative writing = no wrong; code/numbers = wrong matters.
**How:** Two scenarios. Scenario A: "Write a poem about spring" - any output is valid, no "wrong." Scenario B: "Generate an API key" - wrong format = security risk. Decision tree for when to trust LLM outputs.

### 4.5 Context Poisoning - Garbage In, Garbage Out ⭐ NEW
**Page Goal:** Reveal that adding more context can make LLMs DUMBER - bad context poisons the output.
**How:** Example: "Summarize this document" with correct info → good summary. Now add 50 pages of irrelevant text before it → summary gets worse, might be wrong. Visual: Clean context window vs cluttered context window. Explain: Attention gets distracted by irrelevant content, "poisoning" the understanding.
**Real-world risk:** Attackers can plant false documents in RAG systems.

### 4.6 When Context Window Fills Up - What Happens? ⭐ MOVED FROM Ch 2.6
**Page Goal:** Show what happens when conversation exceeds context window - strategies: truncate, summarize, compact.
**How:** Visual timeline showing conversation growing. When it hits the limit, show what companies do: 1) Cut off old messages (lose context), 2) Summarize old messages (lose detail), 3) Compact/merge (experimental). Animation showing messages "falling off" the tape.
**Takeaway:** LLMs don't "remember" - they reread, and there's a limit to what fits.

### 4.7 What LLMs Are Good At vs Bad At ⭐ NEW
**Page Goal:** Clear summary of LLM strengths and limitations.
**How:** Two-column comparison. GOOD AT: Writing, brainstorming, explaining concepts, pattern matching, creative tasks. BAD AT: Counting, math, factual accuracy, remembering, logic puzzles, anything requiring 100% accuracy.
**+ Quiz:** Multiple quiz questions testing understanding of LLM limitations, randomness, temperature, context poisoning, and when to trust outputs.

---

## Chapter 5: How to Write Effective Prompts (5 pages)

**Chapter Goal:** Master the art of communicating with LLMs using a structured framework like system design requirements - explicit, complete, unambiguous.

### 5.1 The Prompt Framework - Complete Requirements
**Page Goal:** Teach a systematic prompt structure: **Goal, Context, Input Format, Output Format, Constraints, References/Examples**.
**How:** Interactive template with toggle sections. BAD: "Write marketing copy." GOOD: "GOAL: Write Instagram caption for new coffee product. CONTEXT: Target audience is millennials, brand voice is witty and casual. INPUT: Product name 'Morning Brew', it's organic fair-trade coffee. OUTPUT: 2-3 sentences, include emojis. CONSTRAINTS: No more than 150 characters, must include CTA. REFERENCE: Here's an example of our brand voice: [example]."
**+ 🔒 Safety:** What NOT to include: passwords, API keys, PII, trade secrets.

### 5.2 Be Explicit - No Mind Reading
**Page Goal:** Show that LLMs can't read minds - every requirement must be stated explicitly.
**How:** Before/after comparison. BEFORE: "Make this better" (ambiguous). AFTER: "Rewrite this email to be more professional. Keep it under 200 words. Maintain the same key points: meeting request, time proposal, contact info." Click to see how vague prompts lead to wrong outputs.
**Takeaway:** If you don't specify it, LLM will guess - and might guess wrong.

### 5.3 Give Examples - Few-Shot Learning
**Page Goal:** Show that giving 2-3 examples dramatically improves outputs by showing the pattern.
**How:** Zero-shot vs few-shot comparison. ZERO-SHOT: "Convert these dates to MM/DD/YYYY format: January 5th, March 21st" → inconsistent output. FEW-SHOT: "January 5th → 01/05/2024. March 21st → 03/21/2024. Now convert: December 3rd" → correct format. Show 3 examples vs 1 example vs 0 examples.
**Rule of thumb:** 2-3 examples is usually enough to show the pattern.

### 5.4 Chain-of-Thought - Break It Down
**Page Goal:** Teach "let's think step by step" - LLMs do better when they show reasoning.
**How:** Prompt template with examples. MATH EXAMPLE: BAD: "If I have 3 apples and eat 1, then buy 5 more, how many do I have?" (LLM might guess). GOOD: "Let's think step by step. Step 1: Start with 3 apples. Step 2: Eat 1, so 3-1=2. Step 3: Buy 5 more, so 2+5=7. Answer: 7 apples."
COOKING EXAMPLE (more intuitive): BAD: "How do I make pasta carbonara?" (might skip steps). GOOD: "Walk me through making pasta carbonara step by step. Step 1: Boil water for pasta. Step 2: Fry pancetta until crispy. Step 3: Mix eggs and cheese. Step 4: Combine hot pasta with egg mixture off heat..." Show reasoning helps with planning too.
**🔒 Safety:** Don't include sensitive data in chain-of-thought prompts.

### 5.5 Advanced Patterns & Reference Materials
**Page Goal:** Learn professional techniques: personas, format templates, reference documents.
**How:** Template library. PERSONA: "You are a senior software engineer with 10 years experience..." FORMAT: "Output in JSON format with keys: name, date, amount..." REFERENCES: "Use this style guide for tone and format. Here's the company writing guide: [attached]."
**KEY INSIGHT:** LLMs are excellent at role-playing - they can adopt any persona, speaking style, or perspective. This is one of their strengths - they're "chameleons" that can match whatever tone or voice you specify.
**🔒 Safety:** Prompt injection awareness - what it is, how attackers manipulate prompts, how to sanitize inputs.

### 5.6 Prompt Cheatsheet & Quick Reference
**Page Goal:** Comprehensive quick reference for common prompt patterns.
**How:** Interactive cheatsheet organized by use case: Writing (tone, length, format), Coding (language, framework, constraints), Analysis (focus areas, output format), Business (brand voice, CTA, compliance).
**+ Quiz:** Test prompt engineering skills - given a scenario, choose the best prompt from options.

---

# GROUP 2: ADVANCED - How do we extend LLMs to solve their limitations?

## Chapter 6: Tool Use & Agentic Systems (6 pages)

**Chapter Goal:** Understand how LLMs can use external tools - solving the counting/computation problems from Chapter 4. Learn about MCP (Model Context Protocol) and what makes systems truly "agentic."

### 6.1 What is Tool Use? - LLMs Can Call Functions
**Page Goal:** Show that "tool use" means LLMs can call calculators, search engines, APIs instead of just guessing.
**How:** Before/after comparison. WITHOUT TOOL: "What is 123 × 456?" → LLM guesses "56088" (wrong). WITH TOOL: LLM calls calculator tool → gets "56088" → uses it correctly. Flowchart animation: [LLM needs math] → [decides to use calculator] → [calls function] → [gets result] → [continues response].
**Key insight:** Tools fix the counting problem - LLMs don't compute, they delegate.

### 6.2 Characteristics of Good Agentic Systems
**Page Goal:** Define what makes an AI system truly "agentic" - it's not just using tools, it's being responsive and adaptive.
**How:** Checklist with examples. RESPONSIVENESS: "No, don't do that, do this instead" → agent stops and changes direction. ADAPTIVE: Tool fails → agent tries different tool or approach. SELF-CORRECTING: "That didn't work, let me try another way." GOAL-DIRECTED: Keeps trying until objective is met, not just following fixed steps.
**Diagram:** Simulink-style block diagram showing agent with feedback loop: [Perceive] → [Plan] → [Act] → [Observe Result] → [Update Plan] → [Repeat].

### 6.3 MCP - Model Context Protocol ⭐ NEW
**Page Goal:** Introduce MCP as a standard way for LLMs to connect to external data and tools.
**How:** Two views. TEXT: MCP is like a "USB-C for AI" - standardized plug that lets any LLM connect to any tool/data source. DIAGRAM (Simulink-style): [LLM] ←→ [MCP Server] ←→ [Tools: Database, File System, API, Search]. Show how one MCP server can expose multiple tools. Real example: GitHub MCP server lets LLM read repos, search code, file issues.
**Takeaway:** MCP makes it easy to build agentic systems without custom integrations.

### 6.4 Interactive Example - Building a Simple Agent
**Page Goal:** Walk through building a basic agent with Duolingo-style choices.
**How:** Step-by-step builder with button choices. Step 1: Choose task - [Research Agent] or [Code Assistant]. Step 2: Add tools - [Web Search], [Calculator], [File Reader]. Step 3: Test - see agent use tools in action. Step 4: Refine - adjust prompt, see behavior change. Each step is predefined interaction, not free-typing.

### 6.5 When Tools Go Wrong - Common Failures
**Page Goal:** Show common failure modes: circular calling, wrong tools, infinite loops, getting stuck.
**How:** Bug gallery with click-to-reveal. BUG 1: "Agent that searches forever" - search tool returns results, agent searches again instead of answering (loop). BUG 2: "Calculator that loops" - tries to calculate, gets error, tries exact same thing again instead of stopping. BUG 3: "Wrong tool for the job" - uses calculator when should use search, or vice versa.
**Debug walkthrough:** Show how to add "stop conditions" and "fallback strategies."

### 6.6 Tool Use Best Practices & Testing
**Page Goal:** Practical guidelines for building reliable tool-using systems.
**How:** Dos and don'ts checklist. DO: Define clear tool purposes, add timeout limits, handle errors gracefully, log tool calls for debugging. DON'T: Let agents run unchecked, assume tools always work, allow circular dependencies.
**Testing framework:** How to test agentic systems - unit test each tool, integration test combinations, monitor for loops.

**+ Quiz:** Check understanding of tool use, MCP, agentic characteristics, and failure modes.

---

## Chapter 7: RAG & Context Engineering (7 pages)

**Chapter Goal:** Learn how Retrieval-Augmented Generation gives LLMs access to your knowledge - solving the hallucination problem. The lawyer case study motivates the whole chapter.

### 7.1 Motivation: The Lawyer with 20 Years of Experience ⭐ NEW
**Page Goal:** Establish a concrete case for why RAG is needed - context window can't fit all knowledge.
**How:** Scenario: Lawyer has handled 500+ cases over 20 years. Client asks: "Have you dealt with a situation similar to mine?" Problem: Even the case summaries would exceed 200K tokens. Can't just "put it all in the prompt." Solution: What if LLM could automatically find and read only the relevant 3-5 similar cases?
**Takeaway:** When you have too much knowledge for the context window, you need RAG.

### 7.2 What Really is RAG? - Search + LLM
**Page Goal:** Explain RAG clearly - retrieve relevant documents, then answer based on them.
**How:** Flowchart animation: [Question: "What did we decide about remote work?"] → [Search database of company docs] → [Find 3 most relevant docs] → [Add docs to prompt] → [LLM answers using those docs]. Before/after: WITHOUT RAG: LLM guesses/hallucinates. WITH RAG: LLM answers based on actual documents.
**Key insight:** RAG = search engine + LLM, combined.

### 7.3 Vector Databases - Storing Meaning, Not Words ⭐ EXPANDED
**Page Goal:** Teach that vector databases store embeddings (distance representations) for fast semantic search.
**How:** Visual explanation. Step 1: Documents → embeddings (numbers representing meaning). Step 2: Embeddings → vectors in multi-dimensional space. Step 3: When searching, convert query to embedding, find "closest" documents by distance. Interactive: Click "search for: company vacation policy" and watch it find documents about PTO, time off, holidays - even though those words aren't in the search.
**Takeaway:** Vector DBs search by MEANING, not keywords.

### 7.4 Context vs Knowledge - What's the Difference?
**Page Goal:** Clarify: context = what you send each time, knowledge = what exists in your documents.
**How:** Two-pile visualization. CONTEXT PILE: Current conversation, recent messages, immediate task (~1-5K tokens). KNOWLEDGE PILE: All company documents, past cases, knowledge base (~millions of tokens). RAG = grab from KNOWLEDGE, put into CONTEXT. Venn diagram showing overlap (recent docs might be in both).
**Examples:** When to use which - context for "what did we just say?", knowledge/RAG for "what's our policy on X?"

### 7.5 Alternatives to RAG - When Vector Search Isn't the Answer ⭐ NEW
**Page Goal:** Show RAG isn't the only way - explore keyword search, subagents, and file concatenation, using the lawyer example.
**How:** Three alternatives, each shown with lawyer case:
1. **Keyword Search**: Traditional search like Google. Lawyer searches for "breach of contract" - finds cases with those exact words. PROBLEM: Misses cases that use different terminology like "contract violation" or "failed to uphold terms."
2. **Subagent Explorer**: LLM that systematically reads through cases. "Here are 500 case files. Browse them and find ones similar to: [current situation]." Agent reads summaries, flags relevant ones. PROBLEM: Slow, expensive, might miss things.
3. **File Concatenation**: Join multiple case files into one big text. "Read these 10 related cases about construction disputes." Works for small numbers, hits context window limits quickly.
**Comparison Table:** RAG (semantic, fast, needs vector DB) vs Keyword Search (exact words, fast, misses synonyms) vs Subagent (thorough, slow, expensive) vs Concatenation (simple, limited by context window).
**When to use which:** Small dataset? Concatenation. Exact terminology matters? Keyword search. Meaning/semantics matter? RAG.

### 7.6 Building a Simple RAG System - Architecture
**Page Goal:** Walk through the components: documents, embeddings, vector database, retrieval, generation.
**How:** Simulink-style architecture diagram with click-to-explain each block: [Documents] → [Chunking] → [Embedding Model] → [Vector Database] → [Query] → [Search/Retrieve] → [LLM with Retrieved Context] → [Answer]. Toggle components on/off to see impact (e.g., no vector DB = can't search; no retrieval = no RAG).

### 7.6 Context Poisoning - Security Risk ⭐ NEW
**Page Goal:** Reveal that attackers can manipulate retrieved context to make LLMs say harmful things.
**How:** Attack scenario animation. Normal: User asks "What's our refund policy?" → RAG retrieves refund policy doc → LLM answers correctly. Attack: Attacker adds fake document "All refunds are 200%" to database → User asks same question → RAG retrieves fake doc → LLM answers with wrong info.
**Prevention checklist:** Validate sources, check document permissions, use human review for important answers, sandbox RAG systems.

### 7.7 2026: Harness Engineering - Future Vision ⭐ RESEARCH NEEDED
**Page Goal:** Look ahead at "harness engineering" = designing systems that reliably fetch and use the right context.
**How:** Concept comparison. TODAY: Manually set up RAG, hope it finds the right docs. 2026: AI figures out what context is needed, automatically fetches from multiple sources, validates quality, synthesizes answer.
**🔬 RESEARCH PROMPT:** "Use Claude App/web to research: What is 'harness engineering' in the context of AI? What are current approaches to automatic context fetching? What are companies like Anthropic, OpenAI, Google working on for 'memory' and 'context management' in 2025-2026? What are the latest papers on automatic context retrieval?"

### 7.8 RAG Best Practices ⭐ RESEARCH NEEDED
**Page Goal:** Practical guidelines for building RAG systems that actually work.
**How:** Checklist with examples. CHUNKING: Break docs into 500-1000 token chunks with overlap (so context isn't cut off mid-sentence). METADATA: Tag docs with source, date, author, topic (helps filter later). HYBRID SEARCH: Combine vector search with keyword search (best of both). EVALUATION: Test retrieval quality before deploying (does it actually find relevant docs?). HUMAN IN LOOP: Important answers need review.
**🔬 RESEARCH PROMPT:** "Use Claude App/web to research: What are the current best practices for RAG systems in 2025? What chunking strategies work best? How do teams evaluate RAG quality? What are the common pitfalls and how to avoid them? Look for recent blog posts from companies building RAG at scale."

**+ Quiz:** Check understanding of RAG, vector databases, context poisoning, and when to use RAG.

---

## Chapter 8: Memory & Personalization (4 pages)

**Chapter Goal:** Understand why LLMs don't remember you - and what companies are trying to do about it.

### 8.1 Why LLMs Don't Remember You
**Page Goal:** Reveal that each conversation is stateless - the LLM has no persistent memory of you.
**How:** Visual metaphor. Each chat session = blank slate. Show ChatGPT/Claude "memory" as just more text in the prompt - not actual remembering. Contrast with humans who form memories (brain changes) vs LLMs (just reread transcripts).
**Takeaway:** LLMs don't "know" you - they reread what you told them.

### 8.2 What Companies Are Trying - Memory Features
**Page Goal:** Show current attempts at "memory": automatic context fetching, user profiles, conversation summaries.
**How:** Diagram: [User Profile: "I'm a software engineer, prefer concise answers"] + [Conversation History: "We discussed X last time"] → [Context auto-injected into prompt]. Examples from Claude's "Projects" feature, ChatGPT's "Memory," etc. Show how it's still just prompt engineering, not real memory.

### 8.3 Why It's Not There Yet - Core Problem Unolved ⭐ REVISED
**Page Goal:** Explain the fundamental challenge: we still haven't solved how to fetch ONLY the relevant information - like the lawyer needing exactly the right 3 cases out of 500.
**How:** The lawyer's dilemma illustrated. Lawyer asks: "Have you dealt with construction delay cases like mine?" System has 500 cases. CURRENT APPROACHES: Keyword search (might miss relevant cases), vector similarity (finds "similar" but maybe not the RIGHT ones), recent summaries (might miss the old but perfect case), user profile tags (too coarse). THE CORE PROBLEM: How does the system KNOW which 3 cases are actually relevant? It's not just about "similar text" - it's about legal strategy, outcome relevance, jurisdiction, precedent value.
**Trade-offs:** More memory = more cost (storage + compute), privacy risks (what's stored?), noise (irrelevant old info distracts). The "context budget" problem - every token used for memory is a token not available for the current task.

### 8.4 The Future of Memory + Code "Injection" Problems ⭐ EXPANDED
**Page Goal:** Two topics: (1) Future of memory systems, (2) Why "vibe coding" breaks down as projects grow.
**How:** PART 1 - Memory Vision: Personal AI "brain" examples like **OpenCanvas** (OpenAI's iterative workspace) - systems that maintain context across sessions, remember your preferences, build on previous work. Challenges: Privacy (who controls your memory?), Security (memory poisoning), Technical (how to determine relevance?).
**PART 2 - Vibe Coding Problems:** When you use AI to generate code without understanding structure:
- **Don't know where to put code:** Files grow, functions get scattered, no clear organization
- **Similar code already exists:** LLM creates "phantom code" - slightly different versions of the same functionality
- **Incomplete duplicates:** Functions that look similar but have subtle differences, or are 80% complete but missing the last 20%
- **Hard to debug:** When something breaks, you don't know what depends on what
**Metaphor:** Vibe coding = borrowing money with high interest. Fast at first, crippling debt later.
**🔒 Safety:** Privacy implications - what data is stored, who can see it, how to delete it, right to be forgotten.

**+ Quiz:** Check understanding of LLM memory, why it's limited, and privacy concerns.

---

## Chapter 9: Beyond Text - Brief Mention (2 pages)

**Chapter Goal:** Acknowledge that modern LLMs handle images, documents, and audio - but keep it brief.

### 9.1 LLMs Aren't Just Text Anymore - Multimodal AI
**Page Goal:** Quick overview of multimodal capabilities - understanding vs generating are different.
**How:** Visual gallery with emoji icons. 📷 **Understanding Images:** "Describe this photo" or "What's in this image?" ✨ **Generating Images:** SEPARATE model (DALL-E, Midjourney) - LLM can't generate images natively! 📄 **Documents:** "Summarize this PDF" - but PDF is proprietary, needs special tool 🎤 **Voice/Audio:** "Transcribe this audio" 📹 **Video:** "Explain what's happening"
**Key insight:** Some models (like **Gemini Embedding 2**) project images, video, audio, AND text into the SAME embedding space - meaning you can search "find pictures similar to this text" or "find text similar to this image."

### 9.2 When to Use Multimodal & The "File Format Trap" ⭐ REVISED
**Page Goal:** Guidance on when to use multimodal, and why file formats matter.
**How:** UI DESIGN EXAMPLE: "Review this mobile app design and suggest improvements" - multimodal lets you upload screenshots and get feedback on layout, color, accessibility. Text-only would require you to describe the screen verbally.
**THE FILE FORMAT TRAP:** LLMs excel at manipulating TEXT. Markdown (.md), plain text (.txt) = tiny files, LLM can read directly. But Word docs (.docx) = 5KB for same content, proprietary format, needs special tool. PPT, Excel, PDF = same issue. The content is text, but the FILE format is proprietary.
**Rule of thumb:** Use simple formats (md, txt, csv) when working with LLMs. proprietary formats (docx, xlsx, pdf) require converters/tools.

**+ Quiz:** Quick check on multimodal awareness and safety.

---

# GROUP 3: BUSINESS - How do I use this in my business?

## Chapter 10: The LLM Landscape (6 pages)

**Chapter Goal:** Now that you understand how LLMs work, navigate the marketplace of options and make informed choices.

**⚠️ NOTE:** Model information changes rapidly. Some details below (GPT-4o, 4.1 mini) may be outdated by the time you read this.
**🔬 RESEARCH PROMPT:** "Use Claude App/web to research: What are the current Claude model tiers as of early 2026? What are the current OpenAI model tiers (GPT-5, etc.)? What are the latest Gemini model options? What are the current pricing and capabilities for each tier? Include context window sizes, costs per million tokens, and key differentiators."

### 10.1 Who's Who in LLMs - Major Players
**Page Goal:** Map the major players and their strengths.
**How:** Visual landscape map. OpenAI: Most capable, expensive. Anthropic (Claude): Safety-focused, long context, "will call out your BS" style. Google (Gemini): Integrated with Google workspace, strong multimodal. Meta (Llama): Open-source, self-hostable. xAI (Grok): Real-time info, uncensored. Chinese open-source (GLM, Kimi, DeepSeek, Qwen): Free but require setup.

### 10.2 Model Sizes & Costs - When to Use What
**Page Goal:** Explain the trade-off: bigger models = smarter but slower/more expensive.
**How:** Comparison table with concrete guidance. Each provider has tiers: [FLAGSHIP/Opus/GPT-5]: Hardest tasks, most expensive. [MID-TIER/Sonnet]: Most tasks, sweet spot. [FAST/Haiku/Mini]: Simple tasks, cheapest.
**Decision flowchart:** Start with mid-tier, upgrade only if needed. Downgrade if speed/cost is priority and task is simple.

### 10.3 Open Source vs Closed Source - The Trade-offs
**Page Goal:** Compare hosted APIs (OpenAI, Anthropic) vs self-hosted open-source (Llama, Qwen).
**How:** Trade-off table. HOSTED (OpenAI/Claude): Easy, reliable, no maintenance, pay per use, data goes to their servers. Great for: starting out, variable workloads, no infra expertise. SELF-HOSTED (Llama/Qwen): Free after hardware, data stays private, full control, requires expertise, maintenance burden. Great for: high volume, privacy requirements, existing infra team.
**The reality:** Self-hosting SEEMS cheaper ("free!") but has hidden costs - hardware, setup, maintenance, monitoring, updates. Usually only makes sense at significant scale or with strict privacy needs.

### 10.4 Web UI vs API - When to Use Which
**Page Goal:** Clarify when to use chat interfaces (ad-hoc, exploration) vs APIs (integration, automation).
**How:** Decision tree. WEB UI: Learning, brainstorming, one-off tasks, exploration, when you don't know what you want yet. API: Repeated tasks, integration into products, automation, when you know the exact use case. Examples: "Use web UI for: writing emails, learning coding. Use API for: customer support bot, document analysis pipeline."

### 10.5 Rate Limits & Scaling - Business Considerations
**Page Goal:** Introduce business considerations: requests per minute, monthly quotas, enterprise needs.
**How:** Visual comparison. Free tier: Limited requests, slower, good for testing. Pro tier: Higher limits, faster, good for small business. Enterprise: Custom limits, priority support, SLAs, dedicated capacity. When to upgrade: You're hitting limits consistently, need reliability, have compliance requirements.

### 10.6 Choosing Your Model - Thought Exercise ⭐ REVISED
**Page Goal:** A thinking exercise to evaluate models against YOUR specific needs - not telling you what to use.
**How:** Interactive evaluation framework with multiple dimensions (click to rate each dimension 1-5):
- **Speed**: How fast do you need responses? (Real-time chat vs overnight batch job)
- **Ease of Use**: Plug-and-play or willing to integrate APIs?
- **Truthfulness**: Does it BS you or call out errors? (Claude known for this)
- **Censorship**: Need uncensored output or safety guardrails?
- **Knowledge Cutoff**: Does it know recent events? (Model training date matters)
- **Domain Fit**: Is it trained on your domain's data? (Code models vs general models)
- **Hallucination Rate**: Does it invent facts or admit ignorance?
- **Question Clarity**: Does it ask clarifying questions or make assumptions?
- **Requirement Adherence**: Does it follow your instructions precisely?
- **Long Conversations**: Can it maintain context across long interactions?
- **Cost per Token**: What's your budget? (Free tier vs enterprise)
- **Context Window**: Need to process long documents? (128K vs 1M tokens)

**Output:** A personalized profile of YOUR priorities - then match that to model strengths. No "use model X" - instead, "here's what matters to you, here's how different models score."

**+ Quiz:** Check understanding of model selection and trade-offs.

---

## Chapter 11: To Automate or Not? (7 pages)

**Chapter Goal:** Learn when to use RPA (rule-based automation), LLMs (flexible AI), or hybrid approaches. Understanding your business is the foundation.

### 11.1 Business Understanding First - The Foundation ⭐ NEW
**Page Goal:** Emphasize that good automation decisions start with understanding your business processes.
**How:** Key questions with examples. Does your business have CLEAR right/wrong answers or flows? Can you verbalize the work in detail? Can you put it into a flowchart? If you can't explain the process, you can't automate it.
**Example:** "Our refund process is: check if within 30 days, verify receipt, check if product used, approve or deny based on policy." = Clear flow = can automate. "Handle upset customers appropriately" = Vague = harder to automate.
**Takeaway:** The ceiling of automation is your understanding of the business.

### 11.2 What is RPA? - Robotic Process Automation ⭐ CLARIFIED
**Page Goal:** Define RPA clearly - rule-based, deterministic automation of repetitive tasks.
**How:** Simple definition + concrete example. DEFINITION: RPA = software robots that follow exact, predefined rules. "If this happens, then do that." Every time.
**TWO TYPES OF RPA:** 1) Click-based (UI automation): Software that "clicks" buttons and fills forms like a human. 2) Programming-based: Direct API/database integration, more reliable.
**EXAMPLE:** "Copy data from invoice spreadsheet to accounting system." RPA reads row 1, copies cells A, C, E, pastes to accounting system. Repeats for all 1000 rows. If format changes, RPA breaks - it can't adapt.
**CHARACTERISTIC:** Rigid, hard to modify, but reliable for stable processes.
**Flowchart:** If-then-else diagram showing RPA's rigid logic.

### 11.3 What is Agentic AI? - LLM-Powered Flexibility ⭐ CLARIFIED
**Page Goal:** Define agentic AI - LLM-powered systems that handle ambiguity and make decisions.
**How:** Definition + contrast with RPA. DEFINITION: Agentic AI = LLM-powered systems that understand context, handle exceptions, make decisions, adapt to changes. EXAMPLE: "Respond to customer email about refund request." Agentic AI reads email, understands tone (angry vs confused), checks policy, decides whether to approve or escalate, crafts appropriate response.
**Diagram:** Simulink-style showing fuzzy decision-making vs RPA's rigid rules.

### 11.4 OCR - When LLMs Read Images ⭐ NEW
**Page Goal:** Introduce OCR (Optical Character Recognition) - a common hybrid use case.
**How:** Definition: OCR = converting images of text into actual text. EXAMPLE: "Here's a photo of a receipt" → OCR extracts "Item: Coffee, Price: $5.50, Date: 2024-03-15" as editable text.
**HYBRID USE CASE:** RPA handles the workflow (process 1000 invoices through accounting system), LLM+OCR handles just the messy part (reading varied invoice formats and extracting data). RPA does the reliable logic, LLM handles the fuzzy input.
**Takeaway:** OCR is often the "bridge" that lets LLMs work with physical documents.

### 11.5 RPA vs Agentic - Venn Diagram Comparison
**Page Goal:** Show where each shines and where they overlap (hybrid).
**How:** Interactive Venn diagram. RPA ZONE: High-volume repetitive tasks, rules-based, no exceptions, 100% accuracy required. Examples: Data entry, invoice processing, scheduled reports. AGENTIC ZONE: Variable input, creative output, exception handling, human-like communication. Examples: Customer support, content generation, research. OVERLAP (HYBRID): RPA for routine, LLM for exceptions.

### 11.6 Agentic Architectures - Sync, Hierarchical, Orchestrator ⭐ NEW
**Page Goal:** Introduce common patterns for multi-agent systems.
**How:** Three architectures with Simulink-style diagrams:
1. **Sync Agents**: Agents work in parallel on different aspects. Example: Research agent gathers info, Writing agent drafts, Editing agent reviews - all simultaneously.
2. **Hierarchical Agents**: Manager agent coordinates worker agents. Example: Project manager breaks task into subtasks, assigns to specialist agents, collects results.
3. **Orchestrator Agent**: Central router decides which agent handles each request. Example: User asks question → Orchestrator routes to [Code agent] vs [Writing agent] vs [Search agent] based on content.
**When to use which:** Parallel for speed, hierarchical for complex tasks, orchestrator for routing.

### 11.7 When to Use RPA vs LLMs - Decision Criteria
**Page Goal:** Clear criteria for when each approach is right.
**How:** Two checklists. USE RPA WHEN: Task is well-defined, rules are clear, no ambiguity, high volume (1000+/day), errors are unacceptable, input format is consistent. EXAMPLES: Payroll processing, data migration, form filling. Cost-benefit: High upfront, near-zero marginal cost.
USE LLMS WHEN: Input varies widely, creativity needed, exceptions are common, tone/judgment matters, task is fuzzy. EXAMPLES: Customer support, content creation, research. Trade-offs: Higher per-use cost, less predictable.

### 11.8 Full Agentic or Human-in-Loop? ⭐ NEW
**Page Goal:** Discuss the reality: most businesses want human verification, not full autonomy.
**How:** Two approaches. FULL AGENTIC: AI runs autonomously, makes decisions, takes actions. RISKY for important business decisions. HUMAN-IN-LOOP: AI proposes, human approves. AI drafts, human edits. AI routes, human handles exceptions.
**TRANSPARENCY & MONITORING:** How do you know what the AI did? Logging every action, traceability (decision → agent → tool → result), dashboards showing agent activity, audit trails for compliance.
**THE REALITY:** Near future = human-in-loop for most business use cases. Full autonomy = limited to well-contained, low-risk tasks.

### 11.9 Software Transitions - How to Switch from A to B ⭐ NEW
**Page Goal:** Explain how to transition from one software system to another (e.g., ERP providers).
**How:** The migration challenge. EXAMPLE: Company wants to switch from SAP to Oracle for ERP. Can't just "flip a switch." Migration process: 1) Export data from old system, 2) Clean and transform data, 3) Import to new system, 4) Train users, 5) Run parallel (both systems) for verification, 6) Cutover, 7) Decommission old system.
**LLM's role in migration:** LLMs can help with data transformation (map old fields to new fields), documentation generation, training material creation, testing new workflows.
**Key insight:** Software transitions are complex, multi-month projects. LLMs help but don't eliminate the complexity.

**+ Quiz:** Scenario-based decision practice. "Company needs to process 500 invoices/day. Format is standardized. What should they use?" etc.

---

## Chapter 12: Business Understanding First (4 pages)

**Chapter Goal:** Teach that you can't automate what you don't understand - business process understanding must precede AI implementation.

### 12.1 You Can't Automate What You Don't Understand
**Page Goal:** Emphasize that successful automation starts with deep understanding of the current process. The ceiling is often YOUR understanding of the business.
**How:** Cautionary tale with animation. Company automates "customer refund process" without understanding it. Turns out process was broken - wrong forms, missing approvals, customers unhappy. Result: Automated broken process = faster disaster, now at scale.
**Visual:** [Broken Process] + [Automation] = [Automated Disaster]. [Understand Process] → [Fix It] → [Then Automate] = [Success].
**KEY MESSAGE:** Don't treat AI like a genie - it can't grant wishes you can't articulate. You need to understand your business before you can improve it.

### 12.2 Map Before You Build - Process Mapping + Cheat Sheet ⭐ EXPANDED
**Page Goal:** Teach process mapping and provide a cheat sheet for investigating any business process.
**How:** Process mapping example + QUESTIONS CHEAT SHEET.
**EXAMPLE:** "Customer refund request" flow. Step 1: Customer emails support. Step 2: Support checks account. Step 3: Support checks refund policy. Step 4: Support approves or escalates. Step 5: Finance processes refund. Step 6: Customer notified.

**CHEAT SHEET - Questions to ask when investigating ANY process:**
- What triggers this process? (How does it start?)
- Who does this work? (Role, team, department)
- What tools/systems do they use? (Software, spreadsheets, paper?)
- What are the steps? (Can you write them down?)
- What are the exceptions? (What happens when things go wrong?)
- What are the decisions/gateways? (Who approves? What criteria?)
- What does "good" look like? (Success metrics)
- What does "bad" look like? (Failure modes)
- What are the handoffs? (Where does work pass between people/teams?)
- What data is involved? (Inputs, outputs, formats)

**Interactive:** Click each question to see why it matters for automation.

### 12.3 The Software Change Flowchart - Repeatable Framework ⭐ EXPANDED
**Page Goal:** Show how businesses effectively implement software changes - a repeatable framework.
**How:** Visual flowchart with click-to-explain each step:
1. UNDERSTAND CURRENT STATE: What happens now? Map processes. Identify pain points.
2. MAP PROCESSES: Document how work actually flows. Find handoffs and exceptions.
3. IDENTIFY OPPORTUNITIES: What could AI help with? What should stay human?
4. DESIGN SOLUTION: Choose RPA vs LLM vs hybrid. Architecture. Safety measures.
5. PROTOTYPE: Small-scale test. Learn and adjust.
6. TEST: Verify it works. Test edge cases.
7. PILOT: Roll out to small group. Monitor.
8. DEPLOY: Full rollout. Training. Documentation.
9. MONITOR: Track metrics. Catch issues early.
10. ITERATE: Improve based on feedback.

**Key point:** AI changes the last mile (execution), not the first three (understanding, mapping, identifying).

### 12.4 Business Understanding Checklist
**Page Goal:** Pre-automation checklist to ensure you're ready.
**How:** Questions to answer before building. Who does this work? How often? What are the exceptions? What does "good" look like? How do we measure success? What are the risks? What happens if it fails? Who needs to approve?
**+ Quiz:** Case study - "Company wants to automate customer support. Should they?" (Requires analyzing whether they understand their current support process).

---

## Chapter 13: Project Management for AI (6 pages)

**Chapter Goal:** Understand how to run AI projects successfully - traceability, technical debt, and why "vibe coding" creates problems that compound over time.

### 13.1 V-Model & Agile for LLM Projects
**Page Goal:** Introduce development methodologies adapted for AI: iterative testing, continuous evaluation.
**How:** V-Model visualization adapted for LLMs. Left side: Requirements → Design → Implementation. Right side: Testing → Validation → Verification (parallel to each dev stage). Key addition: EVALUATION at each stage - LLMs are non-deterministic, need continuous testing. Agile sprints for prompt refinement, not just features.

### 13.2 Requirements-Driven Modeling - Spec Kits, BMAD
**Page Goal:** Teach clear requirement definition before building - like system design specs.
**How:** Template with filled example. TEMPLATE: "As a [USER ROLE], I need [CAPABILITY], so that [OUTCOME]. INPUT: [what goes in]. OUTPUT: [what comes out]. CONSTRAINTS: [limits/safety]. SUCCESS CRITERIA: [how we know it works]."
**EXAMPLE:** "As a customer support agent, I need AI to draft email responses, so that I can respond faster. Input: Customer email + company policy. Output: Draft response. Constraints: Must cite policy, must not promise refunds. Success: 80% of drafts usable with minor edits."

### 13.3 Traceability & Technical Debt - Orders, Linkage, Deliberate Work ⭐ NEW
**Page Goal:** Introduce traceability - tasks and designs have orders and linkages. Work should be deliberate, not random.
**How:** The problem with "vibe coding": AI generates code quickly, but without understanding structure. Files grow, functions scatter, similar code appears in multiple places (phantom code), dependencies become unclear.
**TRACEABILITY:** Every feature should trace back to a requirement. Every function should have a clear purpose. Every dependency should be documented.
**THE BORROWED MONEY METAPHOR:** Vibe coding = borrowing money with high interest. Fast at first, but technical debt accumulates. Fixing problems later is 10x harder than building correctly the first time.
**The AI speed trap:** We run SO MUCH FASTER with AI. If you build on a bad foundation, you're building a skyscraper on quicksand. By the time you realize the foundation is wrong, you've already built 10 floors. Fixing the foundation now means tearing down those 10 floors.

### 13.4 AI-Driven Review - Catching AI's Mistakes ⭐ REVISED
**Page Goal:** How to use AI to review AI outputs - focusing on code quality issues.
**How:** Automated checking for common AI-generated code problems:
- **Lint check disabled:** Did AI add `// eslint-disable` instead of fixing the actual lint error?
- **Test cheating:** Did AI write tests that always pass (hardcoded values, no real assertions)?
- **Phantom code:** Functions that look similar but have subtle differences, or 80% complete duplicates
- **Dead code:** Functions that are NEVER called anywhere in the codebase
- **Security issues:** Hardcoded secrets, SQL injection vulnerabilities, missing input validation
- **Inconsistency:** Same thing done 5 different ways (no consistent patterns)

**Review framework:** Use AI to scan for these issues, but have human review the findings. False positives exist.

### 13.5 Why Project Management Matters More Than Ever
**Page Goal:** Show that AI projects have unique risks: hallucination, cost overruns, unpredictable behavior.
**How:** Risk matrix specific to LLM projects. RISKS: Hallucination (wrong info), Cost (token usage adds up), Unpredictability (same prompt → different outputs), Security (data exposure), Bias (unfair outputs). PM TACTICS: Testing frameworks, budget caps, human-in-the-loop, monitoring dashboards, rollback plans.
**Takeaway:** You can't "set and forget" AI projects - they need active management.

### 13.6 Checklist & Cheatsheet
**Page Goal:** Pre-project checklist and quick reference for managing AI projects.
**How:** Interactive checklist with phases. PLANNING: Requirements defined, stakeholders aligned, budget set. BUILDING: Architecture designed, safety measures added, testing planned, traceability documented. TESTING: Unit tests pass, integration tests pass, human review done, AI review for code quality issues. DEPLOYING: Monitoring set up, rollback plan ready, documentation complete. MONITORING: Metrics tracked, issues logged, improvements planned.

**+ Quiz:** Project management scenario - "An AI project is going over budget and outputs are inconsistent. What do you do?" Multiple choice with reasoning.

---

# About & Resources Pages

## About Page
- Your bio, photo, consulting services offered
- Why you built this tutorial (to help businesses understand AI without hype)
- Your expertise and experience
- Email contact: [your email]

## Resources Page

**Cheatsheets:**
- **Prompt Framework Cheatsheet:** Goal, Context, Input, Output, Constraints, References - fill-in-the-blank template
- **Model Selection Cheatsheet:** Opus vs Sonnet vs Haiku, GPT-4o vs 4.1-mini - when to use which
- **RPA vs Agentic Decision Tree:** Flowchart for choosing automation approach
- **Pre-Project Checklist:** Business understanding, requirements, risks before building

**Checklists:**
- **Safety & Privacy Checklist:** What NOT to share (passwords, PII, trade secrets), what's safe for RAG, upload guidelines
- **RAG Implementation Checklist:** Documents, chunking, embeddings, vector DB, retrieval, testing
- **AI Project Management Checklist:** Planning, building, testing, deploying, monitoring

**Templates:**
- **Prompt Templates:** By use case - writing (tone, length, format), coding (language, framework), analysis (focus areas), business (brand voice, CTA)
- **Process Mapping Template:** Step-by-step template for documenting business processes
- **Requirements Template:** Spec Kit format - user, need, outcome, inputs, outputs, constraints, success criteria

---

# Pedagogical Narrative Arc

**Group 1 (Basics):** "What is this thing and what can't it do?"
- Distance concept → Tokenization → Attention → **Black box revealed** → **Limitations (statistical, not intelligent)** → Effective prompting

**Group 2 (Advanced):** "How do we solve those problems?"
- Tools (for counting) → RAG with vector DBs (for hallucinations/lawyer case) → Memory (for forgetting)

**Group 3 (Business):** "How do I actually use this effectively?"
- Know the landscape → **RPA vs Agentic (clear definitions)** → **Understand business first** → Manage the project

---

# Key Design Principles

1. **⭐ PREDEFINED INTERACTIONS (Critical):** All interactions are button choices, hover reveals, tap cards, sliders - NO free-typing, NO open-ended input. Think Duolingo, not ChatGPT.
2. **Concrete Examples:** Use real content (Harry Potter, LOTR, "Roses are red", lawyer case study, cooking, OCR) instead of abstract concepts
3. **Distance Concept:** Word distance + sentence distance = how LLMs understand meaning and generate text
4. **Statistical Machine Narrative:** Emphasize LLMs are statistical pattern-matchers, not intelligent beings (randomness, temperature)
5. **Simulink-Style Diagrams:** Functional block diagrams for system architecture (agentic, RAG, OCR)
6. **Motivation Before Solution:** Lawyer case (Ch 7.1) establishes the need before explaining RAG
7. **Business Reality Check:** RPA rigidity, OCR hybrid use, human-in-loop necessity, software transitions
8. **Technical Debt Awareness:** Vibe coding dangers, traceability importance, phantom code problems

---

# Safety & Privacy Distribution

Integrated throughout relevant chapters with 🔒 markers:
- **Ch 3:** What the AI sees - don't share secrets in chat
- **Ch 4:** Statistical nature - why you can't trust LLM for critical facts
- **Ch 5:** What's safe to ask LLMs (no passwords, PII, trade secrets)
- **Ch 7:** Context poisoning prevention, what documents are safe for RAG
- **Ch 8:** Privacy implications of persistent memory
- **Ch 9:** Face recognition, document redaction concerns (what's safe to upload)
- **Ch 10:** Enterprise privacy, data retention policies

---

# Chapter Changes Summary

| Chapter | Changes | Why |
|---------|---------|-----|
| 1.1 | "Roses are red" animation, autocomplete×999 message | Concrete example, clear message |
| 1.2 | Added word distance illustration | Foundation for how LLMs work |
| 1.4 | Added sentence distance concept | Extend distance to sentences |
| 1.5 | Combined word+sentence distance, connected to generation | Tie it all together |
| 2.2 | Arrows to ALL words, important ones thicker/darker | Accurate attention visualization |
| 2.3 | Concrete example with buttons | Make it tangible |
| 2.4 | Explained "how exactly" - cross-sentence attention | Make it concrete |
| 2.5 | Actual paragraph, token count, LOTR/article comparison | Real examples, not abstract |
| 2.6 | REMOVED - moved to Ch 4.6 | Consolidate context window limits |
| 3.1 | Chat Illusion MOVED TO FIRST | Establish illusion upfront |
| 3.2 | Simulink-style block diagram | Functional view |
| 3.4 | Renamed, added CoT/few-shot | Complete hidden patterns picture |
| 3.5 | Moved "LLM forget" to Ch 4 | Consolidate limitations |
| 4 | EXPANDED from 4 to 7 pages | Added randomness, temperature, context poisoning, quiz |
| 4.3 | NEW: Randomness & Temperature | Statistical machine emphasis |
| 4.5 | NEW: Context Poisoning | Security risk |
| 4.6 | NEW: What happens when context is full | Moved from Ch 2.6 |
| 4.7 | NEW: Good at vs Bad at summary | Clear strength/weakness picture |
| 5.4 | Added cooking example for chain-of-thought | More intuitive |
| 5.5 | Emphasized LLM role-playing strength | Key insight |
| 7.5 | NEW: RAG alternatives (keyword, subagent, concat) | Rooted in lawyer example |
| 7.6 | RAG architecture diagram | Make it concrete |
| 7.7-7.8 | Added research prompts for future/best practices | Content needs research |
| 8.3 | Revised - core problem unsolved (relevant info retrieval) | Honest assessment |
| 8.4 | Added OpenCanvas, vibe coding problems, phantom code | Real-world issues |
| 9.1 | Clarified understanding ≠ generating images, Gemini Embedding 2 | Accurate multimodal info |
| 9.2 | UI design example, file format trap (.md vs Word) | Practical knowledge |
| 10.1 | Added research prompt for current models | Model info changes fast |
| 10.3 | Simplified trade-offs, removed "quadratic" jargon | Clearer explanation |
| 10.6 | Thought exercise with 12 evaluation dimensions | Not telling them what to use |
| 11.1 | NEW: Business understanding first | Foundation for automation |
| 11.2 | Added RPA types (click-based, programming-based) | More complete picture |
| 11.4 | NEW: OCR introduction | Common hybrid use case |
| 11.6 | NEW: Agentic architectures (sync, hierarchical, orchestrator) | Multi-agent patterns |
| 11.8 | NEW: Human-in-loop, transparency, monitoring | Real-world business needs |
| 11.9 | NEW: Software transitions (ERP example) | Practical migration knowledge |
| 12.1 | Added "don't treat AI like a genie" | Important mindset |
| 12.2 | Added 10-question cheat sheet for process investigation | Practical tool |
| 13.3 | NEW: Traceability, technical debt, vibe coding metaphor | AI speed trap |
| 13.4 | REVISED: AI review for code quality issues | Practical code review |
| 13.5 | Added "fast but fragile foundation" concept | AI speed compound risk |

---

**Total: 70 pages (up from 67) - added OCR, agentic architectures, human-in-loop, software transitions, traceability, AI code review.**
