# LLM Tutorial Site - Content Overview

**Total: 3 Groups, 13 Chapters, ~63 Pages**

---

# GROUP 1: BASICS - What are LLMs and what can't they do?

## Chapter 1: Intuition - How LLMs "Think" (5 pages)

**Chapter Goal:** Build intuitive mental models of how LLMs work through playful, interactive examples that demystify "AI thinking."

### 1.1 Keyboard Autocomplete → LLM Prediction
**Goal:** Show that LLMs are just "fancy autocomplete" - demystify the magic.
**How:** Side-by-side comparison: phone autocomplete vs LLM completion. Interactive - type a phrase, see both predict next words.

### 1.2 Word Similarity - Which Word Doesn't Belong?
**Goal:** Introduce the concept that LLMs understand words as "points in space" (embeddings) where similar words cluster together.
**How:** Interactive quiz - lion, dog, cat, turkey. Reveal: it depends on context (pets vs wild vs birds), previewing that "context matters."

### 1.3 Context Matters
**Goal:** Teach that meaning changes based on surrounding information - the foundation of how LLMs work.
**How:** Simple examples: "bank" (river vs money), "date" (fruit vs calendar). Hover to change context, see meaning shift.

### 1.4 Sentence Similarity - "I'm Hungry"
**Goal:** Extend word similarity to sentences - show LLMs group similar meanings even with different words.
**How:** Drag-drop activity: group "I want to eat," "let's go to lunch," "I'm starving" into clusters. Reveal embedding space visualization.

### 1.5 Soft Intro to Embeddings
**Goal:** Visualize how words become numbers in a multi-dimensional space where meaning = position.
**How:** 2D interactive scatter plot with emoji words. Hover to see clusters. Click a word, see its "neighbors."
**+ Quiz:** Check understanding of embeddings and similarity.

---

## Chapter 2: Under the Hood - Tokenization & Attention (6 pages)

**Chapter Goal:** Understand what happens inside an LLM - how text becomes tokens, and how "attention" connects words to understand meaning.

### 2.1 What is Tokenization?
**Goal:** Show that LLMs don't see words - they see chunks called "tokens."
**How:** Visual breakdown: "I'm hungry" → ["I", "'m", " hungry"] → [1043, 582, 8192]. Interactive: type any sentence, see tokenization in real-time.

### 2.2 Attention Arrows
**Goal:** Teach that "attention" is how LLMs figure out which words relate to each other in a sentence.
**How:** Animated SVG arrows showing connections in "The cat sat on the mat because it was tired" (it→cat, not it→mat).

### 2.3 Building a Sentence
**Goal:** Show how attention and context work together to predict meaningful text.
**How:** Interactive completion: user types "I related to" and sees how attention influences "I am a boy" vs "I feel connected to."
**+ Quiz:** Check understanding of tokenization and attention.

### 2.4 From Sentences to Paragraphs
**Goal:** Extend attention from sentence-level to paragraph-level understanding.
**How:** Animated visualization showing how attention "reads ahead" and "looks back" across longer text.

### 2.5 Context Window - What Does 200K vs 1M Mean?
**Goal:** Explain context window as "how much the LLM can remember at once" in relatable terms.
**How:** Infographic: 200K tokens ≈ 150 pages, 1M tokens ≈ 750 pages. Visual book pile comparison.

### 2.6 Context Window Visualization
**Goal:** Make context windows concrete through interactive exploration.
**How:** Slider: adjust context window size, see "books" fill up. Show what gets "dropped" when limit exceeded.
**+ Quiz:** Check understanding of context windows and implications.

---

## Chapter 3: The LLM Black Box (5 pages)

**Chapter Goal:** Demystify the chat interface - reveal what's hidden, understand system prompts, and see through the "AI reasoning" illusion.

### 3.1 Input → Output Model
**Goal:** Present LLMs as simple functions: input → [magic] → output.
**How:** Black box visualization with question mark. Click to peek inside (briefly show layers, but emphasize "you don't need to understand the math").

### 3.2 What's Hidden? System Prompts
**Goal:** Reveal that every LLM interaction has hidden instructions you don't see.
**How:** Split-view comparison: visible user message vs invisible system prompt. Interactive: toggle system prompt on/off, see how response changes.

### 3.3 Custom Spaces = Custom System Prompts
**Goal:** Show that "GPTs," "Claude Spaces," "Gemini Gems" are just pre-packaged system prompts.
**How:** Visual breakdown: a "Space" is just [name + system prompt + starter example]. Demo: "build your own space" with 3 settings.

