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

<div class="not-prose callout callout-tldr">

Not all business tasks have a "correct" answer — but many do. Before automating anything, you must know whether your task is creative (flexible) or rule-bound (exact). The hardest part is finding the rules that employees follow without realizing it.

</div>

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

<div class="not-prose callout callout-dyk">

Most automation failures happen in the middle of this spectrum: tasks that SEEM flexible but actually have hidden rules. The automation performs well in testing (easy cases), then silently breaks in production (edge cases with strict rules no one mentioned).

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Business Logic Spectrum</h3>
<p class="text-sm text-on-surface-variant">Where does your task fall? Click each zone to see the automation guidance.</p>
</div>
<!-- Spectrum Labels -->
<div class="flex justify-between mb-2 px-1">
<span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">🎨 Creative / No Wrong Answer</span>
<span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">📐 Strict / One Right Answer</span>
</div>
<!-- Spectrum Bar -->
<div class="relative mb-6">
<div class="h-4 w-full rounded-full overflow-hidden flex">
<div class="h-full flex-1" style="background: #4CAF50;"></div>
<div class="h-full flex-1" style="background: #8BC34A;"></div>
<div class="h-full flex-1" style="background: #FFC107;"></div>
<div class="h-full flex-1" style="background: #FF9800;"></div>
<div class="h-full flex-1" style="background: #F44336;"></div>
</div>
<!-- Zone Buttons -->
<div class="grid grid-cols-5 gap-2 mt-4">
<button onclick="showBLZone(0, this)" id="bl-btn-0" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-primary bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #4CAF50;">1</div>
<span class="text-[10px] font-bold text-center leading-tight">Fully Creative</span>
</button>
<button onclick="showBLZone(1, this)" id="bl-btn-1" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #8BC34A;">2</div>
<span class="text-[10px] font-bold text-center leading-tight">Mostly Creative</span>
</button>
<button onclick="showBLZone(2, this)" id="bl-btn-2" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #FFC107;">3</div>
<span class="text-[10px] font-bold text-center leading-tight">Mixed</span>
</button>
<button onclick="showBLZone(3, this)" id="bl-btn-3" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #FF9800;">4</div>
<span class="text-[10px] font-bold text-center leading-tight">Mostly Strict</span>
</button>
<button onclick="showBLZone(4, this)" id="bl-btn-4" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #F44336;">5</div>
<span class="text-[10px] font-bold text-center leading-tight">Fully Strict</span>
</button>
</div>
</div>
<!-- Detail Card -->
<div id="bl-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 animate-fade-in">
<div class="flex items-center gap-3 mb-3">
<div id="bl-detail-badge" class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md" style="background: #4CAF50;">1</div>
<div>
<h4 id="bl-detail-title" class="font-bold text-base">Fully Creative</h4>
<p id="bl-detail-subtitle" class="text-[11px] text-on-surface-variant">Brainstorming, name ideas, creative writing</p>
</div>
</div>
<div id="bl-detail-guidance" class="rounded-lg p-4 mb-4 text-sm leading-relaxed" style="background: #4CAF5015; border-left: 4px solid #4CAF50;">
<span class="font-bold">🤖 Automation Guidance:</span> LLM can run freely. Variation is a feature, not a bug. Every response being different is the whole point.
</div>
<div class="flex flex-wrap gap-2" id="bl-detail-tags">
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Brainstorming sessions</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Product name ideas</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Creative writing</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Marketing slogans</span>
</div>
</div>
</div>
<script>
(function() {
const blZones = [
{
title: "Fully Creative",
subtitle: "Brainstorming, name ideas, creative writing",
color: "#4CAF50",
guidance: "LLM can run freely. Variation is a feature, not a bug. Every response being different is the whole point.",
tags: ["Brainstorming sessions", "Product name ideas", "Creative writing", "Marketing slogans"]
},
{
title: "Mostly Creative",
subtitle: "Email drafts, meeting summaries, social posts",
color: "#8BC34A",
guidance: "LLM with light guidelines. Review occasionally to keep tone consistent, but give the model room to work. A quick scan is usually enough.",
tags: ["Email drafts", "Meeting summaries", "Blog outlines", "Social media posts"]
},
{
title: "Mixed",
subtitle: "Customer responses, support tickets, reports",
color: "#FFC107",
guidance: "LLM with clear constraints. Set brand guidelines, approved language, and required data points. Review regularly — this is where quality drifts silently.",
tags: ["Customer responses", "Brand-guided content", "Support ticket replies", "Templated reports"]
},
{
title: "Mostly Strict",
subtitle: "Invoice formatting, data entry, standard forms",
color: "#FF9800",
guidance: "Hardcode the rules. Use traditional logic for the structured parts. LLM only for edge cases or interpreting ambiguous inputs — never for the core calculations.",
tags: ["Invoice processing", "Data entry validation", "Standard form filling", "Inventory updates"]
},
{
title: "Fully Strict",
subtitle: "Tax calculations, regulatory filings, compliance",
color: "#F44336",
guidance: "No LLM for the core logic. Use traditional code, validated formulas, and rule engines. A creative answer here means a wrong answer — and possibly a legal problem.",
tags: ["Tax calculations", "Regulatory filings", "Financial reconciliation", "Legal compliance checks"]
}
];
window.showBLZone = function(index, btn) {
const zone = blZones[index];
// Update button states
document.querySelectorAll('.bl-zone-btn').forEach(b => {
b.classList.remove('border-primary');
b.classList.add('border-transparent');
});
btn.classList.remove('border-transparent');
btn.classList.add('border-primary');
// Animate detail card
const detail = document.getElementById('bl-detail');
detail.classList.remove('animate-fade-in');
void detail.offsetWidth;
detail.classList.add('animate-fade-in');
// Update content
document.getElementById('bl-detail-badge').style.background = zone.color;
document.getElementById('bl-detail-badge').textContent = index + 1;
document.getElementById('bl-detail-title').textContent = zone.title;
document.getElementById('bl-detail-subtitle').textContent = zone.subtitle;
const guidance = document.getElementById('bl-detail-guidance');
guidance.style.background = zone.color + '15';
guidance.style.borderLeftColor = zone.color;
guidance.innerHTML = '<span class="font-bold">🤖 Automation Guidance:</span> ' + zone.guidance;
const tagsHtml = zone.tags.map(t => '<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">' + t + '</span>').join('');
document.getElementById('bl-detail-tags').innerHTML = tagsHtml;
};
// Initialize with first zone selected
document.addEventListener('DOMContentLoaded', function() {
showBLZone(0, document.getElementById('bl-btn-0'));
});
})();
</script>

