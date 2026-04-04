---
title: "2.4 Context Capacity — What Fits in the Head"
description: "Make 'context window' concrete by visualizing what different token counts actually look like."
chapter: "Chapter 2"
pageId: "02-04"
---

## 🎯 Core Goals
- Make the concept of a "Context Window" concrete.
- Visualize what 200k or 1 Million tokens actually looks like.

<div class="not-prose callout callout-tldr">

The "Context Window" is the absolute limit of how much text an LLM can pay attention to at one time. It's the AI's only "short-term memory." Once it fills up, old information has to fall out.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-10">
<h3 class="text-3xl font-bold font-headline mb-2 text-primary">Context Capacity</h3>
<p class="text-lg text-on-surface-variant font-medium">How many "tokens" can the model hold in its head at once?</p>
</div>
<div class="space-y-8">
<!-- Scale Buttons -->
<div class="flex flex-wrap justify-center gap-3">
<button class="px-5 py-2 rounded-full font-bold transition-all bg-primary text-on-primary shadow-lg hover:scale-105 active:scale-95 cap-btn" id="btn-cap-0" onclick="updateCapacity(0)">Small (2K)</button>
<button class="px-5 py-2 rounded-full font-bold transition-all bg-surface-container-highest text-on-surface hover:scale-105 active:scale-95 cap-btn" id="btn-cap-1" onclick="updateCapacity(1)">Medium (32K)</button>
<button class="px-5 py-2 rounded-full font-bold transition-all bg-surface-container-highest text-on-surface hover:scale-105 active:scale-95 cap-btn" id="btn-cap-2" onclick="updateCapacity(2)">Large (200K)</button>
<button class="px-5 py-2 rounded-full font-bold transition-all bg-surface-container-highest text-on-surface hover:scale-105 active:scale-95 cap-btn" id="btn-cap-3" onclick="updateCapacity(3)">Giant (1M+)</button>
</div>
<!-- Result Card -->
<div id="capacity-card" class="bg-surface-container-lowest rounded-2xl p-8 border-2 border-outline-variant/30 shadow-inner min-h-[280px] flex flex-col items-center justify-center transition-all duration-300">
<div id="capacity-visual" class="text-6xl mb-6 animate-fade-in drop-shadow-sm">📄</div>
<div class="text-center">
<h4 id="capacity-title" class="text-2xl font-bold font-headline text-primary mb-2">2,000 Tokens</h4>
<p id="capacity-desc" class="text-on-surface-variant font-medium leading-relaxed max-w-sm mx-auto">
Early LLMs: Equivalent to about <strong>4 pages</strong> of text. Perfect for a quick email or a short article.
</p>
</div>
</div>
</div>
</div>
<script>
const capacityData = [
{
title: "2,000 Tokens",
visual: "📄",
desc: "<strong>The Short Article.</strong> About 4 pages of text. Just enough for a few emails or a recipe.",
color: "var(--primary)"
},
{
title: "32,000 Tokens",
visual: "📑",
desc: "<strong>The Product Manual.</strong> Roughly 60 pages. Enough to hold a technical guide or a long legal document.",
color: "var(--primary)"
},
{
title: "200,000 Tokens",
visual: "📚📚",
desc: "<strong>~2 Novels.</strong> A massive amount of space. You can feed it a couple of full-length books or a large codebase.",
color: "var(--accent)"
},
{
title: "1,000,000+ Tokens",
visual: "📚📚📚📚📚📚📚📚📚📚",
desc: "<strong>~10 Novels.</strong> A staggering amount of space — stack up about 10 novels at once. The model can cross-reference ideas across the entire <em>Lord of the Rings</em> trilogy and then some.",
color: "var(--on-surface-variant)"
}
];
function updateCapacity(val) {
// Update button styles
document.querySelectorAll('.cap-btn').forEach((btn, idx) => {
if (idx === val) {
btn.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
btn.classList.remove('bg-surface-container-highest', 'text-on-surface');
} else {
btn.classList.add('bg-surface-container-highest', 'text-on-surface');
btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
}
});
const data = capacityData[val];
const visual = document.getElementById('capacity-visual');
const title = document.getElementById('capacity-title');
const desc = document.getElementById('capacity-desc');
// Animate out
visual.style.transform = 'scale(0.8)';
visual.style.opacity = '0';
setTimeout(() => {
visual.innerHTML = data.visual;
title.innerHTML = data.title;
desc.innerHTML = data.desc;
title.style.color = data.color;
// Animate in
visual.style.transform = 'scale(1.1)';
visual.style.opacity = '1';
setTimeout(() => {
visual.style.transform = 'scale(1)';
}, 150);
}, 150);
}
</script>
</div>


## 📝 Key Concepts

- **The Limit of Attention:** The math of calculating attention between every single word gets incredibly expensive as text gets longer. This is why LLMs have a hard limit on their context window.
- **Short-Term Memory:** The context window is an LLM's only "memory". If you had a 50-page conversation, but the context window only fits 40 pages, the LLM will completely forget the first 10 pages.
- **Growing Capabilities:** Early LLMs could only remember about 2,000 tokens (a few pages). Today's models can remember 200,000 tokens (about 2 full novels) up to 1,000,000 tokens (roughly 10 novels).

<div class="not-prose callout callout-error">

Just because a model has a 1 Million token context window doesn't mean it pays *perfect* attention to everything in it. Often, LLMs suffer from the "needle in a haystack" problem, where they forget things in the middle of long text.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-02-04" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">What happens when a conversation exceeds the LLM's context window?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            The LLM compresses older messages to make room
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            The earliest parts of the conversation are effectively forgotten
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            The LLM asks you to start a new conversation
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
