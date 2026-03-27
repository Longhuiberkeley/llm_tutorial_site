---
title: "12.4 Choosing Your Automation Approach"
description: "Hybrid automation patterns, the implementation spectrum, and how to pick the right tool for the job."
chapter: "Chapter 12"
pageId: "12-04"
---

## 🎯 Core Goals
- Introduce hybrid automation patterns that combine RPA and agentic AI.
- Establish the principle: pick the right tool for the task — not every problem needs an LLM.
- Present the spectrum from simple chat widgets to full agentic platforms.
- Address security and adversarial concerns for automated systems.

:::callout-tldr
Not every problem needs an LLM. The best automation strategy picks the right tool for the job — sometimes that's RPA, sometimes agentic AI, sometimes a purpose-built app, and sometimes just a well-organized human. The smartest teams mix approaches.
:::

## 🔀 The Hybrid Approach in Practice

Most real-world automation isn't purely RPA or purely agentic — it combines both. There are two common patterns for this.

### Pattern 1: LLM as a Pipeline Step

In this pattern, the LLM handles **one judgment step** inside an existing automated workflow. Everything else stays the same — the LLM just plugs into the part that requires understanding or classification.

**Example — Customer Feedback Pipeline:**

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">📥</span>
<div>
<div class="font-bold text-sm mb-1">Step 1: Feedback arrives</div>
<p class="text-sm text-on-surface/80">Customer fills out a form or sends an email. This is collected automatically (RPA or simple integration).</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-accent/40 ring-1 ring-accent/20">
<div class="flex items-start gap-3">
<span class="text-xl">🧠</span>
<div>
<div class="font-bold text-sm mb-1 text-primary">Step 2: LLM classifies the feedback</div>
<p class="text-sm text-on-surface/80">The LLM reads the message and classifies it: positive, negative, or urgent. This is the only step the LLM handles.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">⚡</span>
<div>
<div class="font-bold text-sm mb-1">Step 3: Automated follow-up</div>
<p class="text-sm text-on-surface/80">If negative → RPA sends a follow-up email with a discount coupon. If urgent → routes to a human agent. If positive → logs it and moves on.</p>
</div>
</div>
</div>
</div>

The LLM doesn't control the entire flow — it just handles the fuzzy classification step that RPA can't do. The rest of the pipeline stays simple and rule-based.

### Pattern 2: LLM with Tool Access

In this pattern, the LLM has **direct access to existing systems** — it can read databases, call APIs, send emails, or update records. Instead of just classifying, it can decide what to do and take action.

This is also how an LLM can **monitor RPA processes**: the RPA runs as usual, but when it encounters something unexpected, it hands off to an LLM that can reason about the exception and decide how to handle it.

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="flex items-start gap-3">
<span class="text-2xl">🔧</span>
<div>
<div class="font-bold text-base mb-1">Pattern 2 in action</div>
<p class="text-sm text-on-surface/80 mb-2">An LLM-powered agent monitors an order processing pipeline. When an order comes in with a shipping address the RPA system can't parse (unusual format, international address, PO box), the LLM reads it, looks up the customer's history in the CRM, corrects the address, and pushes the order through — or flags it for human review if confidence is low.</p>
</div>
</div>
</div>

:::callout-dyk
Many companies that rushed to build fully agentic workflows are now moving toward hybrid models. Full autonomy sounds appealing until one unexpected input causes a cascade of wrong decisions. The most resilient systems combine rigid reliability for known cases with flexible intelligence for unknown ones.
:::

## 🎯 Find the Best Tool for the Task

Before reaching for an LLM, ask: **is an LLM actually the best tool here?**

Consider McDonald's self-ordering kiosks. They display big, appealing photos of food. They suggest add-ons ("Would you like fries with that?"). They guide you through the menu in a way that naturally encourages you to order more. They are excellent at what they do.

They don't use an LLM. They don't need one.

The kiosk is a purpose-built solution optimized for a specific task. It's cheaper, faster, more reliable, and more predictable than any LLM-powered system would be for the same job. An LLM would add cost and complexity without improving the outcome.

**The lesson:** Always ask whether a simpler, purpose-built solution would work better and cost less. LLMs are powerful — but power isn't always what you need.

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">✅</span>
<div>
<div class="font-bold text-sm mb-1">Good fit for LLMs</div>
<p class="text-sm text-on-surface/80">Reading variable-format customer emails, interpreting ambiguous requests, drafting personalized responses, summarizing documents</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">⛔</span>
<div>
<div class="font-bold text-sm mb-1">Probably overkill for LLMs</div>
<p class="text-sm text-on-surface/80">Displaying a menu, routing a known set of options, calculating totals, sending templated notifications, simple data entry</p>
</div>
</div>
</div>
</div>

