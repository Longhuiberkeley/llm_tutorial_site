---
title: "2.4 From Sentences to Paragraphs"
description: "How attention tracks meaning across multiple sentences."
chapter: "Chapter 2"
pageId: "02-04"
---

## 🎯 Core Goals
- Show that attention works across sentence boundaries.
- Understand how ideas flow forward and pronouns refer backward.

:::callout-tldr
Attention isn't limited to one sentence. The LLM tracks connections across paragraphs, allowing it to maintain a consistent topic and remember who is doing what.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-cross-sentence"}

## 📝 Key Concepts

- **Long-Range Connections:** As text gets longer, the LLM keeps building attention arrows back to previous sentences. 
- **Maintaining State:** This is why an LLM can write a 5-paragraph story without forgetting the main character's name. The words in paragraph 5 are still paying "attention" to the character introduced in paragraph 1.
- **The Limit:** The further back a word is, the harder it can be to maintain strong attention. This introduces the concept of a "Context Window".

:::callout-error
The LLM isn't "remembering" the plot of the story like a human would. It is simply maintaining mathematical attention weights to previous tokens in the text sequence.
:::

:::quiz{id="02-04"}
