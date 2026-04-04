---
title: "1.3 Context Matters - Distance Can Change"
description: "Understand that meaning (and distance) changes based on context."
chapter: "Chapter 1"
pageId: "01-03"
---

## 🎯 Core Goals
- Understand that meaning (and distance) changes based on context.
- See how the same word can be "close" to different words in different situations.
- Learn why LLMs need "attention" to figure out which context applies.

<div class="not-prose callout callout-tldr">

The same word can mean different things depending on context. "Bank" is close to "river" in one sentence, but close to "money" in another.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8">
<div class="flex justify-center gap-4 mb-8">
<button class="px-8 py-3 rounded-full font-bold transition-all bg-primary text-on-primary shadow-lg hover:scale-105 active:scale-95" id="btn-scene1" onclick="document.getElementById('scene1').style.display='flex'; document.getElementById('scene2').style.display='none'; this.classList.add('bg-primary', 'text-on-primary', 'shadow-lg'); this.classList.remove('bg-surface-container-highest', 'text-on-surface'); document.getElementById('btn-scene2').classList.add('bg-surface-container-highest', 'text-on-surface'); document.getElementById('btn-scene2').classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');">Scene 1: Nature</button>
<button class="px-8 py-3 rounded-full font-bold transition-all bg-surface-container-highest text-on-surface hover:scale-105 active:scale-95" id="btn-scene2" onclick="document.getElementById('scene2').style.display='flex'; document.getElementById('scene1').style.display='none'; this.classList.add('bg-primary', 'text-on-primary', 'shadow-lg'); this.classList.remove('bg-surface-container-highest', 'text-on-surface'); document.getElementById('btn-scene1').classList.add('bg-surface-container-highest', 'text-on-surface'); document.getElementById('btn-scene1').classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');">Scene 2: Finance</button>
</div>
<!-- Scene 1 -->
<div id="scene1" class="flex flex-col items-center justify-center p-8 bg-surface-container-lowest rounded-xl border border-primary/20 animate-fade-in min-h-[250px]">
<div class="flex items-center gap-8 text-6xl mb-6">
<div class="text-center"><span class="block">🌊</span><span class="text-lg font-bold mt-2 text-on-surface block">River</span></div>
<div class="text-center"><span class="block">🚣</span><span class="text-lg font-bold mt-2 text-on-surface block">Canoe</span></div>
<div class="text-center p-4 bg-primary/10 rounded-xl border-2 border-primary animate-pulse"><span class="block">🏞️</span><span class="text-lg font-bold mt-2 text-primary block">Bank</span></div>
</div>
<p class="text-xl font-medium">In this context, "bank" is pulled closer to <strong class="text-primary">Nature</strong>.</p>
</div>
<!-- Scene 2 -->
<div id="scene2" class="flex flex-col items-center justify-center p-8 bg-surface-container-lowest rounded-xl border border-primary/20 animate-fade-in min-h-[250px]" style="display: none;">
<div class="flex items-center gap-8 text-6xl mb-6">
<div class="text-center"><span class="block">💰</span><span class="text-lg font-bold mt-2 text-on-surface block">Money</span></div>
<div class="text-center"><span class="block">💳</span><span class="text-lg font-bold mt-2 text-on-surface block">Credit</span></div>
<div class="text-center p-4 bg-primary/10 rounded-xl border-2 border-primary animate-pulse"><span class="block">🏦</span><span class="text-lg font-bold mt-2 text-primary block">Bank</span></div>
</div>
<p class="text-xl font-medium">In this context, "bank" is pulled closer to <strong class="text-primary">Finance</strong>.</p>
</div>
</div>

</div>


## 📝 Key Concepts

- **Multiple Meanings:** Words are ambiguous without surrounding text. "Apple" could be a fruit or a tech company.
- **Shifting Distance:** Surrounding words literally shift the "distance" of ambiguous words toward the correct meaning in the LLM's "brain".

<div class="not-prose callout callout-dyk">

What other words have multiple meanings? How does your brain know which meaning is intended? (Hint: You look at context - LLMs do the same thing!)

</div>

<div id="quiz-01-03" class="not-prose quiz-container my-12" data-quiz="01-03"></div>
