---
title: "7.7 RAG vs. Fine-Tuning"
description: "The 'Open Book' vs. 'Studying for a Test' metaphor."
chapter: "Chapter 7"
pageId: "07-07"
---

## 🎯 Core Goals
- Distinguish between teaching an AI new facts vs. giving it a reference library.
- Understand when to use RAG and when to use Fine-Tuning.

:::callout-tldr
If you want an AI to know your company's latest prices, don't try to "teach" it. Give it an open book (RAG). If you want it to talk like a specific person, "train" it (Fine-Tuning).
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-rag-vs-finetuning"}

## 📝 Key Concepts

- **The Student Metaphor:** 
    - **Fine-Tuning** is like a student studying for months to pass a test. They internalize the knowledge. They can answer quickly, but if a fact changes (like a price update), they have to "re-study" (re-train) all over again.
    - **RAG (Retrieval)** is like a student taking an "Open Book" exam. They don't know the facts by heart, but they are great at looking them up in the textbook you provided.
- **When to Fine-Tune:** Use this for **Style, Tone, and Format.** If you want the AI to sound like a 1920s pirate or follow a very specific medical coding format, fine-tuning is the way to go.
- **When to use RAG:** Use this for **Facts and Up-to-Date Info.** If your data changes every day (like news or inventory), RAG is 100x better because you just update the "book," not the "student."

:::callout-dyk
Did you know that 90% of business AI problems are solved by RAG, not Fine-Tuning? It's much cheaper, faster, and allows the AI to "cite its sources" by pointing to exactly where in the book it found the answer!
:::

:::quiz{id="07-07"}