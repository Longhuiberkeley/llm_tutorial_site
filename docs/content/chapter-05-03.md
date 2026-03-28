---
title: "5.3 Zero-Shot vs. Few-Shot"
description: "Show, Don't Just Tell."
chapter: "Chapter 5"
pageId: "05-03"
---

## 🎯 Core Goals
- Understand the power of examples in prompting.
- Learn why 2-3 examples are better than 10 paragraphs of text.

:::callout-tldr
Explaining what you want is good. Showing the AI exactly what you want is 10x better. Providing just two or three examples can solve almost any formatting or tone problem!
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-few-shot"}

## 📝 Key Concepts

- **Zero-Shot:** Just instructions, no examples. (e.g., "Convert dates to MM/DD/YYYY")
- **Few-Shot:** Instructions + 2-3 examples of the desired pattern. (e.g., "January 5th -> 01/05/2024. March 21st -> 03/21/2024. Now convert: December 1st")
- **Pattern Matching Power:** LLMs are incredibly good at mimicking the exact tone, structure, and logic of your examples (as we saw when we explored building intuition).

:::callout-dyk
Rule of thumb: 2-3 examples is usually enough. Adding more than 5 often yields diminishing returns and wastes tokens!
:::

:::quiz{id="05-03"}
What's the most effective way to get an LLM to match a specific output format?
- [ ] Write a detailed paragraph describing exactly what you want
- [x] Provide 2-3 examples of the desired output
- [ ] Use more technical vocabulary in your instructions
:::
