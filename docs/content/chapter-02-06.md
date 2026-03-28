---
title: "2.6 How LLMs Are Trained"
description: "How raw text becomes a helpful assistant: exploring pre-training, fine-tuning, and RLHF."
chapter: "Chapter 2"
pageId: "02-06"
---

## 🎯 Core Goals
- Understand two key moments in LLM training: learning language and learning quality.
- See why pre-training alone produces a chaotic autocomplete, not a helpful assistant.
- Understand how human feedback gets turned into a mathematical training signal in RLHF.

:::callout-tldr
Training an LLM is a long, multi-stage process. To build intuition, we'll explore two key examples: **Pre-training** teaches the model language at massive scale — by predicting the next word, billions of times, across the entire internet. **RLHF** (Reinforcement Learning from Human Feedback) then teaches it to give *good* answers, using human preferences to guide which way to turn the knobs.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-training"}

## 📝 Key Concepts

### Pre-training: Learning Language from the Internet
- **The Analogy:** A student who reads every book, website, and forum post ever written — not to study for a test, but to absorb how language, ideas, and facts connect.
- **Two Approaches:** Some models (like BERT) use *masked language modeling* — artificially erasing a word and training the model to predict what's missing. Do this billions of times and the model absorbs grammar, facts, and how ideas connect. The models you use today (like the GPT family) take a simpler approach: *next-token prediction* — given all the words so far, predict the next one. No masking needed. The model learns to predict word after word, billions of times over. Either way, the mechanism is the same as the previous page: the model's internal knobs (weights) are adjusted over and over until its predictions match the training data.
- **The Result:** A model that is a powerful — but chaotic — text completer. It can write poetry, complete code, or ramble like a forum post. But it has no idea how to be a polite, helpful assistant.

### Fine-Tuning / SFT: Teaching It to Answer Questions
- **What Happens:** Trainers collect thousands of (question → ideal answer) pairs. The model is shown these examples and learns to respond with an answer — not just autocomplete text.
- **The Result:** A model that understands what "following instructions" looks like and can respond to questions purposefully.

### RLHF: Learning What "Good" Looks Like
- **How It Works:** Human raters compare two LLM responses to the same prompt and pick the better one. Those preferences are used to train a separate *reward model* — a system that learns to score responses the way humans would. Then the LLM is mathematically optimized to generate responses that score highly. In knob terms: engineers figured out which direction to turn the weights so the model produces responses humans actually prefer.
- **The "candy" analogy:** Often explained as "the model gets a reward like candy." That's intuitive but not quite literal — the LLM doesn't feel anything. What actually happens is the model's internal knobs (weights) are adjusted to maximize the reward model's score. The metaphor is useful; just know the reality is mathematical optimization.
- **What It Teaches:** Helpfulness, safety, and honesty. LLMs don't naturally avoid harmful content — RLHF is what shapes that behavior.
- **The Result:** The polished, safety-aware assistant you use today.

<div class="p-5 rounded-xl text-sm border-2 border-accent/30 text-center my-8" style="background: color-mix(in srgb, var(--accent) 8%, transparent);">
    <div class="text-lg mb-2">💡</div>
    <div class="font-bold text-on-surface mb-2">Building Intuition, Not Expertise</div>
    <p class="text-on-surface-variant">The goal here is to build intuition for how LLMs work — not to master the engineering details. If any of this doesn't quite click, that's completely fine. You don't need to understand training pipelines to use LLMs effectively.</p>
    <p class="text-on-surface font-medium mt-2">The key takeaway: LLMs start as raw pattern-matchers and get shaped into helpful assistants through stages of feedback and refinement — all by turning those internal knobs.</p>
</div>

:::callout-dyk
The stages above are two snapshots from a much longer, more complex pipeline. Modern LLM training also includes: 
- **synthetic data generation** (LLMs generating their own training examples)
- **RLAIF / Constitutional AI** (using AI feedback instead of, or alongside, human raters)
- **tool-use training** (teaching LLMs to use search, code execution, and APIs) and 
- **instruction-tuning datasets** (curated collections of high-quality question–answer pairs). The intuitions here are simplified — but they're the right foundation.
:::

:::callout-dyk
Even when human raters in RLHF are occasionally inconsistent (sometimes preferring different responses to the same prompt), the process still improves the model overall. Imperfect feedback at scale is far better than no feedback at all.
:::

:::callout-error
LLMs aren't born polite or safe. Pre-training alone produces a raw pattern-matcher that would cheerfully complete a toxic rant just as easily as a business email. Only through Fine-Tuning and RLHF do they become the helpful, careful assistants we use today.
:::

:::quiz{id="02-06"}
What is the correct order of LLM training stages?
- [ ] Fine-tuning → Pre-training → RLHF
- [x] Pre-training → Fine-tuning → RLHF
- [ ] RLHF → Pre-training → Fine-tuning
:::

:::quiz{id="02-06b"}
Why does RLHF (Reinforcement Learning from Human Feedback) exist? What is its purpose?
- [ ] To teach the model new languages and facts from the internet
- [ ] To make the model generate text faster
- [x] To shape the model's behavior — making it helpful, safe, and honest instead of a raw autocomplete
- [ ] To compress the model so it takes up less disk space
:::
