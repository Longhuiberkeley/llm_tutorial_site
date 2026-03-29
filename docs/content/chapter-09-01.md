---
title: "9.1 Multimodal AI — More Than Words"
description: "LLMs are no longer limited to text. A tour of what today's AI can see, hear, and do with images, audio, and video."
chapter: "Chapter 9"
pageId: "09-01"
---

## 🎯 Core Goals
- Introduce multimodal AI capabilities and their current limitations.
- Clarify that understanding and generating media are very different skills — and not all models do both.

:::callout-tldr
Modern AI can process images, audio, and video — not just text. But "understanding" an image and "creating" an image involve completely different systems. Don't assume every LLM can do everything.
:::

## Beyond the Text Box

For most of AI's history, the conversation was literally one-dimensional: you type, it types back. Today that's changed dramatically.

Modern AI systems can:

- **See images:** Upload a photo and ask "What's in this picture?" or "Is there anything wrong with this diagram?"
- **Read documents:** Upload a PDF or spreadsheet and ask questions about it
- **Listen to audio:** Transcribe speech, translate spoken language, answer voice questions
- **Watch video:** Describe what's happening, identify objects, summarize content
- **Generate images:** Create illustrations from text descriptions (though this is usually a separate model)

This is called **multimodal** — working with multiple types of media.

:::visual{name="visual-multimodal"}

## Not All Models Are Equal

Here's where many people get confused: just because a product *interface* can handle images doesn't mean the underlying LLM can.

- **Some LLMs are text-only:** They process text in, text out. Full stop.
- **Some are vision + text:** They can understand images but can't generate them
- **Some access separate image generation models:** When you ask for an image, they call a different model (like DALL-E or Stable Diffusion) behind the scenes — it's not the LLM itself drawing

When a chat interface generates an image for you, it's almost always handing off to a specialized image model. The LLM is the orchestrator, not the artist.

:::callout-error
"The AI drew this for me" is a common misconception. Most language models cannot natively generate images — they send a request to a separate image generation model. Understanding this distinction matters when you're evaluating AI tools for a business use case.
:::

## The Middleman Problem

You upload a PDF to your favorite LLM. It answers your questions about it. But what actually happened behind the scenes?

In many cases, the LLM didn't "read" your PDF directly. The platform ran an **intermediate tool** first — something that extracts text from the PDF, transcribes the audio, or pulls the transcript from a video. The LLM then works with whatever that tool produced.

This matters because **the intermediate step can lose or distort information:**

- **PDFs:** Tables lose their formatting, charts get converted to garbled text or skipped entirely, multi-column layouts get scrambled, images embedded in the document may be stripped out
- **YouTube / video links:** The LLM may only see the title, description, and auto-generated transcript — not the actual video frames. You might expect it to comment on what's *shown* on screen, but it only "knows" what was *said*
- **Audio files:** Transcription errors, missed words, speaker confusion — whatever the transcription tool gets wrong becomes the LLM's blind spot
- **Images inside documents:** Diagrams, flowcharts, and graphs may be poorly described or completely ignored during the extraction step

:::callout-tldr
**What did the platform actually *see*?** Before you trust an LLM's response about an uploaded file, ask yourself: did the platform understand my file natively, or did it run a tool first? If there was an intermediate step, what might have been lost or distorted?
:::

We'll dig deeper into OCR and document processing later.

## When the Middleman Gets It Very Wrong

Here's a striking real-world example of how badly this can go.

**"Vegetative electron microscopy"** is a nonsensical, non-existent scientific term — yet it appeared in dozens of published academic papers. How? It was born from a digitization error during training data processing.

Many academic papers use a two-column layout. Normally, you read down the left column first, then the right. But some text extraction tools read **horizontally, line by line across both columns** — mashing the last word of the left column together with the first words of the right column.

On one particular line, the left column ended with "...vegetative" and the right column started with "Electron microscopy..." — and just like that, a new fake term was born. It became a known "fingerprint" of AI-generated and paper-mill content, spreading through the scientific literature.

The lesson: even engineers at top AI companies can introduce basic layout-reading errors. If the intermediate step misreads your document, the LLM receives garbled input — and confidently works with it.

:::visual{name="visual-column-reading-error"}

## 📝 Key Concepts

- **Multimodal:** Works with multiple media types — text, images, audio, video
- **Understanding vs. generating:** Very different capabilities, often in different models
- **Not universal:** Not every LLM handles every modality — verify before assuming
- **Image generation is usually separate:** A different specialized model does the drawing
- **Intermediate processing:** Many platforms run tools (transcription, OCR, format conversion) before the LLM sees your content — errors in this step become the LLM's blind spots
- **Format loss:** PDFs can lose table formatting, charts can be stripped, video may only contribute a transcript — check what actually reaches the LLM
- **The middleman can garble:** Digitization errors (like reading two-column layouts wrong) can create entirely new, nonsensical terms — and the LLM will confidently use them

:::quiz{id="09-01"}
