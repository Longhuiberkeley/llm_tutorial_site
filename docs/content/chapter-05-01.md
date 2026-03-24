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

- **Ready to use:** Creative writing, brainstorming, explaining concepts, email drafts. These are low-stakes tasks where some variation is actually useful.
- **Review before using:** Code, business communications, document summaries. The LLM does 80% of the work; your judgment provides the final 20% polish.
- **Heavy verification needed:** Legal text, financial calculations, medical information. The LLM can draft and structure — but every fact must be cross-checked against authoritative sources.
- **Don't trust without engineering:** Autonomous decisions, safety-critical operations, anything where a single undetected mistake is catastrophic. LLMs are powerful here *only* with proper guardrails, testing, and human oversight built in.

:::callout-error
**LLMs are production-ready — but not for everything.** With proper engineering (retrieval, testing, human review), LLMs power systems handling millions of real decisions daily. The risk isn't that they're too unreliable to use in serious contexts — it's using them in serious contexts *without* the right engineering. Know your zone, and design accordingly.
:::

:::callout-dyk
A useful question before any LLM task: *"What's the worst thing that happens if this response is wrong?"* If the answer is "nothing" or "I'd catch it" — go ahead. If the answer is "someone gets hurt" or "we face legal liability" — add engineering before shipping.
:::

:::quiz{id="05-01"}
