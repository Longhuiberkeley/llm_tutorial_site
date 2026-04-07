---
title: "9.3 What Can You Do With a Stack of Scanned Documents?"
description: "From old-school OCR to multimodal LLMs — practical options for processing real-world business documents, and how to choose."
chapter: "Chapter 9"
pageId: "09-03"
---

## 🎯 Core Goals
- Explain what OCR is and how modern LLMs change the picture.
- Show what LLMs enable beyond just reading text from images.
- Give readers a practical framework for choosing the right approach for their document processing needs.

<div class="not-prose callout callout-tldr">

OCR (Optical Character Recognition) converts images of text into readable text — technology that's existed for decades. Modern LLMs supercharge what you can do once text is extracted. But the right approach depends on your goal, volume, and budget.

</div>

## What Is OCR?

Imagine you photograph a handwritten sticky note and send it to a colleague. They see the words. A computer, without special help, only sees pixels — it doesn't know what the letters mean.

**OCR = Optical Character Recognition.** It's software that looks at an image and figures out what the text says, converting pixels into readable characters that a computer can work with.

**Traditional OCR** (the export built into your PDF reader or document scanner):
- Works well on clean, typed, printed text
- Struggles with handwriting, unusual fonts, low-quality scans, or tilted pages
- Produces raw text — no understanding of what the words actually mean

**Modern OCR engines** (purpose-built models, not full LLMs):
- Much better at handwriting, poor scan quality, mixed layouts
- Recognizes tables, form fields, and checkboxes — not just raw text
- Returns structured output (key-value pairs, not just a wall of text)
- Many are open-source and can run on your own hardware — no cloud service or per-page cost required
- Still just extraction — it reads but doesn't understand

**LLM-based processing** (modern multimodal LLMs):
- Handle OCR automatically when you upload an image or PDF — no separate step needed
- Read the text AND understand what it means in one pass
- You can upload a photo and ask "summarize the key issues mentioned here" and get a useful answer directly


