---
title: "2.5 How Neural Networks Learn"
description: "Adjust the weights yourself: see how tuning numbers inside a neural network changes its predictions."
chapter: "Chapter 2"
pageId: "02-05"
---

## 🎯 Core Goals
- Understand that "training" means adjusting numbers (weights) inside the network.
- Get hands-on intuition by adjusting weights yourself and seeing predictions change.
- Learn key vocabulary: weights, loss, backpropagation, gradient descent, epochs.
- Clarify what "Mixture of Experts" actually means.

:::callout-tldr
Training a neural network is like tuning thousands of tiny knobs. Each knob (called a "weight") controls how much one piece of information influences another. During training, the network adjusts these knobs over and over until its predictions match the right answers. The process that figures out *which direction* to turn each knob is called **backpropagation**.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-neural-weights"}

## 📝 Key Concepts

### Weights: The Knobs Inside the Network
- **The Analogy:** Imagine a mixing board in a recording studio. Each slider controls how loud one instrument is. In a neural network, each "slider" (weight) controls how much one piece of input influences the next layer.
- **Before Training:** All weights start random — like the starting position in the interactive above. The network's predictions are gibberish. It might complete "The cat sat on the ___" with "banana."
- **After Training:** The knobs have been fine-tuned so the network reliably predicts "mat" (or another sensible word). This isn't because it "knows" what a mat is — it's because the numbers have been adjusted to produce the right output, billions of times.

<div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
    <div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
        <div class="text-2xl mb-2">⚖️</div>
        <div class="text-xs font-bold text-on-surface mb-1">Loss</div>
        <div class="text-[11px] text-on-surface-variant">How wrong the prediction is. High loss = very wrong, near zero = correct.</div>
    </div>
    <div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
        <div class="text-2xl mb-2">🔙</div>
        <div class="text-xs font-bold text-on-surface mb-1">Backpropagation</div>
        <div class="text-[11px] text-on-surface-variant">Works backward through every knob to figure out: "which ones caused the mistake, and which way should I turn them?"</div>
    </div>
    <div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
        <div class="text-2xl mb-2">⛰️</div>
        <div class="text-xs font-bold text-on-surface mb-1">Gradient Descent</div>
        <div class="text-[11px] text-on-surface-variant">Like walking downhill in fog — always stepping in the direction that reduces the loss. The "learning rate" is how big each step is.</div>
    </div>
    <div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
        <div class="text-2xl mb-2">🔁</div>
        <div class="text-xs font-bold text-on-surface mb-1">Epochs</div>
        <div class="text-[11px] text-on-surface-variant">One full pass through all training examples. Models typically train for hundreds of epochs — like rehearsing a speech over and over.</div>
    </div>
</div>

<div class="p-4 rounded-xl text-sm text-on-surface-variant italic border border-outline-variant text-center my-6" style="background: color-mix(in srgb, var(--accent) 6%, transparent);">
    If this doesn't quite make sense, that's perfectly fine. You don't need to understand how a neural network is trained in an engineering sense to use LLMs effectively. The key takeaway: training means adjusting numbers until the model gets better at predicting.
</div>

:::callout-dyk
A large LLM might have hundreds of **billions** of weights. Training all of them means doing gradient descent across an almost incomprehensible number of dimensions. That's why LLM training requires massive GPU clusters and can cost millions of dollars.
:::

## 🧠 Mixture of Experts: Not What You Think

Remember the 3 weights you just tuned? Now imagine a network with **128 weight groups** — but here's the trick: only 1 or 2 groups are active at a time. A tiny "router" decides which group to activate for each word.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="rounded-xl p-5 border-2" style="background: rgba(214, 92, 92, 0.08); border-color: rgba(214, 92, 92, 0.3);">
        <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: var(--error);">Common Misconception</div>
        <h4 class="font-bold text-on-surface mb-2">"Multiple AI Agents Talking to Each Other"</h4>
        <p class="text-sm text-on-surface/70">People imagine a panel of tiny AIs sitting around a table, debating and voting on the answer — like a committee meeting.</p>
        <div class="mt-3 text-2xl text-center">🤖💬🤖<br>💬🤖💬</div>
    </div>
    <div class="rounded-xl p-5 border-2" style="background: rgba(95, 168, 96, 0.08); border-color: rgba(95, 168, 96, 0.3);">
        <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: #2e7d32;">Reality</div>
        <h4 class="font-bold text-on-surface mb-2">"A Router Dispatches Tokens to Specialists"</h4>
        <p class="text-sm text-on-surface/70">Like a switchboard operator — for each word, it routes to the most relevant specialist knob. No discussion. No voting. Just efficient routing.</p>
        <div class="mt-3 text-2xl text-center">🚦 → 🧠<br>🚦 → 🧮</div>
    </div>
</div>

- **The Router:** A tiny sub-network that looks at each incoming word and picks which expert handles it — like a switchboard operator connecting a call to the right department.
- **The Experts:** Specialized groups of knobs, each good at certain types of words (e.g., one group handles code, another handles French, another handles math). Only 1 or 2 groups are active per word — the rest stay idle.
- **Why It Matters:** This lets models be much larger without proportionally increasing compute cost. More knobs total, but you only turn on a few at a time — so the model is smarter without being dramatically slower.

:::callout-error
"Mixture of Experts" does NOT mean multiple AI agents collaborating. The "experts" aren't separate models with their own goals — they're specialized groups of knobs within a single model, selected one at a time by a simple routing mechanism. Think **switchboard operator**, not **committee meeting**.
:::

:::quiz{id="02-05"}
