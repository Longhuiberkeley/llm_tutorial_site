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

<div class="not-prose callout callout-tldr">

Just like words, sentences can be "close" or "far" in meaning. "I'm hungry" and "Let's eat" are close - they mean the same thing even though they use different words.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 text-center">
<div class="flex items-center justify-center gap-3 mb-6">
<span class="text-3xl">🧐</span>
<h3 class="text-xl font-bold font-headline">Which sentence means something entirely different?</h3>
</div>
<div class="flex flex-col gap-3 max-w-xl mx-auto">
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg" onclick="this.classList.add('border-red-500', 'bg-red-50'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
A) "I am starving right now."
</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg" onclick="this.classList.add('border-red-500', 'bg-red-50'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
B) "Let's go get some food."
</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg group" onclick="this.classList.add('border-green-500', 'bg-green-50'); this.querySelector('.feedback').classList.remove('hidden'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
C) "The sky is so blue today."
<span class="feedback hidden float-right text-green-600 font-bold">✅ Correct!</span>
</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg" onclick="this.classList.add('border-red-500', 'bg-red-50'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
D) "I really want to eat."
</div>
</div>
<p id="iq-sentence-feedback" class="mt-6 text-on-surface-variant italic hidden animate-fade-in">Even though sentences A, B, and D use completely different words, they group tightly together in the LLM's meaning-space!</p>
</div>

</div>


## 📝 Key Concepts

- **Beyond Words:** LLMs don't just map individual words; they map entire sequences. 
- **Example 1:** "The cat sat on the mat" and "The kitten rested on the rug" map to the same region, while "Stock prices fell" is far away.
- **Example 2:** "I love my new phone" and "I adore my recent smartphone" are close in meaning. But "The phone rang at midnight" is far away, even though it shares the word "phone."
- **Semantic Understanding:** Sentences that mean similar things (using completely different words) map to the same region in meaning-space. This is what enables "understanding".

<div class="not-prose callout callout-error">

LLMs don't match sentences word-for-word. They look at the overall meaning. That's why they can understand "I'm hungry" and "I want food" as the same thing.

</div>

<div id="quiz-01-04" class="not-prose quiz-container my-12" data-quiz="01-04"></div>
