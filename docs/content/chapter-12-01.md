---
title: "12.1 You Can't Automate What You Can't Explain"
description: "Business understanding is the prerequisite for any automation — you must fully understand a process before you can automate it."
chapter: "Chapter 12"
pageId: "12-01"
---

## 🎯 Core Goals
- Establish that deep business understanding must come BEFORE any automation effort.
- Introduce a practical checklist for evaluating whether a process is ready to automate.
- Warn against the trap of automating a broken or poorly understood process.

:::callout-tldr
You can't automate what you can't explain. The ceiling of any automation project is YOUR understanding of the process. Automate a broken process and you get a broken process running faster — at scale.
:::

## 🏛️ The Three Pillars of Digital Transformation

The ceiling of any digital transformation isn't technology — it's the combination of three things working together: good communication, solid business insight and execution, and the technical ability to build and maintain the solution. Technology is only one pillar. Without the other two, even the best tool fails.

:::visual{name="visual-digital-transformation-pillars"}

## 💥 The Cautionary Tale

Imagine a company's returns department is overwhelmed. A manager decides to solve the problem with automation: an agentic AI will handle all refund requests automatically.

Within a week, the AI is processing hundreds of refunds per day. Sounds like a win — until someone checks the numbers. It turns out the original process had an unwritten rule: refund requests over $200 required a supervisor's sign-off. No one documented this. The automation didn't know. The AI approved tens of thousands of dollars in refunds that should have been reviewed.

The problem wasn't the LLM. The problem was that no one fully understood (or documented) the process before automating it. The automation didn't fix the broken process — it accelerated it, at scale, with no human catching the errors.

:::callout-error
A common mistake is treating LLMs like genies: "I wish this was automated." Genies — and LLMs — can only grant wishes you can clearly articulate. If you can't describe every step, decision, and exception in a process, an LLM cannot reliably handle it.
:::

## 📋 The Automation Readiness Checklist

Before automating any process, you should be able to answer all of these questions. Every unchecked item is a gap where automation will fail.

:::callout-dyk
Studies of failed automation projects consistently point to the same root cause: requirements were incomplete. Not technical failures — misunderstood processes. The technology almost always works. The surprise almost always comes from a business rule nobody thought to mention.
:::

## 🗺️ The Path to Automation Readiness

The fastest path to a reliable automation is counterintuitively slow at the start: verbalize the process, draw a flowchart, turn it into a checklist, then automate. Use the checklist below to assess readiness — every unchecked item is a future failure point.

:::visual{name="visual-automate-checklist"}

## 📝 Key Concepts

- **Understand first, automate second** — The quality of your automation will never exceed the quality of your process documentation.
- **Broken + automated = worse** — Automation amplifies what's already there; fix the process before you scale it.
- **Interview the doers** — The people doing the work know the unwritten rules. Ask about edge cases and exceptions, not just the happy path.
- **Verbalize → Flowchart → Checklist → Automate** — Follow this sequence every time.
- **Gaps in your checklist are future failures** — Every unanswered question is a place where the automation will eventually break.

:::quiz{id="12-01"}
