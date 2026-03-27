---
title: "The Business Section in Review"
description: "The practical takeaways, pitfalls, and quick-reference from the business section."
chapter: "Chapter 13"
pageId: "13-06"
---

## 🎯 Core Goals
- Consolidate the practical takeaways from the business section.
- Walk away with things you can apply when bringing LLMs into an organization.

:::callout-tldr
Using LLMs in business is a people and process problem, not just a technology problem. The frameworks here help you pick the right tool, manage the change, and ship reliable systems. But the biggest risk isn't choosing the wrong model — it's automating a process you don't fully understand, or moving so fast you skip the foundations.
:::

---

## 🧠 8 Things to Remember

**Most businesses transform, not replace**
AI rarely replaces entire businesses. More often, it changes how existing work gets done — same domain, new execution layer. Focus on transformation, not replacement.

**Technology is only one pillar**
Successful digital transformation needs three things: technology, communication, and business insight. Projects fail when the non-tech pillars are weak.

**Speed hides missing foundations**
LLMs move so fast that a prototype can *look* finished while missing its entire foundation. The earlier you skip requirements and planning, the more expensive the fix becomes later.

**For every decision going in, have a way to check it on the way out**
The V-Model: Requirements → Design → Build → Verify. Each build phase needs a matching verification phase. If you can't describe "done" before you start, you can't know when you've arrived.

**Automate in order: verbalize → flowchart → checklist → automate**
Every gap in the checklist becomes a failure point at scale. If you can't write down the process, you can't automate it reliably.

**Change happens one person at a time**
ADKAR: Awareness → Desire → Knowledge → Ability → Reinforcement. Skipping stages — especially Desire and Reinforcement — is why most AI initiatives fail to gain traction.

**Structure beats speed for LLM projects**
LLM-assisted work ranges from "vibe coding" (accept everything) to structured development (review everything). Most real work falls in the middle. The question is: how much structure and review do you bring?

**No single review catches everything**
Best practice: automated checks (mechanical issues) → LLM review (pattern issues with fresh eyes) → human review (judgment and correctness). Layer them.

---

## 🚨 8 Red Flags

**Automating a process you don't fully understand** — You'll get a broken process running faster, at scale. Hidden rules that live only in employees' heads are the biggest risk.

**Feature drift** — LLMs generate plausible extensions that look useful. Without requirements, you accumulate well-executed work that serves no stated need. Ask: "Which requirement does this serve?"

**Launching with full autonomy on day one** — Demos use curated examples; production has edge cases and adversarial users. Start with human-in-the-loop; earn autonomy through performance data.

**The hammer-and-nail trap** — After learning about AI, every problem looks like it needs AI. Start with the problem, not the tool. Sometimes the answer is a process change, better training, or a spreadsheet.

**Customer-facing systems without adversarial design** — Bad actors will test your chatbot. Real cases: a dealership bot that agreed to any price, an airline bot that invented policy and was held legally liable.

**Treating LLM output as finished work** — Clicking Accept without understanding accumulates technical debt fast. The same input can produce different outputs, and silent failures look like plausible wrong answers.

**Measuring success by token usage** — Tracking API call volume incentivizes generating low-quality output to hit a number. Measure outcomes, not volume.

**Skipping the pilot** — Going straight from demo to full rollout without a controlled pilot. Pilots catch the edge cases, integration issues, and user adoption problems that demos can't. Start small, measure, then scale.

---

## 💡 Pro Tips

:::callout-tldr
**Use the LLM to draft your organizational playbook.** Going beyond individual prompts, you can ask the LLM to help create team-level artifacts. Example: *"I'm rolling out LLMs across a 50-person team. Create a change management plan, a set of use-case evaluation criteria, and a list of guardrails for responsible use."*
:::

The LLM can help with the meta-work: evaluation frameworks, rollout plans, risk assessments, and team guidelines — not just the tasks themselves. Feed it the frameworks from this section and ask it to adapt them to your organization.

:::callout-dyk
**Use the LLM as a sounding board for whether to automate.** Describe a workflow you're considering automating and ask the LLM to challenge you on it — push back, ask hard questions, and poke holes in your plan. You now have the vocabulary to have that conversation properly: ask about hidden rules, volume vs. variance, where RPA ends and agentic AI begins, and what happens with edge cases.

If the LLM just says "sounds great, go for it" — push back. A good evaluation should surface the hard parts, not just cheerlead. Ask: *"What would make this fail? What hidden rules might exist? Is this actually worth automating, or would a process improvement do more with less risk?"*
:::

---

## 📐 Quick Reference

**Volume vs. Variance** — High volume + low variance → RPA. High volume + high variance → agentic AI. Low volume → probably not worth automating. ([Learn more](chapter-12-07.html))

**ROI Estimation** — Benefits: time saved × volume + error reduction. Hidden costs: maintenance (~20%/year), monitoring, human review. If break-even is more than 2-3 years, think hard. "Don't automate" is a valid answer. ([Learn more](chapter-12-09.html))

**Creative vs. Strict** — Creative tasks (drafting, brainstorming) tolerate flexible LLM output. Strict tasks (compliance, calculations) need hardcoded rules. Danger zone: tasks that seem flexible but have hidden rules. ([Learn more](chapter-12-02.html))

**Model Selection** — Rate your use case on: accuracy, speed, cost, privacy, context window, ecosystem fit. Then run 10-20 real examples through competing models. Your own testing beats any benchmark. ([Learn more](chapter-10-05.html))

**Phase Gates** — Define (describe "done"?) → Design (could someone else build this?) → Build (review each chunk) → Verify (meets Phase 1 criteria?). Don't start building before defining. ([Learn more](chapter-13-02.html))

---

## 🗺️ Where to Go Deeper

| Topic | Explore |
|-------|---------|
| The LLM landscape & choosing a model | [The LLM Landscape](chapter-10-01.html) |
| AI literacy & overcoming resistance | [Building AI Literacy](chapter-11-02.html) |
| Change management playbook | [Digital Transformation & Change Management](chapter-11-03.html) |
| Process documentation & automation readiness | [You Can't Automate What You Can't Explain](chapter-12-01.html) |
| RPA vs. agentic AI decision | [RPA vs. Agentic AI](chapter-12-03.html) |
| Human-in-the-loop patterns | [Human-in-the-Loop](chapter-12-08.html) |
| ROI & cost-benefit analysis | [ROI Estimation Framework](chapter-12-09.html) |
| The velocity trap & project discipline | [Why LLM Projects Are Different](chapter-13-01.html) |
| Requirements traceability | [Building the Right Thing](chapter-13-04.html) |
| Review practices & failure patterns | [Review, Prompting with Purpose & Common Pitfalls](chapter-13-05.html) |
