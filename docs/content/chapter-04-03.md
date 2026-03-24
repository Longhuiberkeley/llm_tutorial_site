---
title: "4.3 Randomness & Temperature"
description: "The 'Creativity' vs 'Reliability' slider."
chapter: "Chapter 4"
pageId: "04-03"
---

## 🎯 Core Goals
- Understand the setting that controls how "creative" an LLM is.
- Learn when to use high vs. low temperature.

:::callout-tldr
"Temperature" is a setting you can tweak on most LLMs. A low temperature makes the LLM predictable but factual. A high temperature makes it creative but prone to going completely off the rails.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-temperature"}

## 📝 Key Concepts

- **The Dice Roll:** When an LLM predicts the next word, it generates a list of possibilities (e.g., 90% chance of "apple", 9% chance of "banana", 1% chance of "shoe").
- **Temperature 0.0 (Predictable):** The LLM always picks the #1 most likely word. It becomes highly predictable, repetitive, and excellent for writing code or summarizing data.
- **Temperature 1.0 (Creative):** The LLM is allowed to pick the 2nd, 3rd, or 4th most likely word. This introduces variety, making it great for brainstorming, poetry, and storytelling!
- **Probabilistic Nature:** LLMs are fundamentally probabilistic — this is another reason they can't be 100% reliable. There is almost always more than one "correct" way to finish a sentence.

:::callout-error
If you set the temperature too high (e.g., 2.0), the LLM will start picking the least likely words, resulting in literal gibberish and broken grammar.
:::

:::callout-dyk
**For most users: leave temperature alone.** The default temperature setting is carefully chosen by the model's creators. Tweaking it without understanding the task can noticeably degrade response quality.
:::

:::callout-dyk
**Have you tried asking the LLM if it has a favorite number?** Have you noticed if it gives you the same answer sometimes? Why is it?  
Adjusting the temperature is a very good way to introduce more randomness in this scenario.
:::

:::quiz{id="04-03"}