<div class="not-prose">
<!-- Visual: OCR demo — handwritten paper + scan button + extracted text -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap');
.ocr-paper-text { font-family: 'Caveat', cursive; }
@keyframes ocr-scan {
0%   { top: 0; opacity: 1; }
90%  { top: 100%; opacity: 1; }
100% { top: 100%; opacity: 0; }
}
.ocr-scan-line {
position: absolute;
left: 0; right: 0; height: 3px;
background: linear-gradient(90deg, transparent, #3b82f6 30%, #60a5fa, #3b82f6 70%, transparent);
box-shadow: 0 0 8px 2px rgba(59,130,246,0.5);
animation: ocr-scan 1.4s ease-in-out forwards;
}
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">See OCR in Action</h3>
<p class="text-sm text-on-surface-variant">A computer sees pixels. OCR turns those pixels into text.</p>
</div>
<div class="flex flex-col sm:flex-row gap-4 items-stretch">
<!-- Left: The "paper" -->
<div class="flex-1">
<div class="text-xs font-bold text-on-surface/50 uppercase tracking-widest mb-2 text-center">📷 Photo of a handwritten report</div>
<div id="ocr-paper" class="relative bg-amber-50 border-2 border-amber-200 rounded-lg p-4 shadow-sm overflow-hidden"
style="transform: rotate(-1deg); min-height: 200px;">
<!-- Scan line (hidden until triggered) -->
<div id="ocr-scan-line" class="ocr-scan-line hidden"></div>
<!-- Handwritten content -->
<div class="ocr-paper-text text-stone-700 leading-relaxed space-y-1" style="font-size: 1.05rem;">
<div style="font-size: 1.1rem; font-weight: 600;">Site Visit — March 15</div>
<div>Facility: Riverside Plant B</div>
<div>Inspector: J. Chen</div>
<div style="margin-top: 0.5rem;">Boiler #3 showing minor</div>
<div>corrosion near inlet valve.</div>
<div>Recommend service in</div>
<div>next 30 days.</div>
<div>Pressure readings normal.</div>
<div style="margin-top: 0.75rem; font-size: 0.95rem; opacity: 0.7;">— J.C. ✓</div>
</div>
<!-- "Scanned" overlay (visible during scan) -->
<div id="ocr-scanning-overlay" class="hidden absolute inset-0 rounded-lg"
style="background: linear-gradient(180deg, rgba(59,130,246,0.05) 0%, transparent 100%);"></div>
</div>
</div>
<!-- Middle: Arrow / Button -->
<div class="flex flex-col items-center justify-center gap-3 py-2">
<button id="ocr-btn" onclick="runOCR()"
class="font-bold text-sm px-5 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-sm whitespace-nowrap"
style="background-color: var(--accent); color: white;">
🔍 Run OCR
</button>
<div id="ocr-arrow" class="text-2xl text-on-surface/20 hidden sm:block">→</div>
</div>
<!-- Right: Extracted text -->
<div class="flex-1">
<div class="text-xs font-bold text-on-surface/50 uppercase tracking-widest mb-2 text-center">💻 Extracted digital text</div>
<div id="ocr-result" class="bg-surface-container-lowest border-2 border-outline-variant rounded-lg p-4 min-h-[200px] flex items-center justify-center transition-all duration-500">
<span class="text-sm text-on-surface/30 italic">Click "Run OCR" to extract text</span>
</div>
</div>
</div>
<!-- Callout below -->
<div id="ocr-note" class="hidden mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-xs text-on-surface">
<span class="font-bold text-blue-700">What just happened:</span> OCR mapped the pixels of each letter to machine-readable characters. The computer now has text it can search, copy, and process — but it still doesn't <em>understand</em> what the report means. That's where LLMs come in.
</div>
</div>
<script type="module">
import { init as initOCR } from '/js/interactives/ocr-demo.js';
initOCR({
  scanningLabel: '\u23F3 Scanning...',
  doneLabel: '\u2705 Done',
  extractedText: '<div class="font-mono text-xs leading-relaxed text-on-surface w-full space-y-1"><div class="text-on-surface/50 text-[10px] mb-2 uppercase tracking-widest">Extracted text:</div><div><strong>Site Visit \u2014 March 15</strong></div><div>Facility: Riverside Plant B</div><div>Inspector: J. Chen</div><div>&nbsp;</div><div>Boiler #3 showing minor</div><div>corrosion near inlet valve.</div><div>Recommend service in</div><div>next 30 days.</div><div>Pressure readings normal.</div><div>&nbsp;</div><div class="text-on-surface/50">\u2014 J.C. \u2713</div></div>',
  noteContent: '<span class="font-bold text-blue-700">What just happened:</span> OCR mapped the pixels of each letter to machine-readable characters. The computer now has text it can search, copy, and process \u2014 but it still doesn\'t <em>understand</em> what the report means. That\'s where LLMs come in.'
});
</script>

</div>


## Beyond OCR — What LLMs Actually Enable

Once you can extract text from a document — or bypass OCR entirely with a multimodal LLM — the real question is: what do you want to do with it?

LLMs unlock a range of tasks that were previously expensive or impossible:

- **Sentiment analysis** — "Is this customer complaint angry, neutral, or mildly frustrated?"
- **Unstructured → structured data** — Extract vendor name, invoice total, and due date from a messy scanned form and output a clean spreadsheet row. This used to require custom software written for each document type.
- **Summarization** — A 40-page field report becomes a 5-bullet brief. Especially powerful when processing large volumes.
- **Tagging and categorization** — Label 500 support tickets with topic, urgency, and responsible department — automatically.
- **Cross-document reasoning** — "Do any of these contracts have conflicting payment terms?" — something impossible with keyword search alone.

<div class="not-prose callout callout-dyk">

Strictly speaking, many of these tasks — sentiment classification, extraction, tagging — were achievable with traditional machine learning techniques from a decade ago. What LLMs change is how **easy and general-purpose** it is: instead of training a custom model for each specific task, you describe what you want in plain language and it works. The trade-off is worth knowing: older purpose-built models are often faster, cheaper, and more predictable at scale. For a one-off task or when flexibility matters, LLMs win. For high-volume, simple, repetitive classification, it's worth asking whether a leaner approach makes more sense.

</div>

## Multimodal RAG — When Everything Is Searchable

For large, ongoing document archives, **multimodal RAG** goes beyond text: it embeds all types of content — text, images, diagrams, audio recordings, video clips, and entire documents — into the same shared semantic space. This means a single search can retrieve the right chunk whether it's a paragraph, a diagram, a recorded meeting, or a scanned handwritten note.

The practical upshot: you can ask "what did the field team report about the Riverside facility last year?" and the system searches across typed reports, voice recordings, site photos, and diagrams — all at once.

One important caveat: **RAG doesn't capture exact words — it captures meaning.** This makes it powerful for questions and discovery, but it's the wrong tool when you need verbatim text — for legal review, compliance checks, or exact data extraction where specific wording matters.

## Which Approach Is Right for You?

Your company has 500 handwritten quarterly field reports, photographed on phones. You want to extract insights. What's your move?


<div class="not-prose">
<!-- Visual: Document processing decision — 4 clickable options with trade-off reveal -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-2">
<h3 class="text-lg font-bold font-headline mb-1">Your company has 500 handwritten field reports</h3>
<p class="text-sm text-on-surface-variant">Photographed on phones. You want insights. What's your move?</p>
</div>
<p class="text-center text-xs text-on-surface/40 mb-5 italic">Click each option to explore the trade-offs</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
<!-- Option A: Traditional OCR -->
<button onclick="docDecide(0, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">🖨️</div>
<div>
<div class="font-bold text-sm mb-1">A — Traditional OCR</div>
<div class="text-xs text-on-surface/60">Run a standard OCR tool. Get text files out.</div>
</div>
</button>
<!-- Option B: Modern OCR Engines -->
<button onclick="docDecide(1, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">📄</div>
<div>
<div class="font-bold text-sm mb-1">B — Modern OCR Engines</div>
<div class="text-xs text-on-surface/60">Purpose-built models, not full LLMs. Can run locally.</div>
</div>
</button>
<!-- Option C: Multimodal LLM -->
<button onclick="docDecide(2, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">🧠</div>
<div>
<div class="font-bold text-sm mb-1">C — Feed images to a multimodal LLM</div>
<div class="text-xs text-on-surface/60">Upload each photo to GPT-4o, Claude, or Gemini and ask directly.</div>
</div>
</button>
<!-- Option D: RAG pipeline -->
<button onclick="docDecide(3, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">🔍</div>
<div>
<div class="font-bold text-sm mb-1">D — Build a multimodal RAG pipeline</div>
<div class="text-xs text-on-surface/60">Index everything so anyone can query across all 500 reports by asking questions.</div>
</div>
</button>
</div>
<!-- Detail panel (hidden until a button is clicked) -->
<div id="doc-detail-panel" class="hidden bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
<div class="flex items-center gap-3 mb-4">
<span id="dd-icon" class="text-3xl flex-shrink-0"></span>
<div>
<div class="font-bold text-base" id="dd-title"></div>
<div class="text-xs text-on-surface/50" id="dd-subtitle"></div>
</div>
</div>
<p class="text-sm text-on-surface-variant leading-relaxed mb-4" id="dd-how"></p>
<div class="grid sm:grid-cols-2 gap-3 mb-4">
<div class="bg-green-50 border border-green-200 rounded-lg p-3">
<div class="text-[10px] font-black text-green-700 uppercase tracking-wide mb-2">✅ Works well when...</div>
<div id="dd-pros" class="text-xs space-y-1.5 text-on-surface"></div>
</div>
<div class="bg-red-50 border border-red-200 rounded-lg p-3">
<div class="text-[10px] font-black text-red-600 uppercase tracking-wide mb-2">⚠️ Watch out for...</div>
<div id="dd-cons" class="text-xs space-y-1.5 text-on-surface"></div>
</div>
</div>
<div class="rounded-lg px-4 py-3 text-xs" style="background-color: color-mix(in srgb, var(--accent) 8%, white); border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);">
<span class="font-bold" style="color: var(--accent);">Best fit: </span><span id="dd-bestfit" class="text-on-surface"></span>
</div>
</div>
<p class="text-center text-xs text-on-surface/40 mt-4 italic" id="dd-hint">👆 No single right answer — each approach makes sense in a different situation</p>
</div>
<script type="module">
import { init as initDocDecision } from '/js/interactives/doc-processing-decision.js';
initDocDecision({
  options: [
    {
      icon: '\uD83D\uDDA8\uFE0F',
      title: 'Traditional OCR',
      subtitle: 'The low-cost, no-frills starting point',
      how: 'Standard OCR software converts your images to raw text files by matching pixel patterns to character shapes. Often built into PDF readers and document scanners. No AI involved.',
      pros: ['\uD83D\uDCB0 Very cheap or free', '\u26A1 Fast \u2014 batch process hundreds at once', '\uD83D\uDD12 Can run locally \u2014 no data sent to the cloud', '\uD83D\uDCC1 Outputs clean text files usable anywhere'],
      cons: ['\u270D\uFE0F Struggles badly with handwriting', '\uD83D\uDCF8 Low-quality or tilted photos often fail', '\uD83E\uDDE9 No understanding \u2014 just raw characters', '\uD83D\uDDD1 Output often needs manual cleanup before use'],
      bestfit: 'A first step to digitize clean, typed documents \u2014 or to quickly see what you\'re working with before committing to more investment.'
    },
    {
      icon: '\uD83D\uDCC4',
      title: 'Modern OCR Engines',
      subtitle: 'Purpose-built models for messy real-world documents',
      how: 'Purpose-built OCR models trained specifically for reading text from images. They recognize handwriting, tables, form fields, and checkboxes \u2014 returning structured output, not just raw text. Many are open-source and can run on your own hardware \u2014 no cloud service needed.',
      pros: ['\u270D\uFE0F Handles handwriting far better than traditional tools', '\uD83D\uDCCA Understands tables and form fields', '\uD83D\uDD12 Can run locally \u2014 no data leaves your network', '\uD83C\uDFD7 Returns structured data (key-value pairs), not just a wall of text', '\uD83D\uDCB0 Often free or low-cost \u2014 many open-source options available'],
      cons: ['\uD83E\uDDE9 Still just extraction \u2014 no reasoning, no summarization', '\uD83D\uDD27 Needs some integration code to process at scale', '\u2699\uFE0F Quality varies by tool \u2014 some handle certain languages or formats better than others'],
      bestfit: 'Digitizing a large batch of handwritten or mixed-format documents where you need clean structured output, want to keep data in-house, and don\'t yet need LLM reasoning on top.'
    },
    {
      icon: '\uD83E\uDDE0',
      title: 'Feed images to a multimodal LLM',
      subtitle: 'OCR and understanding in one step',
      how: 'Upload each photo to a frontier model (GPT-4o, Claude, Gemini) and ask it to extract, summarize, or analyze the content. The LLM reads the image and reasons about it simultaneously \u2014 no separate OCR step needed.',
      pros: ['\uD83C\uDFAF Reads handwriting AND understands meaning in one pass', '\uD83D\uDCAC Can summarize, flag issues, or extract specific fields on the spot', '\uD83D\uDE80 No setup required \u2014 works today in any chat UI', '\uD83E\uDDE9 Handles wildly varied formats without extra configuration'],
      cons: ['\uD83D\uDCB8 Most expensive per document at scale (500 images \u00D7 API cost adds up fast)', '\uD83D\uDC14 Rate limits slow down large batch processing', '\u2601\uFE0F All images go to the model provider\'s servers', '\uD83D\uDD00 One-time analysis only \u2014 not set up for future querying'],
      bestfit: 'Exploratory analysis, prototyping, or a one-time extraction project. The best place to start before deciding whether to invest in infrastructure.'
    },
    {
      icon: '\uD83D\uDD0D',
      title: 'Build a multimodal RAG pipeline',
      subtitle: 'Index everything \u2014 make it searchable forever',
      how: 'Process all 500 reports, embed both text and visual content into a vector database, and build a query interface. Anyone on your team can ask plain-English questions across all documents and get cited answers.',
      pros: ['\uD83D\uDCDA Scales to thousands of documents', '\uD83D\uDD0E Anyone can query \u2014 no technical expertise required', '\uD83D\uDD04 Keeps working as you add new reports', '\uD83E\uDDE0 Retrieves visual context (diagrams, charts) alongside text'],
      cons: ['\uD83C\uDFD7 Significant upfront setup \u2014 not a weekend project', '\uD83D\uDCB8 Ongoing infrastructure costs (vector DB, embeddings, API)', '\uD83D\uDD27 Requires technical expertise or a vendor solution', '\u23F3 Serious overkill if you only need this analysis once', '\uD83D\uDD0B Captures meaning, not exact text \u2014 not suitable when verbatim accuracy is required'],
      bestfit: 'Large, growing archives where multiple people need to query documents over time. The most powerful option \u2014 and the most investment to build and maintain.'
    }
  ],
  hintAfter: '\uD83D\uDCA1 Try all four \u2014 they each shine in a different situation'
});
</script>

</div>


There is no universally "right" answer — it depends on what you need, how often you need it, and how much you want to invest. The goal is to match the approach to the job.

<div class="bg-surface-container-low border-l-4 rounded-r-xl p-5 my-6" style="border-color: var(--accent);">
  <div class="text-xs font-black uppercase tracking-widest mb-3" style="color: var(--accent);">💭 Think About Your Own Work</div>
  <p class="text-sm text-on-surface leading-relaxed mb-3">Have you used OCR before — in a scanning app, a PDF reader, or an expense tracker? Where might document extraction apply in your own workflow?</p>
  <p class="text-sm text-on-surface leading-relaxed">Here's a tangible one: imagine traveling abroad and photographing a menu in a language you don't know. Old-school OCR would extract the characters — but a multimodal LLM can photograph it, extract the text, <em>and</em> translate it with context, explaining what each dish actually is. That gap — between reading pixels and understanding meaning — is what makes this technology genuinely different.</p>
</div>

## 📝 Key Concepts

- **OCR:** Converts images of text into machine-readable text — traditional tools work for clean documents, modern OCR engines handle messier ones
- **Multimodal LLMs:** Can read images directly — often eliminating the need for a separate OCR step
- **Beyond extraction:** LLMs can classify, summarize, tag, and reason across documents — not just read them
- **Sentiment analysis caveat:** For high-volume simple classification, traditional ML can be faster and cheaper — use LLMs when nuance matters
- **Unified embedding space:** Text, images, video, audio, and documents can all be embedded into the same semantic space — enabling cross-modal search and retrieval
- **RAG captures meaning, not exact text:** Powerful for discovery and questions; not suitable when verbatim accuracy is required
- **Choose by goal:** One-time extraction, ongoing queries, and automated pipelines each need a different approach

<div id="quiz-09-03" class="not-prose quiz-container my-12" data-quiz="09-03"></div>
