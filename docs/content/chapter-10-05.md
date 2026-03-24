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

:::visual{name="visual-model-chooser"}

## The Six Dimensions

Rate each dimension for your specific use case (1 = low priority, 5 = critical):

**Speed** — How fast does the response need to be?
- User-facing chat: high priority (>3s feels slow)
- Batch overnight processing: low priority

**Accuracy / Reasoning Quality** — How much does getting it right matter?
- Medical or legal summaries: critical (5)
- Marketing brainstorming: lower (2-3)

**Cost** — What's your token budget at expected scale?
- High-volume simple tasks: cost matters a lot
- Low-volume complex tasks: pay for quality

**Context Window** — How much text do you need to process at once?
- Summarizing a 50-page contract: large window needed
- Short Q&A: doesn't matter

**Privacy / Data Residency** — Can data leave your servers?
- Healthcare or legal: strict requirements
- General marketing: flexible

**Domain Fit** — Does the model have particular strengths in your domain?
- Code generation: some models are notably better at code
- Multilingual: check language coverage for your markets

## Match to Model Strengths

After rating your priorities:

- **High accuracy + large context → Flagship closed-source** (Claude, GPT)
- **High speed + high volume → Fast tier** (Haiku, Mini, Flash)
- **Strict privacy → Self-hosted open-source** (Llama, Mistral)
- **Google Workspace integration → Gemini**
- **Cost-sensitive at scale → Competitive alternatives** (DeepSeek, Qwen)

:::callout-dyk
The most important number isn't the benchmark score — it's your own accuracy on your own tasks. Run your actual use cases through competing models and measure the outputs. Internal testing on real examples beats any published leaderboard.
:::

## Revisit Regularly

The LLM landscape shifts every few months. A model that didn't exist six months ago might now be your best option. Set a calendar reminder every quarter to recheck whether your current choice still makes sense.

## 📝 Key Concepts

- **Model selection is multi-dimensional** — no single metric wins
- **Six dimensions:** Speed, accuracy, cost, context window, privacy, domain fit
- **Rate your priorities first,** then find the model that matches
- **Run your own tests** — published benchmarks often don't reflect your specific use case
- **Revisit quarterly** — the landscape evolves faster than most technology decisions

:::quiz{id="10-05"}
