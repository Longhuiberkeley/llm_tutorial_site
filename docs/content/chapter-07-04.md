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
RAG is powerful but comes with setup costs. Sometimes keyword search, concatenation, or a subagent approach is faster and simpler. Know your options before committing to infrastructure.
:::

## The Lawyer's Options

Let's return to Sarah's 500-case problem. RAG isn't her only path. Here are the realistic alternatives — with honest trade-offs.

:::visual{name="visual-rag-alternatives"}

## Option 1 — Keyword Search

The classic approach: find documents containing specific words.

- **How it works:** "Find all cases containing 'breach of contract.'"
- **Strength:** Fast, cheap, zero setup — most document systems already have it
- **Problem:** The relevant case from 2019 might be titled "failed to uphold terms" — no match

Keyword search is binary. Either the word is there or it isn't. It doesn't understand synonyms, paraphrasing, or context.

**Best for:** Consistent terminology where exact matches are reliable.

## Option 2 — Subagent / Sequential Read

Have the LLM read through documents one at a time, deciding which are relevant.

- **How it works:** Send case #1 → ask "is this relevant?" → send case #2 → repeat for all 500
- **Strength:** Thorough, understands nuance, no special infrastructure
- **Problem:** 500 cases × reading time and cost = very slow and expensive

**Best for:** Small document sets where thoroughness matters more than speed or cost.

## Option 3 — File Concatenation

Join all documents into one big text block and send it as context.

- **How it works:** Merge all files → paste into prompt → ask your question
- **Strength:** Dead simple — no infrastructure at all
- **Problem:** Hits context window limits fast. 500 cases will never fit.

**Best for:** Tiny datasets (under a few dozen short documents) where simplicity wins.

## The Comparison

| Approach | Speed | Cost | Handles synonyms? | Setup |
|---|---|---|---|---|
| RAG | Fast | Medium | Yes | High |
| Keyword search | Fast | Low | No | Low |
| Subagent | Slow | High | Yes | Medium |
| Concatenation | Instant | Low | N/A | None |

## Decision Guide

- **Tiny dataset?** Concatenation — just paste it all in
- **Exact terminology?** Keyword search — no infrastructure needed
- **Meaning matters?** RAG — worth the setup cost
- **Need thoroughness, cost no object?** Subagent sequential read
- **In production at scale?** RAG + keyword hybrid — best of both worlds

:::callout-dyk
Most production systems use a hybrid approach: keyword search narrows the candidate pool first, then vector similarity re-ranks the results. You get the speed of keyword filtering with the precision of semantic matching.
:::

## 📝 Key Concepts

- **Each approach has real trade-offs** in speed, cost, accuracy, and setup complexity
- **Hybrid approaches** (keyword + semantic) often outperform either alone in production
- **RAG is not always necessary** — match the tool to the actual problem size
- **Concatenation is underrated** for small datasets — don't over-engineer early

:::quiz{id="07-04"}
