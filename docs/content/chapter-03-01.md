---
title: "3.1 The Chat Illusion"
description: "AI doesn’t remember you; it re-reads the whole transcript every time."
chapter: "Chapter 3"
pageId: "03-01"
---

## 🎯 Core Goals
- Understand that LLMs are "stateless"—they have no memory of past conversations.
- Learn why long conversations get slower and more expensive.

:::callout-tldr
When you chat with an AI, it feels like it's remembering your conversation. It's an illusion! Every time you hit enter, the AI is secretly re-reading the *entire* conversation history from scratch.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-chat-illusion"}

## 📝 Key Concepts

- **Statelessness:** Imagine talking to an incredibly smart friend who has zero short-term memory (like the movie *50 First Dates*). Every time you speak, you have to hand them a massive transcript of everything you've said so far. That's exactly how an LLM works!
- **Context Window:** This "transcript" is called the Context Window. As your conversation grows, the transcript gets longer, taking the AI more time and compute power to read.
- **The Magic Trick:** The chat interface (like ChatGPT or Claude) hides this transcript from you, neatly organizing the back-and-forth messages. It does all the copying and pasting behind the scenes, creating the illusion of memory.

:::callout-error
Never assume the AI "knows" you just because you've been chatting for an hour. If the conversation gets too long, the oldest messages fall off the top of the transcript, and the AI permanently forgets them!
:::

:::quiz{id="03-01"}