---
title: "13.1 Why LLM Projects Are Different"
description: "LLMs don't remove the need for project management — they amplify the consequences of skipping it."
chapter: "Chapter 13"
pageId: "13-01"
---

## 🎯 Core Goals
- Explain how LLM-assisted projects create a velocity trap that obscures missing project foundations.
- Show that complacency — accepting without reviewing — is where most debt accumulates.
- Introduce why breaking down tasks matters for both humans and LLMs.

:::callout-tldr
LLMs don't remove the need for project management — they amplify the cost of skipping it. The same real-world concerns exist in every project: who is the user, what are the requirements, how does it handle edge cases. LLMs just move fast enough that you might not notice those questions were never answered.
:::

## ⚡ The Velocity Trap

Imagine you say to an LLM: "Build me a website where I can learn to solve chess puzzles."

Within hours, something appears. It has a UI. It shows puzzles. It might even have a hint system. It looks done.

But step back. Who exactly is the user? Beginners or advanced players? Is there a login system, or is everything anonymous? How do you track which puzzles a user has solved? What happens on mobile? What if someone wants to share a puzzle? If this were a paid product, how does billing work? What's the data model? Where are the puzzles stored?

None of these questions disappeared because an LLM generated some HTML. They were simply never asked. The LLM moved fast enough that the gap wasn't visible yet.

This is the **velocity trap**: the speed of LLM-assisted work creates the illusion of completeness. A prototype that looks finished can be missing its entire foundation — and you won't discover that until you try to build on it.

**Velocity without direction is drift, not progress.**

:::callout-dyk
This is the same problem in every fast-moving project — LLM-assisted or not. The difference is scale. In traditional development, building a week's worth of code without clear requirements is a recoverable mistake. With LLMs, you can build a month's worth in a day. The consequences of skipping the foundation accumulate proportionally faster.
:::

:::visual{name="visual-ai-projects-diff"}

## 🖱️ The Complacency Problem

There is a button in every AI-assisted tool that quietly causes most of the damage: **Accept**.

When you write 20 lines of code by hand, you think through each line as you write it. When an LLM generates 200 lines in seconds, the instinct is to scan it, see that it looks reasonable, and click Accept.

That scanning is not the same as understanding. The code may work for the happy path you tested. It may not handle the edge cases that will appear in production. It may have introduced an architectural pattern that will conflict with something you build three weeks from now. None of these problems are visible from a quick scan.

The compounding effect: each accepted chunk that was not fully understood becomes harder to change when problems emerge later. Fixing an issue in layer 5 of a structure built on layers 1–4 that weren't reviewed means understanding all five layers first.

There is a subtler form of complacency too: **false confidence from past success**. The LLM worked yesterday, so you trust it more today. But today's prompt is harder than yesterday's — more code has been written, more decisions made, more dependencies created. The complexity the LLM must navigate grows with every session, and so does the difficulty of getting the next output right. What's more, vigilance tends to decrease exactly as complexity increases. Early in a project, people review every line. Later, when the system feels stable, they stop. This is precisely backwards — later in a project is when context is most complex, inconsistencies are most likely, and review is most critical.

**Technical debt accumulates faster in LLM-assisted projects — not slower.** The correction or fix for something built incorrectly can cost more in time and rework than it would have in a traditional project, precisely because the speed hid how much was built on a shaky foundation.

:::callout-error
A common mistake: treating LLM output as finished work because it "seems to work." Passing a quick test is not the same as being correct, complete, or maintainable. The review step is not optional — it's where your judgment replaces the LLM's pattern-matching.
:::

## ⚠️ The Real Risks (In Brief)

These risks are real and worth knowing, but they are symptoms of skipping project discipline — not the root cause:

- **Hallucination risk** — the LLM confidently states something false. Without clear requirements, you may not know what "correct" looks like to catch it.
- **Cost overrun risk** — token usage scales with usage. Poorly designed workflows can generate enormous bills at scale.
- **Non-determinism risk** — the same input can produce different outputs. Behavior you validated today may differ tomorrow.
- **Silent failure risk** — errors look like plausible-sounding wrong answers, not crashes. They slip past automated checks.
- **Security risk** — prompt injection, missing input validation, and hardcoded secrets introduced without anyone looking carefully.

Managing these risks requires discipline at the project level — not just technical awareness.

## 🔪 Why Breaking Down Tasks Matters

Here is a prompt that will produce mediocre results: *"Act as a product manager, a UX designer, a developer, and a QA tester. Design the user flow, create the UI, implement the backend, write the tests, and make sure everything is secure."*

It produces mediocre results for the same reason that handing one person five jobs simultaneously produces mediocre work: context switching is expensive, roles have conflicting priorities, and no one can hold all the requirements in their head at once.

LLMs have the same limitation. Context windows have limits. Multitasking roles produces muddled output where the PM thinking, the UX thinking, and the developer thinking blur together. The quality of each role's thinking degrades when the LLM is simultaneously managing all the others.

Breaking down tasks works for two reasons:

1. **Humans naturally work in phases.** We design before we build. We plan before we execute. We review before we ship. Forcing LLMs to do everything at once is the opposite of how good work actually gets done.

2. **Bounded tasks produce verifiable output.** A prompt with one clear role, one clear phase, and one clear deliverable produces something you can evaluate. A prompt asking for everything at once produces something too entangled to review clearly.

:::callout-dyk
Think of a building contractor. A contractor who receives a complete blueprint, a budget, and a timeline on day one delivers better results than one asked to invent the design, manage the budget, and lay bricks at the same time. The project management work and the construction work require different thinking — separating them improves both.
:::

:::callout-tip
**Calibrate your session size.** Try separating work into many focused sessions rather than one long conversation. You'll develop a feel for what a model can handle in one go — sometimes a tight list like "change the value on line 15; update the heading on line 49" is a clean single session. But "build the landing page" or "set up the database schema" almost certainly needs its own focused session with a clear brief. Once you have a sense of your model's range, you'll move faster and with fewer surprises. When a session starts producing inconsistent or confused output, that's often a sign the context is overloaded — start fresh with a clear, bounded task.
:::

## 📝 Key Concepts

- **The velocity trap** — LLMs move fast enough to make a project look complete before it is; missing foundations surface later, more expensively.
- **The complacency problem** — clicking Accept without understanding accumulates debt; past success doesn't guarantee present correctness; complexity grows with every session.
- **Technical debt accumulates faster** in LLM-assisted projects; corrections cost more, not less, than in traditional development.
- **Break down tasks** — single role, single phase, single deliverable per prompt produces reviewable, verifiable output.
- **The real risks** (hallucination, cost, non-determinism, silent failures) are symptoms of skipped discipline, not standalone surprises.

:::quiz{id="13-01"}
