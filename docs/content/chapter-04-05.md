---
title: "4.5 When the Head is Full"
description: "How the AI manages its finite short-term memory."
chapter: "Chapter 4"
pageId: "04-05"
---

## 🎯 Core Goals
- Understand the trade-offs of endless chats and finite context windows.
- Learn the strategies (truncation vs. summarization) used to manage full memory.
- This is one of the MANY reasons why your LLM seems quite forgetful.

:::callout-tldr
When the AI's "receipt tape" (Context Window) runs out of space, something has to be deleted. You either chop off the top of the conversation, or you write a tiny summary to replace it.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-head-full"}

## 📝 Key Concepts


Here are some common methods that handle that kind of situation:
- **Strategy 1: Truncation (Chopping):** The system simply deletes your oldest messages. If you told the AI your name in Message 1, and you are now on Message 50, the AI literally no longer has the text where you stated your name. It has been permanently forgotten.
- **Strategy 2: Summarization:** Before the top messages fall off, the system asks the AI to write a quick summary (e.g., *"User is named Peter, lives in NY"*). It then deletes the old messages and pins the summary to the top. You save space, but you lose the exact nuance of the original messages.
- **Sliding Window:** Most systems use a "sliding window" where they keep the most recent messages and maybe the very first "System Prompt" instructions, letting everything in the middle fall away.

:::callout-error
Never use a single chat thread as a permanent "workspace" for months. The context will get poisoned, the top will get truncated, and the AI will become slow and confused. Always start fresh chats for new tasks!
:::

:::quiz{id="04-05"}
