---
title: "8.1 State vs. Stateless — Starting from Zero"
description: "Each LLM conversation starts from a blank slate. What looks like memory is actually context injection."
chapter: "Chapter 8"
pageId: "08-01"
---

## 🎯 Core Goals
- Clarify that LLMs have no persistent memory between conversations.
- Distinguish between what looks like memory and what's actually happening under the hood.

:::callout-tldr
Every new conversation starts from a blank slate. The LLM has no idea who you are, what you discussed yesterday, or what you prefer. What looks like "memory" is just text injected into the prompt.
:::

## The Fresh Whiteboard

Picture an incredibly intelligent consultant who shows up to every meeting with a completely blank whiteboard. Every time. No notes from last time. No memory of your name, your project, or what you decided last Tuesday.

You have to re-introduce yourself. Re-explain your goals. Re-establish context. Every single session.

That's an LLM. Brilliant in the moment — but starts from zero every time.

:::visual{name="visual-stateless"}

## Why Is It This Way?

Human brains physically *change* when forming memories. New neural connections are created. The brain literally rewires itself.

LLMs don't work that way. The model's weights — the billions of numbers that define how it behaves — are **frozen** during use. Every conversation reads those same fixed weights. Nothing is written back. Nothing persists.

The model is, in a technical sense, read-only.

## So What Does "Memory" Mean?

When an LLM appears to remember something you said, one of two things is happening:

1. **Within the same conversation:** The previous messages are still in the context window — the LLM is re-reading them, not remembering them
2. **Across conversations:** Something external is injecting saved information back into the prompt at the start of the new session

In both cases, "memory" is just **text in the Sandwich**. Not actual retention. The moment that context window is cleared, it's gone.

:::callout-error
"But I've been chatting with it for weeks and it remembers my name!" — That's because the app is saving your name somewhere and injecting it into each new conversation. The LLM itself remembers nothing. The *system* around it is doing the remembering.
:::

## 📝 Key Concepts

- **Stateless:** No information persists between conversations by default
- **Within-conversation "memory":** Just reading earlier messages still in the context window
- **Across-conversation "memory":** External systems injecting saved info back into the prompt
- **The model never changes during use** — it's read-only
- **What looks like memory is context injection** — the Sandwich doing work

:::quiz{id="08-01"}
