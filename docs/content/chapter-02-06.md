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
Training an LLM is a long, multi-stage process. To build intuition, we'll explore two key examples: **Pre-training** teaches the model language at massive scale — by predicting the next word, billions of times, across the entire internet. **RLHF** (Reinforcement Learning from Human Feedback) then teaches it to give *good* answers, using human preferences to train a reward model that scores responses.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-training"}

## 📝 Key Concepts

### Pre-training: Learning Language from the Internet
- **The Analogy:** A student who reads every book, website, and forum post ever written — not to study for a test, but to absorb how language, ideas, and facts connect.
- **How It Started:** In the earlier days of LLM research, companies collected massive amounts of text from the internet, then artificially erased a word and trained the model to predict what the missing word should be. Do this billions of times, and the model starts to absorb grammar, facts, and how ideas connect. (This approach — called *masked language modeling* — is how models like BERT were trained.)
- **How Modern LLMs Train:** Today's LLMs (like the GPT family) use a different method: *next-token prediction* — given all the words so far, predict the next one. No masking needed. The model is trained on enormous text corpora, learning to predict word after word, billions of times over.
- **The Result:** A model that is a powerful — but chaotic — text completer. It can write poetry, complete code, or ramble like a forum post. But it has no idea how to be a polite, helpful assistant.

### Fine-Tuning / SFT: Teaching It to Answer Questions
- **What Happens:** Trainers collect thousands of (question → ideal answer) pairs. The model is shown these examples and learns to respond with an answer — not just autocomplete text.
- **The Result:** A model that understands what "following instructions" looks like and can respond to questions purposefully.

### RLHF: Learning What "Good" Looks Like
- **How It Works:** Human raters compare two LLM responses to the same prompt and pick the better one. Those preferences are used to train a separate *reward model* — a system that learns to score responses the way humans would. Then the LLM is mathematically optimized to generate responses that score highly.
- **The "candy" analogy:** Often explained as "the model gets a reward like candy." That's intuitive but not quite literal — the LLM doesn't feel anything. What actually happens is the model's internal weights are adjusted to maximize the reward model's score. The metaphor is useful; just know the reality is mathematical optimization.
- **What It Teaches:** Helpfulness, safety, and honesty. LLMs don't naturally avoid harmful content — RLHF is what shapes that behavior.
- **The Result:** The polished, safety-aware assistant you use today.

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
