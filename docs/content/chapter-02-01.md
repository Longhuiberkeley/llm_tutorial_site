---
title: "2.1 What is Tokenization?"
description: "Understand how LLMs see text as chunks (tokens), not as words."
chapter: "Chapter 2"
pageId: "02-01"
---

## 🎯 Core Goals
- Show that LLMs don't see words—they see chunks called "tokens".
- Understand why LLMs sometimes mess up spelling or word boundaries.

:::callout-tldr
LLMs don't read English words. They read "tokens"—chunks of letters (usually 3-4 characters long). To an LLM, "hamburger" might be split into "ham", "burg", and "er", which are then converted into numbers.
:::

## 👁️ Visuals & Interactives

:::callout-dyk
**Play with Tokenization!** 
Want to see exactly how an LLM chops up your text? Try the amazing [Tokenizer Playground by Xenova (https://huggingface.co/spaces/Xenova/the-tokenizer-playground)](https://huggingface.co/spaces/Xenova/the-tokenizer-playground). 

Type in a word like "unbelievable" or a sentence with emojis, and watch how it gets sliced into colorful token chunks. This is exactly what the LLM's "eyes" see before the math begins!
:::

## 📝 Key Concepts

- **Chunks, Not Words:** A token can be a whole word (like "apple"), part of a word (like "un" or "believable"), or even a single space or punctuation mark.
- **Numbers Under the Hood:** Each chunk is assigned a specific ID number in the LLM's vocabulary. "Apple" might be token #4591.
- **The Spelling Problem:** Because LLMs see chunks instead of individual letters, they are notoriously bad at tasks like "Count how many 'r's are in strawberry." They see "straw" and "berry" as solid blocks, not strings of letters.

:::quiz{id="02-01"}
