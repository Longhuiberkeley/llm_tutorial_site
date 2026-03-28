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

The above is a simplified toy example — in reality, LLMs have vocabularies of 30,000–100,000+ tokens. A helpful rule of thumb from OpenAI: **one token generally corresponds to ~4 characters** of common English text, or roughly ¾ of a word. That means **100 tokens ≈ 75 words**.

Common English words like "guitar", "William", and "amazing" each fit neatly as a single token. But what about less common or compound words?

<div class="callout callout-dyk">

**🔬 Play with Tokenization!**

Want to see exactly how an LLM chops up your text? Try the [Tokenizer Playground by Xenova](https://huggingface.co/spaces/Xenova/the-tokenizer-playground). Type in any word or sentence and watch how it gets sliced into colorful token chunks — this is exactly what the LLM's "eyes" see before processing begins!

Here are some fun words to try — they look like they might be single tokens, but are they? Copy them and paste into the playground to find out:

<div class="flex items-center gap-2 mt-3 mb-2">
<code id="tk-try-words" class="block flex-1 bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface break-all">tokenization antiestablishment 20250328 Schadenfreude McNugget someRandomFunction() haHahaha</code>
<button id="tk-copy-btn" class="flex-shrink-0 p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant transition-colors cursor-pointer border border-outline-variant" title="Copy to clipboard"><span class="material-symbols-outlined text-base">content_copy</span></button>
<span id="tk-copy-msg" class="text-xs font-semibold text-green-700 opacity-0 transition-opacity duration-300">Copied!</span>
</div>

<script>
document.getElementById('tk-copy-btn').addEventListener('click', function() {
    var btn = this;
    var msg = document.getElementById('tk-copy-msg');
    navigator.clipboard.writeText(document.getElementById('tk-try-words').textContent).then(function() {
        btn.innerHTML = '<span class="material-symbols-outlined text-base">check</span>';
        msg.style.opacity = '1';
        setTimeout(function() {
            btn.innerHTML = '<span class="material-symbols-outlined text-base">content_copy</span>';
            msg.style.opacity = '0';
        }, 1500);
    });
});
</script>

</div>

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
