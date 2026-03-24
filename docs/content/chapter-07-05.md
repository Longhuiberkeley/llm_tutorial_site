---
title: "7.5 Context Injection — Feeding Only What's Needed"
description: "The art of selecting and placing the right amount of retrieved context — not too much, not too little."
chapter: "Chapter 7"
pageId: "07-05"
---

## 🎯 Core Goals
- Explain how retrieved documents get inserted into the prompt.
- Show that context quality matters more than context quantity.

:::callout-tldr
Inject too little and the LLM is flying blind. Inject too much and attention dilutes — same as a cluttered conversation. Quality beats quantity, every time.
:::

## Two Piles

Picture two piles of information sitting next to each other:

**The Context Pile** — what fits in the current prompt right now: the system prompt, conversation history, and any injected documents. Maybe 5,000–20,000 tokens total.

**The Knowledge Pile** — everything in your knowledge base: all 500 cases, every policy document, every manual. Potentially millions of tokens.

RAG's job is to grab the *right pieces* from the Knowledge Pile and move them into the Context Pile — just the right pieces, not everything.

:::visual{name="visual-context-injection"}

## The Goldilocks Problem

Getting context injection right means finding the sweet spot:

**Too little context:**
> "Summarize our refund policy for this customer."
> *(No policy retrieved — the LLM guesses or admits it doesn't know)*

**Too much context:**
> *(All 50 policy documents injected)*
> The LLM gets confused by conflicting clauses, outdated versions, and irrelevant sections. Output quality drops.

**Just right:**
> *(The 2 most relevant policy sections retrieved — current version, matching the customer's issue)*
> Focused, accurate, grounded answer.

## Chunking: Breaking Documents into Right-Sized Pieces

A 50-page document shouldn't be injected whole. Instead, break it into **chunks** — paragraphs or sections of around 500–1,000 tokens each. Index each chunk separately.

When a question arrives, retrieve the *specific chunks* that are most relevant — not the whole document.

This means Sarah can retrieve just the *statute of limitations section* from a relevant case file, not the entire 80-page document.

## Placement Matters Too

Where you put retrieved content in the Sandwich matters. LLMs pay more attention to the beginning and end of their context. Put critical retrieved information near the start — before the conversation history — for maximum attention.

:::callout-dyk
"Context engineering" is becoming a serious discipline in AI development. The skill isn't just using RAG — it's deciding what to retrieve, how much to retrieve, and where to place it. Many AI failures trace back to bad context engineering, not bad models.
:::

## 📝 Key Concepts

- **Context window is finite:** Every token for retrieved docs is one fewer for the response
- **Quality > quantity:** 3 highly relevant paragraphs beat 30 loosely related pages
- **Chunking:** Break documents into pieces (500–1,000 tokens), index each chunk separately
- **Placement:** Critical context goes at the start of the prompt for maximum attention
- **Context engineering:** The art of selecting, sizing, and placing retrieved content

:::quiz{id="07-05"}
