---
title: "2.2 ELI5 Attention — The Cocktail Party Effect"
description: "Explain the attention mechanism using the Cocktail Party Effect analogy."
chapter: "Chapter 2"
pageId: "02-02"
---

## 🎯 Core Goals
- Teach that "attention" means every word looks at every other word.
- Show that some connections matter much more than others.

:::callout-tldr
"Attention" is the mechanism LLMs use to understand context. Imagine a noisy cocktail party: if someone across the room says your name, you suddenly focus on their voice and filter out the noise. LLMs do the same with words!
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-all-words-attention"}

## 📝 Key Concepts

- **Looking Everywhere:** When processing a sentence, the LLM mathematically compares the first word to the second word, the first to the third, the second to the third, and so on. Every word connects to EVERY other word.
- **Finding the Clues:** Thick connections (high attention scores) form when words give context to each other. In a noisy sentence, "bank" pays high attention to "river" to know what kind of bank it is. Unrelated words get very thin connections.
- **Pronoun Resolution:** Attention is how an LLM figures out what "it", "he", or "she" refers to. The pronoun will have a massive attention score pointing back to the noun it represents.

:::callout-dyk
**The Paper That Changed Everything**
The paper "Attention Is All You Need" by Vaswani et al. (2017) introduced the Transformer architecture—the foundation of every modern LLM. Before Transformers, AI processed words one at a time. Transformers process ALL words simultaneously, using attention to figure out which words matter to each other.
:::

:::callout-error
Attention isn't human understanding. It's just a mathematical score of how often words appear together in similar contexts during the LLM's training.
:::

:::quiz{id="02-02"}
