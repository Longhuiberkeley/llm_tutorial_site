---
title: "2.5 How LLMs Are Trained"
description: "The three stages that turn raw text into a helpful assistant: Pre-training, Fine-Tuning, and RLHF."
chapter: "Chapter 2"
pageId: "02-05"
---

## 🎯 Core Goals
- Understand the three-stage training process that creates an LLM.
- See why pre-training alone produces a chaotic autocomplete, not a helpful assistant.
- Grasp the "candy reward" intuition behind RLHF.

:::callout-tldr
Training an LLM happens in three stages. **Pre-training** teaches the model language by having it guess missing words across billions of texts. **Fine-Tuning (SFT)** teaches it to answer questions, not just complete sentences. **RLHF** teaches it to give *good* answers, by rewarding helpful, safe responses.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-training"}

## 📝 Key Concepts

### Stage 1: Pre-training (Learning Language from the Internet)
- **The Analogy:** A student who reads every book, website, and forum post ever written — not to study for a test, but to absorb how language, ideas, and facts connect.
- **How It Actually Works:** Given a sentence like *"I am learning ___ much"*, the model is trained to guess the missing word. Do this billions of times across the internet, and it absorbs grammar, facts, and reasoning patterns automatically.
- **The Result:** A model that is a powerful — but chaotic — text completer. It can write poetry, complete code, or ramble like a forum post. But it has no idea how to be a polite, helpful assistant.

### Stage 2: Fine-Tuning / SFT (Supervised Fine-Tuning)
- **What Happens:** Trainers collect thousands of (question → ideal answer) pairs. The model is shown these examples and learns to respond with an answer — not just autocomplete text.
- **The Result:** A model that understands what "following instructions" looks like and can respond to questions purposefully.

### Stage 3: RLHF (Reinforcement Learning from Human Feedback)
- **The Analogy (The Candy Reward):** Human raters see two different LLM responses to the same prompt and pick which one is better. That "vote" becomes a reward signal for the model — *"responses like that earn candy; responses like this don't."*
- **What It Teaches:** Helpfulness, safety, and honesty. LLMs don't naturally avoid harmful content — RLHF is what shapes that behavior.
- **The Result:** The polished, safety-aware assistant you use today.

:::callout-dyk
Even when human raters in RLHF are occasionally inconsistent (sometimes preferring different responses to the same prompt), the process still improves the model overall. Imperfect feedback at scale is far better than no feedback at all.
:::

:::callout-error
LLMs aren't born polite or safe. Pre-training alone produces a raw pattern-matcher that would cheerfully complete a toxic rant just as easily as a business email. Only through Fine-Tuning and RLHF do they become the helpful, careful assistants we use today.
:::

:::quiz{id="02-05"}
