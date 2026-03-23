---
title: "2.5 Context Window"
description: "How much text can an LLM remember at once?"
chapter: "Chapter 2"
pageId: "02-05"
---

## 🎯 Core Goals
- Make the concept of a "Context Window" concrete.
- Visualize what 100k or 200k tokens actually looks like.

:::callout-tldr
The "Context Window" is the absolute limit of how much text an LLM can pay attention to at one time. Once it fills up, the LLM cannot process additional information without specific strategies like summarization or truncating previous parts of the conversation.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-bookshelf-slider"}

## 📝 Key Concepts

- **The Limit of Attention:** The math of calculating attention between every single word gets incredibly expensive as text gets longer. This is why LLMs have a hard limit on their context window.
- **Short Term Memory:** The context window is an LLM's only "memory". If you had a 50-page conversation, but the context window only fits 40 pages, the LLM will completely forget the first 10 pages.
- **Growing Capabilities:** Early LLMs could only remember about 2,000 tokens (a few pages). Today's models can remember 200,000 to 2,000,000 tokens (entire libraries of books).

:::callout-error
Just because a model has a 1 Million token context window doesn't mean it pays *good* attention to everything in it. Often, LLMs suffer from the "needle in a haystack" problem, where they forget things in the middle of long text.
:::

:::quiz{id="02-05"}
