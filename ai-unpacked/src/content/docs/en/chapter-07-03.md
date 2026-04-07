---
title: "7.3 Vector Embeddings — Storing Meaning as Coordinates"
description: "How LLMs represent meaning as numbers, enabling search by meaning rather than exact keywords."
chapter: "Chapter 7"
pageId: "07-03"
---

## 🎯 Core Goals
- Teach that embeddings capture meaning as coordinates in space.
- Show through a hands-on exercise how distance between coordinates reveals similarity.

<div class="not-prose callout callout-tldr">

Embeddings turn the meaning of words and sentences into coordinates. Similar meaning = nearby coordinates. That's how one popular type of RAG retrieval — semantic search — finds relevant documents without keyword matching.

</div>

## Words as Points in Space

When we explored word distance earlier, we established that some words are "closer" in meaning than others — *king* and *queen* are neighbors; *king* and *banana* are strangers.

Embeddings make that intuition precise. Every word, sentence, or document gets converted into a list of numbers — its coordinates in a multi-dimensional space. Two documents with similar meaning will have coordinates that are close together.

This is what makes semantic RAG retrieval work: instead of matching keywords, it finds documents whose coordinates are nearest to your question's coordinates.

## 🗺️ Try It: Distance on a Map

Here are four words plotted on a simple XY graph:


<div class="not-prose">
<!-- Visual: XY Embeddings — Interactive distance explorer -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-4">
<h3 class="text-lg font-bold font-headline mb-1">Words as Coordinates</h3>
<p class="text-sm text-on-surface-variant">Click any word to see how far it is from the others</p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-start justify-center">
<!-- SVG Plot -->
<div class="flex-none">
<svg id="embed-svg" viewBox="0 0 300 300" width="280" height="280" class="mx-auto block" style="font-family: inherit;">
<!-- Grid lines -->
<defs>
<pattern id="embed-grid" width="24" height="24" patternUnits="userSpaceOnUse" x="30" y="30">
<path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e0dbd4" stroke-width="0.5"/>
</pattern>
</defs>
<rect x="30" y="6" width="264" height="264" fill="url(#embed-grid)"/>
<!-- Axes -->
<line x1="30" y1="270" x2="294" y2="270" stroke="#a09890" stroke-width="1.5"/>
<line x1="30" y1="6" x2="30" y2="270" stroke="#a09890" stroke-width="1.5"/>
<!-- Axis labels -->
<text x="162" y="292" text-anchor="middle" font-size="10" fill="#8a8078">Meaning dimension X</text>
<text x="10" y="138" text-anchor="middle" font-size="10" fill="#8a8078" transform="rotate(-90, 10, 138)">Meaning dimension Y</text>
<!-- Tick labels -->
<text x="54" y="284" text-anchor="middle" font-size="8" fill="#a09890">1</text>
<text x="102" y="284" text-anchor="middle" font-size="8" fill="#a09890">3</text>
<text x="174" y="284" text-anchor="middle" font-size="8" fill="#a09890">6</text>
<text x="246" y="284" text-anchor="middle" font-size="8" fill="#a09890">9</text>
<text x="22" y="174" text-anchor="end" font-size="8" fill="#a09890">4</text>
<text x="22" y="78" text-anchor="end" font-size="8" fill="#a09890">8</text>
<text x="22" y="54" text-anchor="end" font-size="8" fill="#a09890">9</text>
<text x="22" y="246" text-anchor="end" font-size="8" fill="#a09890">1</text>
<!-- Distance lines (hidden by default) -->
<line id="embed-line-cat" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<line id="embed-line-lion" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<line id="embed-line-tiger" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<line id="embed-line-banana" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<!-- Points — data-x/data-y are logical coords -->
<!-- banana at (9,1) -->
<g class="embed-point cursor-pointer" data-word="banana" data-x="9" data-y="1" onclick="embedClick('banana')">
<circle cx="246" cy="246" r="18" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" class="transition-all"/>
<text cx="246" cy="246" x="246" y="250" text-anchor="middle" font-size="16">🍌</text>
</g>
<!-- cat at (1,4) -->
<g class="embed-point cursor-pointer" data-word="cat" data-x="1" data-y="4" onclick="embedClick('cat')">
<circle cx="54" cy="174" r="18" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" class="transition-all"/>
<text cx="54" cy="174" x="54" y="178" text-anchor="middle" font-size="16">🐱</text>
</g>
<!-- lion at (3,8) -->
<g class="embed-point cursor-pointer" data-word="lion" data-x="3" data-y="8" onclick="embedClick('lion')">
<circle cx="102" cy="78" r="18" fill="#fff7ed" stroke="#f97316" stroke-width="2" class="transition-all"/>
<text cx="102" cy="78" x="102" y="82" text-anchor="middle" font-size="16">🦁</text>
</g>
<!-- tiger at (6,9) -->
<g class="embed-point cursor-pointer" data-word="tiger" data-x="6" data-y="9" onclick="embedClick('tiger')">
<circle cx="174" cy="54" r="18" fill="#fef2f2" stroke="#ef4444" stroke-width="2" class="transition-all"/>
<text cx="174" cy="54" x="174" y="58" text-anchor="middle" font-size="16">🐯</text>
</g>
</svg>
</div>
<!-- Distance panel -->
<div class="flex-1 min-w-0">
<div id="embed-distances" class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant min-h-36">
<p class="text-sm text-on-surface-variant text-center mt-4 italic">👆 Click an animal to see its distances to all others</p>
</div>
<!-- Keyword failure demo -->
<div class="mt-4 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">🔍 Keyword vs. Semantic Search</div>
<p class="text-xs text-on-surface-variant mb-3">These words all mean "cat" — but a keyword search for "cat" finds zero of them:</p>
<div class="flex flex-wrap gap-2 mb-3">
<span class="px-2 py-1 rounded-lg bg-error/10 border border-error/30 text-xs font-bold text-error">gato ✗</span>
<span class="px-2 py-1 rounded-lg bg-error/10 border border-error/30 text-xs font-bold text-error">kitten ✗</span>
<span class="px-2 py-1 rounded-lg bg-error/10 border border-error/30 text-xs font-bold text-error">felino ✗</span>
</div>
<p class="text-xs text-on-surface-variant">Semantic search finds them all — their <em>embeddings</em> land near 🐱 on the map.</p>
</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/vector-embeddings.js';
init();
</script>

