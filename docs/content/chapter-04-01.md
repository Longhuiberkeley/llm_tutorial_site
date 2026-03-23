---
title: "4.1 Counting Problems"
description: "Why 🍓 has 3 'r's is hard for tokens."
chapter: "Chapter 4"
pageId: "04-01"
---

## 🎯 Core Goals
- Understand why LLMs struggle with basic spelling and counting tasks.
- Connect this limitation back to tokenization.

:::callout-tldr
Because LLMs read in "chunks" (tokens) rather than individual letters, asking an LLM to count the letters in a word is like asking you to count the individual threads in a sweater while standing 10 feet away.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-counting-problem"}

## 📝 Key Concepts

- **The Strawberry Problem:** If you ask an older LLM "How many 'r's are in strawberry?", it often says 2. Why? Because it sees the word as two tokens: "straw" and "berry". It doesn't analyze the individual letters.
- **Math vs. Language:** LLMs are calculators of *language*, not math. When they do math correctly, it's often because they've seen that exact math problem (like 2+2=4) millions of times in their training data, not because they are actually computing it.
- **The Workaround:** To get an LLM to count letters, you have to force it to use "Chain-of-Thought" (Chapter 3.4). E.g., *"Spell the word out with dashes: s-t-r... and then count."*

:::callout-error
Never trust an LLM to count the exact number of words, characters, or sentences in a paragraph. It is physically incapable of seeing the text at that granular level without specialized tools!
:::

:::quiz{id="04-01"}