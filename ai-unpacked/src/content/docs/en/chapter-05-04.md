---
title: "5.4 Chain-of-Thought & Reasoning Tokens"
description: "Thinking Step by Step."
chapter: "Chapter 5"
pageId: "05-04"
---

## 🎯 Core Goals
- Learn why "thinking step by step" makes AI smarter.
- Understand the difference between prompting for reasoning and native "thinking" models.

<div class="not-prose callout callout-tldr">

For complex tasks, don't ask for the answer immediately. Ask the AI to "think step by step." This forces it to build its internal logic before committing to a final conclusion.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">Show Your Work</h3>
<p class="text-sm text-on-surface-variant">See how thinking step-by-step prevents logic errors.</p>
</div>
<div class="flex flex-col gap-6">
<!-- Direct Answer -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-0.5 rounded bg-surface-container text-[10px] font-bold uppercase tracking-widest opacity-60">Direct Answer</span>
</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>Question:</strong> "If I have 3 apples, eat 1, and buy 5 more—how many?"
</div>
<div class="p-3 bg-red-50 border border-red-200 rounded text-xs leading-relaxed italic text-red-700">
<strong>AI Result:</strong> "You have 8 apples." (Wrong! It missed the subtraction step.)
</div>
</div>
<!-- Arrow -->
<div class="flex items-center justify-center">
<span class="material-symbols-outlined text-accent text-3xl">keyboard_double_arrow_down</span>
</div>
<!-- Chain of Thought -->
<div class="bg-surface-container-lowest border-2 border-primary rounded-xl p-6 shadow-md relative overflow-hidden">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest">Chain of Thought</span>
<span class="text-[10px] font-bold text-primary uppercase animate-pulse">✨ Much More Accurate</span>
</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>Question:</strong> "If I have 3 apples, eat 1, and buy 5 more—how many? <strong>Let's think step-by-step.</strong>"
</div>
<div class="space-y-3">
<div class="p-4 bg-surface-container rounded border-l-4 border-accent animate-fade-in text-[11px] leading-relaxed">
<div class="flex items-center gap-2 mb-2 font-bold opacity-60 uppercase text-[10px]">
<span class="material-symbols-outlined text-xs">psychology</span>
Thinking Process
</div>
1. Start with 3 apples.<br>
2. Eat 1 apple: 3 - 1 = 2 apples remaining.<br>
3. Buy 5 more: 2 + 5 = 7 apples.<br>
4. Final count: 7.
</div>
<div class="p-4 bg-green-50 border border-green-200 rounded text-xs leading-relaxed italic text-green-700 font-bold">
<strong>AI Output:</strong> "You have 7 apples." (Correct!)
</div>
</div>
</div>
</div>
</div>

</div>


## 📝 Key Concepts

- **Chain-of-Thought (CoT):** Prompting for step-by-step reasoning.
- **Thinking Tokens:** Modern models (connected to what we learned about model training) are trained to do this internally before they even start typing their final answer.
- **The "Scratchpad" Effect:** Generating intermediate steps provides additional context for the final answer, making it more reliable.

<div class="not-prose callout callout-dyk">

Even when the reasoning chain contains errors, the simple act of spending more tokens on reasoning improves final accuracy. It's like how scribbling on scratch paper helps you solve a math problem, even if your scribbles aren't perfectly organized. So in some sense, reasoning is more like an "effort" thing. If you want a **smarter** model, set the reasoning effort to high.

</div>

<div class="not-prose callout callout-dyk">

Is reasoning the same thing as thinking?

</div>

<div id="quiz-05-04" class="not-prose quiz-container my-12" data-quiz="05-04"></div>
