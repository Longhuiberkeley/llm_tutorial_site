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
LLMs don't read English words. They read "tokens"—chunks of letters (usually 3-4 characters long in English). To an LLM, "hamburger" might be split into "ham", "burg", and "er", which are then converted into numbers.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-tokenizer"}

:::callout-dyk
**Play with Tokenization!**
Want to see exactly how an LLM chops up your text? Try the [Tokenizer Playground by Xenova](https://huggingface.co/spaces/Xenova/the-tokenizer-playground). Type in any word or sentence and watch how it gets sliced into colorful token chunks — this is exactly what the LLM's "eyes" see before processing begins!
:::

## 📝 Key Concepts

- **Chunks, Not Words:** A token can be a whole word (like "apple"), part of a word (like "un" or "believable"), or even a single space or punctuation mark.
- **Numbers Under the Hood:** Each chunk is assigned a specific ID number in the LLM's vocabulary. "Apple" might be token #4591.
- **The Spelling Problem:** Because LLMs see chunks instead of individual letters, they are notoriously bad at tasks like "Count how many 'r's are in strawberry." They see "straw" and "berry" as solid blocks, not strings of letters.
- **A Pool of Tokens:** During prediction, the LLM is choosing from a fixed pool or set of possible tokens—like picking from a predefined vocabulary list, rather than guessing completely random text.
- **Why Tokens, Not Letters?** Processing text as chunks rather than individual characters is far more efficient. A typical English word is 2-3 tokens instead of 5-6 letters — that's fewer things for the model to predict, which makes training and generation dramatically faster.

:::callout-dyk
**What does "predict" mean?**
In the AI context, "predict" doesn't mean "foresee the future." It means "calculate what is most likely to come next based on patterns." Think of it more like "guess"—the LLM guesses the next token based on everything it's learned.
:::

:::quiz{id="02-01"}
Why does an LLM struggle with "How many r's are in strawberry?"
- [ ] It hasn't been trained on enough spelling data
- [x] It processes "strawberry" as token chunks like "straw" + "berry", not individual letters
- [ ] It doesn't know what the letter 'r' looks like
:::
