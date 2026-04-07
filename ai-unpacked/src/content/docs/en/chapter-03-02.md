---
title: "3.2 The Sandwich — Turn by Turn"
description: "Watch what's actually sent to the LLM with every message you send."
chapter: "Chapter 3"
pageId: "03-02"
---

## 🎯 Core Goals
- Show simultaneously what the user sees (chat) vs. what's actually sent (the growing bundle).
- Make visceral the fact that the ENTIRE conversation history is re-bundled and sent every turn.
- No system prompt or custom preprompt yet — pure conversation history only.

<div class="not-prose callout callout-tldr">

The LLM doesn't "remember" your conversation. Every time you send a message, the app bundles the **entire history** — all previous messages — and sends it to the LLM as one big package. The LLM reads it all from scratch, every time.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<style>
@keyframes sdvFlash {
0%, 40% { background-color: #FFF9C4; border-color: #FBC02D; }
100% { background-color: var(--surface-container-lowest); border-color: transparent; }
}
.sdv-flash { animation: sdvFlash 1.8s ease-out forwards; }
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">The Growing Bundle</h3>
<p class="text-sm italic" style="color: var(--on-surface-variant);">Every "Send" re-bundles the entire conversation history — and starts the LLM reading from scratch</p>
</div>
<!-- Controls -->
<div class="flex justify-center items-center gap-4 mb-6">
<span id="sdv-counter" class="text-sm font-medium px-3 py-1 rounded-full" style="background-color: var(--surface-container);">Turn 0 / 4</span>
<button id="sdv-btn" onclick="sdvNext()" class="px-6 py-2 rounded-full font-bold text-sm shadow-md transition-all hover:opacity-90" style="background-color: var(--primary); color: var(--on-primary);">
Send → Turn 1
</button>
</div>
<!-- Panels -->
<div class="flex flex-col md:flex-row gap-5">
<!-- LEFT: Chat view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--primary);">👤 What You See (Chat UI)</div>
<div id="sdv-chat" class="flex-1 rounded-xl p-4 border space-y-3" style="background-color: var(--surface-container-lowest); border-color: var(--outline-variant); min-height: 280px;">
<p class="text-xs text-center italic pt-8 opacity-40">Press Send to start...</p>
</div>
</div>
<!-- RIGHT: Bundle view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--accent);">📦 What's Actually Sent to the LLM</div>
<!-- Dashed bundle container -->
<div id="sdv-bundle" class="rounded-xl p-3 space-y-2 border-2 border-dashed" style="background-color: var(--surface-container); border-color: var(--outline-variant); min-height: 140px;">
<p id="sdv-bundle-placeholder" class="text-xs text-center italic pt-6 opacity-40">Bundle is empty...</p>
</div>
<!-- LLM box + Output (hidden until first send) -->
<div id="sdv-llm-section" class="hidden mt-2 flex flex-col items-center gap-1">
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓ entire bundle ↓</div>
<div class="w-full rounded-xl px-4 py-3 text-center font-bold text-sm" style="background-color: var(--on-surface); color: var(--background);">
🤖 LLM reads it all from scratch
</div>
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓</div>
<div id="sdv-output" class="w-full rounded-xl px-4 py-2 text-center text-sm font-medium border" style="border-color: var(--accent); background-color: color-mix(in srgb, var(--accent) 10%, var(--surface-container-lowest));"></div>
</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/sandwich-view.js';
init({
  turns: [
    { user: 'Hi! My name is Alex.', llm: 'Nice to meet you, Alex! 👋 How can I help?' },
    { user: 'I love Italian food.', llm: 'Great taste! Italy has amazing cuisine. 🍕' },
    { user: "What's my favorite food?", llm: 'Italian food! You mentioned it just a moment ago. 🍝' },
    { user: "What's my name?", llm: 'Your name is Alex — you told me that right at the start! 😊' }
  ],
  totalTurns: 4,
  strings: {
    turnLabel: function(n) { return 'Turn ' + n; },
    userLabel: 'User',
    outputLabel: '⬅️ Response generated → see chat',
    counterLabel: function(c, t) { return 'Turn ' + c + ' / ' + t; },
    allDoneLabel: function(t) { return 'All ' + t + ' turns done ✓'; },
    sendLabel: function(n) { return 'Send → Turn ' + n; }
  }
});
</script>

</div>


## 📝 Key Concepts

- **The LLM Has No Memory:** Each turn, the LLM starts from zero. It only knows what's in the bundle sent right now.
- **The App Builds the Bundle:** The chat interface silently collects the entire conversation history and bundles it with the new message on every send.
- **The Bundle Grows:** Every turn adds two messages. By Turn 4, the LLM reads 7 messages at once — just to answer the latest one.
- **Cost & Speed:** Bigger bundles = more tokens processed = slower and more expensive. Many providers offer caching to lower costs

<div class="not-prose callout callout-error">

The LLM doesn't "know" you — it re-reads the transcript every single time. Modern LLM services often include a MEMORY mechanism, it often is just a way to bundle your previous conversation into your current one somehow. We will discuss some common methods later.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-03-02" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">When you send your 5th message in a chat, what does the LLM actually receive?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Only your 5th message — it remembers the rest from earlier
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            The entire conversation history bundled together and sent from scratch
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            A compressed summary of previous messages plus your new one
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
