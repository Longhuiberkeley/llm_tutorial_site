---
title: "12.5 Building Agentic Applications"
description: "The building blocks and design patterns behind agentic AI systems — what your team will build and how to think about it."
chapter: "Chapter 12"
pageId: "12-05"
---

## 🎯 Core Goals
- Demystify what an agentic application actually consists of.
- Introduce the four core building blocks in plain language.
- Present common design patterns as concepts, not code.
- Frame everything as "what your team will build" — accessible to business decision-makers.

<div class="not-prose callout callout-tldr">

Agentic applications are built from four simple building blocks: a brain (the Agent), hands (Tools), memory (Sessions), and an engine (the Runner). You don't need to be a developer to understand them — and understanding them helps you have much better conversations with your development team.

</div>

## 🧩 The Four Building Blocks

Every agentic application, from a simple chatbot to a complex multi-step workflow, is built from the same four pieces. Think of them like the organs of the system — each has a clear job.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🧠</span>
<div>
<div class="font-bold text-base mb-1">The Agent (the Brain)</div>
<p class="text-sm text-on-surface/80">The LLM with its instructions. It reads input, thinks about what to do, and makes decisions. Its instructions — what you tell it about its role, rules, and personality — are its interface. Good instructions produce good behavior; vague instructions produce unpredictable behavior.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🔧</span>
<div>
<div class="font-bold text-base mb-1">Tools (the Hands)</div>
<p class="text-sm text-on-surface/80">Functions the agent can call to interact with the real world: search the web, read a database, send an email, call an API, update a spreadsheet. Without tools, the agent can only talk. With tools, it can act.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">📝</span>
<div>
<div class="font-bold text-base mb-1">Sessions (the Memory)</div>
<p class="text-sm text-on-surface/80">How the agent remembers what happened in the current interaction. It knows what you said three messages ago, what tools it called, and what results came back. This is what makes multi-step conversations and workflows possible.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">⚙️</span>
<div>
<div class="font-bold text-base mb-1">The Runner (the Engine)</div>
<p class="text-sm text-on-surface/80">The orchestration layer that actually runs everything. It manages the loop: send input to the agent, the agent decides what to do, the runner executes tool calls, sends results back, and repeats until the task is complete.</p>
</div>
</div>
</div>
</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Four Building Blocks of Agentic Apps</h3>
<p class="text-sm text-on-surface-variant">Click a block to learn what it does. Then watch them work together.</p>
</div>
<!-- Four Clickable Cards -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" id="prim-cards">
<button onclick="selectPrimitive(0)" id="prim-btn-0"
class="prim-card p-5 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-center transition-all hover:border-primary cursor-pointer">
<div class="text-3xl mb-2">🧠</div>
<div class="font-bold text-sm">Agent</div>
<div class="text-[10px] text-on-surface-variant mt-1">The Brain</div>
</button>
<button onclick="selectPrimitive(1)" id="prim-btn-1"
class="prim-card p-5 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-center transition-all hover:border-primary cursor-pointer">
<div class="text-3xl mb-2">🔧</div>
<div class="font-bold text-sm">Tools</div>
<div class="text-[10px] text-on-surface-variant mt-1">The Hands</div>
</button>
<button onclick="selectPrimitive(2)" id="prim-btn-2"
class="prim-card p-5 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-center transition-all hover:border-primary cursor-pointer">
<div class="text-3xl mb-2">📝</div>
<div class="font-bold text-sm">Session</div>
<div class="text-[10px] text-on-surface-variant mt-1">The Memory</div>
</button>
<button onclick="selectPrimitive(3)" id="prim-btn-3"
class="prim-card p-5 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-center transition-all hover:border-primary cursor-pointer">
<div class="text-3xl mb-2">⚙️</div>
<div class="font-bold text-sm">Runner</div>
<div class="text-[10px] text-on-surface-variant mt-1">The Engine</div>
</button>
</div>
<!-- Detail Panel -->
<div id="prim-detail" class="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant min-h-[100px] mb-6 transition-all">
<p class="text-sm text-on-surface-variant text-center italic">Click a building block above to see details.</p>
</div>
<!-- Animation Button & Status Area -->
<div class="text-center mb-4">
<button onclick="startPrimDemo()" id="prim-play-btn"
class="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-bold hover:shadow-lg transition-all cursor-pointer">
▶ See Them Work Together
</button>
</div>
<!-- Animation Status Display -->
<div id="prim-status" class="hidden bg-surface-container-lowest border-2 border-primary/20 rounded-xl p-6 min-h-[80px] flex flex-col justify-center relative overflow-hidden">
<div class="absolute top-0 left-0 w-1 h-full bg-primary opacity-20"></div>
<div id="prim-status-label" class="text-[10px] font-black uppercase tracking-widest text-primary mb-2 opacity-60"></div>
<div id="prim-status-text" class="text-sm font-bold leading-relaxed italic text-on-surface"></div>
</div>
</div>
<script>
(function() {
var primitives = [
{
emoji: '🧠',
name: 'Agent (The Brain)',
desc: 'Reads, thinks, decides. The Agent is the LLM at the core — it receives input, reasons about what to do next, and decides which tools to call or what response to give.',
details: [
'Interprets natural language requests',
'Plans a sequence of actions',
'Decides when the task is complete'
],
analogy: 'Like a project manager who reads the brief, decides the approach, and delegates tasks.'
},
{
emoji: '🔧',
name: 'Tools (The Hands)',
desc: 'Searches, calls APIs, sends emails. Tools are external functions the agent can invoke to interact with the real world — things the LLM cannot do with text alone.',
details: [
'Web search, database queries, calculations',
'API calls (email, calendar, CRM)',
'File operations (read, write, create)'
],
analogy: 'Like a worker\'s toolbelt — each tool does one specific job, and the agent picks the right one.'
},
{
emoji: '📝',
name: 'Session (The Memory)',
desc: 'Remembers the conversation. The Session stores the full history of messages, tool calls, and results so the agent can build on previous steps.',
details: [
'Tracks the full conversation history',
'Stores tool call results for reference',
'Enables multi-step reasoning over time'
],
analogy: 'Like a notebook where every step is written down — the agent can flip back to check what happened before.'
},
{
emoji: '⚙️',
name: 'Runner (The Engine)',
desc: 'Orchestrates the loop. The Runner manages the cycle: send messages to the agent, execute tool calls, feed results back, and repeat until the task is done.',
details: [
'Runs the perceive-plan-act-observe loop',
'Routes tool calls to the right functions',
'Decides when to stop (task complete or limit reached)'
],
analogy: 'Like an assembly line conveyor belt that keeps everything moving in the right order.'
}
];
var animSteps = [
{ highlight: -1, label: 'Input', text: '📨 "Find me the cheapest flight to Tokyo next week"' },
{ highlight: 0,  label: 'Agent (Think)', text: '🧠 Agent reads the request and decides: I need to search flights' },
{ highlight: 1,  label: 'Tools (Act)', text: '🔧 Calling flight_search("Tokyo", "next week")' },
{ highlight: 2,  label: 'Session (Store)', text: '📝 Stores search results — 3 flights found' },
{ highlight: 3,  label: 'Runner (Loop)', text: '⚙️ Agent hasn\'t finished yet → loop continues' },
{ highlight: 0,  label: 'Agent (Think)', text: '🧠 Agent compares prices and picks the cheapest: $420 on ANA' },
{ highlight: -1, label: 'Complete', text: '✅ "The cheapest flight is $420 on ANA, departing Tuesday"' }
];
var isPlaying = false;
var currentAnimStep = 0;
function renderDetail(idx) {
var p = primitives[idx];
var panel = document.getElementById('prim-detail');
panel.innerHTML =
'<div class="flex items-start gap-4 mb-4">' +
'<div class="text-3xl shrink-0">' + p.emoji + '</div>' +
'<div>' +
'<div class="text-lg font-bold mb-1">' + p.name + '</div>' +
'<p class="text-sm text-on-surface-variant leading-relaxed">' + p.desc + '</p>' +
'</div>' +
'</div>' +
'<div class="grid sm:grid-cols-2 gap-4">' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">What it does</div>' +
'<ul class="text-sm space-y-1.5">' +
p.details.map(function(d) {
return '<li class="flex items-start gap-2"><span class="shrink-0 mt-0.5 text-primary">▸</span>' + d + '</li>';
}).join('') +
'</ul>' +
'</div>' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">Analogy</div>' +
'<p class="text-sm leading-relaxed italic">' + p.analogy + '</p>' +
'</div>' +
'</div>';
}
function highlightCard(idx) {
var cards = document.querySelectorAll('.prim-card');
cards.forEach(function(card, i) {
if (i === idx) {
card.classList.remove('border-outline-variant');
card.classList.add('border-primary', 'scale-105');
card.style.boxShadow = '0 4px 12px rgba(143, 72, 47, 0.15)';
} else {
card.classList.remove('border-primary', 'scale-105');
card.classList.add('border-outline-variant');
card.style.boxShadow = 'none';
}
});
}
function clearCardHighlights() {
var cards = document.querySelectorAll('.prim-card');
cards.forEach(function(card) {
card.classList.remove('border-primary', 'scale-105');
card.classList.add('border-outline-variant');
card.style.boxShadow = 'none';
});
}
function runAnimStep() {
if (currentAnimStep >= animSteps.length) {
isPlaying = false;
var btn = document.getElementById('prim-play-btn');
btn.disabled = false;
btn.textContent = '▶ Replay Demo';
btn.classList.remove('opacity-50');
return;
}
var step = animSteps[currentAnimStep];
// Highlight the corresponding card
if (step.highlight >= 0) {
highlightCard(step.highlight);
} else {
clearCardHighlights();
}
// Update status display
var label = document.getElementById('prim-status-label');
var text = document.getElementById('prim-status-text');
label.style.opacity = '0';
text.style.opacity = '0';
setTimeout(function() {
label.textContent = step.label;
text.textContent = step.text;
label.style.opacity = '0.6';
text.style.opacity = '1';
}, 150);
currentAnimStep++;
// Final step stays longer
var delay = currentAnimStep >= animSteps.length ? 3000 : 2000;
setTimeout(runAnimStep, delay);
}
window.selectPrimitive = function(idx) {
if (isPlaying) return; // Don't interfere with animation
highlightCard(idx);
renderDetail(idx);
};
window.startPrimDemo = function() {
if (isPlaying) return;
isPlaying = true;
currentAnimStep = 0;
var btn = document.getElementById('prim-play-btn');
btn.disabled = true;
btn.classList.add('opacity-50');
btn.textContent = '⏳ Running...';
// Show status area
var status = document.getElementById('prim-status');
status.classList.remove('hidden');
status.classList.add('flex');
// Clear detail panel during animation
document.getElementById('prim-detail').innerHTML =
'<p class="text-sm text-on-surface-variant text-center italic">Watch the building blocks work together below...</p>';
runAnimStep();
};
})();
</script>

