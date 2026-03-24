---
title: "2.3 Attention Weights — How the Model Focuses"
description: "See how attention weights solve pronouns and track ideas across sentences."
chapter: "Chapter 2"
pageId: "02-03"
---

## 🎯 Core Goals
- Make the math concrete: show attention as visual weight bars.
- Show how attention solves pronoun resolution ("it" -> "cat").
- Understand how attention tracks meaning across multiple sentences.

:::callout-tldr
Attention isn't just lines connecting words—it's measurable "weights." By giving thick weights to important connections, the LLM can figure out exactly who "it" or "she" refers to, even across long paragraphs.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-attention-weights"}

## 📝 Key Concepts

- **Attention Weights:** These are numbers (between 0 and 1) showing how much one word "looks at" another. If a weight is high, the model is using that word heavily to understand the context.
- **Pronoun Resolution:** Think about the word "it". Does "it" mean the cat, the mat, or the weather? Attention solves this! The word "it" will have a massive attention weight pointing back to the specific noun it represents.
- **Cross-Sentence Tracking:** Attention doesn't stop at a period. As text gets longer, the LLM keeps building attention arrows back to previous sentences. This is why an LLM can write a 5-paragraph story without forgetting the main character's name—the words in paragraph 5 are still paying "attention" to paragraph 1.
- **Multiple Heads:** LLMs actually have multiple "heads" of attention. One head might track grammar (verbs looking at nouns), while another tracks pronouns, and another tracks the overall topic.

:::callout-error
The LLM isn't "remembering" the plot of the story like a human would. It is simply maintaining mathematical attention weights to previous tokens in the text sequence.
:::

:::quiz{id="02-03"}
