---
title: "3.3 The Full Sandwich — System Prompts & Custom Spaces"
description: "Every bundle starts with hidden layers — and some of them you can't see or control."
chapter: "Chapter 3"
pageId: "03-03"
---

## 🎯 Core Goals
- Show the same dual-view as 3.2, but now the bundle always starts with hidden layers.
- Understand the three prompt layers (Provider / App / Session).
- Demystify Custom GPTs, Claude Projects, and Gemini Gems as pre-packaged sandwiches.

:::callout-tldr
Before you type your first message, the LLM has already received hidden instructions. Every bundle has invisible layers on top — and some of them you can't touch.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-full-sandwich-dual-view"}

## 📝 Key Concepts

Three layers in every bundle:

- **Layer 1 — Provider Prompt (You can't see or change this):** Set by the AI company (Anthropic, OpenAI, Google). Contains safety rules always active: "Don't produce harmful content," "Never pretend to be human when sincerely asked."
- **Layer 2 — App / Custom Pre-prompt (Set by the app builder):** Defines the product's personality, tone, and knowledge. "You are TechCorp support." Makes a chatbot feel specialized.
- **Layer 3 — Your Session Context (Yours to set):** Repeated preferences you inject per session: "Always respond in bullet points," "I'm working in Python 3.12."

:::callout-tip
**The Hidden Cost of Context:** Now that you know sending a message often means sending a "bundled" message, here's the catch: since LLMs don't "remember" previous turns, you re-send the entire history (the bundle) with every new reply. This means the 10th message in a chat costs significantly more to process than the 1st one!
:::

## 📦 Custom Spaces — Pre-packaged Sandwiches

Features like Custom GPTs, Claude Projects, and Gemini Gems bundle three things:
1. **System Prompt:** Specialized instructions (personality).
2. **Knowledge Docs:** Reference files (company policies, product specs).
3. **Tools:** Specific capabilities (web search, code interpreter).

**Why use them?** Set the instructions once, then just use the chat. No need to re-explain context every session.

**Business use:** Companies build internal Projects pre-loaded with brand voice, legal policies, and private data — so every employee starts with the right context.



:::callout-dyk
Why does Claude feel different from ChatGPT? Their Provider Prompts (Layer 1) and default pre-prompts are completely different. Same concept, different instructions.
:::

:::quiz{id="03-03"}
What allows a Custom GPT or Claude Project to feel specialized without you explaining anything?
- [ ] It downloads the latest info from the internet each session
- [x] It comes pre-loaded with system prompts, knowledge docs, and tools
- [ ] It uses a separate, more powerful AI model underneath
:::
