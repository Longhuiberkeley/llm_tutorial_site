---
title: "6.5 When Agents Go Wrong"
description: "Common failure modes."
chapter: "Chapter 6"
pageId: "06-05"
---

## 🎯 Core Goals
- Learn to identify common "agent bugs."
- Understand why testing agents is harder than traditional software.

:::callout-tldr
Agents fail in hard-to-predict ways. They can get stuck in loops, use the wrong tools, or stubbornly try the same failed action over and over.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-agent-bugs"}

## 📝 Key Concepts

- **Infinite Loops:** Searching for the same thing repeatedly without moving forward.
- **Tool Hallucination:** Trying to use a tool that doesn't exist.
- **Stubborn Retries:** Getting a "Permission Denied" error and trying the exact same command 10 times.
- **Solutions:** Timeouts, step limits, and human-in-the-loop oversight are essential guardrails.

:::callout-error
Never "set and forget" an autonomous agent with access to your email or bank account! Always start with high human oversight.
:::

:::quiz{id="06-05"}
