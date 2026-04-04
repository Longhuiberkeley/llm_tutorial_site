---
title: "2.1 What is Tokenization?"
description: "Understand how LLMs see text as chunks (tokens), not as words."
chapter: "Chapter 2"
pageId: "02-01"
---

## 🎯 Core Goals
- Show that LLMs don't see words—they see chunks called "tokens".
- Understand why LLMs sometimes mess up spelling or word boundaries.

<div class="not-prose callout callout-tldr">

LLMs don't read English words. They read "tokens"—chunks of letters (usually 3-4 characters long in English). To an LLM, "hamburger" might be split into "ham", "burg", and "er", which are then converted into numbers.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-8">
<span class="text-3xl block mb-2">🧩</span>
<h3 class="text-xl font-bold font-headline mb-1">How an LLM Reads Text</h3>
<p class="text-sm text-on-surface-variant italic">Not words, not letters — chunks called <strong>tokens</strong>. Click a sentence to see how it's sliced.</p>
</div>
<!-- Sentence selector -->
<div class="flex flex-wrap justify-center gap-2 mb-8">
<button onclick="tkShow(0)" id="tk-btn-0" class="px-4 py-2 rounded-full text-xs font-bold transition-all bg-primary text-on-primary">Sentence 1</button>
<button onclick="tkShow(1)" id="tk-btn-1" class="px-4 py-2 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">Sentence 2</button>
<button onclick="tkShow(2)" id="tk-btn-2" class="px-4 py-2 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">Sentence 3</button>
</div>
<!-- Original text display -->
<div class="mb-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-center">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 opacity-60">Original Text</div>
<div id="tk-original" class="text-base font-medium italic text-on-surface"></div>
</div>
<!-- Token chips -->
<div class="p-6 bg-surface-container-lowest border-2 border-outline-variant rounded-xl">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">Tokens (what the LLM actually sees)</div>
<div id="tk-chips" class="flex flex-wrap gap-2 min-h-[48px]"></div>
<div id="tk-count" class="mt-4 text-xs text-on-surface-variant opacity-60 text-right"></div>
</div>
<!-- Explanation callout -->
<div id="tk-note" class="mt-4 p-4 rounded-xl border-l-4 text-sm" style="border-color: var(--accent); background-color: color-mix(in srgb, var(--accent) 8%, transparent);"></div>
</div>
<script>
(function() {
// Token color palette (rotating)
var palette = [
{ bg: '#FFE082', text: '#5D4037' }, // amber
{ bg: '#A5D6A7', text: '#1B5E20' }, // green
{ bg: '#90CAF9', text: '#0D47A1' }, // blue
{ bg: '#F48FB1', text: '#880E4F' }, // pink
{ bg: '#CE93D8', text: '#4A148C' }, // purple
{ bg: '#FFCC80', text: '#E65100' }, // orange
{ bg: '#80DEEA', text: '#006064' }, // cyan
{ bg: '#BCAAA4', text: '#3E2723' }, // brown
];
var sentences = [
{
original: '"wow, i am learning so much in this tutorial!"',
tokens: ['wow', ',', ' i', ' am', ' learning', ' so', ' much', ' in', ' this', ' tutorial', '!', '"'],
note: '12 tokens for a short sentence! Notice that spaces often attach to the <em>next</em> word, and punctuation marks are their own tokens. This is how the LLM sees every sentence — as a list of numbered chunks.'
},
{
original: '"strawberry"',
tokens: ['straw', 'berry'],
note: '<strong>Wait — 2 tokens?</strong> "strawberry" splits into "straw" and "berry" — whole chunks, not letters. The LLM never sees s-t-r-a-w separately. "straw" is a single Lego block it can\'t look inside. This is exactly why it gets the \'r\' count wrong — the individual letters are invisible to it!'
},
{
original: '"I need help writing an email to my CEO about Q3 revenue."',
tokens: ['I', ' need', ' help', ' writing', ' an', ' email', ' to', ' my', ' CEO', ' about', ' Q', '3', ' revenue', '.'],
note: '14 tokens. Notice that "Q3" split into "Q" and "3" — the LLM treats the number separately. Also, longer common words like "writing" and "revenue" become single tokens because they appear so often in training data.'
}
];
function tkShow(idx) {
// Update buttons
for (var i = 0; i < 3; i++) {
var btn = document.getElementById('tk-btn-' + i);
if (i === idx) {
btn.style.backgroundColor = 'var(--primary)';
btn.style.color = 'var(--on-primary)';
} else {
btn.style.backgroundColor = '';
btn.style.color = '';
btn.classList.add('bg-surface-container-highest', 'text-on-surface');
btn.classList.remove('bg-primary', 'text-on-primary');
}
}
var s = sentences[idx];
document.getElementById('tk-original').textContent = s.original;
var chips = document.getElementById('tk-chips');
chips.innerHTML = '';
s.tokens.forEach(function(tok, i) {
var color = palette[i % palette.length];
var chip = document.createElement('span');
chip.className = 'inline-block rounded-md px-2 py-1 text-sm font-bold border';
chip.style.backgroundColor = color.bg;
chip.style.color = color.text;
chip.style.borderColor = color.text + '33';
// Show spaces explicitly
chip.textContent = tok.startsWith(' ') ? '␣' + tok.trim() : tok;
if (tok === ' ') chip.textContent = '␣';
chips.appendChild(chip);
});
document.getElementById('tk-count').textContent = s.tokens.length + ' token' + (s.tokens.length !== 1 ? 's' : '');
document.getElementById('tk-note').innerHTML = s.note;
}
window.tkShow = tkShow;
tkShow(0);
})();
</script>

</div>


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

<div class="not-prose callout callout-dyk">

**What does "predict" mean?**
In the AI context, "predict" doesn't mean "foresee the future." It means "calculate what is most likely to come next based on patterns." Think of it more like "guess"—the LLM guesses the next token based on everything it's learned.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-02-01" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">Why does an LLM struggle with "How many r's are in strawberry?"</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            It hasn't been trained on enough spelling data
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            It processes "strawberry" as token chunks like "straw" + "berry", not individual letters
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            It doesn't know what the letter 'r' looks like
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
