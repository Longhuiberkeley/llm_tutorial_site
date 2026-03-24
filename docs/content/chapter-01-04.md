---
title: "1.4 Sentence Distance - What Does 'Similar' Mean?"
description: "Extend the distance concept from words to sentences."
chapter: "Chapter 1"
pageId: "01-04"
---

## 🎯 Core Goals
- Extend the distance concept from words to sentences.
- Understand that whole sentences can be "close" or "far" in meaning.
- See how LLMs know what you mean even when you use different words.

:::callout-tldr
Just like words, sentences can be "close" or "far" in meaning. "I'm hungry" and "Let's eat" are close - they mean the same thing even though they use different words.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-iq-test-sentence"}

## 📝 Key Concepts

- **Beyond Words:** LLMs don't just map individual words; they map entire sequences. 
- **Example 1:** "The cat sat on the mat" and "The kitten rested on the rug" map to the same region, while "Stock prices fell" is far away.
- **Example 2:** "I love my new phone" and "I adore my recent smartphone" are close in meaning. But "The phone rang at midnight" is far away, even though it shares the word "phone."
- **Semantic Understanding:** Sentences that mean similar things (using completely different words) map to the same region in meaning-space. This is what enables "understanding".

:::callout-error
LLMs don't match sentences word-for-word. They look at the overall meaning. That's why they can understand "I'm hungry" and "I want food" as the same thing.
:::

:::quiz{id="01-04"}
