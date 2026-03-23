---
title: "4.3 Randomness & Temperature"
description: "The 'Creativity' vs 'Reliability' slider."
chapter: "Chapter 4"
pageId: "04-03"
---

## 🎯 Core Goals
- Understand the technical setting that controls how "creative" an AI is.
- Learn when to use high vs. low Temperature.

:::callout-tldr
"Temperature" is a setting you can tweak on most AI models. A low temperature makes the AI boring but factual. A high temperature makes the AI highly creative but prone to going completely off the rails.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-temperature-slider"}

## 📝 Key Concepts

- **The Dice Roll:** When an LLM predicts the next word, it actually generates a list of possibilities (e.g., 90% chance of "apple", 9% chance of "banana", 1% chance of "shoe").
- **Low Temperature (0.0):** The AI ALWAYS picks the #1 most likely word. It becomes highly predictable, repetitive, and excellent for writing code or summarizing data.
- **High Temperature (1.0+):** The AI is allowed to pick the 2nd, 3rd, or 4th most likely word. This introduces chaos, making it great for brainstorming, poetry, and storytelling!

:::callout-error
If you set the temperature too high (e.g., 2.0), the AI will start picking the least likely words, resulting in literal gibberish and broken grammar.
:::

:::quiz{id="04-03"}