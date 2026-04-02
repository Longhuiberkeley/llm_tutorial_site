---
title: "The Advanced Section in Review"
description: "The practical takeaways, pitfalls, and quick-reference from the advanced section."
chapter: "Chapter 9"
pageId: "09-04"
---

## 🎯 Core Goals
- Consolidate the practical takeaways from the advanced section.
- Walk away with things you can apply when building or evaluating LLM-powered tools.

:::callout-tldr
This section covers how to make LLMs actually useful: giving them tools to act on the world, connecting them to your data so they answer from knowledge instead of guessing, and expanding what they can process beyond text. The biggest insight: most "AI failures" are actually failures to manage what you feed the LLM — and sometimes the tool doing the feeding is the real culprit.
:::

---

## 🧠 7 Things to Remember

**The LLM only outputs text — something else does the work**
When an LLM "sends an email" or "runs a search," it's actually outputting a formatted instruction that a surrounding system intercepts and executes. The LLM is the brain; you still need hands.

**MCP is the USB-C for AI tools**
MCP (Model Context Protocol) standardizes how LLMs connect to external tools and data. Instead of custom integrations for every tool, one protocol connects them all — like USB-C replacing dozens of proprietary chargers.

**Agents work in loops, not scripts**
Good agents cycle through: perceive the situation → plan what to do → act with a tool → observe the result → repeat. Bad agents follow a rigid script and fall apart when something unexpected happens.

**RAG = search first, answer second**
Instead of asking the LLM to answer from memory (which hallucinates), RAG first searches your documents for relevant info, then has the LLM answer grounded in what it found. The quality of the search matters as much as the LLM.

**Context engineering is just as important as model selection — and more often the problem**
Most AI failures are failures of context — bad prompts, wrong documents retrieved, too much or too little information. Before you blame the model, check what you're feeding it.

**"Memory" is just better context**
Personal AI features (ChatGPT Memory, Claude Projects) don't give the LLM actual memory — they preload more context. The model still reads everything from scratch every time.

**Understanding media ≠ generating media**
An LLM can describe what's in a photo accurately, but generating a photorealistic image is a completely different (and harder) skill. Don't assume one capability implies the other.

**The tools an LLM uses have their own limitations**
An LLM is only as reliable as the tools it depends on. The search engine might return outdated results, the database might have stale records, the file reader might garble a complex spreadsheet, and the transcription tool might mishear words. When you evaluate an LLM-powered system, ask not just "how good is the model?" but "what tools does it rely on, and what are their blind spots?" The chain is only as strong as its weakest link — and that link often isn't the LLM itself.

---

## 🚨 9 Red Flags

**"The LLM ran a search on its own."** — The LLM output a text instruction; the *software around it* intercepted and executed it. The product you're using is a combination of the model AND the application layer. The model decides what to do; the application decides whether and how to do it. Don't confuse one for the other.

**Agents fail from bad planning, not bad tools.** — A confused plan leads to wrong actions. The fix: start with a clearer prompt, not a better tool.

**Leaving autonomous agents unsupervised with sensitive access.** — Always start with high human oversight. Earn autonomy through proven reliability, not promises.

**Old problems persist inside agents.** — Hallucinations, context rot, and prompt injection are still real at every step of the agentic loop. Wrapping an LLM in tools doesn't fix the LLM.

**RAG reduces but doesn't eliminate hallucination.** — The LLM can still misread retrieved documents. Good retrieval quality is a new thing you need to monitor.

**Building RAG when your data fits in one file.** — If your knowledge base is small enough to paste into the context window, just paste it. RAG adds complexity you may not need.

**Your data format is your real bottleneck — and the model may not have seen what you uploaded.** — Between your file and the LLM's response, the platform may run OCR, strip images, flatten layouts, or extract only a transcript from a video. Tables lose structure, multi-column text gets scrambled, diagrams disappear. The LLM answers confidently based on whatever survived that process — and won't tell you what went missing. Simple formats (Markdown, plain text) always win.

**A memory system that stores wrong info is worse than none.** — Stale or incorrect facts make the LLM confidently wrong. A flawed memory system is more dangerous than starting fresh.

**Blaming the LLM when the tool was the problem.** — When an AI system gives you a wrong answer, the LLM might have been perfectly correct in its reasoning — but it was reasoning from tool output that was wrong, incomplete, or distorted. A search tool returning outdated information, a database with stale records, or a file reader that garbled the formatting — any of these will produce bad LLM output even with a perfect model. Before you switch models or rewrite prompts, check what the tools actually fed the LLM.

---

## 💡 Pro Tip

:::callout-tldr
**Use the LLM to design your setup, not just your prompts.** Now that you know about tools, RAG, and context engineering, ask the LLM to help design the architecture itself. Example: *"I want an LLM to answer questions from my product docs. Should I use RAG, paste everything, or fine-tune? Help me decide based on my constraints."*
:::

The LLM can help you reason through trade-offs, design context injection strategies, and even draft tool configurations — not just write prompts. Use it as a design partner, not just a text generator.

---

## 📐 Quick Reference

**RAG vs. Fine-Tuning** — Start with prompting. If that's not enough, add RAG (give it your documents). Fine-tune only when the knowledge is truly proprietary and no public model could know it. ([Learn more](chapter-07-07.html))

**Alternatives to RAG** — Don't default to RAG. Keyword search is fast and cheap. Pasting everything works for small datasets. Subagents give deep understanding. Pick the simplest approach that works. ([Learn more](chapter-07-04.html))

**4 Agent Configuration Levers** — **Tools** (fewer = safer), **Domain** (scope it), **Access Rights** (read-only by default), **Role** (give it a clear job title). An unconfigured agent is an out-of-control agent. ([Learn more](chapter-06-06.html))

**Goldilocks Context** — Too little context → the LLM guesses. Too much → quality drops from noise. Aim for 2-3 highly relevant sections, not 30 loosely related pages. ([Learn more](chapter-07-05.html))

**Three AI Trade-offs** — More useful but less accurate (wrong context). More personalized but less private (more data shared). More capable but riskier (actions vs. read-only). Every gain has a cost. ([Learn more](chapter-08-04.html))

---

## 🗺️ Where to Go Deeper

| Topic | Explore |
|-------|---------|
| How tool use works | [What is Tool Use?](chapter-06-01.html) |
| MCP — connecting LLMs to anything | [MCP — Model Context Protocol](chapter-06-02.html) |
| What makes a good agent | [What Makes a Good Agent?](chapter-06-03.html) |
| When agents go wrong | [When Agents Go Wrong](chapter-06-05.html) |
| What is RAG? | [What is RAG?](chapter-07-02.html) |
| Context engineering — the broader discipline | [Context Engineering](chapter-07-05.html) |
| Why data formats matter | [Data Formats Are Destiny](chapter-07-06.html) |
| Privacy and risk trade-offs | [The Trade-offs](chapter-08-04.html) |
| Multimodal AI | [Multimodal AI](chapter-09-01.html) |
| Processing scanned documents | [Scanned Documents](chapter-09-03.html) |
