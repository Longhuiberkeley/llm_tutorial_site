---
title: "6.6 Building a Simple Agent"
description: "Build your first agent."
chapter: "Chapter 6"
pageId: "06-06"
---

## 🎯 Core Goals
- Walk through the building blocks of a real agent.
- Understand how prompts and tools come together.

:::callout-tldr
Building an agent is like assembling a team. You need a clear task, the right tools, and a set of instructions (the System Prompt) to guide them.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-agent-builder"}

## 📝 Key Concepts

- **Task Definition:** What is the agent trying to achieve?
- **Tool Selection:** Does it need a calculator, a web browser, or access to your files?
- **Guardrails:** What should the agent NEVER do? (e.g., "Don't spend more than $5").
- **Testing:** Always run your agent on small, safe tasks before letting it handle the big ones.

:::callout-dyk
Quality depends heavily on the System Prompt. A good prompt doesn't just say "Do the task," it says "Do the task safely, concisely, and ask for help if you're unsure."
:::

:::quiz{id="06-06"}
