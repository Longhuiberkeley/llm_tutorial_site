---
title: "12.6 Evaluation & Test Sets"
description: "How to prove your AI actually works — not just in demos, but in the real world."
chapter: "Chapter 12"
pageId: "12-06"
---

## 🎯 Core Goals
- Explain what an evaluation test set is and why it's essential for AI projects.
- Establish the importance of creating test sets BEFORE building, not after.
- Cover regression testing: catching when AI behavior degrades over time.

<div class="not-prose callout callout-tldr">

"Seemed good in the demo" is not proof. An evaluation test set is a collection of inputs where you already know the correct output — it lets you grade your LLM objectively, measure improvement, and catch regressions before they reach users.

</div>

## 🎓 What Is an Evaluation Test Set?

Imagine you're hiring a new employee to handle customer support. Before you let them respond to real customers, you'd probably give them a set of practice emails and check how they respond. You already know what a good answer looks like. You're grading them against a standard.

That's exactly what an evaluation test set is for an AI system.

Before launching any LLM-powered feature, you create a collection of sample inputs where you already know what the correct (or acceptable) output looks like. Then you run your AI on those inputs and measure how well it does.

For a customer support bot, that might look like:
- 100 sample customer emails, covering a range of topics and tones
- For each one, a "gold standard" response (or at minimum, criteria for what makes a good response)
- A scoring rubric: did the AI cite policy correctly? Was the tone appropriate? Did it escalate when needed?

Run the bot on all 100. 90 pass your criteria = 90% accuracy. You now have a **baseline** — a measurable starting point.

<div class="not-prose callout callout-dyk">

In machine learning research, these test collections are called "evaluation sets" or "benchmarks." Major LLM providers publish benchmarks to compare their models. The same principle applies at the application level: you define what success looks like for YOUR use case, then measure against it.

</div>

## 📅 Build Your Test Set Before You Build Your Feature

This is the counterintuitive part: **write your test set before you write your feature.**

Why? Because writing test cases forces you to define success. You can't create a test case without answering: "What is the right output for this input?" And if you can't answer that question, you're not ready to build yet.

The test-first discipline also prevents a common trap: building a feature and then writing test cases that match what the feature already produces (whether or not that output is actually correct). That's not testing — that's rubber-stamping.

Good test sets include:
- **Easy cases** — the straightforward, expected inputs the system should always handle correctly
- **Edge cases** — unusual, ambiguous, or tricky inputs that reveal where the system struggles
- **Adversarial cases** — inputs designed to trip up the system (what happens if a user tries to misuse it?)
- **Real examples** — sampled from actual usage data where possible (the most valuable kind)

<div class="not-prose callout callout-error">

A common mistake: only testing on "happy path" examples that you expect the system to handle well. Real users will send you edge cases constantly. If your test set doesn't include them, you won't know how your system behaves until something goes wrong in production.

</div>

## 🔄 Catching Regressions Over Time

Here's a property of AI systems that catches teams off guard: **behavior can change without you changing anything.**

LLM providers update their models regularly. A model update in October might subtly shift how it handles a certain type of input. Your feature wasn't touched — but its behavior changed.

This is called a regression: performance on a previously working case gets worse.

Without a test set, you'd never know. With a test set that you run regularly, you catch it immediately:

> "After the model update last Tuesday, our accuracy on billing-related emails dropped from 91% to 78%. We need to update our prompts to compensate."

This is why continuous evaluation matters. Running your test set once before launch is good. Running it monthly (or after any system change) is necessary. Treating it as a live monitoring tool is best practice.


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">Regression Testing Timeline</h3>
<p class="text-sm text-on-surface-variant">Click a time point to see test results. Watch what happens after a model update.</p>
</div>
<!-- Timeline -->
<div class="relative mb-8">
<div class="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-outline-variant/40 rounded-full"></div>
<div class="flex justify-around">
<button onclick="selectTimepoint(0, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-3 border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">🚀</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Pre-launch</span>
</button>
<button onclick="selectTimepoint(1, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">📅</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Month 1</span>
</button>
<button onclick="selectTimepoint(2, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">⚠️</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Month 3<br><span class="text-[9px] text-orange-500 font-bold">model update</span></span>
</button>
<button onclick="selectTimepoint(3, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">✅</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Month 4<br><span class="text-[9px] text-green-600 font-bold">prompts fixed</span></span>
</button>
</div>
</div>
<!-- Detail Panel -->
<div id="es-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[180px] transition-all duration-300">
<p class="text-sm text-on-surface-variant text-center italic">Click a time point above to see results.</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/regression-timeline.js';
init({
timepoints: [
{ label: 'Pre-launch Baseline', emoji: '🚀', color: 'border-primary', bgColor: 'bg-primary/5', accuracy: 91, barColor: '#4CAF50', metrics: [{ label: 'Easy cases', value: 100, note: '38/38 passing' },{ label: 'Edge cases', value: 82, note: '28/34 passing' },{ label: 'Adversarial cases', value: 75, note: '21/28 passing' }], status: '🟢 Baseline established', note: 'Test set created before launch: 100 cases covering routine requests, edge cases, and adversarial inputs. This number is your anchor — everything is measured against it.' },
{ label: 'Month 1 Check', emoji: '📅', color: 'border-primary', bgColor: 'bg-primary/5', accuracy: 93, barColor: '#4CAF50', metrics: [{ label: 'Easy cases', value: 100, note: '38/38 passing' },{ label: 'Edge cases', value: 88, note: '30/34 passing' },{ label: 'Adversarial cases', value: 82, note: '23/28 passing' }], status: '🟢 Performance stable — slight improvement', note: 'Prompt refinements based on early production patterns improved edge case handling. Running the test set monthly takes 10 minutes and catches drift before users notice.' },
{ label: 'Month 3 — Model Update', emoji: '⚠️', color: 'border-orange-400', bgColor: 'bg-orange-50', accuracy: 78, barColor: '#f59e0b', metrics: [{ label: 'Easy cases', value: 97, note: '37/38 passing' },{ label: 'Edge cases', value: 71, note: '24/34 passing' },{ label: 'Adversarial cases', value: 57, note: '16/28 passing' }], status: '🟡 Regression detected — accuracy dropped from 91% to 78%', note: 'The LLM provider updated their model. Nothing in your code changed — but behavior shifted. Without a test set, you would only discover this when customers start complaining. With a test set, you catch it immediately and know exactly where to fix.' },
{ label: 'Month 4 — Prompts Fixed', emoji: '✅', color: 'border-green-500', bgColor: 'bg-green-50', accuracy: 95, barColor: '#4CAF50', metrics: [{ label: 'Easy cases', value: 100, note: '38/38 passing' },{ label: 'Edge cases', value: 91, note: '31/34 passing' },{ label: 'Adversarial cases', value: 89, note: '25/28 passing' }], status: '🟢 Fully recovered — better than pre-launch', note: 'Prompt adjustments compensated for the model update. The test set showed exactly which case categories regressed, making fixes targeted rather than guesswork. This is why continuous evaluation matters.' }
]
});
</script>

</div>


## 📝 Key Concepts

- **Test set** = curated inputs with known-correct outputs, used to grade your LLM objectively.
- **Build test sets before building features** — they define what success looks like.
- **Include edge cases and adversarial inputs**, not just easy happy-path examples.
- **Establish a baseline** — measure accuracy before launch so you can track improvement and detect regressions.
- **Run test sets continuously** — LLM behavior can drift over time even when you change nothing.

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-12-06" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">When should you build your evaluation test set?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            After the feature is built, to verify it works correctly
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Only when something goes wrong in production
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            Before building the feature, to define what success looks like
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
