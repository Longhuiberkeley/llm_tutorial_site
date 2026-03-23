---
title: "3.4 Chain-of-Thought"
description: "Why 'thinking step-by-step' is just a prompt trick."
chapter: "Chapter 3"
pageId: "03-04"
---

## 🎯 Core Goals
- Understand why forcing an AI to "think out loud" makes it smarter.
- Learn the "magic phrase" that improves AI reasoning.

:::callout-tldr
LLMs can't think ahead. They generate words one at a time. If you force them to write down their "scratchpad thoughts" before answering, they naturally arrive at better conclusions!
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-chain-of-thought"}

## 📝 Key Concepts

- **No Inner Monologue:** Unlike humans, standard LLMs don't have a silent "inner voice" where they ponder a problem before speaking. They just start talking immediately.
- **The "Step-by-Step" Trick:** If you add *"Let's think step by step"* to your prompt, the AI generates words detailing its logical process. Because it generates words based on the *previous* words, seeing its own logical steps helps it predict the correct final answer!
- **Modern Models:** Newer models (like OpenAI's o1 or Claude's extended thinking) have this "scratchpad" built-in. They secretly generate thousands of words of internal logic before showing you the final, polished answer.

:::callout-dyk
Did you know that just adding "Take a deep breath and work on this step by step" was proven in research papers to significantly increase an AI's math test scores?
:::

:::quiz{id="03-04"}