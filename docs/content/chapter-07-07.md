---
title: "7.7 RAG vs. Fine-Tuning — Open Book vs. Studying"
description: "Two very different approaches to giving LLMs your knowledge. Most businesses should start with RAG."
chapter: "Chapter 7"
pageId: "07-07"
---

## 🎯 Core Goals
- Distinguish RAG (lookup at query time) from fine-tuning (knowledge baked into training).
- Help readers choose the right approach for their situation.

:::callout-tldr
RAG = open-book exam. Fine-tuning = closed-book exam. Both have their place — but RAG is almost always the right starting point for businesses.
:::

## The Analogy

Imagine two law students preparing for a bar exam:

**Student A (RAG approach):** Takes the exam open-book. Looks things up in real time. Gets accurate, current answers — but takes a moment to find them.

**Student B (Fine-tuning approach):** Memorized everything cold. Answers instantly from memory. But if the law changed last month, Student B doesn't know it.

LLMs face the same trade-off.

:::visual{name="visual-rag-vs-finetune"}

## RAG — Open-Book Lookup

The LLM itself is unchanged. You build a knowledge base alongside it. At query time, the system retrieves relevant documents and injects them as context.

**Strengths:**
- **Always current:** Update the knowledge base today, LLM "knows" it immediately
- **Traceable:** You can point to exactly which document the answer came from
- **Flexible:** Works across many topics without retraining
- **Lower cost:** No expensive training run required

**Weaknesses:**
- **Slower:** Retrieval adds latency to each response
- **Requires infrastructure:** Vector database, embedding model, retrieval pipeline
- **Quality depends on retrieval:** Wrong documents fetched = wrong answer

## Fine-Tuning — Baked-In Training

The model itself is retrained on your data. The knowledge becomes part of the model's weights — it answers from memory, not from lookup.

**Strengths:**
- **Fast at inference:** No retrieval step — answers come directly
- **Consistent behavior:** Great for narrow, well-defined tasks (e.g., always use a specific format)
- **No retrieval infrastructure:** Simpler runtime once trained

**Weaknesses:**
- **Expensive to train:** Can cost thousands to hundreds of thousands of dollars
- **Hard to update:** Data changes → retrain from scratch
- **Not traceable:** You can't point to "which document" the answer came from
- **Overfitting risk:** Can make the model worse at tasks outside the training data

## When to Use Which

| Situation | Recommendation |
|---|---|
| Data changes frequently | RAG |
| Need to cite sources | RAG |
| Task is narrow and stable | Fine-tuning |
| Consistent tone/format | Fine-tuning |
| Just starting out | RAG |

:::callout-dyk
Most enterprise AI projects that start with fine-tuning eventually add RAG anyway — because business data keeps changing. RAG is almost always the better first step. Fine-tune only when you've proven RAG isn't sufficient for your specific need.
:::

## 📝 Key Concepts

- **RAG = open-book:** Retrieve at query time — current, flexible, traceable
- **Fine-tuning = studying:** Bake knowledge into model weights — fast, narrow, expensive to update
- **Start with RAG:** Lower cost, easier to iterate, works for most business use cases
- **Fine-tune when:** Speed is critical, task is narrow and stable, RAG has proven insufficient
- **They're not mutually exclusive:** Many production systems combine both

:::quiz{id="07-07"}
