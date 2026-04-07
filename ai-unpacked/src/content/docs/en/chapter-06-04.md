---
title: "6.4 Agentic Loops — Perceive, Plan, Act, Observe"
description: "The engine inside an agent."
chapter: "Chapter 6"
pageId: "06-04"
---

## 🎯 Core Goals
- Walk through the lifecycle of an agent's decision-making.
- Understand why agents operate in cycles, not linear sequences.

<div class="not-prose callout callout-tldr">

Agents don't just "do it." They think, act, and then look at what happened. This cycle — the **Agentic Loop** — is what allows them to handle complex, messy real-world tasks.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-10">
<h3 class="text-xl font-bold font-headline mb-2">The Agentic Loop</h3>
<p class="text-sm text-on-surface-variant">Watch an agent cycle through its workflow to solve a task.</p>
</div>
<div class="flex flex-col md:flex-row gap-8 items-center justify-between px-10 relative">
<!-- Connecting Arrows Background -->
<div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-surface-container opacity-40 -translate-y-1/2 -z-10"></div>
<!-- Step 1: Perceive -->
<div id="step-perceive" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">👁️</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Perceive</div>
</div>
<!-- Step 2: Plan -->
<div id="step-plan" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">🧠</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Plan</div>
</div>
<!-- Step 3: Act -->
<div id="step-act" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">⚡</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Act</div>
</div>
<!-- Step 4: Observe -->
<div id="step-observe" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">🔍</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Observe</div>
</div>
</div>
<!-- Status Message Display -->
<div class="mt-12 bg-surface-container-lowest border-2 border-primary/20 rounded-xl p-6 min-h-[140px] flex flex-col justify-center animate-fade-in relative overflow-hidden">
<div class="absolute top-0 left-0 w-1 h-full bg-primary opacity-20"></div>
<div id="loop-status-title" class="text-[10px] font-black uppercase tracking-widest text-primary mb-2 opacity-60">Ready to Start</div>
<div id="loop-status-desc" class="text-sm font-bold leading-relaxed italic text-on-surface">
Task: "Research latest AI safety news and summarize findings."
</div>
<button onclick="startLoop()" id="start-loop-btn" class="mt-4 px-6 py-2 bg-primary text-on-primary rounded-full text-xs font-bold hover:shadow-lg transition-all self-start">Start Loop →</button>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/agentic-loop.js';
init({
  loopSteps: [
    { id: 'perceive', title: 'Perceive', desc: 'Agent reads the request: "Research AI safety news". Recognizes need for web search.' },
    { id: 'plan', title: 'Plan', desc: 'Strategy: (1) Use Google Search for news, (2) Filter results from last 24h, (3) Extract key points.' },
    { id: 'act', title: 'Act', desc: 'Calling tool: <strong>web_search("latest AI safety papers March 2026")</strong>' },
    { id: 'observe', title: 'Observe', desc: 'Found 5 relevant articles. One is behind a paywall\u2014need to adjust plan to find alternative source.' },
    { id: 'perceive', title: 'Perceive (Cycle 2)', desc: 'Processes search results. Identifies the need for a summary tool.' },
    { id: 'plan', title: 'Plan (Cycle 2)', desc: 'Analyze the 4 accessible papers and synthesize into 3 bullet points.' },
    { id: 'act', title: 'Act (Cycle 2)', desc: 'Generating final summary based on retrieved context.' },
    { id: 'observe', title: 'Observe (Cycle 2)', desc: 'Summary complete. Quality check passed. Delivering to user.' }
  ],
  startLabel: 'Start Loop \u2192',
  restartLabel: 'Restart Loop \u2192'
});
</script>

</div>


## 📝 Key Concepts

- **Perceive:** Reads the task and the current environment.
- **Plan:** Decides which tools to use and what steps to take.
- **Act:** Executes a tool (like a web search or a file edit).
- **Observe:** Looks at the result of the action. Was it successful? Did it give us what we needed?

<div class="not-prose callout callout-dyk">

This loop continues until the agent believes the task is finished or it hits a safety limit (like a timeout or maximum number of steps).

</div>

<div id="quiz-06-04" class="not-prose quiz-container my-12" data-quiz="06-04"></div>
