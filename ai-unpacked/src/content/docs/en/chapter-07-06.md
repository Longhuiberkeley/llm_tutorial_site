---
title: "7.6 Data Formats are Destiny"
description: "The format your data lives in determines how easily an LLM can read it. Simple formats win."
chapter: "Chapter 7"
pageId: "07-06"
---

## 🎯 Core Goals
- Explain why file format matters as much as file content for LLM processing.
- Highlight the hidden cost of proprietary and scanned formats.

<div class="not-prose callout callout-tldr">

LLMs love plain text. Proprietary formats like Word, PowerPoint, and PDF require conversion tools that add cost, complexity, and errors. The best format is usually the simplest one.

</div>

## The Format Problem

You've built a RAG system. Sarah's 500 case files are ready to upload. But what format are they in?

- **Word documents (.docx):** Need a parser to strip formatting — tables often break
- **PowerPoint slides (.pptx):** Text scattered across shapes, slides, and notes
- **PDFs:** Could be native text (parseable) or scanned images (need OCR first)
- **Scanned paper:** Just images — completely invisible to a text-based LLM

The *content* is the same. The *format* determines whether the LLM can even read it.


<div class="not-prose">
<!-- Visual: Data Formats Spectrum -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">Data Format Difficulty Spectrum</h3>
<p class="text-sm text-on-surface-variant">From trivial to painful — for an LLM to read</p>
</div>
<!-- Spectrum axis -->
<div class="relative mb-6">
<div class="h-3 rounded-full" style="background: linear-gradient(to right, #22c55e, #f59e0b, #ef4444)"></div>
<div class="flex justify-between mt-1">
<span class="text-xs font-bold text-green-600">Easy</span>
<span class="text-xs font-bold text-yellow-600">Maybe</span>
<span class="text-xs font-bold text-red-500">Hard</span>
</div>
</div>
<!-- Format cards by difficulty -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<!-- Easy formats -->
<div class="bg-green-50 border border-green-200 rounded-xl p-4">
<div class="text-xs font-black text-green-700 uppercase tracking-wide mb-3">✅ LLM-native</div>
<div class="space-y-2">
<div class="flex items-center gap-2">
<span class="text-base">📄</span>
<div>
<div class="text-xs font-bold">.txt</div>
<div class="text-xs text-on-surface-variant">Pure text, nothing to parse</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📝</span>
<div>
<div class="text-xs font-bold">.md (Markdown)</div>
<div class="text-xs text-on-surface-variant">Clean headers, lists, structure</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📊</span>
<div>
<div class="text-xs font-bold">.csv / .json</div>
<div class="text-xs text-on-surface-variant">Structured data, maps naturally</div>
</div>
</div>
</div>
</div>
<!-- Needs conversion -->
<div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
<div class="text-xs font-black text-yellow-700 uppercase tracking-wide mb-3">⚠️ Maybe</div>
<div class="space-y-2">
<div class="flex items-center gap-2">
<span class="text-base">📘</span>
<div>
<div class="text-xs font-bold">.docx (Word)</div>
<div class="text-xs text-on-surface-variant">Tables often break on extract</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📊</span>
<div>
<div class="text-xs font-bold">.xlsx (Excel)</div>
<div class="text-xs text-on-surface-variant">Formulas lost; only values survive</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📑</span>
<div>
<div class="text-xs font-bold">.pptx (PowerPoint)</div>
<div class="text-xs text-on-surface-variant">Text scattered across shapes</div>
</div>
</div>
</div>
</div>
<!-- Needs OCR -->
<div class="bg-red-50 border border-red-200 rounded-xl p-4">
<div class="text-xs font-black text-red-600 uppercase tracking-wide mb-3">🚫 Hard</div>
<div class="space-y-2">
<div class="flex items-center gap-2">
<span class="text-base">🖼️</span>
<div>
<div class="text-xs font-bold">Scanned PDFs</div>
<div class="text-xs text-on-surface-variant">Photo of text — pixels, not words</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📸</span>
<div>
<div class="text-xs font-bold">Photo documents</div>
<div class="text-xs text-on-surface-variant">Same problem, must extract text</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📠</span>
<div>
<div class="text-xs font-bold">Fax → image</div>
<div class="text-xs text-on-surface-variant">Common in legal, medical records</div>
</div>
</div>
</div>
</div>
</div>
<p class="text-center text-xs text-on-surface-variant mt-4 italic">The content may be identical — the format determines whether the LLM can even read it.</p>
</div>

</div>


## The File Format Trap

Many organizations store everything in complex formats — polished Word reports, elaborate Excel workbooks, beautiful PowerPoint decks. This looks professional. For AI processing, it's a liability.

Every conversion step:

- Takes extra time and compute cost
- Introduces potential errors (tables that don't parse, images that get skipped)
- Reduces the quality of what the LLM actually receives

<div class="not-prose callout callout-error">

A surprisingly common AI project failure: a team builds a great RAG system, then discovers 80% of their knowledge base is scanned PDFs. Before the AI can help, someone has to run OCR on thousands of documents — a project that takes months and costs significant money.

</div>

<div class="not-prose callout callout-tip">

If you're building a knowledge base for LLM use, invest in format early:

- Prefer Markdown or plain text for new documentation going forward
- Convert critical old documents to cleaner formats before indexing
- For PDFs, verify they're native (text-selectable) rather than scanned images — try selecting text in a PDF reader
- Consider an **intermediate processing step**: before indexing complex documents (Word, PDFs), run a pre-processing pipeline that converts them to clean Markdown or plain text first. This one-time investment improves retrieval quality at every query, and is far cheaper than paying per-query for multimodal processing.

</div>

Data preparation is frequently 80% of any real AI project. The quality of your LLM output is bounded by the quality of your data *format*, not just your data content.

## 📝 Key Concepts

- **Simple formats win:** Plain text and Markdown are ideal for LLM processing
- **Proprietary formats add cost:** Conversion tools introduce complexity and potential errors
- **Scanned = invisible:** Images of text require OCR before an LLM can read them
- **The file format trap:** Storing knowledge in complex formats creates AI headaches later
- **Data prep is the real work:** Often 80% of any AI project is getting data into usable form

<div id="quiz-07-06" class="not-prose quiz-container my-12" data-quiz="07-06"></div>
