---
title: "4.2 Hallucination"
description: "Not a bug, but a feature of statistical guessing."
chapter: "Chapter 4"
pageId: "04-02"
---

## 🎯 Core Goals
- Reframe "hallucinations" as natural statistical guesses, not system errors.
- Learn why AI lies so confidently.

:::callout-tldr
AI doesn't "lie"—it guesses. Because it is designed to predict the most likely next word, if it doesn't know a fact, it will simply predict a word that *sounds* like a plausible fact.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-hallucination"}

## 📝 Key Concepts

- **Confident Guesses:** If you ask an AI for a biography of a fake person, it won't just say "I don't know." It sees the pattern of a biography (Born in [Year], attended [University]) and fills in the blanks with the most statistically common words.
- **It's a Feature:** The exact mechanism that allows an AI to write a beautiful poem about a robot on Mars (creativity) is the same mechanism that makes it invent a fake legal case. It's just pattern-matching!
- **Grounding:** The best way to prevent hallucinations is to provide the AI with the exact text you want it to reference (e.g., pasting in an article and asking "Summarize *this*").

:::callout-dyk
Did you know that AI engineers actually struggle to make models say "I don't know"? Because AI is built to always output *something*, stopping it from guessing requires intense specialized training.
:::

:::quiz{id="04-02"}