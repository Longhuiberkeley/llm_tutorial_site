---
title: "10.2 Model Tiers & Costs — Bigger Isn't Always Better"
description: "Every provider has flagship, mid-tier, and fast models. Knowing which to use saves money and time."
chapter: "Chapter 10"
pageId: "10-02"
---

:::callout-tldr
You don't always need the most powerful model. Almost every provider offers three tiers — and picking the right one is more important than picking the right brand.
:::

## The Three Tiers

Almost every major provider offers roughly three tiers. The names change, but the pattern is universal. Click to explore each:

:::visual{name="visual-model-tiers"}

## Understanding Token Pricing

Every provider charges per **million tokens**. A token is roughly ¾ of a word — so 1 million tokens ≈ 750,000 words.

Pricing has two separate rates:
- **Input tokens** — what you send to the model (your prompt, documents, context)
- **Output tokens** — what the model generates back (usually 3–4× more expensive than input)

Two additional details that matter once you're building:

**Reasoning tokens** — some models spend tokens internally working through a problem before producing an answer. These count as output tokens and add to your bill.

**Cache hits** — if you're sending the same large context repeatedly (e.g. a system prompt or document), providers cache it. A cache hit typically costs only **~10% of standard input prices** — a big saving at scale.

:::callout-dyk
Subscription plans are **heavily subsidized** by providers to drive adoption. The same usage billed through the API can cost significantly more at low to moderate volumes. Great if you're an individual user — but know the difference when you're building a product.
:::

## How to Read LLM Benchmarks

Benchmarks are standardized tests that score models on specific tasks. You'll see them quoted everywhere in reviews and announcements. A few you'll encounter:

- **MMLU** — tests general knowledge across 57 subjects (law, medicine, history, math...)
- **HumanEval / MBPP** — measures coding ability: can the model write correct programs?
- **GPQA** — graduate-level science questions designed to be hard even with Google
- **MATH** — competition-level math problem solving
- **Chatbot Arena (LMSYS)** — real humans compare two model responses and vote; the ELO score reflects actual human preference at scale

:::callout-error
**Benchmarks are a starting point, not a verdict.** Models are increasingly trained on benchmark-adjacent data, inflating scores. More importantly, a model that tops the MMLU leaderboard may still fumble your specific task. The best evaluation is always your own: take 10–20 real examples from your use case and run them through competing models. What you observe beats any published number.
:::

:::quiz{id="10-02"}
What's the most reliable way to evaluate which LLM is best for your task?
- [ ] Check the published benchmark leaderboards and pick the top scorer
- [ ] Always choose the most expensive tier available
- [x] Test 10-20 of your own real examples across competing models and compare the outputs
:::
