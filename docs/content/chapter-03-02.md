---
title: "3.2 The Sandwich — Turn by Turn"
description: "Watch what's actually sent to the LLM with every message you send."
chapter: "Chapter 3"
pageId: "03-02"
---

## 🎯 Core Goals
- Show simultaneously what the user sees (chat) vs. what's actually sent (the growing bundle).
- Make visceral the fact that the ENTIRE conversation history is re-bundled and sent every turn.
- No system prompt or custom preprompt yet — pure conversation history only.

:::callout-tldr
The LLM doesn't "remember" your conversation. Every time you send a message, the app bundles the **entire history** — all previous messages — and sends it to the LLM as one big package. The LLM reads it all from scratch, every time.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-sandwich-dual-view"}

## 📝 Key Concepts

- **The LLM Has No Memory:** Each turn, the LLM starts from zero. It only knows what's in the bundle sent right now.
- **The App Builds the Bundle:** The chat interface silently collects the entire conversation history and bundles it with the new message on every send.
- **The Bundle Grows:** Every turn adds two messages. By Turn 4, the LLM reads 7 messages at once — just to answer the latest one.
- **Cost & Speed:** Bigger bundles = more tokens processed = slower and more expensive. Many providers offer caching to lower costs

:::callout-error
The LLM doesn't "know" you — it re-reads the transcript every single time. Modern LLM services often include a MEMORY mechanism, it often is just a way to bundle your previous conversation into your current one somehow. We will discuss some common methods later.
:::

:::quiz{id="03-02"}
When you send your 5th message in a chat, what does the LLM actually receive?
- [ ] Only your 5th message — it remembers the rest from earlier
- [x] The entire conversation history bundled together and sent from scratch
- [ ] A compressed summary of previous messages plus your new one
:::
