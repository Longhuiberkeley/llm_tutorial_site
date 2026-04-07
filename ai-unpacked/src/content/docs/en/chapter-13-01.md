---
title: "13.1 Why LLM Projects Are Different"
description: "LLMs don't remove the need for project management — they amplify the consequences of skipping it."
chapter: "Chapter 13"
pageId: "13-01"
---

## 🎯 Core Goals
- Explain how LLM-assisted projects create a velocity trap that obscures missing project foundations.
- Show that complacency — accepting without reviewing — is where most debt accumulates.
- Introduce why breaking down tasks matters for both humans and LLMs.

<div class="not-prose callout callout-tldr">

LLMs don't remove the need for project management — they amplify the cost of skipping it. The same real-world concerns exist in every project: who is the user, what are the requirements, how does it handle edge cases. LLMs just move fast enough that you might not notice those questions were never answered.

</div>

## ⚡ The Velocity Trap: The Illusion of Completeness

Imagine you say to an LLM: "Build me a website where I can learn to solve chess puzzles."

Within hours, something appears. It has a UI. It shows puzzles. It might even have a hint system. It looks done.

But step back. Who exactly is the user? Beginners or advanced players? Is there a login system, or is everything anonymous? How do you track which puzzles a user has solved? What happens on mobile? What if someone wants to share a puzzle? If this were a paid product, how does billing work? What's the data model? Where are the puzzles stored?

None of these questions disappeared because an LLM generated some HTML. They were simply never asked. The LLM moved fast enough that the gap wasn't visible yet.

This is the **velocity trap**: the speed of LLM-assisted work creates the illusion of completeness. A prototype that looks finished can be missing its entire foundation — and you won't discover that until you try to build on it.

**Velocity without direction is drift, not progress.**

<div class="not-prose callout callout-dyk">

This is the same problem in every fast-moving project — LLM-assisted or not. The difference is scale. In traditional development, building a week's worth of code without clear requirements is a recoverable mistake. With LLMs, you can build a month's worth in a day. The consequences of skipping the foundation accumulate proportionally faster.

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">The Velocity Trap in Action</h3>
<p class="text-sm text-on-surface-variant">Toggle between two approaches and click a week to see what happens.</p>
</div>
<!-- Toggle -->
<div class="flex gap-2 justify-center mb-8">
<button onclick="setMode('loose', this)" id="apd-btn-loose"
class="apd-mode-btn px-5 py-2 rounded-full text-sm font-bold border-2 transition-all border-outline-variant bg-surface-container-lowest">
⚡ Fast &amp; Loose
</button>
<button onclick="setMode('structured', this)" id="apd-btn-structured"
class="apd-mode-btn px-5 py-2 rounded-full text-sm font-bold border-2 transition-all border-outline-variant bg-surface-container-lowest">
🏗️ Structured
</button>
</div>
<!-- Timeline Nodes -->
<div class="relative mb-8">
<div class="absolute top-8 left-[16%] right-[16%] h-1 bg-outline-variant/40 rounded-full"></div>
<div class="flex justify-around">
<button onclick="selectWeek(1, this)" class="apd-week flex flex-col items-center gap-2 group z-10">
<div class="apd-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm group-hover:border-primary">W2</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors">Week 2</span>
</button>
<button onclick="selectWeek(2, this)" class="apd-week flex flex-col items-center gap-2 group z-10">
<div class="apd-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm group-hover:border-primary">W6</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors">Week 6</span>
</button>
<button onclick="selectWeek(3, this)" class="apd-week flex flex-col items-center gap-2 group z-10">
<div class="apd-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm group-hover:border-primary">W12</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors">Week 12</span>
</button>
</div>
</div>
<!-- Detail Panel -->
<div id="apd-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[160px] flex items-center justify-center transition-all duration-300">
<p class="text-sm text-on-surface-variant italic text-center">Select an approach above, then click a week to see what's happening.</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/velocity-trap.js';
init({
data: {
loose: {
label: '⚡ Fast & Loose',
color: 'border-orange-400',
bg: 'bg-orange-50',
weeks: {
1: { emoji: '😄', heading: 'Week 2 — Everything looks great!', details: ['Features appearing in hours. The demo is impressive.','Stakeholders are excited. The team is energized.','Nobody has asked: "What are the requirements?"','⚠️ Foundation: code is being generated without a clear architecture or defined success criteria.'], note: 'This is the intoxicating phase. Speed creates a feeling of progress. The problems are invisible.' },
2: { emoji: '😬', heading: 'Week 6 — Something feels off', details: ['Adding a new feature takes longer than expected.','Fixing a bug in one place breaks something in another.','The codebase feels "sticky" — hard to move through.','⚠️ Root cause: 4 weeks of accepted-without-review code has created hidden dependencies.'], note: 'The debt accumulated invisibly. It\'s now starting to slow things down. Most teams push through rather than stopping to address it.' },
3: { emoji: '😰', heading: 'Week 12 — The reckoning', details: ['A one-day change is taking three days of archaeology.','Nobody fully understands what was built in weeks 1–4.','The same logic exists in 4 different places with slight differences.','🚨 The foundation cannot support new floors. Significant rework required.'], note: 'The cost of fixing the foundation grows with each floor built on top of it. What would have taken 2 hours in week 1 now takes 2 days.' }
}
},
structured: {
label: '🏗️ Structured',
color: 'border-primary',
bg: 'bg-primary-fixed',
weeks: {
1: { emoji: '🤔', heading: 'Week 2 — Slightly slower, clearly better', details: ['Features taking a bit longer — requirements were defined first.','Each chunk reviewed before the next one starts.','Architecture decisions documented. Success criteria written.','✅ Foundation: solid. Every piece of code traces to a requirement.'], note: 'The investment in structure feels slower in week 1. It pays dividends every week after.' },
2: { emoji: '😊', heading: 'Week 6 — Steady, predictable progress', details: ['New features slot in cleanly because the architecture was designed.','Bugs are fixed without creating new ones — code is understood.','The team knows where to find things.','✅ Progress is sustainable. Velocity is not declining.'], note: 'No debt has accumulated because each phase gate was passed before proceeding.' },
3: { emoji: '🎉', heading: 'Week 12 — Still productive', details: ['New features are added cleanly. One day = one day.','The codebase is understandable to someone who wasn\'t there in week 1.','Requirements traceability means every feature has a reason.','✅ The project is in a healthy state. Iteration continues without increasing cost.'], note: 'Structured development doesn\'t mean slower. It means the velocity is maintained over time rather than declining as debt accumulates.' }
}
}
}
});
</script>

