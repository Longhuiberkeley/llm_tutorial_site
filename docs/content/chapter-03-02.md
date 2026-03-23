---
title: "3.2 The Paper Tape Metaphor"
description: "Visualizing the context window as a literal growing roll of paper."
chapter: "Chapter 3"
pageId: "03-02"
---

## 🎯 Core Goals
- Conceptualize how the context window limits what an AI can process.
- Understand the physical limits of current AI models.

:::callout-tldr
Think of the AI's "brain space" as a long roll of receipt paper. Every word you type, and every word it replies, gets printed on this tape. When the tape runs out, the AI can't read anymore!
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-paper-tape"}

## 📝 Key Concepts

- **The Endless Receipt:** Every model has a maximum "Context Window" (e.g., 100,000 tokens). This is the absolute length of the paper tape. 
- **In one ear, out the other:** When your conversation exceeds this limit, the system has to cut off the top of the receipt. The oldest messages are deleted to make room for new ones. 
- **Reading the whole receipt:** Every time you ask a new question, the AI has to re-read the *entire* roll of paper from top to bottom before it can answer. This is why dragging a single chat thread on for weeks makes the AI sluggish!

:::callout-dyk
Did you know that modern models like Gemini 1.5 Pro have a "receipt tape" long enough to fit the entire Harry Potter series, twice? But reading that massive receipt still takes time!
:::

:::quiz{id="03-02"}