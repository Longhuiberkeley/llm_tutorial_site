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

The ceiling of any digital transformation isn't technology — it's the combination of three things working together:

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant text-center">
<div class="text-3xl mb-3">💬</div>
<div class="font-bold text-base mb-2">Communication</div>
<p class="text-sm text-on-surface/80">Can you clearly articulate the process, the requirements, and the goals? Can your team communicate across departments about what needs to happen?</p>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant text-center">
<div class="text-3xl mb-3">📊</div>
<div class="font-bold text-base mb-2">Business Insight</div>
<p class="text-sm text-on-surface/80">Do you have the planning, strategy, and execution capability? Do you understand the process deeply enough to know what "good" looks like?</p>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant text-center">
<div class="text-3xl mb-3">🔧</div>
<div class="font-bold text-base mb-2">Technical Ability</div>
<p class="text-sm text-on-surface/80">Do you have the technical skills — or the right partners — to actually build, deploy, and maintain the solution?</p>
</div>
</div>

Technology is only one of the three pillars. Without clear communication or solid business understanding, even the most advanced tech will fail. This is why this chapter starts with understanding your process, not choosing your tools.

:::visual{name="visual-digital-transformation-pillars"}

## 💥 The Cautionary Tale

Imagine a company's returns department is overwhelmed. A manager decides to solve the problem with automation: an agentic AI will handle all refund requests automatically.

Within a week, the AI is processing hundreds of refunds per day. Sounds like a win — until someone checks the numbers. It turns out the original process had an unwritten rule: refund requests over $200 required a supervisor's sign-off. No one documented this. The automation didn't know. The AI approved tens of thousands of dollars in refunds that should have been reviewed.

The problem wasn't the LLM. The problem was that no one fully understood (or documented) the process before automating it. The automation didn't fix the broken process — it accelerated it, at scale, with no human catching the errors.

:::callout-error
A common mistake is treating LLMs like genies: "I wish this was automated." Genies — and LLMs — can only grant wishes you can clearly articulate. If you can't describe every step, decision, and exception in a process, an LLM cannot reliably handle it.
:::

## 📋 The Automation Readiness Checklist

Before automating any process, you should be able to answer all of these questions. If you can't, stop and do more discovery first.

1. **What triggers this process?** (A form submission? An email? A calendar event?)
2. **Who does this work?** (Which role, team, or department currently owns it?)
3. **What tools and systems do they use?** (CRM, spreadsheet, email, custom app?)
4. **What are ALL the steps?** (Can you draw a complete flowchart?)
5. **What are the exceptions?** (What happens when something unusual comes up?)
6. **What decisions or approvals are needed?** (Who signs off? When?)
7. **What does "good" look like? What does "bad" look like?** (How would you grade the output?)
8. **What are the handoffs?** (Where does one person's job end and another's begin?)

If you cannot answer every item on this list, you are not ready to automate. The gaps in your answers are the gaps where automation will fail.

:::callout-dyk
Studies of failed automation projects consistently point to the same root cause: requirements were incomplete. Not technical failures — misunderstood processes. The technology almost always works. The surprise almost always comes from a business rule nobody thought to mention.
:::

## 🗺️ The Path to Automation Readiness

The fastest path to a reliable automation is counterintuitively slow at the start:

1. **Verbalize** — Sit down with the people who do this work and talk through it out loud. Ask "and then what?" after every step.
2. **Flowchart** — Draw the entire process, including every branch and exception. If you can't draw it, you don't understand it.
3. **Checklist** — Turn the flowchart into a written checklist that a stranger could follow to perfect results.
4. **Then automate** — Once you have a checklist a stranger could execute, you have a process an LLM can execute.

This sequence works for both traditional rule-based automation and agentic AI. The more powerful the tool, the more important it is to have a precise target for it to hit.

:::visual{name="visual-automate-checklist"}

## 📝 Key Concepts

- **Understand first, automate second** — The quality of your automation will never exceed the quality of your process documentation.
- **Broken + automated = worse** — Automation amplifies what's already there; fix the process before you scale it.
- **Interview the doers** — The people doing the work know the unwritten rules. Ask about edge cases and exceptions, not just the happy path.
- **Verbalize → Flowchart → Checklist → Automate** — Follow this sequence every time.
- **Gaps in your checklist are future failures** — Every unanswered question is a place where the automation will eventually break.

:::quiz{id="12-01"}
