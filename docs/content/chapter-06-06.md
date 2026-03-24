---
title: "6.6 Configuring a Good Agent"
description: "How to make agents controllable and useful."
chapter: "Chapter 6"
pageId: "06-06"
---

## 🎯 Core Goals
- Understand that a good agent is a *configured* agent, not just an LLM with tools.
- Learn the four levers that make agent behavior predictable and useful.

:::callout-tldr
An agent without configuration is an agent out of control. In practice, the best agents are carefully scoped: you tell them exactly what tools they can use, what domain they work in, what they're allowed to access, and what role they play.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-agent-builder"}

## 📝 The Four Configuration Levers

A well-configured agent is **controllable, useful, and predictable** because someone has explicitly defined:

- **Tools** — What actions can it take? (web search, calculator, send email, read files) The narrower the list, the less it can go wrong.
- **Domain** — What is it an expert in? A customer support agent should know your product deeply, not be a generalist that goes off-topic.
- **Access Rights** — What is it *allowed* to touch? Read-only means it can look but not change. Read-write means it can make changes. Admin access means it can do almost anything — use sparingly.
- **Role & Skills** — What is its "job title"? A role like "senior travel planner" or "finance analyst" shapes how it reasons, what tone it takes, and what domain knowledge it draws on.

The more precisely you define these four levers, the more reliably the agent performs — and the easier it is to catch when something goes wrong.

:::callout-tip
**Reflect:** Think about tools like Perplexity Deep Research or Google NotebookLM. What tools do you think they have access to? What might their system prompt say? What domain or access level do you think they're restricted to? There are no wrong answers — this is exactly the kind of thinking that makes you a better AI user.
:::

:::quiz{id="06-06"}
