---
title: "12.2 Right vs. Wrong in Business Logic"
description: "Some tasks have strict correct answers; others don't. Knowing which type you're automating is critical."
chapter: "Chapter 12"
pageId: "12-02"
---

## 🎯 Core Goals
- Distinguish between tasks with no wrong answer (creative, open-ended) and tasks with strict correct answers (rule-bound).
- Highlight the danger of "hidden rules" — business logic that experienced employees know but can't articulate.
- Help learners identify which type of task they're automating before they start building.

:::callout-tldr
Not all business tasks have a "correct" answer — but many do. Before automating anything, you must know whether your task is creative (flexible) or rule-bound (exact). The hardest part is finding the rules that employees follow without realizing it.
:::

## 🎨 The Spectrum: Creative to Strict

Business tasks sit on a spectrum. Think of it as a dial from "anything goes" on one end to "one exact right answer" on the other.

**No wrong answer (creative):**
- Brainstorming marketing tagline ideas
- Summarizing a meeting in plain English
- Writing a friendly follow-up email
- Generating three options for a product name

For these tasks, an LLM can produce great output with minimal constraints. There's no single correct answer, so slight variation between runs is fine — even desirable.

**Strict rules (exact):**
- Formatting invoice numbers as `INV-2024-XXXX`
- Calculating tax following specific bracket rules
- Generating a report where the client's name must appear in ALL CAPS
- Routing orders from Texas through Form TX-7

For these tasks, there IS a right answer. Getting it 95% right is not good enough — it means 5% of outputs are wrong. In a high-volume process, that adds up fast.

:::callout-dyk
Most automation failures happen in the middle of this spectrum: tasks that SEEM flexible but actually have hidden rules. The automation performs well in testing (easy cases), then silently breaks in production (edge cases with strict rules no one mentioned).
:::

## 🕵️ The Hidden Rules Problem

Here's the uncomfortable truth: many business rules exist only in people's heads. Experienced employees "just know" things that were never written down.

For example:
- Invoice numbers above 5,000 go to Department B, not Department A
- Orders from certain clients always need an extra review, because of a past dispute
- The client's name should be in ALL CAPS on this one specific report (it's always been that way)
- Certain types of requests always need the senior manager's eye, even if policy doesn't require it

These unconscious rules are the hardest to automate and the most dangerous to miss. They often exist because of history, relationships, or one-off agreements that were never formalized.

:::callout-error
A common mistake: assuming a process has no hidden rules because existing employees make it look easy. They make it look easy because they've internalized the rules. Interview them deeply. Ask: "What about edge cases?" and "What happens when X goes wrong?" Keep asking until you find the hidden rules — because they're always there.
:::

## 🔍 How to Surface the Hidden Rules

Before building any automation, run a structured interview with the people who currently do the work:

1. **Walk me through the normal case** — Get the happy path first.
2. **What are the exceptions?** — There are always exceptions. Push for specifics.
3. **Tell me about a time this went wrong** — Stories reveal the rules that prevent failures.
4. **What would a new employee get wrong?** — This surfaces the unwritten rules directly.
5. **Is there anything that "just goes without saying"?** — Those are exactly the rules you need to document.

Once you have the hidden rules documented, you can decide: are these creative guidelines (LLM can handle the nuance) or strict rules (need to be hardcoded or explicitly enforced)?

:::callout-tip
This is a perfect moment to pause and reflect on your own workflows. Can you improve the process yourself before automating it? Get feedback from colleagues who do the same work differently? Or try describing your process to an LLM and ask it to find gaps, edge cases, or inefficiencies you might be missing. Sometimes the biggest gains come from fixing the process, not automating it.
:::

:::visual{name="visual-business-logic"}

## 📝 Key Concepts

- **Creative tasks** allow variation and work well with flexible LLM outputs.
- **Rule-bound tasks** require exact outputs — variation is a bug, not a feature.
- **Hidden rules** are business logic that employees know but can't articulate — they are the biggest automation risk.
- **Interview the experts deeply** — ask about failures, edge cases, and what goes without saying.
- **Know your task type before building** — the wrong automation approach for the task type will produce confident-looking wrong answers.

:::quiz{id="12-02"}
