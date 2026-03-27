---
title: "12.2 Right vs. Wrong in Business Logic"
description: "Some tasks have strict correct answers; others don't. Knowing which type you're automating is critical."
chapter: "Chapter 12"
pageId: "12-02"
---

## 🎯 Core Goals
- Distinguish between tasks with no wrong answer (creative, open-ended) and tasks with strict correct answers (rule-bound).
- Highlight the danger of "hidden rules" — business logic that experienced employees know but can't articulate.
- Help learners identify which type of task they're automating before they start building.

:::callout-tldr
Not all business tasks have a "correct" answer — but many do. Before automating anything, you must know whether your task is creative (flexible) or rule-bound (exact). The hardest part is finding the rules that employees follow without realizing it.
:::

## 🎨 The Spectrum: Creative to Strict

Business tasks sit on a spectrum. Think of it as a dial from "anything goes" on one end to "one exact right answer" on the other.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
<div class="bg-green-50 rounded-xl p-5 border border-green-200">
<div class="font-bold text-base mb-3">🎨 No Wrong Answer (Creative)</div>
<ul class="text-sm text-on-surface/80 space-y-2">
<li>💡 Brainstorming marketing tagline ideas</li>
<li>📝 Summarizing a meeting in plain English</li>
<li>✉️ Writing a friendly follow-up email</li>
<li>🏷️ Generating three options for a product name</li>
</ul>
<p class="text-sm text-on-surface/70 mt-3 italic">Slight variation between runs is fine — even desirable.</p>
</div>
<div class="bg-red-50 rounded-xl p-5 border border-red-200">
<div class="font-bold text-base mb-3">📏 Strict Rules (Exact)</div>
<ul class="text-sm text-on-surface/80 space-y-2">
<li>🧾 Formatting invoice numbers as <code>INV-2024-XXXX</code></li>
<li>🧮 Calculating tax following specific bracket rules</li>
<li>📄 Client name in ALL CAPS on specific reports</li>
<li>🗺️ Routing Texas orders through Form TX-7</li>
</ul>
<p class="text-sm text-on-surface/70 mt-3 italic">Getting it 95% right means 5% are wrong. That adds up fast.</p>
</div>
</div>

:::callout-dyk
Most automation failures happen in the middle of this spectrum: tasks that SEEM flexible but actually have hidden rules. The automation performs well in testing (easy cases), then silently breaks in production (edge cases with strict rules no one mentioned).
:::

:::visual{name="visual-business-logic"}

## 🕵️ The Hidden Rules Problem

Here's the uncomfortable truth: many business rules exist only in people's heads. Experienced employees "just know" things that were never written down.

For example:

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">🔢</span>
<div>
<div class="font-bold text-sm mb-1">Invoice numbers above 5,000 go to Department B</div>
<p class="text-sm text-on-surface/80">Nobody wrote this down. It started because Department A had capacity issues years ago. It just became "how things work."</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">🤝</span>
<div>
<div class="font-bold text-sm mb-1">Certain clients always get extra review</div>
<p class="text-sm text-on-surface/80">Because of a past dispute. Not in the policy — just in people's heads. The LLM will treat them like everyone else.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">🔡</span>
<div>
<div class="font-bold text-sm mb-1">Client name in ALL CAPS on this one report</div>
<p class="text-sm text-on-surface/80">"It's always been that way." No one knows why. But if you get it wrong, someone will notice immediately.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">👔</span>
<div>
<div class="font-bold text-sm mb-1">Certain requests need the senior manager's eye</div>
<p class="text-sm text-on-surface/80">Policy doesn't require it, but everyone knows. Skip this step and you'll hear about it.</p>
</div>
</div>
</div>
</div>

These unconscious rules are the hardest to automate and the most dangerous to miss. They often exist because of history, relationships, or one-off agreements that were never formalized.

:::callout-error
A common mistake: assuming a process has no hidden rules because existing employees make it look easy. They make it look easy because they've internalized the rules. Interview them deeply. Ask: "What about edge cases?" and "What happens when X goes wrong?" Keep asking until you find the hidden rules — because they're always there. Tools like checklists, flowcharts, and simple cheat sheets are great for capturing and sharing these rules — they don't need to live only in someone's head.
:::

## 🔍 How to Surface the Hidden Rules

Before building any automation, run a structured interview with the people who currently do the work:

1. **Walk me through the normal case** — Get the happy path first.
2. **What are the exceptions?** — There are always exceptions. Push for specifics.
3. **Tell me about a time this went wrong** — Stories reveal the rules that prevent failures.
4. **What would a new employee get wrong?** — This surfaces the unwritten rules directly.
5. **Is there anything that "just goes without saying"?** — Those are exactly the rules you need to document.

Once you have the hidden rules documented, you can decide: are these creative guidelines (LLM can handle the nuance) or strict rules (need to be hardcoded or explicitly enforced)?

:::callout-dyk
Modern LLMs have become capable of creating and using their own tools dynamically — writing code on the fly, calling APIs, and taking actions in the real world. This makes strict rules even more critical to define upfront. An LLM that can only produce text might get a rule wrong and produce a bad document. An LLM with tool access that gets a rule wrong might send an unauthorized email, process a payment, or update a database. The stakes go up as the capabilities do.
:::

:::callout-tip
This is a perfect moment to pause and reflect on your own workflows. Can you improve the process yourself before automating it? Get feedback from colleagues who do the same work differently? Or try describing your process to an LLM and ask it to find gaps, edge cases, or inefficiencies you might be missing. Sometimes the biggest gains come from fixing the process, not automating it.
:::

## 📝 Key Concepts

- **Creative tasks** allow variation and work well with flexible LLM outputs.
- **Rule-bound tasks** require exact outputs — variation is a bug, not a feature.
- **Hidden rules** are business logic that employees know but can't articulate — they are the biggest automation risk.
- **Interview the experts deeply** — ask about failures, edge cases, and what goes without saying.
- **Know your task type before building** — the wrong automation approach for the task type will produce confident-looking wrong answers.

:::quiz{id="12-02"}
