---
title: "10.5 Choosing Your Model — A Thought Exercise"
description: "A framework for evaluating LLMs against your specific needs — because 'best model' depends entirely on your priorities."
chapter: "Chapter 10"
pageId: "10-05"
---

## 🎯 Core Goals
- Give readers a repeatable framework for model selection.
- Reinforce that model choice is multi-dimensional and should match actual priorities.

<div class="not-prose callout callout-tldr">

There's no universally "best" LLM. The right model depends on your specific priorities — speed, cost, accuracy, privacy, context window. Map your needs first, then find the match.

</div>

## The Trap: Picking by Brand

Many organizations default to the most famous model, or whatever their IT team approved first, or whatever the CEO saw in a demo.

This is rarely optimal.

Model selection should be driven by your actual requirements — which vary enormously by use case. A customer support bot has different needs than a legal document reviewer. A marketing email generator has different needs than a code assistant.

## The Six Dimensions

Rate each dimension for your specific use case (1 = low priority, 5 = critical):


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Six Evaluation Dimensions</h3>
<p class="text-sm text-on-surface-variant">Rate each 1–5 for your use case. The right model matches your highest priorities.</p>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<!-- Speed -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">bolt</span>
<h4 class="font-bold text-sm">Speed</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
How fast does the response need to arrive? Users notice lag; batch jobs don't.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">User-facing chat, real-time tools</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Overnight batch processing</span>
</div>
</div>
</div>
<!-- Accuracy -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">verified</span>
<h4 class="font-bold text-sm">Accuracy & Reasoning</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
How much does getting it exactly right matter? Some tasks forgive errors; others can't.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Medical summaries, legal analysis</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Marketing brainstorming, ideation</span>
</div>
</div>
</div>
<!-- Cost -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">payments</span>
<h4 class="font-bold text-sm">Cost</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
What's your token budget at expected scale? Cost compounds quickly at volume.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">High-volume, simple repeated tasks</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Low-volume, quality-critical tasks</span>
</div>
</div>
</div>
<!-- Context Window -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">article</span>
<h4 class="font-bold text-sm">Context Window</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
How much text does the model need to hold in mind at once? Long documents need large windows.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Reviewing 50-page contracts</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Short Q&A, single-turn queries</span>
</div>
</div>
</div>
<!-- Privacy -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">lock</span>
<h4 class="font-bold text-sm">Privacy & Data Residency</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
Can your data leave your servers? Regulations in some industries make self-hosting non-negotiable.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Healthcare, legal, government, finance</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">General marketing, public content</span>
</div>
</div>
</div>
<!-- Domain Fit -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">tune</span>
<h4 class="font-bold text-sm">Domain Fit</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
Does the model have strengths in your specific area? Not all models are equally good at code or multilingual tasks.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Code generation, non-English markets</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">General English text tasks</span>
</div>
</div>
</div>
</div>
</div>

</div>


## Match to Model Strengths

After rating your priorities:

- **High accuracy + large context → Flagship closed-source** (the best/ultra tier from any major provider)
- **High speed + high volume → Fast tier** (lite, mini, flash-tier models)
- **Strict privacy → Self-hosted open-source** (models you download and run yourself)
- **Google Workspace integration → Google's ecosystem**
- **Cost-sensitive at scale → Chinese open-source alternatives** (DeepSeek, Qwen, and others)

