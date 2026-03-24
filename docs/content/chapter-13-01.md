---
title: "13.1 Why AI Projects Are Different"
description: "AI projects have unique challenges that traditional project management doesn't address — learn what makes them special."
chapter: "Chapter 13"
pageId: "13-01"
---

## 🎯 Core Goals
- Explain the specific properties of AI projects that distinguish them from traditional software projects.
- Introduce key risks: non-determinism, evaluation challenges, cost unpredictability, and debugging difficulty.
- Set expectations for what "running an AI project" actually involves.

:::callout-tldr
AI projects are fundamentally different from traditional software projects. The same input can produce different outputs. Testing isn't one-time — it's continuous. Bugs don't look like crashes; they look like plausible-sounding wrong answers. Managing AI projects requires a different mindset.
:::

## 🎲 The Non-Determinism Problem

In traditional software, if you type `2 + 2`, you always get `4`. Every time, forever. This predictability is what makes traditional software trustworthy and easy to test.

LLMs don't work this way. Give the same input to an LLM twice, and you may get two different — but both plausible-sounding — outputs. This isn't a bug; it's a core feature of how these models work (as covered when we explored temperature and randomness). But it creates a fundamental challenge for projects: **you can't just test once and assume it works.**

This matters because:
- A response that passes your review today might be subtly wrong tomorrow.
- System updates from the LLM provider can shift behavior without warning.
- Edge cases that never appeared in testing show up in production.

Traditional software has bugs that crash predictably. AI systems have errors that fail silently — producing confident-sounding wrong answers that slip past automated checks.

:::callout-error
A common mistake is treating an LLM-powered application like traditional software: "We tested it, it works, we can ship it." With LLMs, shipping is the beginning of testing, not the end. You need continuous evaluation in production, not a one-time pre-launch check.
:::

## 💸 Cost and Debugging Surprises

Two more properties make AI projects uniquely challenging:

**Usage-based cost unpredictability:** Traditional software has mostly fixed costs. LLM-powered applications charge per token — per word, essentially. A feature that seems cheap in a demo can become expensive at scale. One poorly designed prompt that runs 10,000 times per day can generate enormous bills. Budget for uncertainty, and monitor costs actively.

**"Why did it say that?" is often unanswerable:** When traditional software crashes, you get a stack trace — a precise record of exactly what went wrong and where. When an LLM produces a wrong answer, there's often no equivalent explanation. You can't step through the reasoning the way you can step through code. This makes debugging feel like detective work rather than engineering.

:::callout-dyk
This debugging difficulty is why traceability — logging every input, tool call, and output — is so important in AI systems. Without logs, you can't even begin to investigate why something went wrong. With good logs, you can usually reconstruct the chain of events that led to a bad output.
:::

## ⚠️ The AI Project Risk Matrix

AI projects carry a distinct set of risks that traditional PM frameworks weren't designed for:

- **Hallucination risk:** The LLM confidently states something false. The output looks right but isn't.
- **Cost overrun risk:** Token usage accumulates faster than expected, especially as usage grows.
- **Unpredictability risk:** Behavior changes after a model update or as inputs drift from what was tested.
- **Security risk:** Prompt injection, jailbreaking, or adversarial inputs that cause unexpected behavior.
- **Bias risk:** The model's outputs reflect biases in its training data in ways that surface unevenly.

Managing these risks requires active monitoring — not a one-time risk assessment, but ongoing attention to what the system is actually doing in the real world.

:::visual{name="visual-ai-projects-diff"}

## 📝 Key Concepts

- **Non-determinism** means the same input can produce different outputs — testing must be continuous, not one-time.
- **Silent failures** look like plausible-sounding wrong answers, not crashes — they're harder to catch.
- **Usage-based costs** can scale unpredictably — budget for growth and monitor actively.
- **Debugging is hard** — "why did it say that?" often has no clean answer.
- **Active monitoring is required** — you cannot set an AI system and forget it.

:::quiz{id="13-01"}
