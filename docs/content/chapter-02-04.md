---
title: "2.4 Context Capacity — What Fits in the Head"
description: "Make 'context window' concrete by visualizing what different token counts actually look like."
chapter: "Chapter 2"
pageId: "02-04"
---

## 🎯 Core Goals
- Make the concept of a "Context Window" concrete.
- Visualize what 200k or 1 Million tokens actually looks like.

:::callout-tldr
The "Context Window" is the absolute limit of how much text an LLM can pay attention to at one time. It's the AI's only "short-term memory." Once it fills up, old information has to fall out.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-bookshelf-slider"}

## 📝 Key Concepts

- **The Limit of Attention:** The math of calculating attention between every single word gets incredibly expensive as text gets longer. This is why LLMs have a hard limit on their context window.
- **Short-Term Memory:** The context window is an LLM's only "memory". If you had a 50-page conversation, but the context window only fits 40 pages, the LLM will completely forget the first 10 pages.
- **Growing Capabilities:** Early LLMs could only remember about 2,000 tokens (a few pages). Today's models can remember 200,000 tokens (about 2 full novels) up to 1,000,000 tokens (roughly 10 novels).

:::callout-error
Just because a model has a 1 Million token context window doesn't mean it pays *perfect* attention to everything in it. Often, LLMs suffer from the "needle in a haystack" problem, where they forget things in the middle of long text.
:::

:::quiz{id="02-04"}
What happens when a conversation exceeds the LLM's context window?
- [ ] The LLM compresses older messages to make room
- [x] The earliest parts of the conversation are effectively forgotten
- [ ] The LLM asks you to start a new conversation
:::