</div>


## 🖱️ The Complacency Problem

There is a button in every AI-assisted tool that quietly causes most of the damage: **Accept**.

When you write 20 lines of code by hand, you think through each line as you write it. When an LLM generates 200 lines in seconds, the instinct is to scan it, see that it looks reasonable, and click Accept.

That scanning is not the same as understanding. The code may work for the happy path you tested. It may not handle the edge cases that will appear in production. It may have introduced an architectural pattern that will conflict with something you build three weeks from now. None of these problems are visible from a quick scan.

The compounding effect: each accepted chunk that was not fully understood becomes harder to change when problems emerge later. Fixing an issue in layer 5 of a structure built on layers 1–4 that weren't reviewed means understanding all five layers first.

There is a subtler form of complacency too: **false confidence from past success**. The LLM worked yesterday, so you trust it more today. But today's prompt is harder than yesterday's — more code has been written, more decisions made, more dependencies created. The complexity the LLM must navigate grows with every session, and so does the difficulty of getting the next output right. What's more, vigilance tends to decrease exactly as complexity increases. Early in a project, people review every line. Later, when the system feels stable, they stop. This is precisely backwards — later in a project is when context is most complex, inconsistencies are most likely, and review is most critical.

**Technical debt accumulates faster in LLM-assisted projects — not slower.** The correction or fix for something built incorrectly can cost more in time and rework than it would have in a traditional project, precisely because the speed hid how much was built on a shaky foundation.

<div class="not-prose callout callout-error">

A common mistake: treating LLM output as finished work because it "seems to work." Passing a quick test is not the same as being correct, complete, or maintainable. The review step is not optional — it's where your judgment replaces the LLM's pattern-matching.

</div>

## ⚠️ The Real Risks (In Brief)

These risks are real and worth knowing, but they are symptoms of skipping project discipline — not the root cause:

- **Hallucination risk** — the LLM confidently states something false. Without clear requirements, you may not know what "correct" looks like to catch it.
- **Cost overrun risk** — token usage scales with usage. Poorly designed workflows can generate enormous bills at scale.
- **Non-determinism risk** — the same input can produce different outputs. Behavior you validated today may differ tomorrow.
- **Silent failure risk** — errors look like plausible-sounding wrong answers, not crashes. They slip past automated checks.
- **Security risk** — prompt injection, missing input validation, and hardcoded secrets introduced without anyone looking carefully.

Managing these risks requires discipline at the project level — not just technical awareness.

## 🔪 Why Breaking Down Tasks Matters

Asking an LLM to simultaneously act as product manager, designer, developer, and QA tester produces mediocre results — for the same reason that handing one person five jobs at once does. Context switching is expensive, roles have conflicting priorities, and no one can hold all the requirements in their head at once. LLMs have the same limitation.

The fix: give each prompt **one role, one phase, and one deliverable**. Bounded tasks produce verifiable output. A prompt asking for everything at once produces something too entangled to review clearly.

<div class="not-prose callout callout-dyk">

Breaking down tasks is important enough that the next page covers it in depth — along with the project management fundamentals that make it work.

</div>

## 📝 Key Concepts

- **The velocity trap** — LLMs move fast enough to make a project look complete before it is; missing foundations surface later, more expensively.
- **The complacency problem** — clicking Accept without understanding accumulates debt; past success doesn't guarantee present correctness; complexity grows with every session.
- **Technical debt accumulates faster** in LLM-assisted projects; corrections cost more, not less, than in traditional development.
- **Break down tasks** — one role, one phase, one deliverable per prompt produces reviewable, verifiable output. (Covered in depth in the next page.)
- **The real risks** (hallucination, cost, non-determinism, silent failures) are symptoms of skipped discipline, not standalone surprises.

<div id="quiz-13-01" class="not-prose quiz-container my-12" data-quiz="13-01"></div>
