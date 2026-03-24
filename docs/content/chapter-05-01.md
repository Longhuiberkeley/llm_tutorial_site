---
title: "5.1 Know When to Trust It"
description: "The Spectrum of Reliability."
chapter: "Chapter 5"
pageId: "05-01"
---

## 🎯 Core Goals
- Understand when to trust an LLM and when to verify it.
- Learn that LLMs CAN be used in production — with the right engineering.

:::callout-tldr
LLMs aren't "all or nothing." Their reliability depends entirely on the task. Knowing where your task sits on the **Trust Spectrum** is the single most important judgment call you can make before using an LLM.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-trust-spectrum"}

## 📝 Key Concepts

- Can you identify if what you want to do is a, **Ready to use:**, **Review before using:**, **Heavy verification needed:**, or **Don't trust without engineering:** application?
- One better question is perhaps, can you identify which part in your project can be improved with LLM uses? 

:::callout-error
**LLMs are production-ready — but not for everything.** With proper engineering (retrieval, testing, human review), LLMs power systems handling millions of real decisions daily. The risk isn't that they're too unreliable to use in serious contexts — it's using them in serious contexts *without* the right engineering. Know your zone, and design accordingly.
:::

:::callout-dyk
A useful question before any LLM task: *"What's the worst thing that happens if this response is wrong?"* If the answer is "nothing" or "I'd catch it" — go ahead. If the answer is "someone gets hurt" or "we face legal liability" — add engineering before shipping.
:::

:::quiz{id="05-01"}
