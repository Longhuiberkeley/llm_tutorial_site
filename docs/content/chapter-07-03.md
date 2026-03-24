---
title: "7.3 Vector Embeddings — Storing Meaning as Coordinates"
description: "How LLMs represent meaning as numbers, enabling search by meaning rather than exact keywords."
chapter: "Chapter 7"
pageId: "07-03"
---

## 🎯 Core Goals
- Teach that embeddings capture meaning as coordinates in space.
- Show through a hands-on exercise how distance between coordinates reveals similarity.

:::callout-tldr
Embeddings turn the meaning of words and sentences into coordinates. Similar meaning = nearby coordinates. That's how RAG finds relevant documents without keyword matching.
:::

## Words as Points in Space

When we explored word distance earlier, we established that some words are "closer" in meaning than others — *king* and *queen* are neighbors; *king* and *banana* are strangers.

Embeddings make that intuition precise. Every word, sentence, or document gets converted into a list of numbers — its coordinates in a multi-dimensional space. Two documents with similar meaning will have coordinates that are close together.

This is what makes RAG's search work: instead of matching keywords, it finds documents whose coordinates are nearest to your question's coordinates.

## 🗺️ Try It: Distance on a Map

Here are four words plotted on a simple XY graph:

:::visual{name="visual-xy-embeddings"}

- **lion** at (3, 7)
- **cat** at (2, 6)
- **tiger** at (4, 8)
- **banana** at (9, 1)

Which word is closest to **cat**? Use the distance formula: √((x₂−x₁)² + (y₂−y₁)²)

- cat → lion: √(1² + 1²) = √2 ≈ **1.4**
- cat → tiger: √(2² + 2²) = √8 ≈ **2.8**
- cat → banana: √(7² + 5²) = √74 ≈ **8.6**

**Lion** is closest. The math confirms what intuition already knew — lions and cats share far more in common than cats and bananas.

## Scaling Up

In this exercise, we used 2 dimensions. Real embeddings use **hundreds or thousands of dimensions** — capturing not just one aspect of meaning, but many simultaneously: topic, sentiment, formality, domain, and more.

The math stays exactly the same (distance between points). The space just gets much bigger.

:::callout-dyk
When you search and find relevant results without using the exact right keywords, that's embeddings at work. "Company vacation policy" finds docs about "PTO" and "annual leave" because they're close in meaning — not because the words match.
:::

## Why This Enables RAG

Vector databases store embeddings for every document in your knowledge base. When a question arrives:

1. Convert the question to an embedding (a set of coordinates)
2. Find documents with the closest embeddings
3. Return the top matches — ranked by meaning, not keyword overlap

Sarah searching for "construction delay cases" finds *all* the relevant cases, even if some used the phrase "contractor failed to meet the deadline."

## 📝 Key Concepts

- **Embeddings:** Numbers that capture the meaning of text as coordinates
- **Similar meaning → close coordinates → small distance**
- **Vector databases:** Store embeddings for fast similarity lookup at scale
- **Semantic search:** Find by meaning, not by matching exact words
- **Dimensions:** Real embeddings use hundreds of dimensions — same concept, much bigger space

:::quiz{id="07-03"}
