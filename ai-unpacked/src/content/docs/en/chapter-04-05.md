---
title: "4.5 When the Head is Full"
description: "How the AI manages its finite short-term memory."
chapter: "Chapter 4"
pageId: "04-05"
---

## 🎯 Core Goals
- Understand the trade-offs of endless chats and finite context windows.
- Learn the strategies (truncation vs. summarization) used to manage full memory.
- This is one of the MANY reasons why your LLM seems quite forgetful.

<div class="not-prose callout callout-tldr">

When the AI's "receipt tape" (Context Window) runs out of space, something has to be deleted. You either chop off the top of the conversation, or you write a tiny summary to replace it.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<!-- SECTION 1: HUMAN EXERCISE -->
<div id="hf-human" class="mb-12">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-1">1. Can You Outperform the LLM?</h3>
<p class="text-sm text-on-surface-variant">Remember these details, then solve the puzzle.</p>
</div>
<!-- Step 1: Memorize -->
<div id="hf-step-1" class="space-y-4">
<div class="grid grid-cols-2 gap-4">
<div class="p-6 bg-surface-container-lowest rounded-xl border-2 border-primary text-center">
<div class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Peter's Phone</div>
<div class="text-2xl font-bold">555-0142</div>
</div>
<div class="p-6 bg-surface-container-lowest rounded-xl border-2 border-accent text-center">
<div class="text-xs font-bold uppercase tracking-widest text-accent mb-2">Mary's Address</div>
<div class="text-xl font-bold">47 Oak Street</div>
</div>
</div>
<button onclick="hfNext(2)" class="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
I've Memorized Them! →
</button>
</div>
<!-- Step 2: Math distraction — multiple choice -->
<div id="hf-step-2" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant">
<div class="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Wait! Solve this first:</div>
<div class="text-4xl font-bold text-primary mb-6">17 × 23 = ?</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfMath(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">381</button>
<button onclick="hfMath(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">391</button>
<button onclick="hfMath(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">401</button>
<button onclick="hfMath(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">371</button>
</div>
<div id="hf-math-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
</div>
<!-- Step 3: Math distraction 2 -->
<div id="hf-step-3" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant">
<div class="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">One more!</div>
<div class="text-4xl font-bold text-primary mb-6">156 ÷ 12 = ?</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfMath2(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">11</button>
<button onclick="hfMath2(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">13</button>
<button onclick="hfMath2(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">15</button>
<button onclick="hfMath2(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">17</button>
</div>
<div id="hf-math2-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
</div>
<!-- Step 4: Math distraction 3 -->
<div id="hf-step-4" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant">
<div class="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Last one, promise!</div>
<div class="text-4xl font-bold text-primary mb-6">8 × 17 = ?</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfMath3(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">126</button>
<button onclick="hfMath3(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">136</button>
<button onclick="hfMath3(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">146</button>
<button onclick="hfMath3(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">128</button>
</div>
<div id="hf-math3-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
</div>
<!-- Step 5: Phone recall — multiple choice -->
<div id="hf-step-5" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-primary">
<div class="text-lg font-bold mb-2">Quick: What was Peter's phone number?</div>
<p class="text-xs text-on-surface-variant mb-6 italic">Pick the one you remember…</p>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfPhone(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-0142</button>
<button onclick="hfPhone(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-0124</button>
<button onclick="hfPhone(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-0412</button>
<button onclick="hfPhone(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-1042</button>
</div>
<div id="hf-phone-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
<p id="hf-human-caption" class="hidden text-sm text-on-surface-variant italic px-4">Most humans mix up the digits! Distraction pushes earlier memories out — just like it does to an LLM's context window.</p>
</div>
</div>
<hr class="border-outline-variant/30 mb-12">
<!-- SECTION 2: LLM TAPE -->
<div>
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-1">2. How the LLM Manages a Full Head</h3>
<p class="text-sm text-on-surface-variant italic">Imagine you've been chatting over the last few days and the bundle has hit the model's context window limit. What happens next?</p>
</div>
<!-- Strategy Buttons -->
<div class="flex justify-center gap-2 mb-8">
<button onclick="hfSwitch('trunc')" id="hf-btn-trunc" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-primary text-on-primary">✂️ Truncation</button>
<button onclick="hfSwitch('sum')" id="hf-btn-sum" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-surface-container-highest text-on-surface">📝 Summarization</button>
<button onclick="hfSwitch('slide')" id="hf-btn-slide" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-surface-container-highest text-on-surface">🪟 Sliding Window</button>
</div>
<div id="hf-tape-container" class="relative bg-surface-container-lowest border-2 border-outline-variant rounded-xl overflow-hidden max-w-sm mx-auto" style="height: 260px;">
<div id="hf-tape" class="w-full p-3 space-y-1 text-xs font-mono transition-all duration-500">
<!-- Content added by JS -->
</div>
<div class="absolute top-0 left-0 w-full h-8 pointer-events-none" style="background: linear-gradient(to bottom, var(--surface-container-lowest), transparent);"></div>
<div class="absolute bottom-0 left-0 w-full h-8 pointer-events-none" style="background: linear-gradient(to top, var(--surface-container-lowest), transparent);"></div>
</div>
<p id="hf-tape-desc" class="text-center text-xs text-on-surface-variant mt-6 italic px-8">
Truncation: The oldest messages simply fall off the top and are permanently forgotten.
</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/head-full-memory.js';
init({
  math1Correct: '\u2705 Correct! 17 \u00D7 23 = 391.',
  math1Wrong: '\u274C Not quite \u2014 it\'s 391.',
  math2Correct: '\u2705 Correct! 156 \u00F7 12 = 13.',
  math2Wrong: '\u274C Not quite \u2014 it\'s 13.',
  math3Correct: '\u2705 Correct! 8 \u00D7 17 = 136. Now\u2026 let\'s test that memory.',
  math3Wrong: '\u274C Not quite \u2014 it\'s 136. Now\u2026 let\'s test that memory.',
  phoneCorrect: '\u2705 Nice memory! You remembered 555-0142.',
  phoneWrong: '\u274C It was 555-0142. Easy to mix up after a distraction!',
  humanCaption: 'Most humans mix up the digits! Distraction pushes earlier memories out \u2014 just like it does to an LLM\'s context window.',
  baseConvo: [
    { role: 'user', text: 'Hi! My name is Peter. Call me Pete.' },
    { role: 'llm',  text: 'Hi Pete! Great to meet you.' },
    { role: 'user', text: 'I\'m working on a marketing brief for Q3.' },
    { role: 'llm',  text: 'Happy to help! What\'s the target audience?' },
    { role: 'user', text: 'Millennials in urban areas, age 28-40.' },
    { role: 'llm',  text: 'Got it. I\'ll keep that in mind.' },
    { role: 'user', text: 'Also, our budget is $50K for the quarter.' },
    { role: 'llm',  text: 'Understood \u2014 $50K, urban millennials, Q3.' },
    { role: 'user', text: 'Draft a headline for a social media campaign.' },
    { role: 'llm',  text: '(Current message \u2014 generating now...)' }
  ],
  truncRows: [
    '\uD83D\uDC64 Hi! My name is Peter. Call me Pete.',
    '\uD83E\uDD16 Hi Pete! Great to meet you.',
    '\uD83D\uDC64 I\'m working on a marketing brief for Q3.'
  ],
  sumRow: '\uD83D\uDCDD SUMMARY: User is Pete. Working on Q3 marketing brief. Audience: urban millennials 28-40. Budget: $50K.',
  slideRow: '[System prompt always pinned at top]',
  currentGenerating: '\uD83E\uDD16 (Current \u2014 generating...)',
  strategyDescs: {
    trunc: '\u2702\uFE0F Truncation: Oldest messages are cut off. "Pete" is gone \u2014 the LLM no longer knows the user\'s name.',
    sum: '\uD83D\uDCDD Summarization: Old messages are compressed into a brief note. Core context preserved, exact wording lost.',
    slide: '\uD83E\uDE77 Sliding Window: System prompt stays pinned; only recent messages kept. Early context like "Pete\'s name" falls away.'
  }
});
</script>

</div>


## 📝 Key Concepts


Here are some common methods that handle that kind of situation:
- **Strategy 1: Truncation (Chopping):** The system simply deletes your oldest messages. If you told the AI your name in Message 1, and you are now on Message 50, the AI literally no longer has the text where you stated your name. It has been permanently forgotten.
- **Strategy 2: Summarization:** Before the top messages fall off, the system asks the AI to write a quick summary (e.g., *"User is named Peter, lives in NY"*). It then deletes the old messages and pins the summary to the top. You save space, but you lose the exact nuance of the original messages.
- **Sliding Window:** Most systems use a "sliding window" where they keep the most recent messages and maybe the very first "System Prompt" instructions, letting everything in the middle fall away.

<div class="not-prose callout callout-error">

Never use a single chat thread as a permanent "workspace" for months. The context will get poisoned, the top will get truncated, and the AI will become slow and confused. Always start fresh chats for new tasks!

</div>

<div id="quiz-04-05" class="not-prose quiz-container my-12" data-quiz="04-05"></div>