### 3.4 The Chat Interface Illusion
**Goal:** Expose the "AI reasoning" bubble as user-friendly fiction, not reality.
**How:** Timeline visualization: [user message] → [FULL conversation sent to API] → [LLM generates] → [display]. Show "reasoning" is optional, not how it actually works.

### 3.5 Why LLMs Forget + When to Close Chat
**Goal:** Teach that LLMs don't "remember" - they just reread the transcript, which has limits.
**How:** Visual metaphor: conversation as a scrolling paper tape. Show what happens when tape exceeds context window. Best practices for starting fresh.
**+ Quiz:** Check understanding of system prompts and memory illusion.

---

## Chapter 4: LLM Limitations & Failures (4 pages)

**Chapter Goal:** Understand what LLMs CAN'T do - the problems that motivate advanced solutions (tools, RAG, memory).

### 4.1 Counting Problems
**Goal:** Show LLMs are word-predictors, not calculators - they can't reliably count or do math.
**How:** Interactive demos: "how many a in banana," "1+1+1+1 (20 times)." Try it live, see it fail. Reveal why: next-word prediction ≠ computation.

### 4.2 Hallucination
**Goal:** Explain that LLMs make things up confidently - "hallucination" is a feature, not a bug.
**How:** Example: "What are 2024 fashion industry revenue numbers?" (LLM invents plausible-sounding fake stats). Explain: training = patterns, not facts.

### 4.3 Fabrication
**Goal:** Show LLMs can invent people, events, and citations that never existed.
**How:** "Write a diary entry for an athlete" - response invents "Alex, a tennis player." Highlight subtle fabrication vs useful creative writing.

### 4.4 Right vs Wrong - When Does It Matter?
**Goal:** Teach that "wrong" is context-dependent: creative writing = no wrong; code/numbers = wrong matters.
**How:** Two scenarios: child's essay (no wrong) vs API key generation (wrong = security risk). Decision tree for when to trust LLM outputs.
**+ Quiz:** Check understanding of LLM limitations and when to trust outputs.

---

## Chapter 5: Prompt Engineering (5 pages)

**Chapter Goal:** Master the art of communicating with LLMs - from basic to advanced techniques. **Safety notes integrated throughout.**

### 5.1 Be Specific - Goal, Context, Expected Output
**Goal:** Teach the three elements of effective prompts.
**How:** Interactive: toggle each element on/off, see how response quality changes. Before/after examples.
**🔒 Safety:** What NOT to ask LLMs (passwords, PII, trade secrets).

### 5.2 Give Examples - Few-Shot Learning
**Goal:** Show that giving 2-3 examples dramatically improves outputs.
**How:** Interactive: zero-shot vs few-shot comparison. User adds examples, sees quality jump. "Teach by analogy" explanation.

### 5.3 Chain Your Thoughts
**Goal:** Teach "chain-of-thought" - breaking complex tasks into steps.
**How:** Prompt template: "Let's think step by step." Example: "Calculate restaurant tip for 6 people..." shows reasoning steps.
**🔒 Safety:** Don't include sensitive data in prompt chains.

### 5.4 Advanced Patterns
**Goal:** Learn professional techniques: personas, format-specific, role-play.
**How:** Template library with copy-paste examples. "Act as a senior engineer," "Output in JSON format," etc.
**🔒 Safety:** Prompt injection awareness - what it is and how to avoid.

### 5.5 Prompt Cheatsheet
**Goal:** Quick reference for common prompt patterns.
**How:** Interactive cheatsheet with filters by use case (writing, coding, analysis, business).
**+ Quiz:** Test prompt engineering skills with scenarios.

---

# GROUP 2: ADVANCED - How do we extend LLMs to solve their limitations?

## Chapter 6: Tool Use & Agentic Systems (5 pages)

**Chapter Goal:** Understand how LLMs can use external tools - solving the counting/computation problems from Chapter 4.

### 6.1 What is Tool Use?
**Goal:** Show that "tool use" means LLMs can call calculators, search, APIs instead of just guessing.
**How:** Flowchart: [LLM needs math] → [calls calculator] → [gets result] → [continues]. Before/after: "123 * 456" without tool (wrong) vs with tool (correct).

### 6.2 Characteristics of Good Agentic Systems
**Goal:** Define what makes an AI system "agentic" vs just "chat with tools."
**How:** Checklist: autonomous decision-making, tool selection, error recovery, multi-step planning.

