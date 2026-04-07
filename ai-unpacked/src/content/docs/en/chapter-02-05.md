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

<div class="not-prose callout callout-tldr">

Training a neural network is like tuning thousands of tiny knobs. Each knob (called a "weight") controls how much one piece of information influences another. During training, the network adjusts these knobs over and over until its predictions match the right answers. The process that figures out *which direction* to turn each knob is called **backpropagation**.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<style>
.nn-token-chip {
display:inline-flex; align-items:center; padding:4px 12px; border-radius:8px;
font-size:13px; font-weight:700; opacity:0; transform:scale(0.8);
animation:nn-chip-in 0.3s ease forwards;
}
@keyframes nn-chip-in { to { opacity:1; transform:scale(1); } }
.nn-diagram-wrap {
background:linear-gradient(135deg,#faf8f5 0%,#f5f3f0 100%);
border:1px solid var(--outline-variant,#c8c2bc);
border-radius:1rem; padding:0.75rem;
}
.nn-slider {
-webkit-appearance:none; appearance:none; width:100%; height:6px;
border-radius:3px; background:#e8e5e1; outline:none;
}
.nn-slider::-webkit-slider-thumb {
-webkit-appearance:none; appearance:none; width:22px; height:22px;
border-radius:50%; background:var(--primary,#8f482f); cursor:pointer;
box-shadow:0 2px 6px rgba(0,0,0,.15);
}
.nn-slider::-webkit-slider-thumb:hover { transform:scale(1.15); }
.nn-slider::-moz-range-thumb {
width:22px; height:22px; border-radius:50%; border:none;
background:var(--primary,#8f482f); cursor:pointer;
box-shadow:0 2px 6px rgba(0,0,0,.15);
}
.nn-arrow-pulse { animation:nn-pulse 1.5s ease-in-out 2; }
@keyframes nn-pulse { 0%,100%{opacity:0.2} 50%{opacity:0.7} }
</style>
<div class="bg-surface-container-low rounded-xl p-6 md:p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<!-- Title -->
<div class="text-center mb-4">
<h3 class="text-xl font-bold font-headline mb-1">Inside a Neural Network</h3>
<p class="text-sm text-on-surface-variant">Adjust the weight sliders and watch predictions shift. This is how training works — tuning numbers until the answer is right.</p>
</div>
<!-- Sentence -->
<div class="text-center mb-4">
<span class="text-base font-bold text-on-surface/80">"The cat sat on the <span class="text-primary border-b-2 border-primary/40 px-1">___</span>"</span>
</div>
<!-- Token chips -->
<div class="flex flex-wrap justify-center gap-2 mb-1" id="nn-tokens"></div>
<p class="text-center text-[10px] text-on-surface-variant mb-2 opacity-50">Remember tokenization? The LLM reads these as tokens, not words.</p>
<!-- Down arrow -->
<div class="text-center mb-2">
<span class="material-symbols-outlined text-on-surface-variant/30 nn-arrow-pulse" style="font-size:18px">south</span>
</div>
<!-- Diagram + Sliders (all inside one visual container) -->
<div class="nn-diagram-wrap mb-5">
<svg id="nn-diagram" viewBox="0 0 660 350" class="w-full" xmlns="http://www.w3.org/2000/svg" style="max-height:400px">
<defs>
<filter id="nn-glow" x="-50%" y="-50%" width="200%" height="200%">
<feGaussianBlur stdDeviation="3" result="b"/>
<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
</defs>
</svg>
<!-- Weight sliders (inside the visual) -->
<div class="px-4 pt-4 pb-2">
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50 mb-3 text-center">Adjust Weights</div>
<div class="grid grid-cols-3 gap-4 md:gap-8">
<div class="flex flex-col items-center gap-1">
<input type="range" min="0" max="10" value="2" class="nn-slider" id="nn-slider-1" oninput="nnUpdate()">
<div class="flex items-center gap-1">
<span class="text-[10px] font-bold text-on-surface-variant opacity-60">w&#8321;</span>
<span class="text-xs font-bold text-primary" id="nn-sval-1">2</span>
</div>
</div>
<div class="flex flex-col items-center gap-1">
<input type="range" min="0" max="10" value="8" class="nn-slider" id="nn-slider-2" oninput="nnUpdate()">
<div class="flex items-center gap-1">
<span class="text-[10px] font-bold text-on-surface-variant opacity-60">w&#8322;</span>
<span class="text-xs font-bold text-primary" id="nn-sval-2">8</span>
</div>
</div>
<div class="flex flex-col items-center gap-1">
<input type="range" min="0" max="10" value="2" class="nn-slider" id="nn-slider-3" oninput="nnUpdate()">
<div class="flex items-center gap-1">
<span class="text-[10px] font-bold text-on-surface-variant opacity-60">w&#8323;</span>
<span class="text-xs font-bold text-primary" id="nn-sval-3">2</span>
</div>
</div>
</div>
</div>
</div>
<!-- Prediction cards -->
<div id="nn-cards" class="space-y-2 mb-4"></div>
<!-- Verdict -->
<div class="text-center mb-4">
<span id="nn-verdict" class="inline-block px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"></span>
</div>
<!-- Feedback (post-autotrain) -->
<div id="nn-feedback" class="hidden text-center mb-4 p-3 rounded-xl text-sm text-on-surface" style="background:rgba(95,168,96,0.1)"></div>
<!-- Auto-Train button -->
<div class="text-center">
<button id="nn-autotrain-btn" onclick="nnStartAutoTrain()"
class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all active:scale-95">
<span class="material-symbols-outlined text-lg">auto_fix_high</span>
Auto-Train
</button>
<p class="text-[10px] text-on-surface-variant mt-2">Watch the network learn the right answer</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/neural-network.js';
init({
  chipColors: [
    {bg:'#FFE082',text:'#5D4037'},
    {bg:'#A5D6A7',text:'#1B5E20'},
    {bg:'#90CAF9',text:'#0D47A1'},
    {bg:'#F48FB1',text:'#880E4F'},
    {bg:'#CE93D8',text:'#4A148C'}
  ],
  tokenLabels: ['The','cat','sat','on','the'],
  candidates: [
    {word:'mat',  emoji:'🷾B',ideal:[9,1,8]},
    {word:'desk', emoji:'🪑',ideal:[2,9,2]},
    {word:'moon', emoji:'🌕',ideal:[1,3,1]},
    {word:'pizza',emoji:'🍕',ideal:[1,1,1]}
  ],
  verdicts: {
    correct: '🎉 The network has it right!',
    onTrack: 'On the right track — keep tuning!',
    barely: 'Right word, but barely — keep tuning!',
    close: 'Close, but not quite — try adjusting',
    wayOff: 'Way off — keep experimenting!'
  },
  feedbackText: '<span class="font-bold">The weights converged!</span> After exploring randomly and then adjusting step by step, the network learned that “mat” is the best prediction. This is what <strong>backpropagation</strong> does — automatically — across billions of weights.',
  autoTrainLabel: 'Auto-Train',
  trainingLabel: 'Training…',
  layerLabels: [{x:55,t:'TOKENS'},{x:205,t:'HIDDEN'},{x:355,t:'HIDDEN'},{x:505,t:'PREDICTIONS'}]
});
</script>

</div>


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

<div class="not-prose callout callout-dyk">

A large LLM might have hundreds of **billions** of weights. Training all of them means doing gradient descent across an almost incomprehensible number of dimensions. That's why LLM training requires massive GPU clusters and can cost millions of dollars.

</div>

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
- **Why It Matters:** This lets models be much larger without proportionally increasing compute cost. More knobs total, but you only turn on a few at a time — so the model is smarter without being dramatically slower. That's why some of the largest models today can still respond in seconds: even with hundreds of billions of parameters, only a fraction are active for any single word.

<div class="not-prose callout callout-error">

"Mixture of Experts" does NOT mean multiple AI agents collaborating. The "experts" aren't separate models with their own goals — they're specialized groups of knobs within a single model, selected one at a time by a simple routing mechanism. Think **switchboard operator**, not **committee meeting**.

</div>

<div id="quiz-02-05" class="not-prose quiz-container my-12" data-quiz="02-05"></div>
