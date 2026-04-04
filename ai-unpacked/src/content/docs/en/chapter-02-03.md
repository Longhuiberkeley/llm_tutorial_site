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

<div class="not-prose callout callout-tldr">

Attention isn't just lines connecting words—it's measurable "weights." By giving thick weights to important connections, the LLM can figure out exactly who "it" or "she" refers to, even across long paragraphs.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-8">
<span class="text-3xl block mb-2">⚖️</span>
<h3 class="text-xl font-bold font-headline">Pronoun Resolution with Attention</h3>
<p class="text-sm text-on-surface-variant italic">Click "it" to see what the LLM is paying attention to</p>
<p class="text-xs text-on-surface-variant mt-1 opacity-70">💡 In this example, imagine every word is one token.</p>
</div>
<div class="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant">
<div class="flex flex-wrap justify-center gap-2 text-xl font-bold mb-10">
<span class="px-2 py-1 rounded" id="aw-The">The</span>
<span class="px-2 py-1 rounded" id="aw-cat">cat</span>
<span class="px-2 py-1 rounded" id="aw-sat">sat</span>
<span class="px-2 py-1 rounded" id="aw-on">on</span>
<span class="px-2 py-1 rounded" id="aw-the2">the</span>
<span class="px-2 py-1 rounded" id="aw-warm">warm</span>
<span class="px-2 py-1 rounded" id="aw-mat">mat</span>
<span class="px-2 py-1 rounded" id="aw-because">because</span>
<span class="px-3 py-1 rounded-lg border-2 border-transparent cursor-pointer transition-all hover:border-primary bg-primary/10" onclick="showAw(this)" id="aw-it">it</span>
<span class="px-2 py-1 rounded" id="aw-was">was</span>
<span class="px-2 py-1 rounded" id="aw-tired">tired.</span>
</div>
<div id="aw-bars" style="opacity:0; transition: opacity 0.3s;">
<h4 class="font-bold text-on-surface-variant uppercase tracking-wider text-sm mb-4">Attention Weights for "it"</h4>
<div class="space-y-3">
<!-- cat: 84% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right font-bold text-sm">cat</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-cat" style="width:0; background-color: var(--primary); transition: width 1s ease-out;"></div>
</div>
<div class="w-10 font-bold text-sm" style="color: var(--primary);">84%</div>
</div>
<!-- tired: 10% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right font-bold text-sm">tired</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-tired" style="width:0; background-color: var(--accent); transition: width 1s ease-out 0.15s;"></div>
</div>
<div class="w-10 font-bold text-sm" style="color: var(--accent);">10%</div>
</div>
<!-- mat: 4% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right text-sm text-on-surface-variant">mat</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-mat" style="width:0; background-color: var(--outline); transition: width 1s ease-out 0.3s;"></div>
</div>
<div class="w-10 text-sm text-on-surface-variant">4%</div>
</div>
<!-- was: 1% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right text-sm text-on-surface-variant">was</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-was" style="width:0; background-color: var(--outline-variant); transition: width 1s ease-out 0.4s;"></div>
</div>
<div class="w-10 text-sm text-on-surface-variant">1%</div>
</div>
<!-- warm: 1% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right text-sm text-on-surface-variant">warm</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-warm" style="width:0; background-color: var(--outline-variant); transition: width 1s ease-out 0.5s;"></div>
</div>
<div class="w-10 text-sm text-on-surface-variant">1%</div>
</div>
<!-- others -->
<div class="flex items-center gap-3 opacity-50">
<div class="w-16 text-right text-xs text-on-surface-variant">others…</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-others" style="width:0; background-color: var(--outline-variant); transition: width 1s ease-out 0.6s;"></div>
</div>
<div class="w-10 text-xs text-on-surface-variant">~0%</div>
</div>
</div>
<div class="mt-6 p-4 rounded-lg text-center font-medium text-sm" style="background-color: color-mix(in srgb, var(--primary) 10%, transparent); color: var(--primary);">
✅ "it" → "cat" — Pronoun successfully resolved!
</div>
</div>
</div>
</div>
<script>
window.showAw = function(btn) {
btn.style.borderColor = 'var(--primary)';
// Highlight key words in sentence
document.getElementById('aw-cat').style.color = 'var(--primary)';
document.getElementById('aw-cat').style.fontWeight = '900';
document.getElementById('aw-tired').style.color = 'var(--accent)';
// Show bars
document.getElementById('aw-bars').style.opacity = '1';
// Animate bars — delay lets browser register width:0 before transition fires
setTimeout(function() {
document.getElementById('aw-bar-cat').style.width = '84%';
document.getElementById('aw-bar-tired').style.width = '10%';
document.getElementById('aw-bar-mat').style.width = '4%';
document.getElementById('aw-bar-was').style.width = '1%';
document.getElementById('aw-bar-warm').style.width = '1%';
document.getElementById('aw-bar-others').style.width = '0.5%';
}, 60);
};
</script>

</div>


## 📝 Key Concepts

- **Attention Weights:** These are numbers (between 0 and 1) showing how much one word "looks at" another. If a weight is high, the model is using that word heavily to understand the context.
- **Pronoun Resolution:** Think about the word "it". Does "it" mean the cat, the mat, or the weather? Attention solves this! The word "it" will have a massive attention weight pointing back to the specific noun it represents.
- **Cross-Sentence Tracking:** Attention doesn't stop at a period. As text gets longer, the LLM keeps building attention arrows back to previous sentences. This is why an LLM can write a 5-paragraph story without forgetting the main character's name—the words in paragraph 5 are still paying "attention" to paragraph 1.
- **Multiple Heads:** LLMs actually have multiple "heads" of attention. One head might track grammar (verbs looking at nouns), while another tracks pronouns, and another tracks the overall topic.

<div class="not-prose callout callout-error">

The LLM isn't "remembering" the plot of the story like a human would. It is simply maintaining mathematical attention weights to previous tokens in the text sequence.

</div>

<div id="quiz-02-03" class="not-prose quiz-container my-12" data-quiz="02-03"></div>