### 6.3 Interactive Example - Building a Simple Agent
**Goal:** Walk through building a basic agent that can search and calculate.
**How:** Step-by-step builder: define task → add tool → test → refine. Visual flow of agent "thinking."

### 6.4 When Tools Go Wrong
**Goal:** Show common failure modes: circular calling, wrong tools, infinite loops.
**How:** Bug gallery: "agent that searches forever," "calculator that loops." Debug walkthrough.

### 6.5 Tool Use Best Practices
**Goal:** Practical guidelines for building reliable tool-using systems.
**How:** Dos and don'ts checklist. Testing framework for tool use.
**+ Quiz:** Check understanding of tool use and agentic systems.

---

## Chapter 7: RAG & Context Engineering (7 pages)

**Chapter Goal:** Learn how Retrieval-Augmented Generation gives LLMs access to your knowledge - solving the hallucination problem from Chapter 4.

### 7.1 What Really is RAG?
**Goal:** Explain RAG as "search + LLM" - retrieve relevant documents, then answer based on them.
**How:** Flowchart: [question] → [search database] → [find relevant docs] → [add to prompt] → [LLM answers]. Before/after: RAG vs no-RAG comparison.

### 7.2 Vector Databases ⭐ NEW
**Goal:** Teach that vector databases store embeddings (number representations) for fast semantic search.
**How:** Visual: documents → embeddings → vectors in database. Interactive: search "company policies" and see how similar documents are found by "closeness" in vector space, not keywords.

### 7.3 Context vs Knowledge
**Goal:** Clarify the difference: context = what you send each time, knowledge = what exists in your documents.
**How:** Venn diagram. Examples showing when to use which.

### 7.4 Building a Simple RAG System
**Goal:** Walk through the components: documents, embeddings, vector database, retrieval, generation.
**How:** Architecture diagram with each part explained. Interactive: toggle components on/off to see impact.

### 7.5 Context Poisoning ⭐ NEW
**Goal:** Reveal security vulnerability: attackers can manipulate retrieved context to make LLMs say harmful things.
**How:** Attack scenario: attacker plants "document" in database, LLM retrieves and believes it. Prevention checklist (validation, permissions, sandboxing).
**🔒 Safety:** What documents are safe to use with RAG (PII redaction, access controls).

### 7.6 2026: Harness Engineering
**Goal:** Look ahead: "harness engineering" = designing systems that reliably fetch and use the right context.
**How:** Concept intro, current state vs future vision.

### 7.7 RAG Best Practices
**Goal:** Practical guidelines for building RAG systems that actually work.
**How:** Chunking strategies, metadata, hybrid search, evaluation metrics.
**+ Quiz:** Check understanding of RAG, vector databases, and security.

---

## Chapter 8: Memory & Personalization (4 pages)

**Chapter Goal:** Understand why LLMs don't remember you - and what companies are trying to do about it.

### 8.1 Why LLMs Don't Remember You
**Goal:** Reveal that each conversation is stateless - the LLM has no persistent memory of you.
**How:** Visual: each chat = blank slate. Transcript storage on server vs LLM "memory" distinction.

### 8.2 What Companies Are Trying
**Goal:** Show current attempts at "memory": automatic context fetching, user profiles, conversation summaries.
**How:** Diagram: [user profile] + [conversation history] → [context auto-injected]. Examples from Claude, ChatGPT, etc.

### 8.3 Why It's Not There Yet
**Goal:** Explain technical challenges: what to remember, privacy, storage costs, relevance.
**How:** Trade-off visualization: more memory = more cost, privacy risks, noise. The "context budget" problem.

### 8.4 The Future of Memory
**Goal:** Speculate on where memory is going: personal AI stores, selective retrieval, privacy-preserving memory.
**🔒 Safety:** Privacy implications of persistent memory - what data is stored, who can see it, how to delete it.
**+ Quiz:** Check understanding of LLM memory and privacy.

---

## Chapter 9: Beyond Text - Brief Mention (2 pages)

**Chapter Goal:** Acknowledge that modern LLMs handle images, documents, and audio - but keep it brief.

### 9.1 LLMs Aren't Just Text Anymore
**Goal:** Quick overview of multimodal capabilities: images, PDFs, voice, video.
**How:** Visual examples with emoji icons. Gallery of use cases.

### 9.2 When to Use Multimodal
**Goal:** Guidance on when text-only is enough vs when multimodal adds value.
**🔒 Safety:** What's safe to upload (public docs) vs risky (faces, ID cards, confidential files).
**+ Quiz:** Quick check on multimodal awareness.

