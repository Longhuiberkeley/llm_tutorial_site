---
title: "8.2 What Companies Are Trying — Simulated Memory"
description: "ChatGPT Memory, Claude Projects, Gemini Gems — a tour of how AI products fake persistent memory."
chapter: "Chapter 8"
pageId: "08-02"
---

## 🎯 Core Goals
- Survey current "memory" features from major AI providers.
- Show that all of them are variations of automated context injection, not true memory.

:::callout-tldr
ChatGPT Memory, Claude Projects, Gemini Gems — they all work the same way under the hood. The system remembers things and injects them into the prompt. The model itself still forgets everything.
:::

## The Memory Race

Every major AI provider is racing to give their product the *feel* of persistent memory. Here's how the big three approach it:

:::visual{name="visual-memory-features"}

## ChatGPT Memory

ChatGPT can extract facts from your conversations and save them:
- "User is a software engineer"
- "User prefers concise answers"
- "User's company is in healthcare"

On the next conversation, these facts are automatically injected into the system prompt. It *looks* like the LLM remembers you. What's actually happening: a database saved those facts, and they're being pasted into the Sandwich before you even type.

You can view, edit, and delete your saved memories in the settings.

## Claude Projects

Claude Projects let you create a persistent workspace. You can:
- Upload documents (your company policies, your codebase)
- Write a custom system prompt (your preferred working style)
- These persist across every conversation in that project

Every new conversation inside the project automatically gets the documents and prompt injected. Same mechanism — just fancier tooling around it.

## Google Gemini Gems

Gemini Gems are customized AI agents with:
- A name and personality
- A specific system prompt
- Pre-loaded context and instructions

Again: automated context injection. The model hasn't changed. The *starting* Sandwich has been pre-filled.

:::callout-dyk
All three of these features are genuinely useful — they save you from repeating yourself constantly. But they're engineering solutions to a fundamental limitation, not a true solution to statelessness. The model's memory is still just text on a page.
:::

## The Ceiling of Simulated Memory

These approaches all have the same fundamental limit: the **context window**. No matter how much you save, only so much can be injected at once. The more "memories" you accumulate, the harder the system has to work to decide what to retrieve for each conversation.

Which memories matter right now? That's still a hard problem — explored in the next page.

## 📝 Key Concepts

- **All "memory" features = automated context injection** — the model itself still forgets
- **ChatGPT Memory:** Extracts facts, saves to database, injects into next system prompt
- **Claude Projects:** Pre-loaded documents + system prompt, persistent across a workspace
- **Gemini Gems:** Custom agents with persistent context and personality
- **Context window is still the ceiling:** More memory = harder retrieval decisions

:::quiz{id="08-02"}
