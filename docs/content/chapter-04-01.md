---
title: "4.1 Counting Problems — Pattern Matching, Not Math"
description: "Why LLMs can't reliably count or do math — they predict patterns, not compute."
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

- **The Strawberry Problem:** If you ask an LLM "How many 'r's are in strawberry?", it often says 2. Why? Because it sees the word as two tokens: "straw" and "berry". It doesn't analyze the individual letters. For us humans, we can break down "straw" letter by letter: s, t, r, a, w. But for an LLM, "straw" is its own Lego block — it can't be broken further.
- **Math vs. Language:** LLMs are calculators of *language*, not math. When they do math correctly, it's often because they've seen that exact math problem (like 2+2=4) millions of times in their training data, not because they are actually computing it.
- **Pattern Matching:** If you ask an LLM to add long strings of numbers, it might guess a plausible-sounding sum based on patterns it's seen before, rather than performing actual addition.

:::callout-error
Never trust an LLM to count the exact number of words, characters, or sentences in a paragraph. It is physically incapable of seeing the text at that granular level without specialized tools!
:::

:::quiz{id="04-01"}
Why can't LLMs reliably count the letters in a word?
- [ ] They haven't been trained on enough counting examples
- [x] They process text as token chunks, not individual characters
- [ ] Counting is too complex for any AI system
:::
