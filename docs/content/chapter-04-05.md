---
title: "4.5 When the Head is Full"
description: "Truncation vs. Summarization."
chapter: "Chapter 4"
pageId: "04-05"
---

## 🎯 Core Goals
- Learn the two strategies for handling conversations that hit the limit.
- Understand the trade-offs of endless chats.

:::callout-tldr
When the AI's "receipt tape" (Context Window) runs out of space, something has to be deleted. You either chop off the top of the conversation, or you write a tiny summary to replace it.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-head-is-full"}

## 📝 Key Concepts

- **Strategy 1: Truncation (Chopping):** The system simply deletes your oldest messages. If you told the AI your name in Message 1, and you are now on Message 50, the AI literally no longer has the text where you stated your name.
- **Strategy 2: Summarization:** Before the top messages fall off, the system asks the AI to read them and write a quick summary (e.g., *"User is named John, likes dogs"*). It then deletes the old messages and pins the summary to the top.
- **The Catch:** Summarization saves space, but you lose nuance. The exact wording of your earlier brilliant ideas is gone, replaced by a bullet point.

:::callout-error
Never use a single chat thread as a permanent "workspace" for months. The context will get poisoned, the top will get truncated, and the AI will become slow and confused. Always start fresh chats for new tasks!
:::

:::quiz{id="04-05"}