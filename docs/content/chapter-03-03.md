---
title: "3.3 System Prompts"
description: "The hidden 'personality' layers behind the curtain — and who controls each one."
chapter: "Chapter 3"
pageId: "03-03"
---

## 🎯 Core Goals
- Discover the invisible instruction layers that guide an LLM's behavior.
- Understand that there are *multiple* layers — and you only control some of them.

:::callout-tldr
Before you even say "Hello", the LLM has already received hidden instructions from multiple sources. Together, these layers form the LLM's behavior script — and some of them you can't touch.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-system-prompt"}

## 📝 Key Concepts

There are three distinct layers of "hidden instructions" that shape how an LLM responds:

- **Layer 1 — Provider Hidden Prompt (You can't see or change this):** The LLM provider (Anthropic, OpenAI, Google) sets safety rules that are always active. Things like: *"Don't give specific medical or financial advice," "Don't produce content that harms users," "Never pretend to be a human when sincerely asked."* These protect both you and the company's reputation.

- **Layer 2 — App / User System Prompt (Controllable by you or the app builder):** If you're using ChatGPT directly, you can set a custom system prompt. If a company built a product on top of an LLM, they set this layer to define the product's personality, tone, and rules. *"You are a friendly customer service agent for Acme Corp. Always respond in under 100 words."*

- **Layer 3 — Pre-prompt / Repeated Context (Your working context):** Repeated preferences or context you inject at the start of a session — things like *"I prefer bullet points," "I'm working on a Python 3.12 codebase," or "Always respond in French."* This is the most flexible layer, changed freely per session.

:::callout-error
Have you ever seen screenshots of an LLM acting wildly out of character — crude jokes, refusing all requests, pretending to be a villain? That's almost always someone overriding Layer 2 with a custom system prompt. The underlying model is the same; only the instruction layer changed.
:::

:::callout-dyk
Why does Claude feel different from ChatGPT? They may share similar underlying technology, but their Provider Hidden Prompts (Layer 1) and default system prompts (Layer 2) are entirely different. Same base model family, very different instructions.
:::

:::quiz{id="03-03"}
