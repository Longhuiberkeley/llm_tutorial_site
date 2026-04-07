---
title: "7.2 What is RAG? — Search + LLM"
description: "How Retrieval-Augmented Generation works: retrieve relevant documents first, then generate an answer from them."
chapter: "Chapter 7"
pageId: "07-02"
---

## 🎯 Core Goals
- Explain RAG as a two-step process: retrieve first, then generate.
- Show the concrete difference between a hallucinating LLM and a RAG-grounded LLM.

<div class="not-prose callout callout-tldr">

RAG combines a search engine with an LLM. First find the right documents, then have the LLM answer from them — not from memory.

</div>

## Three Letters, One Big Idea

**R**etrieval — **A**ugmented — **G**eneration

- **Retrieve:** Search your knowledge base for the most relevant documents
- **Augment:** Add those documents to the prompt (slot them right into the Sandwich)
- **Generate:** The LLM writes an answer grounded in those documents — not guessing from training data


<div class="not-prose">
<!-- Visual: RAG Flow — 5-step pipeline -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-lg font-bold font-headline mb-1">The RAG Pipeline</h3>
<p class="text-sm text-on-surface-variant">From question to grounded answer</p>
</div>
<div class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
<!-- Step 1 -->
<div class="flex flex-col items-center text-center w-28">
<div class="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl mb-2">🙋</div>
<div class="text-xs font-black text-primary uppercase tracking-wide mb-1">Step 1</div>
<div class="text-xs font-bold">User asks a question</div>
</div>
<!-- Arrow -->
<div class="text-on-surface/25 font-bold text-2xl mx-1 rotate-90 md:rotate-0">→</div>
<!-- Step 2 -->
<div class="flex flex-col items-center text-center w-28">
<div class="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl mb-2">🔢</div>
<div class="text-xs font-black text-primary uppercase tracking-wide mb-1">Step 2</div>
<div class="text-xs font-bold">Question prepared for search</div>
</div>
<!-- Arrow -->
<div class="text-on-surface/25 font-bold text-2xl mx-1 rotate-90 md:rotate-0">→</div>
<!-- Step 3 -->
<div class="flex flex-col items-center text-center w-28">
<div class="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl mb-2">🔍</div>
<div class="text-xs font-black text-primary uppercase tracking-wide mb-1">Step 3</div>
<div class="text-xs font-bold">Knowledge base finds relevant docs</div>
</div>
<!-- Arrow -->
<div class="text-on-surface/25 font-bold text-2xl mx-1 rotate-90 md:rotate-0">→</div>
<!-- Step 4 -->
<div class="flex flex-col items-center text-center w-28">
<div class="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl mb-2">📄</div>
<div class="text-xs font-black text-primary uppercase tracking-wide mb-1">Step 4</div>
<div class="text-xs font-bold">Top docs injected into prompt</div>
</div>
<!-- Arrow -->
<div class="text-on-surface/25 font-bold text-2xl mx-1 rotate-90 md:rotate-0">→</div>
<!-- Step 5 -->
<div class="flex flex-col items-center text-center w-28">
<div class="w-14 h-14 rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center text-2xl mb-2">🤖</div>
<div class="text-xs font-black text-accent uppercase tracking-wide mb-1">Step 5</div>
<div class="text-xs font-bold">LLM answers from real documents</div>
</div>
</div>
<p class="text-center text-xs text-on-surface-variant mt-5 italic">The LLM model itself never changes — only what it reads before answering. Retrieval can use vector search, keyword search, or any method that finds relevant docs.</p>
</div>

</div>


## Before and After

The difference is dramatic:

**Without RAG:**
> You: "What's our company's refund policy for damaged goods?"
> LLM: "Most companies offer a 30-day return window for damaged items..." *(total hallucination — it has no idea what YOUR policy says)*

**With RAG:**
> System retrieves your actual refund policy document from the knowledge base.
> LLM: "According to your policy, damaged goods qualify for a full refund within 60 days with photo documentation." *(grounded in your real document)*

The LLM hasn't changed at all. What changed is that the *right document* was placed in front of it.

<div class="not-prose callout callout-error">

RAG dramatically *reduces* hallucination — it does not eliminate it. It trades one kind of error for another: instead of the LLM inventing facts from training data, it might now answer confidently from the *wrong* retrieved document. The LLM can also still misread or misinterpret a document it did retrieve. But grounding answers in real documents is far better than guessing from training memory alone.

</div>

<div class="not-prose callout callout-dyk">

Think of RAG like a **smart table of contents**. The retrieval step doesn't answer your question — it just identifies *which pages* might be relevant, the way a book's index points you to the right chapter. The actual reading and answering is still the LLM's job. That retrieval could use vector search, keyword matching, or anything else that finds the right pages.

</div>

## When Retrieval Gets It Wrong

RAG dramatically improves grounding — but the retrieval step has its own failure modes:

- **False negatives:** A relevant document used different phrasing and never made it into the retrieved set. The LLM can't save what it never receives.
- **False positives:** An irrelevant document was retrieved anyway — it dilutes the context and can mislead the answer.
- **Wrong chunk:** The right document exists in the knowledge base, but the wrong *section* of it was retrieved.

The takeaway: RAG reduces hallucination but introduces a new axis of failure — retrieval quality. A great LLM with bad retrieval still gives bad answers.

## Why This Is Powerful

RAG means your LLM is never limited to what it knew during training. You can:

- Add new company documents today — the LLM "knows" them immediately
- Keep proprietary data on your own servers — the LLM only sees what you retrieve
- Update your knowledge base without retraining the model

## 📝 Key Concepts

- **Retrieve first, generate second** — order matters; search happens before the LLM speaks
- **Grounded answers:** The LLM responds from retrieved content, not training memory
- **Dynamic knowledge:** New documents are immediately available without model retraining
- **RAG ≠ fine-tuning:** The model doesn't change — only the context it receives changes
- **Hallucination reduction:** Not elimination, but a major improvement

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-02" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">What is the main benefit of RAG (Retrieval-Augmented Generation)?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            It makes the LLM respond faster
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            It completely eliminates hallucination
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            It grounds the LLM's answers in actual retrieved documents instead of guessing from training data
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
