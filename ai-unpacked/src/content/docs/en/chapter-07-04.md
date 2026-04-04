---
title: "7.4 Beyond Vector Search — Other Ways to Get Knowledge Into Context"
description: "RAG doesn't require a vector database. Keyword search, subagents, and file concatenation each have their place. Know your options before you build."
chapter: "Chapter 7"
pageId: "07-04"
---

## 🎯 Core Goals
- Clarify that RAG is a pattern (retrieve, augment, generate), not a specific technology.
- Show the different retrieval methods and when each one fits.
- Help readers match the right approach to the right situation.

<div class="not-prose callout callout-tldr">

RAG is a three-step pattern: retrieve documents, augment the prompt, generate the answer. The retrieval step can use vector search, keyword search, SQL, or anything else that finds relevant content. Don't assume you need a vector database — match the retrieval method to the actual problem.

</div>

## The Lawyer's Options

Let's return to Sarah's 500-case problem. She needs to get the right cases in front of the LLM. Here are the realistic approaches — each with honest trade-offs. Some are retrieval methods you could plug into a RAG pipeline; others skip retrieval entirely.

<div class="not-prose callout callout-error">

**"RAG" and "vector database" are often used interchangeably — but technically, that's not entirely correct.** RAG describes the pattern: retrieve documents, inject them into the prompt, let the LLM answer from them. The retrieval step can use keyword search, vector search, SQL, or anything else. Vector databases are one popular option — not a requirement.

</div>


<div class="not-prose">
<!-- Visual: RAG Alternatives — Strategy comparison cards -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">Approaches to Getting Knowledge Into Context</h3>
<p class="text-sm text-on-surface-variant">Each approach has a different character — and a different best use case</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Keyword Search -->
<div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">🔤</span>
<div>
<div class="font-bold text-sm">Keyword Search</div>
<div class="text-xs text-on-surface-variant">The classic, zero-setup approach</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Instant — works in any doc system</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> No embedding, no vector DB needed</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Binary: word present or absent</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Misses synonyms, paraphrasing</div>
</div>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-yellow-700">Best for:</span> Consistent terminology — also works as a simple RAG retrieval step
</div>
</div>
<!-- Concatenation -->
<div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">📋</span>
<div>
<div class="font-bold text-sm">File Concatenation</div>
<div class="text-xs text-on-surface-variant">Paste everything in, ask away</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Literally zero setup</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> LLM sees full context, no retrieval errors</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Hits context window limit fast</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Doesn't scale beyond a few docs</div>
</div>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-yellow-700">Best for:</span> Tiny datasets — under a dozen short docs
</div>
</div>
<!-- Subagent -->
<div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">🤖</span>
<div>
<div class="font-bold text-sm">Subagent Sequential Read</div>
<div class="text-xs text-on-surface-variant">LLM reads each doc and decides</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Deep understanding — no retrieval errors</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Handles nuance and context well</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Slow: reads 500 cases one at a time</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Expensive: pays per doc, every query</div>
</div>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-yellow-700">Best for:</span> Small sets where thoroughness > speed/cost
</div>
</div>
<!-- RAG -->
<div class="bg-surface-container-lowest rounded-xl p-4 border-2 border-primary/30">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">🔍</span>
<div>
<div class="font-bold text-sm text-primary">RAG</div>
<div class="text-xs text-on-surface-variant">Retrieve, augment, generate — any retrieval method</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Flexible — works with any retrieval method</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Scales to millions of documents</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Vector-based RAG requires setup (embeddings, DB)</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Retrieval can miss or mis-rank docs</div>
</div>
<div class="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-primary">Best for:</span> Large, diverse knowledge bases at scale
</div>
</div>
</div>
</div>

</div>


## Option 1 — Keyword Search (a valid RAG retrieval method)

The oldest approach: find documents containing specific words.

It's binary — either the word is present or it isn't. It has no concept of synonyms, paraphrasing, or context. The 2019 case titled "contractor failed to uphold terms" won't appear when you search for "breach of contract."

But keyword search *is* a legitimate retrieval step inside RAG. You can build a RAG pipeline where the retrieval is just keyword matching — retrieve matching docs, inject them into the prompt, let the LLM answer from them. Same pattern, simpler search engine.

Its character: **fast, cheap, zero setup** — and surprisingly effective when your organization uses consistent terminology.

## Option 2 — Subagent / Sequential Read

An LLM reads through documents one at a time and decides what's relevant.

This approach is thorough and nuanced — the LLM understands context, not just keywords. But it pays the full cost for every document it touches: 500 cases means 500 reads, every single query.

Its character: **deep understanding, no retrieval errors** — at the price of being slow and expensive at scale.

## Option 3 — File Concatenation

Merge everything into one text block and send it all in as context.

This is the simplest possible approach — no infrastructure whatsoever. But it runs into a hard wall: the context window. A handful of short documents? Fine. Sarah's 500 cases? Never fits.

Its character: **zero setup, zero retrieval errors** — for datasets small enough to fit.

<div class="not-prose callout callout-dyk">

Most production RAG systems don't use just one retrieval method — they combine them. Keyword search narrows the candidate pool first, then vector similarity re-ranks the results, and sometimes a subagent does a final read of the top candidates. This hybrid retrieval *is still RAG* — the pattern is retrieve, augment, generate. The search engine just happens to use multiple strategies. You get the speed of keyword filtering with the precision of semantic matching.

</div>

<div class="not-prose callout callout-dyk">

When you use ChatGPT or Gemini through their web interfaces, you don't get to choose the retrieval mechanism — you simply use whatever they've built in. This understanding becomes important when you start building your own LLM-powered products or integrating an LLM API into your systems.

</div>

## 📝 Key Concepts

- **RAG is a pattern, not a product:** Retrieve, augment, generate. The retrieval step can use any method.
- **Keyword search is a valid RAG retrieval method** — not an alternative to RAG
- **Hybrid retrieval is still RAG** — combining keyword + semantic is the most common production approach
- **Concatenation skips retrieval entirely** — it's genuinely a different approach from RAG
- **Concatenation is underrated** for small datasets — don't over-engineer early

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-04" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">Which statement about RAG is most accurate?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG requires a vector database to store document embeddings
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG is an alternative to keyword search for finding documents
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            RAG is a pattern where any retrieval method can feed documents into the LLM's prompt
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG only works with semantic search powered by embeddings
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
