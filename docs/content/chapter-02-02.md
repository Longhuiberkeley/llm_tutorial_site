---
title: "2.2 Attention Arrows - Everything Connects"
description: "See how 'attention' connects words to find meaning."
chapter: "Chapter 2"
pageId: "02-02"
---

## 🎯 Core Goals
- Teach that "attention" means every word looks at every other word.
- Show that some connections matter much more than others.

:::callout-tldr
"Attention" is the mechanism LLMs use to understand context. Every word in a sentence draws an invisible line to every other word, measuring how relevant they are to each other.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-attention-sentences"}

## 📝 Key Concepts

- **Looking Everywhere:** When processing a sentence, the LLM mathematically compares the first word to the second word, the first to the third, the second to the third, and so on. 
- **Finding the Clues:** Thick connections (high attention scores) form when words give context to each other. "Bank" pays high attention to "River" so it knows what kind of bank it is.
- **Pronoun Resolution:** Attention is how an LLM figures out what "it", "he", or "she" refers to. The pronoun will have a massive attention score pointing back to the noun it represents.

:::callout-error
Attention isn't human understanding. It's just a mathematical score of how often words appear together in similar contexts during the LLM's training.
:::

:::quiz{id="02-02"}
