---
title: "12.6 ROI Calculation — Is It Worth It?"
description: "A practical framework for estimating whether an automation investment actually makes financial sense."
chapter: "Chapter 12"
pageId: "12-06"
---

## 🎯 Core Goals
- Introduce a simple cost-benefit framework for evaluating automation ROI.
- Surface hidden costs that most people overlook (maintenance, monitoring, error handling).
- Establish that "don't automate" is sometimes the correct answer.

:::callout-tldr
Before building any automation, do the math. Development costs money. Maintenance costs money. Errors cost money. If a task takes 2 minutes, three times a week, it may take a decade to break even on a $5,000 automation project.
:::

## 💰 The Simple ROI Framework

Every automation decision is fundamentally a financial one. You're trading a one-time (and ongoing) investment for recurring savings. The question is: does the savings ever exceed the investment?

**Step 1: Estimate your BENEFITS**
- Time saved per instance × number of instances per year
- Convert time to money (employee hourly rate × hours saved)
- Error reduction value (how often does the manual process produce errors? What does fixing them cost?)
- Speed improvement value (does faster completion have revenue impact?)

**Step 2: Estimate your COSTS**
- Development cost (internal time or external contractor)
- API and compute costs (LLM calls, infrastructure)
- Ongoing monitoring and maintenance (someone has to watch it)
- Human review time (if using human-in-the-loop — this isn't free)
- Error handling and correction (when it breaks, how expensive is the fix?)

**Step 3: Calculate your break-even point**
Divide total first-year costs by annual benefits. That's how many years until the investment pays off. If the answer is more than 2-3 years for a simple automation, think carefully before proceeding.

:::callout-dyk
A useful rule of thumb: if you can't estimate your ROI, you don't understand the process well enough to automate it yet. The exercise of calculating ROI forces you to articulate exactly what the process does, how often, and at what cost — which is also exactly what you need to automate it well.
:::

## 🔍 The Hidden Costs People Miss

Most people correctly identify development cost and time savings. The budget surprises come from costs they didn't anticipate:

**Maintenance:** Software changes. APIs change. The process it automates changes. Someone has to update the automation when any of these happen. Budget at least 20% of development cost per year for maintenance.

**Monitoring:** You can't "set and forget" an automation that runs in production. Someone needs to check that it's working correctly, especially after any changes upstream. This is real ongoing labor.

**Human review:** If your automation requires human review before actions are taken, that review time isn't free. If it saves 10 minutes of work but requires 8 minutes of review, the real savings is 2 minutes — not 10.

**Error correction:** When the automation produces a wrong output (and it will, eventually), someone has to catch it and fix it. In a high-volume process, even a 1% error rate can mean significant cleanup work.

**"Verification time" vs. "time saved":** A subtle cost. If the automation produces outputs that still need to be checked before use, the human time isn't eliminated — it's transformed from doing to checking. Sometimes checking takes nearly as long as doing.

:::callout-error
A common mistake: calculating only the "time saved" and ignoring everything else. An automation that saves 2 hours/week of labor but requires 30 minutes/week of monitoring, plus occasional error cleanup, plus quarterly maintenance updates might net only 1 hour/week of real savings — changing the break-even timeline significantly.
:::

## 🧮 A Real Example

A marketing team manually sends weekly newsletter segmentation reports to three stakeholders. Each report takes 20 minutes to pull and format. That's 60 minutes per week, or about 52 hours per year.

At $50/hour fully-loaded cost, that's **$2,600/year** in labor.

A developer estimates the automation at **$3,000** to build, plus **$500/year** in maintenance and monitoring.

Break-even: Year 2 (barely). And that assumes zero errors, zero review time, and no process changes that require rework.

Is it worth it? Maybe — especially if the team finds the task tedious and error-prone. But it's close enough that the answer isn't obvious, and rushing in without doing this math would be a mistake.

:::visual{name="visual-roi-calc"}

## 📝 Key Concepts

- **Always calculate ROI before building** — guessing is how budgets blow up.
- **Benefits:** time saved × volume, error reduction, speed improvement.
- **Hidden costs:** maintenance, monitoring, human review, error correction.
- **"Don't automate" is a valid answer** — sometimes the math simply doesn't work.
- **Verification time is a real cost** — checking AI output isn't as fast as people assume.

:::quiz{id="12-06"}
