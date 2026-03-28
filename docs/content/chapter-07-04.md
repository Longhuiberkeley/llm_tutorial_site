---
title: "7.4 Alternatives to RAG — Not Always the Right Tool"
description: "Keyword search, subagents, and file concatenation each have their place. Know your options before you build."
chapter: "Chapter 7"
pageId: "07-04"
---

## 🎯 Core Goals
- Show that RAG is not the only retrieval approach.
- Help readers match the right approach to the right situation.

:::callout-tldr
RAG is powerful but comes with setup costs. Sometimes keyword search, concatenation, or a subagent approach is faster and simpler. Treat RAG like a tool — reach for it when the job calls for it, not as a default. Know your options before committing to infrastructure.
:::

## The Lawyer's Options

Let's return to Sarah's 500-case problem. RAG isn't her only path. Here are the realistic alternatives — with honest trade-offs.

:::visual{name="visual-rag-alternatives"}

## Option 1 — Keyword Search

The oldest approach: find documents containing specific words.

It's binary — either the word is present or it isn't. It has no concept of synonyms, paraphrasing, or context. The 2019 case titled "contractor failed to uphold terms" won't appear when you search for "breach of contract."

Its character: **fast, cheap, zero setup** — and surprisingly effective when your organization uses consistent terminology.

## Option 2 — Subagent / Sequential Read

An LLM reads through documents one at a time and decides what's relevant.

This approach is thorough and nuanced — the LLM understands context, not just keywords. But it pays the full cost for every document it touches: 500 cases means 500 reads, every single query.

Its character: **deep understanding, no retrieval errors** — at the price of being slow and expensive at scale.

## Option 3 — File Concatenation

Merge everything into one text block and send it all in as context.

This is the simplest possible approach — no infrastructure whatsoever. But it runs into a hard wall: the context window. A handful of short documents? Fine. Sarah's 500 cases? Never fits.

Its character: **zero setup, zero retrieval errors** — for datasets small enough to fit.

:::callout-dyk
Most production systems don't pick just one approach — they use a divide-and-conquer strategy: keyword search narrows the candidate pool first, then vector similarity re-ranks the results, and sometimes a subagent does a final read of the top candidates. You get the speed of keyword filtering with the precision of semantic matching. The best systems mix and match based on the problem at hand.
:::

:::callout-dyk
When you use ChatGPT or Gemini through their web interfaces, you don't get to choose the retrieval mechanism — you simply use whatever they've built in. This understanding becomes important when you start building your own LLM-powered products or integrating an LLM API into your systems.
:::

## 📝 Key Concepts

- **Each approach has real trade-offs** in speed, cost, accuracy, and setup complexity
- **Hybrid approaches** (keyword + semantic) often outperform either alone in production
- **RAG is a tool, not a default** — match the approach to the actual problem size
- **Concatenation is underrated** for small datasets — don't over-engineer early

:::quiz{id="07-04"}
