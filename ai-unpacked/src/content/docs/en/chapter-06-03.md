---
title: "6.3 What Makes a Good Agent?"
description: "Responsive and adaptive AI."
chapter: "Chapter 6"
pageId: "06-03"
---

## 🎯 Core Goals
- Define what makes an AI system truly "agentic" — not just a script with tools.
- Understand the six key characteristics of high-quality agents.

<div class="not-prose callout callout-tldr">

A real agent isn't just an LLM with tools bolted on. It operates **autonomously**, breaks down complex goals, adapts when things go wrong, and can collaborate — like an employee who figures things out, not just a tool that waits to be used.

</div>

## 👁️ Visuals & Interactives


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


## 📝 Key Characteristics

- **Autonomy & Proactivity:** Unlike passive, reactive AI, a good agent acts independently to achieve goals. It doesn't wait to be told every step — it decides what to do next.
- **Goal-Oriented Planning:** Agents break complex, high-level goals into actionable steps, prioritize them, and adjust strategies when conditions change.
- **Tool Use & Interoperability:** Good agents interact with external systems — APIs, software, search engines, databases — to get tasks done (e.g., checking email, updating a CRM).
- **Adaptability & Learning:** Agents use feedback loops and real-time data to refine their performance and adapt to new situations mid-task.
- **Context Awareness & Memory:** Agentic LLMs maintain both short-term and long-term memory of past interactions, allowing for coherent work across multiple steps or sessions.
- **Collaboration:** Agents can work alongside humans and often with other specialized agents to accomplish complex, multi-part projects.

<div class="not-prose callout callout-dyk">

A traditional script follows fixed steps: A → B → C. An agent follows an adaptive loop: **Perceive → Plan → Act → Observe → Repeat**. The loop continues until the goal is met — or the agent asks for help.

</div>

<div class="not-prose callout callout-tip">

Remember those absurd questions, like "Peter bought 12 watermelons, Mary bought 24 apples — how many pineapples does Jack have?" A good model should respond, "No, that’s impossible." Similarly, if you ask an impossible question, a good LLM shouldn’t say, "What a great idea!" — it should push back. Researchers have created a benchmark to test this capability: [Bullshit Benchmark](https://github.com/petergpt/bullshit-benchmark)

</div>


<div id="quiz-06-03" class="not-prose quiz-container my-12" data-quiz="06-03"></div>
