---
title: "10.5 Choosing Your Model — A Thought Exercise"
description: "A framework for evaluating LLMs against your specific needs — because 'best model' depends entirely on your priorities."
chapter: "Chapter 10"
pageId: "10-05"
---

## 🎯 Core Goals
- Give readers a repeatable framework for model selection.
- Reinforce that model choice is multi-dimensional and should match actual priorities.

:::callout-tldr
There's no universally "best" LLM. The right model depends on your specific priorities — speed, cost, accuracy, privacy, context window. Map your needs first, then find the match.
:::

## The Trap: Picking by Brand

Many organizations default to the most famous model, or whatever their IT team approved first, or whatever the CEO saw in a demo.

This is rarely optimal.

Model selection should be driven by your actual requirements — which vary enormously by use case. A customer support bot has different needs than a legal document reviewer. A marketing email generator has different needs than a code assistant.

## The Six Dimensions

Rate each dimension for your specific use case (1 = low priority, 5 = critical):

:::visual{name="visual-model-dimensions"}

## Match to Model Strengths

After rating your priorities:

- **High accuracy + large context → Flagship closed-source** (the best/ultra tier from any major provider)
- **High speed + high volume → Fast tier** (lite, mini, flash-tier models)
- **Strict privacy → Self-hosted open-source** (models you download and run yourself)
- **Google Workspace integration → Google's ecosystem**
- **Cost-sensitive at scale → Chinese open-source alternatives** (DeepSeek, Qwen, and others)

If you're evaluating a model for agent or automation work, the qualities that make a good agent — which we explored earlier in the course — are also worth mapping against your model choice:

:::visual{name="visual-agent-traits"}

:::callout-dyk
The most important number isn't the benchmark score — it's your own accuracy on your own tasks. Run your actual use cases through competing models and measure the outputs. Internal testing on real examples beats any published leaderboard.
:::

:::callout-dyk
**Long-horizon tasks — where frontier models earn their price.** When a task involves many steps — reviewing a 50-page document, debugging across multiple files, maintaining consistency across a long conversation — cheaper models tend to "forget" earlier context or lose track of the goal. Frontier models handle this significantly better: they maintain coherence over longer tasks, follow complex multi-step instructions more reliably, and are more likely to push back when something doesn't make sense rather than cheerfully producing plausible garbage. If your use case involves sustained, multi-step work, the gap between cheap and frontier models is substantial.
:::

:::callout-error
**A good model doesn't just agree with you.** If you ask an LLM to evaluate your business plan and it says "Wow, this is brilliant — it'll change the world!" without a single critique or pushback... that's not a good sign. A genuinely capable model will spot weaknesses, ask pointed questions, and tell you when something won't work. **Tip:** Try pasting your plan into a *different* chat session — or even a different model entirely — and explicitly ask it to poke holes in your logic. A fresh model with no prior context is far more likely to give you honest feedback than one that's been cheerfully agreeing with you for the past 20 minutes.
:::

:::callout-tip
**Thinking about building an app or automating a workflow?** The model is only part of the decision. When we explored what makes good agents, we saw how they rely on tools, memory, integrations, and the ability to take actions in the world — all things that go beyond the model itself. The ecosystem around the model — what it connects to, how it's orchestrated, what tools it can use — often matters just as much. The automation and implementation sections go deeper on this.
:::

## Revisit Regularly

The LLM landscape shifts every few months. A model that didn't exist six months ago might now be your best option. Set a calendar reminder every quarter to recheck whether your current choice still makes sense.

:::quiz{id="10-05"}
