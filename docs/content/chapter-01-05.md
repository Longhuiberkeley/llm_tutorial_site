---
title: "1.5 Distance = How LLMs Generate"
description: "Distance is how LLMs decide what word comes next."
chapter: "Chapter 1"
pageId: "01-05"
---

## 🎯 Core Goals
- Tie it all together: distance is how LLMs decide what word comes next.
- See how LLMs find words that are "close" to the context.
- Understand the complete picture: autocomplete → distance → generation.

:::callout-tldr
LLMs generate text by finding words that are "close" to the context. "The delicious ___" → pizza is close, cat is far → LLM picks pizza.
:::

## 👁️ Visuals & Interactives

:::interactive{id="core"}

*(Interactive demo with word buttons. Start with "The delicious ___". Candidate words [cat, 🍕 pizza, 🏃 ran, 📚 book] show different distances. Click "Generate" to watch the LLM pick the closest match.)*

## 📝 Key Concepts

- **Context:** The prompt establishes the initial coordinate in meaning-space.
- **Distance Calculation:** The LLM measures the distance to every word in its vocabulary.
- **Closest Word Output:** It statistically selects the closest valid word as the "next" word.
- **The Cycle:** This connects back to 1.1—this is exactly how the super-powered autocomplete works.

:::callout-error
LLMs don't "choose" words based on understanding. They calculate distances and pick statistically. No thinking, just math.
:::

:::quiz{id="01-05"}
