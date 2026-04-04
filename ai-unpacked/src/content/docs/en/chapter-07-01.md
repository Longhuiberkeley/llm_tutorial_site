---
title: "7.1 The Lawyer Case Study — When Context Isn't Enough"
description: "A real-world scenario that reveals why retrieval is needed: the context window can't hold 20 years of case files."
chapter: "Chapter 7"
pageId: "07-01"
---

## 🎯 Core Goals
- Establish the fundamental problem: too much knowledge, not enough context window.
- Motivate RAG as a solution through a relatable real-world scenario.

<div class="not-prose callout callout-tldr">

Even a massive context window can't hold 20 years of a lawyer's case files. You need a smarter way to pull in only the most relevant information — not everything at once.

</div>

## Meet Sarah the Lawyer

Sarah has practiced law for 20 years. That's **500+ cases** — contracts, disputes, settlements, appeals. A new client walks in with a construction delay claim.

"Have you dealt with something like this before?"

Sarah has. Probably several times. But *which* cases? Case 137? Case 284? Case 401?

**The problem:** Even brief summaries of 500 cases exceed 200K tokens. You simply can't paste all of that into a prompt and ask an LLM to find the relevant ones. It won't fit. And even if it did, attention degrades in long contexts — important details buried in the middle get missed.


<div class="not-prose">
<!-- Visual: Context Overflow -->
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-lg font-bold font-headline mb-1">Sarah's 20 Years of Case Files</h3>
<p class="text-sm text-on-surface-variant">vs. what fits in a single context window</p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-start justify-center">
<!-- File Cabinet -->
<div class="flex-1 min-w-0">
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 text-center opacity-60">📁 Knowledge Base — 500+ Cases</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4">
<div class="grid grid-cols-8 gap-1 mb-2">
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-sm opacity-40 col-span-8 text-center pt-1">...and hundreds more</span>
</div>
<div class="mt-3 text-center">
<span class="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">~200K+ tokens</span>
</div>
</div>
</div>
<!-- Arrow -->
<div class="flex items-center justify-center md:pt-12 text-3xl text-on-surface/30 font-bold select-none">→</div>
<!-- Context Window -->
<div class="flex-none w-52">
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 text-center opacity-60">🧠 LLM Context Window</div>
<div class="bg-surface-container-lowest border-2 border-primary rounded-xl p-4 relative overflow-hidden">
<div class="absolute top-0 right-0 p-2 opacity-10 text-5xl">🧠</div>
<div class="flex flex-col gap-2 mb-3">
<div class="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold">Case #137 ✓</span>
</div>
<div class="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold">Case #284 ✓</span>
</div>
<div class="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold">Case #401 ✓</span>
</div>
<div class="flex items-center gap-2 border-2 border-dashed border-error/40 rounded-lg px-3 py-2 opacity-40">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold text-error">Case #402 ✗</span>
</div>
<div class="text-center text-[10px] text-error font-bold opacity-60">⚠️ Full — no more room</div>
</div>
<div class="text-center">
<span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">~3–5 cases fit</span>
</div>
</div>
</div>
</div>
<p class="text-center text-sm text-on-surface-variant mt-6 italic">You must <strong>choose</strong> which cases to load in — but how do you know which ones are relevant before you read them?</p>
</div>

</div>


## The Naive Solutions (And Why They Break)

Before we get to the right answer, let's rule out the obvious wrong ones:

**Option 1 — Dump everything in.**
The context window isn't big enough. And even if you used a 1M-token model, attention fades across such long contexts — the truly relevant case might not even register.

**Option 2 — Keyword search.**
Sarah types "construction delay." Problem: the winning case from 2019 was titled *"contractor failure to meet schedule"* — no match. Keywords miss synonyms, paraphrasing, and legal nuance.

**Option 3 — Have the LLM read every case one by one.**
This works, but 500 cases × time and cost per read = painfully slow and expensive.

## The Question That Drives Everything

What if the LLM could automatically find only the **3–5 most relevant cases** — by *meaning*, not keywords — and read only those?

That's the promise of Retrieval-Augmented Generation. The next pages build up exactly how it works.

<div class="not-prose callout callout-dyk">

This challenge isn't unique to law. Any organization with more knowledge than fits in a context window faces the same problem: company policies, research papers, customer support tickets, product documentation, HR manuals. The constraint is universal.

</div>

## 📝 Key Concepts

- **Context ceiling:** Even large context windows have limits — more knowledge than fits means you must choose
- **Keyword search misses meaning:** Synonyms, paraphrasing, and domain jargon all defeat exact-match search
- **The retrieval gap:** You need selective fetching — grab only what's relevant, not everything
- **RAG = the solution:** Retrieve the right documents, then generate from them

<div id="quiz-07-01" class="not-prose quiz-container my-12" data-quiz="07-01"></div>