</div>


The key insight: the Agent (brain) is the only part that uses AI. Tools, Sessions, and the Runner are regular software engineering. This means most of the system is predictable and testable — only the decision-making layer involves the unpredictability of an LLM.

## 🏗️ Common Design Patterns

When developers build agentic applications, they typically reach for one of three well-established patterns. Understanding these helps you evaluate proposals and ask better questions.

### A. Delegation (Specialists and Orchestrators)

Instead of building one giant agent that handles everything, you create **specialist agents** — each an expert in one area — and an **orchestrator** that knows who to call.

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="text-sm mb-3"><strong>Analogy:</strong> A project manager doesn't write code, design graphics, AND handle legal reviews. They know which team member to call for each task.</div>
<div class="text-sm"><strong>Example:</strong> A customer service orchestrator receives all incoming requests. It routes billing questions to a Billing Agent (which has access to the payment system), technical issues to a Tech Support Agent (which can check system status), and shipping questions to a Logistics Agent (which can track packages). Each specialist is small, focused, and accurate.</div>
</div>

**Why this works better than one big agent:** Small, specialized agents are more accurate and less likely to make mistakes than one massive agent trying to handle every possible scenario.

### B. The Router Pattern

A **router agent** sits at the front door. Its only job is to figure out **what kind of request** this is and pass it to the right worker. It doesn't do the actual work — it just sorts.

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="text-sm mb-3"><strong>Analogy:</strong> A hospital triage nurse assesses each patient and sends them to the right department. The nurse doesn't treat the patient — but without good triage, the system breaks down.</div>
<div class="text-sm"><strong>Example:</strong> A customer writes in. The router determines: is this about billing, technical support, or a general question? Then it hands the conversation to the appropriate specialist. The classification step is fast and cheap; the specialized handling is where the real work happens.</div>
</div>

