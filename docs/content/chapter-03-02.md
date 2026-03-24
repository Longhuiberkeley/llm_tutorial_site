---
title: "3.2 The Sandwich — How Messages Really Stack Up"
description: "See the full payload structure that gets sent to the LLM on every turn."
chapter: "Chapter 3"
pageId: "03-02"
---

## 🎯 Core Goals
- Show the full "payload" structure sent to the LLM.
- Understand that the "reply" is just the bottom layer of a huge sandwich.

:::callout-tldr
Every time you send a message, the AI doesn't just see your words. It sees a giant "sandwich" containing hidden instructions, your past messages, and even documents you've uploaded.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-sandwich"}

## 📝 Key Concepts

- **Layered Payload:** Your message is wrapped in several layers:
    - **System Prompt:** Hidden instructions like "Be concise."
    - **Pre-prompt / Context:** Injected data like RAG results or files.
    - **Conversation History:** All previous messages from both you and the AI.
    - **Thinking Tokens:** (For reasoning models) The model's internal work.
- **Stateless Re-reading:** Every turn, the LLM processes ALL of this at once to generate its next reply.
- **The Magic Trick:** What you see as a simple chat is actually a complex stack being replayed every single time you hit enter.

:::quiz{id="03-02"}
