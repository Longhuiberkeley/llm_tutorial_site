---
title: "6.1 What is Tool Use? — LLMs Can Delegate"
description: "Giving AI hands and a brain."
chapter: "Chapter 6"
pageId: "06-01"
---

## 🎯 Core Goals
- Understand that LLMs can call external software to solve their limitations.
- See the power of "delegation" for math, search, and data access.

<div class="not-prose callout callout-tldr">

LLMs are great at language but bad at math and facts. **Tool Use** lets them delegate to a calculator or a search engine instead of guessing.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">LLMs Can Delegate</h3>
<p class="text-sm text-on-surface-variant">See how an LLM uses a calculator to avoid "guessing" math.</p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-stretch">
<!-- Without Tool -->
<div class="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col">
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">Without Tools</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>Question:</strong> "What is 123 × 456?"
</div>
<div class="p-3 bg-red-50 border border-red-200 rounded text-xs leading-relaxed italic text-red-700 flex-grow">
<strong>AI Logic:</strong> "I remember seeing numbers like this. It's probably around 50,000..."<br><br>
<strong>Output:</strong> "123 × 456 is 56,128." (Wrong! It guessed.)
</div>
</div>
<!-- Animation Center -->
<div class="flex items-center justify-center p-4">
<div class="flex flex-col items-center gap-2">
<span class="material-symbols-outlined text-primary text-4xl animate-bounce">handyman</span>
<span class="text-[10px] font-bold text-primary uppercase">Tool Call</span>
</div>
</div>
<!-- With Tool -->
<div class="flex-1 bg-surface-container-lowest border-2 border-primary rounded-xl p-6 flex flex-col shadow-md">
<div class="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">With Calculator Tool</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>Question:</strong> "What is 123 × 456?"
</div>
<div class="space-y-3 flex-grow">
<div class="p-3 bg-surface-container rounded border-l-4 border-primary text-[10px] font-mono">
<span class="text-primary font-bold">CALL:</span> calculator.multiply(123, 456)<br>
<span class="text-green-600 font-bold">RESULT:</span> 56088
</div>
<div class="p-3 bg-green-50 border border-green-200 rounded text-xs leading-relaxed italic text-green-700">
<strong>Output:</strong> "123 × 456 is 56,088." (Correct! Exact calculation.)
</div>
</div>
</div>
</div>
<div class="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
<p class="text-xs text-center italic text-on-surface-variant">
By delegating to a <strong>calculator</strong>, the LLM stops being a "statistical guesser" and becomes a precise processor.
</p>
</div>
<!-- Simon Says explanation -->
<div class="mt-8 border-t border-outline-variant pt-8">
<h4 class="text-sm font-bold text-center mb-6 text-on-surface">But wait — how does the LLM actually "use" a tool?</h4>
<div class="flex flex-col md:flex-row items-stretch gap-4">
<!-- Step 1: LLM outputs text -->
<div class="flex-1 bg-surface-container-lowest border-2 border-accent/30 rounded-xl p-5 flex flex-col gap-3">
<div class="text-[10px] font-black uppercase tracking-widest text-accent">Step 1 — LLM Output</div>
<div class="font-mono text-xs bg-surface-container rounded-lg p-3 leading-relaxed border border-outline-variant">
I need to calculate this.<br>
<span class="bg-accent/15 text-accent font-bold px-1 rounded">[tool_call: calculator.multiply(123, 456)]</span><br>
Let me use the result...
</div>
<p class="text-[11px] text-on-surface-variant italic">The LLM only outputs text — including the trigger phrase. It never "runs" anything itself.</p>
</div>
<!-- Arrow -->
<div class="flex items-center justify-center p-2 text-primary">
<span class="material-symbols-outlined text-3xl rotate-90 md:rotate-0">arrow_forward</span>
</div>
<!-- Step 2: Executor intercepts -->
<div class="flex-1 bg-surface-container-lowest border-2 border-primary/30 rounded-xl p-5 flex flex-col gap-3">
<div class="text-[10px] font-black uppercase tracking-widest text-primary">Step 2 — Executor Intercepts</div>
<div class="font-mono text-xs bg-surface-container rounded-lg p-3 leading-relaxed border border-outline-variant text-green-700">
Detected: <span class="font-bold">tool_call</span><br>
Running: calculator.multiply(123, 456)<br>
Result: <span class="font-bold">56088</span> ✓
</div>
<p class="text-[11px] text-on-surface-variant italic">A separate program reads the trigger, executes the real action, and sends the result back.</p>
</div>
</div>
<div class="mt-5 p-4 bg-accent/5 border border-accent/20 rounded-xl text-center">
<p class="text-xs italic text-on-surface-variant">
🎮 Think of it as <strong>Simon Says</strong>: the LLM is Simon — it only <em>says</em> the command. Someone else actually carries it out.
</p>
</div>
</div>
</div>

</div>


## 🎮 The Simon Says Trick

Here's the key insight most people miss: **an LLM never actually "does" anything.**

It only ever outputs text. That's it. No clicking, no downloading, no running code — just text.

So how does it "use" a calculator? Think of the game **Simon Says**. When Simon says something, someone else carries out the action. The LLM is Simon — it only *says* the instruction. A separate program listens for the trigger and actually executes the task.

In practice, it looks like this:

> LLM outputs: `[tool_call: calculator.multiply(123, 456)]`

That's just text with a special trigger pattern. Another program reads it, runs the calculation, and feeds the result back. The LLM then reads that result and continues writing.

"Simon says, download data from example.com" — the LLM says it; the executor does it.

## 📝 Key Concepts

- **Delegation:** The LLM decides WHICH tool to use and WHAT to ask — but the tool does the heavy lifting.
- **Common Tools:** Calculators, web search, code execution, file reading, and database queries.
- **Trigger Text:** Tool calls are just specially formatted text that a surrounding system intercepts and runs.
- **Incorporating Results:** Once the tool finishes, the LLM reads the result and incorporates it back into your chat.

<div class="not-prose callout callout-dyk">

**What is an API?** An API (Application Programming Interface) is like a restaurant menu. You don't go into the kitchen — you look at the menu, place an order, and get food back. An API is the "menu" that lets software programs talk to each other.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-06-01" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">When an LLM "uses a calculator," what actually happens?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            The LLM performs the math internally using a built-in module
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            The LLM outputs specially formatted text that an external system intercepts and executes
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            The LLM sends the calculation to another AI model that specializes in math
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
