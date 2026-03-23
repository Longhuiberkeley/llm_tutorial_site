---
title: "4.4 Context Poisoning"
description: "How irrelevant info makes the model dumber."
chapter: "Chapter 4"
pageId: "04-04"
---

## 🎯 Core Goals
- Understand the danger of overloading the context window with junk.
- Learn why "more context" isn't always "better context".

:::callout-tldr
If you throw a 100-page manual at an AI and ask it one specific question, the AI might get confused. The more irrelevant "junk" you put in its brain, the harder it is for it to find the truth.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-context-poisoning"}

## 📝 Key Concepts

- **The Needle in a Haystack:** Every extra paragraph you add to a prompt acts as "noise." If you ask a question about accounting, but paste in an entire company handbook that includes cafeteria rules, the AI might accidentally mix the concepts together.
- **Attention Dilution:** Remember the "Cocktail Party Effect" from Chapter 2? If there are too many voices (too much text), the AI's "attention" gets stretched too thin, and it loses focus on your core question.
- **The Fix:** Be ruthless about what you paste. Trim out irrelevant paragraphs before handing data to the AI.

:::callout-dyk
Researchers test AI models using a "Needle In A Haystack" test, hiding a single secret sentence inside a 100,000-word document to see if the AI can successfully retrieve it without getting confused by the "poison" text around it!
:::

:::quiz{id="04-04"}