---
title: "13.3 Evaluation & Test Sets"
description: "How to prove your AI actually works — not just in demos, but in the real world."
chapter: "Chapter 13"
pageId: "13-03"
---

## 🎯 Core Goals
- Explain what an evaluation test set is and why it's essential for AI projects.
- Establish the importance of creating test sets BEFORE building, not after.
- Cover regression testing: catching when AI behavior degrades over time.

:::callout-tldr
"Seemed good in the demo" is not proof. An evaluation test set is a collection of inputs where you already know the correct output — it lets you grade your LLM objectively, measure improvement, and catch regressions before they reach users.
:::

## 🎓 What Is an Evaluation Test Set?

Imagine you're hiring a new employee to handle customer support. Before you let them respond to real customers, you'd probably give them a set of practice emails and check how they respond. You already know what a good answer looks like. You're grading them against a standard.

That's exactly what an evaluation test set is for an AI system.

Before launching any LLM-powered feature, you create a collection of sample inputs where you already know what the correct (or acceptable) output looks like. Then you run your AI on those inputs and measure how well it does.

For a customer support bot, that might look like:
- 100 sample customer emails, covering a range of topics and tones
- For each one, a "gold standard" response (or at minimum, criteria for what makes a good response)
- A scoring rubric: did the AI cite policy correctly? Was the tone appropriate? Did it escalate when needed?

Run the bot on all 100. 90 pass your criteria = 90% accuracy. You now have a **baseline** — a measurable starting point.

:::callout-dyk
In machine learning research, these test collections are called "evaluation sets" or "benchmarks." Major LLM providers publish benchmarks to compare their models. The same principle applies at the application level: you define what success looks like for YOUR use case, then measure against it.
:::

## 📅 Build Your Test Set Before You Build Your Feature

This is the counterintuitive part: **write your test set before you write your feature.**

Why? Because writing test cases forces you to define success. You can't create a test case without answering: "What is the right output for this input?" And if you can't answer that question, you're not ready to build yet.

The test-first discipline also prevents a common trap: building a feature and then writing test cases that match what the feature already produces (whether or not that output is actually correct). That's not testing — that's rubber-stamping.

Good test sets include:
- **Easy cases** — the straightforward, expected inputs the system should always handle correctly
- **Edge cases** — unusual, ambiguous, or tricky inputs that reveal where the system struggles
- **Adversarial cases** — inputs designed to trip up the system (what happens if a user tries to misuse it?)
- **Real examples** — sampled from actual usage data where possible (the most valuable kind)

:::callout-error
A common mistake: only testing on "happy path" examples that you expect the system to handle well. Real users will send you edge cases constantly. If your test set doesn't include them, you won't know how your system behaves until something goes wrong in production.
:::

## 🔄 Catching Regressions Over Time

Here's a property of AI systems that catches teams off guard: **behavior can change without you changing anything.**

LLM providers update their models regularly. A model update in October might subtly shift how it handles a certain type of input. Your feature wasn't touched — but its behavior changed.

This is called a regression: performance on a previously working case gets worse.

Without a test set, you'd never know. With a test set that you run regularly, you catch it immediately:

> "After the model update last Tuesday, our accuracy on billing-related emails dropped from 91% to 78%. We need to update our prompts to compensate."

This is why continuous evaluation matters. Running your test set once before launch is good. Running it monthly (or after any system change) is necessary. Treating it as a live monitoring tool is best practice.

:::visual{name="visual-eval-sets"}

## 📝 Key Concepts

- **Test set** = curated inputs with known-correct outputs, used to grade your AI objectively.
- **Build test sets before building features** — they define what success looks like.
- **Include edge cases and adversarial inputs**, not just easy happy-path examples.
- **Establish a baseline** — measure accuracy before launch so you can track improvement and detect regressions.
- **Run test sets continuously** — LLM behavior can drift over time even when you change nothing.

:::quiz{id="13-03"}