If you're evaluating a model for agent or automation work, the qualities that make a good agent — which we explored earlier in the course — are also worth mapping against your model choice:


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Agent Checklist</h3>
<p class="text-sm text-on-surface-variant">What separates a smart script from a true AI agent?</p>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<!-- Autonomy & Proactivity -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">self_improvement</span>
<h4 class="font-bold text-sm">Autonomy & Proactivity</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
Acts independently toward a goal — doesn't wait to be told every step. More like an employee than a tool.
</p>
</div>
<!-- Goal-Oriented Planning -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">checklist</span>
<h4 class="font-bold text-sm">Goal-Oriented Planning</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
Breaks high-level goals into actionable steps in a logical order — prerequisites first, then build on them. Prioritizes, sequences, and adjusts when conditions change.
</p>
</div>
<!-- Tool Use & Interoperability -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">build</span>
<h4 class="font-bold text-sm">Tool Use & Interoperability</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
Interacts with external APIs, search engines, and databases to get real things done — not just talk about them.
</p>
</div>
<!-- Adaptability & Learning -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">published_with_changes</span>
<h4 class="font-bold text-sm">Adaptability</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
If Tool A fails, it tries Tool B. Uses real-time feedback to refine its approach mid-task.
</p>
</div>
<!-- Context Awareness & Memory -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">memory</span>
<h4 class="font-bold text-sm">Context & Memory</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
Maintains short- and long-term memory of past steps, enabling coherent work across multi-step or multi-session tasks.
</p>
</div>
<!-- Collaboration -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">group</span>
<h4 class="font-bold text-sm">Collaboration</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
Works alongside humans and other specialized agents to accomplish complex, multi-part projects.
</p>
</div>
</div>
<!-- Script vs Agent contrast -->
<div class="mt-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
<div class="grid grid-cols-2 gap-6 text-center">
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2 opacity-60">Script</div>
<div class="font-mono text-xs text-on-surface-variant bg-surface-container rounded-lg px-4 py-3">A → B → C</div>
<p class="text-[11px] text-on-surface-variant mt-2 opacity-70 italic">Fixed steps, breaks if anything changes</p>
</div>
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Agent</div>
<div class="font-mono text-xs text-primary bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">Perceive → Plan → Act → Observe → Repeat</div>
<p class="text-[11px] text-on-surface-variant mt-2 italic">Adaptive loop — keeps going until the goal is met</p>
</div>
</div>
</div>
</div>

</div>


<div class="not-prose callout callout-dyk">

The most important number isn't the benchmark score — it's your own accuracy on your own tasks. Run your actual use cases through competing models and measure the outputs. Internal testing on real examples beats any published leaderboard.

</div>

<div class="not-prose callout callout-dyk">

**Long-horizon tasks — where frontier models earn their price.** When a task involves many steps — reviewing a 50-page document, debugging across multiple files, maintaining consistency across a long conversation — cheaper models tend to "forget" earlier context or lose track of the goal. Frontier models handle this significantly better: they maintain coherence over longer tasks, follow complex multi-step instructions more reliably, and are more likely to push back when something doesn't make sense rather than cheerfully producing plausible garbage. If your use case involves sustained, multi-step work, the gap between cheap and frontier models is substantial.

</div>

<div class="not-prose callout callout-error">

**A good model doesn't just agree with you.** If you ask an LLM to evaluate your business plan and it says "Wow, this is brilliant — it'll change the world!" without a single critique or pushback... that's not a good sign. A genuinely capable model will spot weaknesses, ask pointed questions, and tell you when something won't work. **Tip:** Try pasting your plan into a *different* chat session — or even a different model entirely — and explicitly ask it to poke holes in your logic. A fresh model with no prior context is far more likely to give you honest feedback than one that's been cheerfully agreeing with you for the past 20 minutes.

</div>

<div class="not-prose callout callout-tip">

**Thinking about building an app or automating a workflow?** The model is only part of the decision. When we explored what makes good agents, we saw how they rely on tools, memory, integrations, and the ability to take actions in the world — all things that go beyond the model itself. The ecosystem around the model — what it connects to, how it's orchestrated, what tools it can use — often matters just as much. The automation and implementation sections go deeper on this.

</div>

## Revisit Regularly

The LLM landscape shifts every few months. A model that didn't exist six months ago might now be your best option. Set a calendar reminder every quarter to recheck whether your current choice still makes sense.

<div id="quiz-10-05" class="not-prose quiz-container my-12" data-quiz="10-05"></div>
