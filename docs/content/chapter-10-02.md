---
title: "10.2 Model Tiers & Costs — Bigger Isn't Always Better"
description: "Every provider has flagship, mid-tier, and fast models. Knowing which to use saves money and time."
chapter: "Chapter 10"
pageId: "10-02"
---

## 🎯 Core Goals
- Explain the three-tier model structure that almost every provider uses.
- Show that the biggest model is often overkill — and mid-tier is frequently the right call.

:::callout-tldr
You don't always need the most powerful (or most expensive) model. Flagship models shine for complex tasks. Fast models handle simple work cheaply. Mid-tier models are the sweet spot for most business use cases.
:::

## The Three Tiers

Almost every major provider offers roughly three tiers. The names change, but the pattern is consistent:

:::visual{name="visual-model-tiers"}

**FLAGSHIP** — The best quality model
- Strongest reasoning, longest context, best at complex tasks
- Highest cost per token, slowest response time
- Use for: Legal document analysis, complex code generation, nuanced writing, anything where quality is critical and speed/cost is secondary

**MID-TIER** — The smart compromise
- Excellent quality for most tasks at significantly lower cost
- Good speed, reasonable context window
- Use for: The vast majority of business tasks — summarization, drafting, Q&A, customer support drafts
- *This is where most teams should start*

**FAST (Nano/Mini/Haiku)** — Speed and scale
- Cheapest, fastest, smaller context window
- Lower reasoning quality — makes more mistakes on complex tasks
- Use for: Simple classification, routing decisions, very high-volume simple tasks where cost matters more than quality

## Understanding Token Pricing

Every provider charges per million tokens. A token is roughly ¾ of a word — so 1 million tokens ≈ 750,000 words ≈ several large novels.

**What this means in practice:**
- A typical customer support response exchange: ~500-2,000 tokens
- Summarizing a 10-page report: ~3,000-5,000 tokens
- Processing 1,000 customer emails per day: perhaps 2-4 million tokens/month

At mid-tier pricing, 4 million tokens might cost $4–$20/month — very affordable. At flagship pricing, the same usage could cost 5-20x more.

:::callout-dyk
A common mistake: defaulting to the flagship model "just to be safe." For most tasks, mid-tier models perform at 90%+ the quality of flagship at 10-20% of the cost. Start mid-tier, upgrade only if quality is genuinely insufficient.
:::

## The Decision Logic

When choosing a tier, ask:

1. **Is this task complex?** (Legal reasoning, intricate code, multi-step analysis) → Flagship
2. **Is this task standard?** (Summarize, draft, classify, explain) → Mid-tier
3. **Is this task simple AND high-volume?** (Route support tickets, tag categories) → Fast

If you're unsure, start mid-tier. Monitor quality. Adjust.

## 📝 Key Concepts

- **Three tiers:** Flagship (best, expensive), Mid-tier (sweet spot), Fast (cheap, simple tasks)
- **Token pricing:** Charged per million tokens — roughly ¾ of a word each
- **Start mid-tier:** Most tasks don't need flagship quality; upgrade only if needed
- **Cost scales with usage:** Monitor token consumption early — it can grow fast in production
- **Speed matters:** Fast models aren't just cheaper — they respond faster, which matters for user-facing apps

:::quiz{id="10-02"}
