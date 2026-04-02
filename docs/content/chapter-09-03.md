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

:::callout-tldr
OCR (Optical Character Recognition) converts images of text into readable text — technology that's existed for decades. Modern LLMs supercharge what you can do once text is extracted. But the right approach depends on your goal, volume, and budget.
:::

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

:::visual{name="visual-ocr-demo"}

## Beyond OCR — What LLMs Actually Enable

Once you can extract text from a document — or bypass OCR entirely with a multimodal LLM — the real question is: what do you want to do with it?

LLMs unlock a range of tasks that were previously expensive or impossible:

- **Sentiment analysis** — "Is this customer complaint angry, neutral, or mildly frustrated?"
- **Unstructured → structured data** — Extract vendor name, invoice total, and due date from a messy scanned form and output a clean spreadsheet row. This used to require custom software written for each document type.
- **Summarization** — A 40-page field report becomes a 5-bullet brief. Especially powerful when processing large volumes.
- **Tagging and categorization** — Label 500 support tickets with topic, urgency, and responsible department — automatically.
- **Cross-document reasoning** — "Do any of these contracts have conflicting payment terms?" — something impossible with keyword search alone.

:::callout-dyk
Strictly speaking, many of these tasks — sentiment classification, extraction, tagging — were achievable with traditional machine learning techniques from a decade ago. What LLMs change is how **easy and general-purpose** it is: instead of training a custom model for each specific task, you describe what you want in plain language and it works. The trade-off is worth knowing: older purpose-built models are often faster, cheaper, and more predictable at scale. For a one-off task or when flexibility matters, LLMs win. For high-volume, simple, repetitive classification, it's worth asking whether a leaner approach makes more sense.
:::

## Multimodal RAG — When Everything Is Searchable

For large, ongoing document archives, **multimodal RAG** goes beyond text: it embeds all types of content — text, images, diagrams, audio recordings, video clips, and entire documents — into the same shared semantic space. This means a single search can retrieve the right chunk whether it's a paragraph, a diagram, a recorded meeting, or a scanned handwritten note.

The practical upshot: you can ask "what did the field team report about the Riverside facility last year?" and the system searches across typed reports, voice recordings, site photos, and diagrams — all at once.

One important caveat: **RAG doesn't capture exact words — it captures meaning.** This makes it powerful for questions and discovery, but it's the wrong tool when you need verbatim text — for legal review, compliance checks, or exact data extraction where specific wording matters.

## Which Approach Is Right for You?

Your company has 500 handwritten quarterly field reports, photographed on phones. You want to extract insights. What's your move?

:::visual{name="visual-doc-decision"}

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

:::quiz{id="09-03"}
