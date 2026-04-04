---
title: "4.3 Randomness & Temperature"
description: "The 'Creativity' vs 'Reliability' slider."
chapter: "Chapter 4"
pageId: "04-03"
---

## 🎯 Core Goals
- Understand the setting that controls how "creative" an LLM is.
- Learn when to use high vs. low temperature.

<div class="not-prose callout callout-tldr">

"Temperature" is a setting you can tweak on most LLMs. A low temperature makes the LLM predictable but factual. A high temperature makes it creative but prone to going completely off the rails.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<!-- SECTION 1: WARMUP -->
<div class="mb-12">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">1. The Guessing Game</h3>
<p class="text-sm text-on-surface-variant">There's no single "right" answer. Which word works best?</p>
</div>
<div class="text-center mb-6">
<div class="text-2xl font-bold p-6 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm inline-block">
"My favorite piece of tech is a" <span id="temp-target" class="animate-pulse text-primary border-b-2 border-primary">___</span>
</div>
</div>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
<button onclick="tempSelect('📱 phone', '35%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">📱</span>
<span class="font-bold text-xs">phone</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[35%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">35%</span>
</button>
<button onclick="tempSelect('💻 laptop', '30%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">💻</span>
<span class="font-bold text-xs">laptop</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[30%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">30%</span>
</button>
<button onclick="tempSelect('📟 tablet', '20%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">📟</span>
<span class="font-bold text-xs">tablet</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[20%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">20%</span>
</button>
<button onclick="tempSelect('🎮 console', '15%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">🎮</span>
<span class="font-bold text-xs">console</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[15%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">15%</span>
</button>
</div>
<div id="temp-warmup-feedback" class="hidden mt-6 text-center text-sm font-bold text-green-600">
✅ All of these work! There's no single "right" answer. The AI just picks one.
</div>
</div>
<hr class="border-outline-variant/30 mb-12">
<!-- SECTION 2: TEMPERATURE SLIDER -->
<div>
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">2. Adjusting the "Creativity" Slider</h3>
<p class="text-sm text-on-surface-variant">Prompt: <em>"Write a short story about a cat."</em></p>
</div>
<div class="mb-8 px-4">
<div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">
<span>❄️ Predictable</span>
<span>🔥 Chaos</span>
</div>
<input type="range" id="temp-slider" min="0" max="2" value="0" step="1"
class="w-full h-3 rounded-full appearance-none cursor-pointer accent-primary"
style="background: linear-gradient(to right, #5B8DB8, var(--accent), var(--error));"
oninput="updateTemp(this.value)">
<div class="flex justify-between px-1 mt-2 text-[10px] font-bold text-on-surface-variant opacity-60">
<span>Temp 0.0</span>
<span>Temp 0.7</span>
<span>Temp 1.5</span>
</div>
</div>
<div id="temp-output" class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 min-h-[120px] transition-all duration-300">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">AI Output:</div>
<div id="temp-text" class="text-sm leading-relaxed italic">
The cat sat on the mat. It was a very good cat. Every day, the cat slept.
</div>
</div>
</div>
</div>
<script>
function tempSelect(word, pct, btn) {
document.getElementById('temp-target').textContent = word;
document.getElementById('temp-target').classList.remove('animate-pulse');
document.getElementById('temp-warmup-feedback').classList.remove('hidden');
}
var tempLevels = [
"The cat sat on the mat. It was a very good cat. Every day, the cat slept. The cat was happy.",
"Whiskers prowled the velvet sofa, dreaming of the tuna can opening in the kitchen later that evening.",
"Neon whiskers glitching through the purple fog, the feline entity calculated the distance to the cheese moon. Meow? Bleep."
];
function updateTemp(val) {
var text = document.getElementById('temp-text');
text.classList.add('opacity-0');
setTimeout(() => {
text.textContent = tempLevels[val];
text.classList.remove('opacity-0');
}, 200);
}
</script>

</div>


## 📝 Key Concepts

- **The Dice Roll:** When an LLM predicts the next word, it generates a list of possibilities (e.g., 90% chance of "apple", 9% chance of "banana", 1% chance of "shoe").
- **Temperature 0.0 (Predictable):** The LLM always picks the #1 most likely word. It becomes highly predictable, repetitive, and excellent for writing code or summarizing data.
- **Temperature 1.0 (Creative):** The LLM is allowed to pick the 2nd, 3rd, or 4th most likely word. This introduces variety, making it great for brainstorming, poetry, and storytelling!
- **Probabilistic Nature:** LLMs are fundamentally probabilistic — this is another reason they can't be 100% reliable. There is almost always more than one "correct" way to finish a sentence.

<div class="not-prose callout callout-error">

If you set the temperature too high (e.g., 2.0), the LLM will start picking from a much wider, less predictable set of words, resulting in literal gibberish and broken grammar.

</div>

<div class="not-prose callout callout-dyk">

**For most users: leave temperature alone.** The default temperature setting is carefully chosen by the model's creators. Tweaking it without understanding the task can noticeably degrade response quality.

</div>

<div class="not-prose callout callout-dyk">

**Have you tried asking the LLM if it has a favorite number?** Have you noticed if it gives you the same answer sometimes? Why is it?  
Adjusting the temperature is a very good way to introduce more randomness in this scenario.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-04-03" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">What does setting an LLM's temperature to 0 do?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Makes the LLM refuse to answer questions
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            Makes it always pick the most likely next word, producing consistent and predictable output
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Makes the LLM generate shorter responses
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