:::callout-tip
Before jumping to any technical solution, identify what problem you're actually solving. Is it really a technology problem? It might be a management issue, a communication gap, or a training problem. McDonald's kiosk worked because they deeply understood their bottleneck. Be creative about solutions: gamification, better incentive structures, clearer SOPs, or improved training sometimes outperform any AI implementation — and cost far less.
:::

:::callout-tip
The end-user experience matters enormously. Most people already dislike calling customer support. Many now find LLM-powered support even more frustrating — especially when the LLM confidently attempts to help but can't actually solve the problem. If you're building something customer-facing, invest in the experience. A simple, well-designed system that knows its limits beats an overconfident one that wastes people's time. Bad AI UX can damage your brand more than no AI at all.
:::

## 📏 The Implementation Spectrum

Not every AI project needs to be a full agentic system. There's a wide spectrum of implementation complexity, and most companies should start on the simpler end.

:::visual{name="visual-implementation-spectrum"}

Starting simple has real advantages: lower cost, lower risk, faster deployment, and clearer ROI. You can always move further along the spectrum as you learn what works. Starting too ambitious is one of the most common reasons AI projects fail.

## 🔒 Think About Who Might Use — and Misuse — Your System

Before building any automated system, ask one critical question: **is this internal or external?**

**Internal tools** (used by your own employees) face different risks. Your employees are trained, accountable, and generally acting in good faith. The main risks are mistakes and misunderstanding, not malice.

**External-facing systems** (used by customers or the public) face a fundamentally different threat model. If your automated system talks to customers, bad actors **will** test it.

:::callout-error
If your system is external-facing, assume people will try to trick your LLM into giving unauthorized discounts, leaking internal information, bypassing rules, or behaving in ways you didn't intend. This isn't hypothetical — it happens to every public-facing AI system. Design with adversarial use in mind from day one, not as an afterthought.
:::

**Real cases — external misuse:**

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🏪</span>
<div>
<div class="font-bold text-sm mb-1">The Car Dealership Chat</div>
<p class="text-sm text-on-surface/80">A car dealership deployed an LLM-powered web chat to help customers. Within days, users discovered they could get it to agree to arbitrarily low prices, speak favorably about competitor vehicles, and even help them with unrelated tasks like homework. The dealership had to take it down. A chat widget without guardrails is a liability, not a sales tool.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">✈️</span>
<div>
<div class="font-bold text-sm mb-1">The Airline Chatbot Lawsuit</div>
<p class="text-sm text-on-surface/80">An airline's LLM chatbot told a grieving customer he could apply for a bereavement fare discount retroactively after his trip — contrary to actual company policy. When the airline was sued, they argued the chatbot was a "separate legal entity" responsible for its own statements. The court disagreed. The airline was held liable and had to pay. <strong>The lesson: your LLM's statements are your statements.</strong></p>
</div>
</div>
</div>
</div>

**Internal misuse — the metric trap:**

Not all adversarial behavior comes from bad actors outside your organization. Internal incentive structures can create their own problems. Some companies track **token usage** (how many LLM API calls employees make) as a KPI for AI adoption. This sounds reasonable — but it's a poor metric. It measures activity, not value or quality. An employee can generate thousands of tokens of low-quality, unhelpful AI outputs to hit a number. Metrics that measure AI usage quantity without measuring output quality create a different kind of misuse — one that's harder to spot and just as costly.

Even for internal tools, consider: who has access? Can the automation be gamed to meet a KPI? What happens if credentials are shared? The answer to "internal or external?" shapes every design decision that follows.

## 📝 Key Concepts

- **Hybrid Pattern 1 (LLM as pipeline step)** — the LLM handles one fuzzy judgment step; the rest stays rule-based.
- **Hybrid Pattern 2 (LLM with tool access)** — the LLM can reason, decide, and act across systems.
- **Not every problem needs an LLM** — purpose-built solutions are often cheaper, faster, and more reliable.
- **Start simple on the spectrum** — move toward more complexity only as you learn what works.
- **Internal vs. external** changes everything — external-facing systems must be designed for adversarial use.

:::quiz{id="12-04"}