---

# GROUP 3: BUSINESS - How do I use this in my business?

## Chapter 10: The LLM Landscape (6 pages)

**Chapter Goal:** Now that you understand how LLMs work, navigate the marketplace of options and make informed choices.

### 10.1 Who's Who in LLMs
**Goal:** Map the major players: OpenAI, Anthropic (Claude), Google (Gemini), Meta (Llama), xAI (Grok), open-source (GLM, Kimi, DeepSeek, Qwen).
**How:** Visual landscape map with brief descriptions of each player's strengths.

### 10.2 Model Sizes & Costs
**Goal:** Explain the trade-off: bigger models = smarter but slower/expensive.
**How:** Comparison table: Claude Opus 4.6 vs Sonnet 4.6 vs Haiku; GPT-4o vs 4.1-mini; when to use which. Cost per 1M tokens visualization.

### 10.3 Open Source vs Closed
**Goal:** Compare hosted APIs (OpenAI, Anthropic) vs self-hosted open-source (Llama, Qwen).
**How:** Trade-off table: cost, privacy, control, maintenance. The "quadratic relationship" - self-hosting saves money but requires expertise.

### 10.4 Web UI vs API
**Goal:** Clarify when to use chat interfaces (ad-hoc, exploration) vs APIs (integration, automation).
**How:** Decision tree. Examples: "use chat interface for..." vs "use API for..."

### 10.5 Rate Limits & Scaling
**Goal:** Introduce business considerations: requests per minute, monthly quotas, enterprise needs.
**How:** Visual: "free tier" vs "pro" vs "enterprise" comparison.

### 10.6 Choosing Your Model
**Goal:** Decision framework for selecting the right model for your use case.
**How:** Interactive quiz: answer questions about your needs, get recommended model tier.
**+ Quiz:** Check understanding of model selection.

---

## Chapter 11: To Automate or Not? (6 pages)

**Chapter Goal:** Learn when to use RPA (rule-based automation), LLMs (flexible AI), or hybrid approaches.

### 11.1 What is RPA? ⭐ NEW
**Goal:** Define Robotic Process Automation clearly - rule-based, deterministic automation of repetitive tasks.
**How:** Simple definition with examples: "copy data from spreadsheet to accounting system" follows exact rules every time. Flowchart showing RPA's "if-this-then-that" logic.

### 11.2 What is Agentic AI? ⭐ NEW
**Goal:** Define agentic AI - LLM-powered systems that handle ambiguity and make decisions.
**How:** Contrast with RPA: "respond to customer email" requires understanding context, tone, intent. Visual showing AI's "fuzzy" decision-making vs RPA's rigid rules.

### 11.3 RPA vs Agentic - Venn Diagram
**Goal:** Show where each shines and where they overlap (hybrid).
**How:** Interactive Venn diagram. Click each zone to see examples. RPA zone: high-volume, rules-based. Agentic zone: variable input, creative. Overlap: hybrid approaches.

### 11.4 When to Use RPA
**Goal:** Criteria: deterministic, high-volume, no ambiguity, business-critical accuracy.
**How:** Checklist. Examples: invoice processing, data migration, scheduled reports. Cost-benefit visualization.

### 11.5 When to Use LLMs
**Goal:** Criteria: fuzzy input, creative output, exception handling, human-like communication.
**How:** Checklist. Examples: customer support, content generation, analysis, research assistance.

### 11.6 Decision Framework
**Goal:** Flowchart for deciding: RPA vs LLM vs Hybrid vs Human.
**How:** Interactive decision tree. Answer questions, get recommendation with reasoning.
**+ Quiz:** Scenario-based decision practice.

---

## Chapter 12: Business Understanding First (4 pages) ⭐ NEW

**Chapter Goal:** Teach that you can't automate what you don't understand - business process understanding precedes AI implementation.

### 12.1 You Can't Automate What You Don't Understand
**Goal:** Emphasize that successful automation starts with deep understanding of the current process.
**How:** Cautionary tales: "we automated a broken process" disaster. Visual: broken process → automated broken process = faster disaster.

### 12.2 Map Before You Build
**Goal:** Teach process mapping - documenting how work actually gets done.
**How:** Simple process mapping template. Example: "customer refund request" flow from start to finish. Identify handoffs, decisions, exceptions.

