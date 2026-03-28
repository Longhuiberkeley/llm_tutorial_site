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
Right now, the best-performing models in the world are all closed-source — and providers are actively subsidizing their cost to win users. Open-source gives you full control and privacy, but comes with real trade-offs.
:::

## Two Paths

**Closed-Source (Hosted API):**
You send requests to the provider's servers. They process them, return results, bill you per token. You never see the model weights.

**Open-Source (Self-Hosted):**
You download the model weights (from Meta's Llama, Mistral, DeepSeek, etc.) and run them on your own hardware. You own the process entirely.

## The Case for Hosted APIs

As of 2026, the frontier models — are all closed-source. These companies are also actively subsidizing access (through cheap subscriptions and competitive API pricing) to win market share. You're getting a lot for your money right now.

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="rounded-xl p-4 border-2" style="background: rgba(95, 168, 96, 0.08); border-color: rgba(95, 168, 96, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: #2e7d32;">✅ Pros</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• Zero infrastructure setup — start calling the API within minutes</li>
      <li>• Provider handles scaling, reliability, and model updates</li>
      <li>• Access to the newest, most capable models</li>
      <li>• No hardware investment</li>
    </ul>
  </div>
  <div class="rounded-xl p-4 border-2" style="background: rgba(214, 92, 92, 0.08); border-color: rgba(214, 92, 92, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: var(--error);">⚠️ Cons</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• Your data leaves your servers and is processed externally</li>
      <li>• Dependent on provider uptime and pricing</li>
      <li>• Terms of service control what you can and can't do</li>
      <li>• Data may be used for training (varies by plan — check carefully)</li>
    </ul>
  </div>
</div>

**Best for:** Most businesses, especially when getting started. Start here.

## The Case for Self-Hosting

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="rounded-xl p-4 border-2" style="background: rgba(95, 168, 96, 0.08); border-color: rgba(95, 168, 96, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: #2e7d32;">✅ Pros</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• Data never leaves your servers — full privacy and compliance control</li>
      <li>• No per-token billing — fixed infrastructure cost</li>
      <li>• Customize and fine-tune the model as needed</li>
      <li>• No vendor lock-in</li>
    </ul>
  </div>
  <div class="rounded-xl p-4 border-2" style="background: rgba(214, 92, 92, 0.08); border-color: rgba(214, 92, 92, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: var(--error);">⚠️ Cons</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• GPUs are expensive (high-quality models need A100s or H100s)</li>
      <li>• Setup, configuration, and maintenance require technical expertise</li>
      <li>• You're responsible for uptime, security, and scaling</li>
      <li>• Open-source models typically lag behind the best closed-source</li>
    </ul>
  </div>
</div>

**Best for:** Organizations with strict data privacy requirements (healthcare, legal, government, finance) or very high volume where per-token costs exceed infrastructure costs.

## Quantized Models — Self-Hosting Lite

If you want to experiment with self-hosting without enterprise hardware, **quantized models** are the entry point.

Quantization compresses a model by reducing the numerical precision of its internal weights — think of it like saving a photo as a JPEG instead of a RAW file. The result:
- Much smaller file size (a 70B model can go from 140 GB down to ~40 GB)
- Runs on consumer hardware — even a decent laptop with enough RAM
- Noticeably less capable on complex tasks, but often fine for simple ones

Tools like **Ollama** let you download and run quantized versions of Llama, Mistral, Gemma, and others with a single command. No cloud account, no API key — just your machine.

Good for: local experimentation, privacy-first prototyping, and getting a feel for open-source models without infrastructure cost.

## The Hidden Cost Reality

Self-hosting *sounds* free. The model weights often are free to download. But:

- A single A100 GPU server: $10,000–$30,000 to purchase, or $2–$5/hour on cloud
- Setup time for a non-trivial deployment: weeks of engineering work
- Ongoing maintenance: model updates, security patches, monitoring
- Hosting quality gap: the best open-source models are still a step behind the best closed-source

:::callout-error
"We'll just self-host to save money" is a common mistake. Unless you're processing millions of tokens daily or have strict data residency requirements, the engineering and infrastructure cost will almost certainly exceed what you'd pay for a hosted API. Do the math first.
:::