</div>


Click any animal to see its distances to the others. Notice how the three felines cluster together — lion, cat, and tiger all share the same region of the map — while banana lands far away in its own corner.

**The math confirms what intuition already knew** — animals in the same category share far more in common than animals and fruit.

## Scaling Up

In this exercise, we used 2 dimensions. Real embeddings use **hundreds or thousands of dimensions** — capturing not just one aspect of meaning, but many simultaneously: topic, sentiment, formality, domain, and more.

The math stays exactly the same (distance between points). The space just gets much bigger.

<div class="not-prose callout callout-dyk">

When you search and find relevant results without using the exact right keywords, that's embeddings at work. "Company vacation policy" finds docs about "PTO" and "annual leave" because they're close in meaning — not because the words match.

</div>

## Why This Enables Semantic RAG Retrieval

RAG is a pattern: retrieve relevant documents, then have the LLM answer from them. The retrieval step can use many methods. This is the one most people picture when they say "RAG" — semantic search powered by embeddings.

Vector databases store embeddings for every document in your knowledge base. When a question arrives:

1. Convert the question to an embedding (a set of coordinates)
2. Find documents with the closest embeddings
3. Return the top matches — ranked by meaning, not keyword overlap

Sarah searching for "construction delay cases" finds *all* the relevant cases, even if some used the phrase "contractor failed to meet the deadline."

But the retrieval step could also use keyword search, a SQL query, or a hybrid of multiple methods. The RAG pattern stays the same — only the search engine changes.

## 📝 Key Concepts

- **Embeddings:** Numbers that capture the meaning of text as coordinates
- **Similar meaning → close coordinates → small distance**
- **Vector databases:** Store embeddings for fast similarity lookup at scale
- **Semantic search:** Find by meaning, not by matching exact words — one retrieval method within the RAG pattern
- **Dimensions:** Real embeddings use hundreds of dimensions — same concept, much bigger space

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-03" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">How do vector embeddings enable semantic search?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            They match keywords in documents to keywords in the query
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            They convert meaning into numerical coordinates so similar concepts are nearby in space
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            They use a thesaurus to find synonyms of search terms
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