### C. The Self-Correction Loop

Instead of delivering its first answer and stopping, the agent **checks its own work** and tries again if the result isn't good enough.

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="text-sm mb-3"><strong>Analogy:</strong> A student who solves a math problem, verifies the answer, and reworks it if it's wrong. The checking step is what separates a careful worker from a sloppy one.</div>
<div class="text-sm"><strong>Example:</strong> An agent drafts a customer response, then a "quality checker" reviews it against company guidelines. If it fails the check, the agent revises and resubmits. This loop continues until the response passes — or gets flagged for human review after too many attempts.</div>
</div>

This pattern is what makes agents feel "intelligent." They recover from their own mistakes without human intervention — at least for the kinds of mistakes they've been taught to catch.

## 🏢 Multi-Agent Systems: Teams of Agents

Complex workflows don't need one superhero agent — they need a **team** of agents working together, just like a human organization.

Think of it as an org chart for agents:
- A **manager agent** coordinates the overall workflow
- **Specialist agents** handle their domain (billing, logistics, content, etc.)
- **Review agents** check quality before anything goes out the door
- **Escalation paths** route difficult cases to humans

This mirrors how your own organization works. The better your human org chart is defined, the easier it is to design an agent org chart to match it.

<div class="not-prose callout callout-dyk">

The most important skill for building agentic applications isn't coding — it's clearly describing what the agent should do, what tools it needs, and what it should never do. This is why business expertise is essential to the process. Your developers build the system; your business knowledge defines what it should actually accomplish.

</div>

## 📝 Key Concepts

- **Four building blocks:** Agent (brain), Tools (hands), Sessions (memory), Runner (engine).
- **Only the Agent uses AI** — the rest is predictable software engineering.
- **Delegation pattern** — specialist agents coordinated by an orchestrator, not one giant agent.
- **Router pattern** — classify first, then hand off to the right worker.
- **Self-correction loop** — agents that check and improve their own work.
- **Multi-agent = team of agents** — mirrors your organization structure.
- **Business expertise drives agent design** — clear instructions matter more than code.

<div id="quiz-12-05" class="not-prose quiz-container my-12" data-quiz="12-05"></div>
