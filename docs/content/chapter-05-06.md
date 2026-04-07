---
title: "The Basics in Review"
description: "The practical takeaways, pitfalls, and quick-reference from the basics section."
chapter: "Chapter 5"
pageId: "05-06"
---

## 🎯 Core Goals
- Consolidate the practical takeaways from the basics section.
- Walk away with things you can apply to your own LLM usage today.

:::callout-tldr
LLMs predict the next word based on patterns — they don't think or understand. That single fact explains most of their strengths and weaknesses. The sections below are your practical cheat sheet.
:::

---

## 🧠 8 Things to Remember

- **LLMs predict, they don't think:** Treat every response as a first draft, not a final answer. Good at generating options, bad at knowing what's true.

- **They're great at finding similar words and concepts:** Want alternatives, related ideas, or rephrasing? This is where LLMs shine — they excel at "things like X."

- **Context matters more than you'd expect:** The LLM picks up on everything in your conversation. Ambiguous requests get ambiguous answers; specific requests get specific answers. You don't need to spell everything out — but the more context you give, the better the output.

- **They can't reliably count, spell, or do math:** LLMs see text in chunks (tokens), not individual letters. Don't ask them to count r's in "strawberry" or do precise arithmetic. Use a calculator or spreadsheet for that.

- **They can track relationships across long text:** LLMs are good at connecting ideas across a document — finding themes, resolving pronouns, summarizing. Give them long text and ask them to find patterns.

- **They have no memory between conversations:** Every new chat starts from zero. Repeat important context, and don't expect the LLM to "remember" what you discussed last week in a different thread.

- **Hidden instructions shape behavior:** Custom GPTs, Claude Projects, and app integrations work by pre-loading instructions. The LLM's personality and expertise come from context, not from "knowing" things.

- **Hallucination cuts both ways:** The same mechanism that lets an LLM write a creative story also lets it invent a fake legal case. For creative work, that's a feature. For factual claims, that's a danger. Always verify facts that matter.

---

## 🚨 8 Red Flags

- **"The LLM understands what I'm asking."** — It produces convincing-sounding responses, but it has no actual comprehension. The chat interface creates an illusion of understanding.

- **"Just ask it to count the letters."** — It sees chunks, not letters. Never rely on an LLM for precise counting, arithmetic, or character-level tasks.

- **"I told it to forget the wrong thing."** — Once false information enters the conversation, it's re-read every turn. Start a fresh conversation instead of trying to correct it in-place.

- **"More context = better results."** — Long conversations degrade in quality (context rot). Start fresh for important work, especially after many back-and-forth turns.

- **"This chat thread is my permanent workspace."** — Long threads accumulate errors through context poisoning and truncation. Use separate threads for separate tasks.

- **"LLMs are too unreliable to use seriously."** — With proper safeguards (verification, human review, not trusting blindly), LLMs power real production systems daily. The risk is using them *without* safeguards.

- **"Enterprise plans keep my data perfectly safe."** — Data still travels over the internet and is processed on external infrastructure. Treat LLMs like a trusted but external contractor.

- **"I'll just use one long conversation for everything."** — Context fills up, old messages get truncated or summarized, and quality drops. Shorter, focused conversations produce better results.

---

## 💡 Pro Tip

:::callout-tldr
**Use the LLM to improve your own prompting.** Ask it to create a cheatsheet, checklist, or set of DOs and DON'Ts tailored to your specific use case. Example: *"I use LLMs to draft client emails. Create a checklist of what I should always include in my prompt, and common mistakes to avoid."*
:::

The LLM has seen millions of prompts and their outcomes. Let it help you write better ones — then iterate on that cheatsheet as you learn what works for you.

---

## 📐 Quick Reference

**Trust Spectrum** — Ask yourself: "What's the worst thing if this is wrong?" → Summaries/brainstorms: use freely → Email drafts/outlines: quick scan → Facts/code: cross-check → Medical/legal/financial: use a human expert. ([Learn more](chapter-05-01.html))

**The 6W Prompt Framework** — Better prompts answer more Ws: **Who** is the audience? **What** do you want? **When/Where** is the context? **Why** does this matter? **How** should it be formatted? ([Learn more](chapter-05-02.html))

**Few-Shot > Zero-Shot** — Showing 2-3 examples in your prompt dramatically improves output quality compared to just describing what you want. ([Learn more](chapter-05-03.html))

**Chain-of-Thought** — For complex reasoning, ask the LLM to think step by step. It produces more accurate results on multi-part problems. ([Learn more](chapter-05-04.html))

**Privacy Heuristic** — "Would I put this in an email to someone I don't fully trust?" If no, don't paste it into an LLM. ([Learn more](chapter-05-05.html))

**Context Window** — Every turn resends the entire conversation. Turn 10 costs more than turn 1. Start fresh for important tasks. ([Learn more](chapter-02-04.html))

---

## 🗺️ Where to Go Deeper

| Topic | Explore |
|-------|---------|
| Core intuition — autocomplete at scale | [Keyboard Autocomplete vs LLM Completion](chapter-01-01.html) |
| How attention works | [ELI5 Attention](chapter-02-02.html) |
| Tokenization — why they can't count | [What is Tokenization?](chapter-02-01.html) |
| How chat actually works behind the scenes | [The Sandwich](chapter-03-02.html) |
| Hallucination | [Hallucination](chapter-04-02.html) |
| Context rot and degradation | [Context Rot](chapter-04-06.html) |
| Jailbreaking and security | [Jailbreaking & Security](chapter-04-07.html) |
| Trust spectrum — when to verify | [Know When to Trust It](chapter-05-01.html) |
| Chain-of-thought reasoning | [Chain-of-Thought & Reasoning Tokens](chapter-05-04.html) |
| Privacy — what never to paste | [Privacy](chapter-05-05.html) |