### 12.3 The Software Change Flowchart ⭐ NEW
**Goal:** Show how businesses effectively implement software changes - a repeatable framework.
**How:** Visual flowchart:
```
Understand Current State → Map Processes → Identify Opportunities → Design Solution → Prototype → Test → Pilot → Deploy → Monitor → Iterate
```
Click each step for explanation. Emphasize: AI changes the last mile, not the first three.

### 12.4 Business Understanding Checklist
**Goal:** Pre-automation checklist to ensure you're ready.
**How:** Questions to answer before building: Who does this work? What are the exceptions? What does "good" look like? How do we measure success?
**+ Quiz:** Case study - should they automate? (requires business analysis).

---

## Chapter 13: Project Management for AI (5 pages)

**Chapter Goal:** Understand how to run AI projects successfully - why traditional PM skills matter more than ever.

### 13.1 V-Model & Agile for LLM Projects
**Goal:** Introduce development methodologies adapted for AI: iterative testing, continuous evaluation.
**How:** V-Model visualization adapted for LLMs (requirements ↔ testing at each stage). Agile sprints for prompt refinement.

### 13.2 Requirements-Driven Modeling
**Goal:** Teach Spec Kits, BMAD (Business Model for AI Development) - defining requirements before building.
**How:** Template: "As a [user], I need [capability], so that [outcome]." Example filled out for a customer support agent.

### 13.3 Why Project Management Matters More Than Ever
**Goal:** Show that AI projects have unique risks: hallucination, cost overruns, unpredictable behavior.
**How:** Risk matrix specific to LLM projects. PM tactics to mitigate: testing frameworks, budget caps, human-in-the-loop.

### 13.4 AI-Driven Review Processes
**Goal:** How to use AI to review AI outputs - validation, testing, quality assurance.
**How:** Automated testing framework. Human review vs AI review trade-offs.

### 13.5 Checklist & Cheatsheet
**Goal:** Pre-project checklist and quick reference for managing AI projects.
**How:** Interactive checklist with phases: Planning → Building → Testing → Deploying → Monitoring.
**+ Quiz:** Project management scenario - what would you do?

---

# About & Resources Pages

## About Page
- Your bio, photo, consulting services offered, why you built this tutorial, email contact

## Resources Page

**Cheatsheets:**
- Prompt Pattern Cheatsheet (basic and advanced patterns)
- Model Selection Cheatsheet (Opus vs Sonnet vs Mini, GPT-4o vs 4.1-mini)
- RPA vs Agentic Decision Tree
- Pre-Project Checklist (business understanding first)

**Checklists:**
- Safety & Privacy Checklist (what NOT to share, upload, or store)
- RAG Implementation Checklist
- AI Project Management Checklist

**Templates:**
- Prompt templates (by use case: writing, coding, analysis, business)
- Process mapping template
- Requirements template (Spec Kit format)

---

# Pedagogical Narrative Arc

**Group 1 (Basics):** "What is this thing and what can't it do?"
- Build intuition → Look under the hood → See the black box → **Understand limitations** → Learn to prompt

**Group 2 (Advanced):** "How do we solve those problems?"
- Tools (for counting) → RAG with vector databases (for hallucinations) → Memory (for forgetting)

**Group 3 (Business):** "How do I actually use this effectively?"
- Know the landscape → Decide what to automate → **Understand your business first** → Manage the project

---

# Key Additions Summary

| Addition | Why It Matters |
|----------|----------------|
| **Vector Databases (7.2)** | Essential to RAG - can't understand retrieval without understanding storage |
| **RPA Definition (11.1)** | Can't compare RPA vs Agentic without clearly defining what RPA IS |
| **Business Understanding (Ch 12)** | You can't automate what you don't understand - prevents costly mistakes |
| **Software Change Flowchart (12.3)** | Gives businesses a repeatable framework for AI implementation |
| **Context Poisoning (7.5)** | Critical security risk in RAG systems - businesses need to know |
| **Prompts Consolidated (Ch 5)** | All prompt techniques in one place, easier to reference and learn |

---

# Safety & Privacy Distribution

Integrated throughout relevant chapters:
- **Ch 3:** What the AI sees - don't share secrets in chat
- **Ch 5:** What's safe to ask LLMs (no passwords, PII, trade secrets)
- **Ch 7:** What documents are safe for RAG, context poisoning prevention
- **Ch 8:** Privacy implications of persistent memory
- **Ch 9:** Face recognition, document redaction concerns
- **Ch 10:** Enterprise privacy, data retention policies
