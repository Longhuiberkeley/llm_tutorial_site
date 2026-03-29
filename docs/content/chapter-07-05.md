---
title: "7.5 Context Engineering — What You Feed the LLM Is Everything"
description: "RAG is one tactic within a bigger discipline: the systematic art of managing everything you feed an LLM."
chapter: "Chapter 7"
pageId: "07-05"
---

## 🎯 Core Goals
- Define Context Engineering as the broader discipline — RAG is one tactic within it.
- Show the decisions that separate good from great LLM systems: what to inject, how much, and where.

:::callout-tldr
Context Engineering is the systematic discipline of organizing, formatting, and managing everything fed into an LLM — instructions, memory, retrieved docs, conversation history. RAG is one powerful tactic within it. Many AI failures aren't about bad models; they're about bad context engineering.
:::

## What Is Context Engineering?

Every time an LLM answers a question, it works from whatever is inside its context window. Context Engineering is the discipline of *deliberately designing* what goes in there.

It's not just about RAG. The whole context — from the opening system prompt to the last retrieved document — is yours to engineer:

- **System Prompt** — role, instructions, constraints, tone
- **Retrieved Documents (RAG)** — relevant chunks fetched at query time, using whatever search method fits (keyword, semantic, hybrid, etc.)
- **Conversation History** — prior turns; how much to keep, summarize, or trim
- **User Query** — the question or task from the user

Every layer is a decision. Context Engineering is the discipline of making those decisions well.

:::visual{name="visual-ce-stack"}

## Two Piles

Picture two piles of information sitting next to each other:

**The Context Pile** — what fits in the current prompt right now: the system prompt, conversation history, and any injected documents. Maybe 5,000–20,000 tokens total.

**The Knowledge Pile** — everything in your knowledge base: all 500 cases, every policy document, every manual. Potentially millions of tokens.

RAG's job is to grab the *right pieces* from the Knowledge Pile and move them into the Context Pile — just the right pieces, not everything. The "grabbing" can use keyword search, vector similarity, SQL queries, or any other method that finds relevant content.

## The Goldilocks Problem

Getting context injection right means finding the sweet spot:

<div class="grid md:grid-cols-3 gap-3 my-4">
  <div class="bg-error/5 border border-error/20 rounded-xl p-4">
    <div class="text-xs font-black text-error mb-2">❌ Too little</div>
    <p class="text-xs italic">"Summarize our refund policy for this customer."</p>
    <p class="text-xs text-on-surface-variant mt-1">No policy retrieved — the LLM guesses or admits it doesn't know.</p>
  </div>
  <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
    <div class="text-xs font-black text-yellow-700 mb-2">⚠️ Too much</div>
    <p class="text-xs italic">All 50 policy documents injected.</p>
    <p class="text-xs text-on-surface-variant mt-1">LLM confused by conflicting clauses, outdated versions, irrelevant sections.</p>
  </div>
  <div class="bg-green-50 border border-green-200 rounded-xl p-4">
    <div class="text-xs font-black text-green-700 mb-2">✅ Just right</div>
    <p class="text-xs italic">The 2 most relevant sections retrieved — current version, matching the issue.</p>
    <p class="text-xs text-on-surface-variant mt-1">Focused, accurate, grounded answer.</p>
  </div>
</div>

## Chunking: Breaking Documents into Right-Sized Pieces

A 50-page document shouldn't be injected whole. Instead, break it into **chunks** — paragraphs or sections of around 500–1,000 tokens each. Index each chunk separately.

When a question arrives, retrieve the *specific chunks* that are most relevant — not the whole document.

:::callout-dyk
Chunk size is a surprisingly important lever. Too small (a single sentence) and you lose the surrounding context — the LLM sees a fragment without knowing what it's about. Too large (a whole chapter) and you mix relevant content with irrelevant filler, diluting the LLM's attention. The sweet spot is usually a few paragraphs — enough context to be meaningful, small enough to be precise.
:::

## Placement Matters Too

Where you put retrieved content in the Sandwich matters. LLMs pay more attention to the beginning and end of their context. Put critical retrieved information near the start — before the conversation history — for maximum attention.

## Harness Engineering: The Scaffolding Around the LLM

There's a related discipline that has become critical as LLM systems grow up: **harness engineering** — designing and building the scaffolding *around* LLM calls.

Think of a horse. The LLM is the horse — powerful, fast, but without direction. The "harness" is everything that guides that power productively: the reins, the saddle, the bridle. Without a good harness, even the strongest horse runs in circles.

In practice, harness engineering covers:

- **Retry logic** — when the LLM fails or returns garbage, how do you recover gracefully?
- **Caching** — storing previous results so you don't re-run expensive LLM calls for the same question
- **Response parsing** — extracting structured data from the LLM's free-text output
- **Cost tracking** — monitoring how much each query costs and setting budgets
- **Evaluation pipelines** — continuously testing whether the system's answers are still good
- **Workflow control** — deciding when the LLM can act autonomously vs. when it needs human approval

None of these are glamorous. But they're the difference between a cool demo and a reliable product. As organizations move from experimenting with LLMs to running them in production, harness engineering often becomes the bottleneck — not the model itself.

## 📝 Key Concepts

- **Context Engineering:** The discipline of managing everything fed to an LLM — prompts, retrieved docs, history, instructions
- **RAG is one tactic:** Retrieval is part of context engineering, not the whole discipline
- **Quality > quantity:** 3 highly relevant paragraphs beat 30 loosely related pages
- **Chunking:** Break documents into pieces (500–1,000 tokens), index each chunk separately
- **Placement:** Critical context goes at the start of the prompt for maximum attention
- **Harness Engineering:** The scaffolding around LLM calls — retries, caching, parsing, cost tracking — that turns a demo into a reliable product

:::quiz{id="07-05"}
What is the relationship between RAG and Context Engineering?
- [ ] RAG is a broader discipline that includes Context Engineering
- [ ] They are competing approaches to the same problem
- [x] Context Engineering is the broader discipline; RAG is one tactic within it
- [ ] They are unrelated concepts
:::
