---
title: "6.4 Agentic Loops — Perceive, Plan, Act, Observe"
description: "The engine inside an agent."
chapter: "Chapter 6"
pageId: "06-04"
---

## 🎯 Core Goals
- Walk through the lifecycle of an agent's decision-making.
- Understand why agents operate in cycles, not linear sequences.

:::callout-tldr
Agents don't just "do it." They think, act, and then look at what happened. This cycle — the **Agentic Loop** — is what allows them to handle complex, messy real-world tasks.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-agent-loop"}

## 📝 Key Concepts

- **Perceive:** Reads the task and the current environment.
- **Plan:** Decides which tools to use and what steps to take.
- **Act:** Executes a tool (like a web search or a file edit).
- **Observe:** Looks at the result of the action. Was it successful? Did it give us what we needed?

:::callout-dyk
This loop continues until the agent believes the task is finished or it hits a safety limit (like a timeout or maximum number of steps).
:::

:::quiz{id="06-04"}
