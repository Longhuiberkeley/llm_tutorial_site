---
title: "3.1 The Black Box"
description: "Text goes in, text comes out — but what's actually happening inside?"
chapter: "Chapter 3"
pageId: "03-01"
---

## 🎯 Core Goals
- Introduce the LLM as an input/output black box.
- Build curiosity about what happens inside with a predefined guess quiz.
- Bridge to the sandwich model in 3.2.

:::callout-tldr
Text goes in. Text comes out. That's the whole interface — but what's actually happening inside that box? Let's find out.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-black-box"}

## 📝 Key Concepts

- **The Black Box:** From the outside, an LLM is simple — text in, text out. The chat interface hides all the machinery.
- **Next-Token Prediction:** The LLM's core job is to predict the most statistically likely next word/token, given everything before it. It does this repeatedly until the reply is complete.
- **Not a Search Engine:** LLMs don't look things up in real-time. They generate text from learned patterns — powerful, but also why they can confidently say things that are wrong.
- **The Interface Illusion:** The chat app makes it *look* like a flowing conversation. What actually happens each turn? That's what we explore next.

:::callout-dyk
If it just predicts words... how does it "remember" your whole conversation? That's the trick — every time you hit Send, something surprising happens under the hood. Let's look at it next.
:::

:::quiz{id="03-01"}
