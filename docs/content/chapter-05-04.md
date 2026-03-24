---
title: "5.4 Chain-of-Thought & Reasoning Tokens"
description: "Thinking Step by Step."
chapter: "Chapter 5"
pageId: "05-04"
---

## 🎯 Core Goals
- Learn why "thinking step by step" makes AI smarter.
- Understand the difference between prompting for reasoning and native "thinking" models.

:::callout-tldr
For complex tasks, don't ask for the answer immediately. Ask the AI to "think step by step." This forces it to build its internal logic before committing to a final conclusion.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-reasoning-tokens"}

## 📝 Key Concepts

- **Chain-of-Thought (CoT):** Prompting for step-by-step reasoning.
- **Thinking Tokens:** Modern models (connected to what we learned about model training) are trained to do this internally before they even start typing their final answer.
- **The "Scratchpad" Effect:** Generating intermediate steps provides additional context for the final answer, making it more reliable.

:::callout-dyk
Even when the reasoning chain contains errors, the simple act of spending more tokens on reasoning improves final accuracy. It's like how scribbling on scratch paper helps you solve a math problem, even if your scribbles aren't perfectly organized. So in some sense, reasoning is more like an "effort" thing. If you want a **smarter** model, set the reasoning effort to high.
:::

:::callout-dyk
Is reasoning the same thing as thinking? 
:::

:::quiz{id="05-04"}