</div>


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

<div class="not-prose callout callout-error">

A common mistake: assuming a process has no hidden rules because existing employees make it look easy. They make it look easy because they've internalized the rules. Interview them deeply. Ask: "What about edge cases?" and "What happens when X goes wrong?" Keep asking until you find the hidden rules — because they're always there. Tools like checklists, flowcharts, and simple cheat sheets are great for capturing and sharing these rules — they don't need to live only in someone's head.

</div>

## 🔍 How to Surface the Hidden Rules

Before building any automation, run a structured interview with the people who currently do the work:

1. **Walk me through the normal case** — Get the happy path first.
2. **What are the exceptions?** — There are always exceptions. Push for specifics.
3. **Tell me about a time this went wrong** — Stories reveal the rules that prevent failures.
4. **What would a new employee get wrong?** — This surfaces the unwritten rules directly.
5. **Is there anything that "just goes without saying"?** — Those are exactly the rules you need to document.

Once you have the hidden rules documented, you can decide: are these creative guidelines (LLM can handle the nuance) or strict rules (need to be hardcoded or explicitly enforced)?

<div class="not-prose callout callout-dyk">

Modern LLMs have become capable of creating and using their own tools dynamically — writing code on the fly, calling APIs, and taking actions in the real world. This makes strict rules even more critical to define upfront. An LLM that can only produce text might get a rule wrong and produce a bad document. An LLM with tool access that gets a rule wrong might send an unauthorized email, process a payment, or update a database. The stakes go up as the capabilities do.

</div>

<div class="not-prose callout callout-tip">

This is a perfect moment to pause and reflect on your own workflows. Can you improve the process yourself before automating it? Get feedback from colleagues who do the same work differently? Or try describing your process to an LLM and ask it to find gaps, edge cases, or inefficiencies you might be missing. Sometimes the biggest gains come from fixing the process, not automating it.

</div>

## 📝 Key Concepts

- **Creative tasks** allow variation and work well with flexible LLM outputs.
- **Rule-bound tasks** require exact outputs — variation is a bug, not a feature.
- **Hidden rules** are business logic that employees know but can't articulate — they are the biggest automation risk.
- **Interview the experts deeply** — ask about failures, edge cases, and what goes without saying.
- **Know your task type before building** — the wrong automation approach for the task type will produce confident-looking wrong answers.

<div id="quiz-12-02" class="not-prose quiz-container my-12" data-quiz="12-02"></div>
