---
title: "2.3 Building a Sentence - Concrete Example"
description: "See how attention and distance predict the next word."
chapter: "Chapter 2"
pageId: "02-03"
---

## 🎯 Core Goals
- Show how attention and distance work together to predict the next word.
- Make the generation process completely transparent.

:::callout-tldr
Generating text is a loop: Read the context → calculate attention → find the closest word in meaning-space → pick it → repeat.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-sentence-builder"}

## 📝 Key Concepts

- **The Math of Context:** The LLM takes all the attention connections in the current sentence and mathematically combines them to figure out exactly "where" we are in meaning-space.
- **The Nearest Neighbor:** Once it has a coordinate for the current context, it simply looks at its vocabulary map and finds the token closest to that coordinate.
- **Autoregressive Loop:** "Autoregressive" is just a fancy word for "predicts the next thing, adds it to the list, and uses the new list to predict the next thing after that."

:::callout-dyk
If the math just picks the "closest" word every time, why do we get different answers? We'll talk about "Temperature" and randomness in Chapter 4!
:::

:::quiz{id="02-03"}
