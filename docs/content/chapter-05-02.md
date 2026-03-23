---
title: "5.2 Zero-Shot vs. Few-Shot"
description: "Show, don't just tell."
chapter: "Chapter 5"
pageId: "05-02"
---

## 🎯 Core Goals
- Understand how examples dramatically improve AI performance.
- Learn the industry terms for prompting styles.

:::callout-tldr
Explaining what you want is good. Showing the AI exactly what you want is 10x better. Providing just two or three examples can solve almost any formatting or tone problem!
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-few-shot"}

## 📝 Key Concepts

- **Zero-Shot Prompting:** Asking the AI to do something without giving it any examples. It's like asking a new chef to bake a cake without giving them a recipe. (e.g., *"Classify this review as positive or negative."*)
- **Few-Shot Prompting:** Giving the AI a "few" examples before asking your real question. 
- **Pattern Matching Power:** Because LLMs are fundamentally pattern-matching engines (remember Chapter 1?), they are incredibly good at mimicking the exact tone, structure, and logic of your examples.

:::callout-dyk
*Example of Few-Shot:*
Review: "The pizza was cold." -> Classification: Negative
Review: "I loved the cheesy crust." -> Classification: Positive
Review: "The waiter was very slow." -> Classification: [AI WILL FILL THIS IN]
:::

:::quiz{id="05-02"}