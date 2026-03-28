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

:::visual{name="visual-histogram"}

## 📝 Key Concepts

- **Context:** The prompt establishes the initial coordinate in meaning-space.
- **Distance Calculation:** The LLM measures the distance to every word in its vocabulary.
- **Closest Word Output:** It statistically selects the closest valid word as the "next" word.
- **The Cycle:** This connects back to the super-powered autocomplete concept—this is exactly how the generation process works.

:::callout-dyk
This is why LLMs can't "go back and edit" as they write—they only look forward, predicting the next token based on everything that came before it.
:::

:::callout-error
LLMs don't "choose" words based on understanding. They calculate distances and pick statistically. No thinking, just math.
:::

:::quiz{id="01-05"}
When an LLM generates text, what happens at each step?
- [ ] It plans the entire sentence first, then writes it all at once
- [ ] It looks up a pre-written response from its training data
- [x] It calculates the distance to every word in its vocabulary and picks the most likely one
:::
