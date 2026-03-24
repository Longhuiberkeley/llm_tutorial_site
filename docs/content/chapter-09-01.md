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

## Cross-Modal Search

The most exciting frontier: models that embed all modalities into the same meaning space. This means you can search your photo library using a text description, or find relevant diagrams using a sentence — because text, images, and audio are all represented as coordinates in the same semantic space.

## 📝 Key Concepts

- **Multimodal:** Works with multiple media types — text, images, audio, video
- **Understanding vs. generating:** Very different capabilities, often in different models
- **Not universal:** Not every LLM handles every modality — verify before assuming
- **Image generation is usually separate:** A different specialized model does the drawing
- **Cross-modal search:** Searching across modalities using a unified semantic space

:::quiz{id="09-01"}
