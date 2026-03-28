---
title: "4.2 Hallucination — Confident Fabrication"
description: "Why LLMs lie so confidently — it's a feature of statistical generation, not a bug."
chapter: "Chapter 4"
pageId: "04-02"
---

## 🎯 Core Goals
- Reframe "hallucinations" as natural statistical guesses, not system errors.
- Learn why LLMs lie so confidently.

:::callout-tldr
LLMs don't "lie" — they guess. Because they are designed to predict the most likely next word, if they don't know a fact, they will simply predict words that *sound* like a plausible fact. The result is confident-sounding nonsense.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-hallucination"}

## 📝 Key Concepts

- **Confident Guesses:** If you ask an LLM for a specific data point it hasn't seen (like fashion revenue for a future year), it won't just say "I don't know." It recognizes the pattern of a financial report and fills in the blanks with statistically plausible-sounding numbers.
- **No Internal Fact-Checker:** LLMs generate text based on patterns, not by looking up facts in a database. They have no internal mechanism to verify if a claim is true or false before saying it.
- **It's a Feature:** The exact mechanism that allows an LLM to write a beautiful poem about a robot on Mars (creativity) is the same mechanism that makes it invent a fake legal case. It's pattern-matching all the way down.

:::callout-dyk
For factual data like revenue figures, market statistics, or recent events — use the **Deep Research** or **web search** tool if available. It fetches real, current information from the internet instead of pattern-guessing. When in doubt: look it up, don't ask the LLM to recall it. Later we'll explore a technique called **RAG** (Retrieval-Augmented Generation) that does exactly this — automatically fetching real documents to ground the LLM's answers in facts rather than guesses.
:::

:::callout-dyk
LLM engineers actually struggle to make models reliably say "I don't know." Because LLMs are built to always output *something*, training them to stop and admit ignorance requires intensive, specialized work.
:::

:::quiz{id="04-02"}
