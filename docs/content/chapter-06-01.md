---
title: "6.1 What is Tool Use? — LLMs Can Delegate"
description: "Giving AI hands and a brain."
chapter: "Chapter 6"
pageId: "06-01"
---

## 🎯 Core Goals
- Understand that LLMs can call external software to solve their limitations.
- See the power of "delegation" for math, search, and data access.

:::callout-tldr
LLMs are great at language but bad at math and facts. **Tool Use** lets them delegate to a calculator or a search engine instead of guessing.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-tool-use"}

## 🎮 The Simon Says Trick

Here's the key insight most people miss: **an LLM never actually "does" anything.**

It only ever outputs text. That's it. No clicking, no downloading, no running code — just text.

So how does it "use" a calculator? Think of the game **Simon Says**. When Simon says something, someone else carries out the action. The LLM is Simon — it only *says* the instruction. A separate program listens for the trigger and actually executes the task.

In practice, it looks like this:

> LLM outputs: `[tool_call: calculator.multiply(123, 456)]`

That's just text with a special trigger pattern. Another program reads it, runs the calculation, and feeds the result back. The LLM then reads that result and continues writing.

"Simon says, download data from example.com" — the LLM says it; the executor does it.

## 📝 Key Concepts

- **Delegation:** The LLM decides WHICH tool to use and WHAT to ask — but the tool does the heavy lifting.
- **Common Tools:** Calculators, web search, code execution, file reading, and database queries.
- **Trigger Text:** Tool calls are just specially formatted text that a surrounding system intercepts and runs.
- **Incorporating Results:** Once the tool finishes, the LLM reads the result and incorporates it back into your chat.

:::callout-dyk
**What is an API?** An API (Application Programming Interface) is like a restaurant menu. You don't go into the kitchen — you look at the menu, place an order, and get food back. An API is the "menu" that lets software programs talk to each other.
:::

:::quiz{id="06-01"}
