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

:::callout-tldr
Agentic applications are built from four simple building blocks: a brain (the Agent), hands (Tools), memory (Sessions), and an engine (the Runner). You don't need to be a developer to understand them — and understanding them helps you have much better conversations with your development team.
:::

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

:::visual{name="visual-agentic-primitives"}

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

:::callout-dyk
The most important skill for building agentic applications isn't coding — it's clearly describing what the agent should do, what tools it needs, and what it should never do. This is why business expertise is essential to the process. Your developers build the system; your business knowledge defines what it should actually accomplish.
:::

## 📝 Key Concepts

- **Four building blocks:** Agent (brain), Tools (hands), Sessions (memory), Runner (engine).
- **Only the Agent uses AI** — the rest is predictable software engineering.
- **Delegation pattern** — specialist agents coordinated by an orchestrator, not one giant agent.
- **Router pattern** — classify first, then hand off to the right worker.
- **Self-correction loop** — agents that check and improve their own work.
- **Multi-agent = team of agents** — mirrors your organization structure.
- **Business expertise drives agent design** — clear instructions matter more than code.

:::quiz{id="12-05"}
