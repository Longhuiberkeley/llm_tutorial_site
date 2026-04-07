---
title: "5.2 Be Explicit — No Mind Reading"
description: "State your requirements clearly."
chapter: "Chapter 5"
pageId: "05-02"
---

## 🎯 Core Goals
- Learn why "more is more" when it comes to prompt instructions.
- See how specificity leads to dramatically better results.

<div class="not-prose callout callout-tldr">

If you don't specify it, the LLM will guess — and it will guess based on the most common pattern it's seen, not what *you* actually need. The more explicit you are, the less room there is for a wrong assumption.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Specificity Stack</h3>
<p class="text-sm text-on-surface-variant">Click the layers to turn a vague prompt into a great one.</p>
</div>
<div class="grid md:grid-cols-2 gap-8 items-start">
<!-- Controls -->
<div class="space-y-3">
<button onclick="toggleStep(1, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">1</div>
<div>
<div class="font-bold text-sm">Base Goal</div>
<div class="text-xs opacity-60">"Write an email..."</div>
</div>
</button>
<button onclick="toggleStep(2, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4 opacity-50">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">2</div>
<div>
<div class="font-bold text-sm">Add Context</div>
<div class="text-xs opacity-60">"To my boss about a deadline..."</div>
</div>
</button>
<button onclick="toggleStep(3, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4 opacity-50">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">3</div>
<div>
<div class="font-bold text-sm">Set Constraints</div>
<div class="text-xs opacity-60">"Under 100 words, no apologies..."</div>
</div>
</button>
<button onclick="toggleStep(4, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4 opacity-50">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">4</div>
<div>
<div class="font-bold text-sm">Define Format</div>
<div class="text-xs opacity-60">"3 bulleted options..."</div>
</div>
</button>
</div>
<!-- Output Preview -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm min-h-[300px] flex flex-col">
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-40">Prompt Preview</div>
<div id="prompt-preview" class="text-sm font-mono bg-surface-container p-4 rounded-lg mb-6 flex-grow">
"Write an email."
</div>
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-40">AI Result Quality</div>
<div class="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-2">
<div id="quality-bar" class="h-full bg-primary transition-all duration-500" style="width: 10%;"></div>
</div>
<div id="quality-label" class="text-[10px] font-bold text-primary uppercase">Poor (Generic)</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/specificity-stack.js';
init({
  promptSteps: [
    {
      prompt: '"Write an email."',
      quality: 10,
      label: "Poor (Generic)"
    },
    {
      prompt: '"Write an email to my boss asking for a deadline extension on the Q3 report."',
      quality: 40,
      label: "Better (Focused)"
    },
    {
      prompt: '"Write an email to my boss asking for a deadline extension on the Q3 report. Keep it under 100 words. Do not apologize profusely."',
      quality: 75,
      label: "Strong (Controlled)"
    },
    {
      prompt: '"Write an email to my boss asking for a deadline extension on the Q3 report. Keep it under 100 words. Do not apologize profusely. Provide 3 different subject line options in bullet points."',
      quality: 100,
      label: "Excellent (Surgical)"
    }
  ]
});
</script>

</div>


## 📝 Key Concepts

- Can you specify what you want?
- Can you describe in detail what you do for a living?
- Does the answer you expect from the LLM have a clear right or wrong answer?
- Can you improve the prompt above?


<div class="not-prose callout callout-dyk">

**The 6W Framework for better prompts:** When stuck on why your result isn't right, ask yourself if you covered: **Who** is the audience? **What** exactly do you want? **When/Where** is the context? **Why** does this matter? **How** should it be formatted? More answered Ws = better output.

For LLM-assisted coding or project management, it's very important to have a clearly defined specification. We'll explore this when we cover project management.

</div>

<div class="not-prose callout callout-dyk">

**How do you improve a bad prompt?** Add more context. The most common reason an LLM gives a generic or off-target response is that the prompt was ambiguous. Read your own prompt as if you knew nothing about the task — would the instruction be clear to a stranger? If not, add more detail.

</div>

<div id="quiz-05-02" class="not-prose quiz-container my-12" data-quiz="05-02"></div>
