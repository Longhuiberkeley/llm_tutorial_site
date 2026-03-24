---
title: "10.3 Open Source vs. Closed Source — Control vs. Convenience"
description: "Hosted APIs are easy and reliable. Self-hosted open-source gives control and privacy. The trade-offs are real."
chapter: "Chapter 10"
pageId: "10-03"
---

## 🎯 Core Goals
- Compare hosted APIs (closed-source) with self-hosted open-source models.
- Show that "free" open-source often isn't free in practice.

:::callout-tldr
Hosted APIs are simple and reliable but your data leaves your servers. Open-source lets you self-host for full control and privacy — but comes with real hidden costs that make it less "free" than it appears.
:::

## Two Paths

**Closed-Source (Hosted API):**
You send requests to the provider's servers. They process them, return results, bill you per token. You never see the model weights.

**Open-Source (Self-Hosted):**
You download the model weights (often from Meta's Llama, Mistral, DeepSeek, etc.) and run them on your own hardware. You own the process entirely.

:::visual{name="visual-open-vs-closed"}

## The Case for Hosted APIs

**Pros:**
- Zero infrastructure setup — start calling the API within minutes
- Provider handles scaling, reliability, and model updates
- Access to the newest, most capable models
- No hardware investment

**Cons:**
- Your data leaves your servers and is processed externally
- You're dependent on provider uptime and pricing
- Terms of service control what you can and can't do
- Data may be used for training (varies by plan — check carefully)

**Best for:** Most businesses, especially when getting started. Start here.

## The Case for Self-Hosting

**Pros:**
- Data never leaves your servers — full privacy and compliance control
- No per-token billing — fixed infrastructure cost
- Customize and fine-tune the model as needed
- No vendor lock-in

**Cons:**
- GPUs are expensive (high-quality models need A100s or H100s)
- Setup, configuration, and maintenance require technical expertise
- You're responsible for uptime, security, and scaling
- Open-source models typically lag behind the best closed-source in capability

**Best for:** Organizations with strict data privacy requirements (healthcare, legal, government, finance) or very high volume where per-token costs exceed infrastructure costs.

## The Hidden Cost Reality

Self-hosting *sounds* free. The model weights often are free to download. But:

- A single A100 GPU server: $10,000–$30,000 to purchase, or $2–$5/hour on cloud
- Setup time for a non-trivial deployment: weeks of engineering work
- Ongoing maintenance: model updates, security patches, monitoring
- Hosting quality gap: the best open-source models are still a step behind the best closed-source

:::callout-error
"We'll just self-host to save money" is a common mistake. Unless you're processing millions of tokens daily or have strict data residency requirements, the engineering and infrastructure cost will almost certainly exceed what you'd pay for a hosted API. Do the math first.
:::

## 📝 Key Concepts

- **Hosted API:** Easy, reliable, data leaves your servers, pay-per-use
- **Self-hosted open-source:** Full control, data stays private, significant hidden costs
- **Start hosted:** Most businesses should default to API access
- **Self-host when:** Volume justifies infrastructure, or privacy/compliance demands it
- **"Free" is relative:** GPU hardware and engineering time cost real money

:::quiz{id="10-03"}
